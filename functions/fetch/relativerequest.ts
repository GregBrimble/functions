export const onRequest = ({ env }) =>
  env.ASSETS.fetch(new Request("/relationships.png"));
