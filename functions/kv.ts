export const onRequest: PagesFunction<{ MY_KV_BINDING: KVNamespace }> = async ({
  request,
  env,
}) => {
  try {
    let value = (await env.MY_KV_BINDING.get<number>("value", "json")) || 0;
    switch (request.method.toLowerCase()) {
      case "post": {
        const data = await request.formData();
        if (data.has("increment")) {
          value++;
        } else if (data.has("decrement")) {
          value--;
        }
        await env.MY_KV_BINDING.put("value", JSON.stringify(value));
      }

      case "get": {
        return new Response(
          `
<p>KV is a terrible store for an atomic counter like this. Use Durable Objects instead.</p>
<form method="POST">
    <button name="increment" type="submit">Increment</button>
    Current value: ${value}
    <button name="decrement" type="submit">Decrement</button>
</form>`,
          { headers: { "Content-Type": "text/html" } }
        );
      }
    }
  } catch {
    return new Response(
      "KV Binding is not configured. Try `npx wrangler pages dev public --kv MY_KV_BINDING`."
    );
  }
};
