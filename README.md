
## Getting Started

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Stack

Using NextJS with Tailwind. Animations done with < insert libary name here > 


## Env Variables
.env files are ignored and will have to be created. Below is a list of all essential env variabls to be included.
*Note: all .env files belong in root

.env.development:
DB_ADDRESS=<staging address address>
<any dev env variable here>

.env.production:
DB_ADDRESS=<prod address>
<any production variables here>

.env.local:
DB_ADDRESS=<dev address> #set only if you intend to work on DB
<any env variables to override>



