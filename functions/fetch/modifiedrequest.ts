export const onRequest = ({ request, env }) => {
  try {
    return env.ASSETS.fetch(new Request("/relationships.png", request));
  } catch (thrown) {
    return new Response(thrown.message);
  }
};
