export const onRequest = ({ next, request }) =>
  next(new Request("http://fakehost/relationships.png", request));
