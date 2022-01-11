export const onRequest = ({ request: { url }, env }) => env.ASSETS.fetch(url);
