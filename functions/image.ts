export const onRequest = async () => {
  return await fetch(
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Spinning_globe.gif",
    { cf: { image: { width: 50 } } }
  );
};
