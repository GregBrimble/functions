export const onRequest = ({ next }) =>
  next(new Request("http://fakehost/relationships.png"));
