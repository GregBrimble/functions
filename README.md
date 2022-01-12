# Functions

## Setup

```sh
git clone git@github.com:GregBrimble/functions.git;
cd functions;
npm install;
```

This will have installed wrangler for you. Otherwise, users can run:

```sh
npm install --save-dev wrangler@beta
```

Also installed is [the TypeScript types](https://github.com/cloudflare/workers-types) you can use to improve your DX. Again, users can run:

```sh
npm install --save-dev typescript @cloudflare/workers-types
```

## Usage

```sh
npm run start
```

For info about options that are available (e.g. configuring a KV binding, run `npx wrangler pages dev --help`).
