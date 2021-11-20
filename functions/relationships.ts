export const onRequest: PagesFunction = async ({ request, env, next }) => {
  const url = new URL(request.url);
  url.pathname = "/relationships.png";
  return await env.ASSETS.fetch(
    new Request(url.toString(), { cf: { image: { width: 50 } } })
  );
};
