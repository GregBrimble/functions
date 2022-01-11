export const onRequest = ({ env }) =>
  env.ASSETS.fetch("http://fakehost/relationships.png");
