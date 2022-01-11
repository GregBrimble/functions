export const onRequest = ({ env }) =>
  env.ASSETS.fetch(new Request("http://fakehost/relationships.png"));
