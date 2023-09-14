## Getting Started

### Running localy

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t calvin-ball .`.
1. Run your container: `docker run -p 3000:3000 calvin-ball`.

You can view your images created with `docker images`.

### Live demo

You can try the live demo [here](https://calvin-ball.vercel.app)

## Test

After installing the dependencies you can run these command to start the cypress for automation testing

### Using the UI

```bash
npm run cypress:open
# or
yarn cypress:open
# or
pnpm run cypress:open

```

### Via CLI

```bash
npm run cypress:run
# or
yarn cypress:run
# or
pnpm run cypress:run

```
