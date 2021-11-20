export const onRequest = ({ request }) => {
  return new Response(JSON.stringify(request.cf));
};
