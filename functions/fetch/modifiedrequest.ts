export const onRequest = async ({ request, env }) => {
  try {
    return await env.ASSETS.fetch(
      new Request("http://fakehost/relationships.png", request)
    );
  } catch (thrown) {
    return new Response(thrown.message);
  }
};
