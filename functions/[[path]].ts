export const onRequest: PagesFunction = async ({ request, next, env }) => {
  return new Response(
    JSON.stringify(
      {
        CF_PAGES: env.CF_PAGES,
        CF_PAGES_COMMIT_SHA: env.CF_PAGES_COMMIT_SHA,
        CF_PAGES_BRANCH: env.CF_PAGES_BRANCH,
        SOMETHING_ELSE: "ghreg",
        MY_ENV_VAR: env.MY_ENV_VAR,
      },
      null,
      2
    ),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
