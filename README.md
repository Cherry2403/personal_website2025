# Personal Website 2025

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Deployment

### Local Development with Docker

```bash
# Build and run the development container
npm run docker:dev
```

### Production Deployment

```bash
# Build and run the production container
npm run docker:prod
```

## Portainer Deployment

To deploy this application using Portainer:

1. Access your Portainer dashboard
2. Go to Stacks > Add Stack
3. Name your stack (e.g., "personal-website")
4. Upload or paste the contents of the `docker-compose.yml` file
5. Configure environment variables if needed:
   - `IMAGE_NAME`: Name of the Docker image (default: personal-website)
   - `IMAGE_TAG`: Tag of the Docker image (default: latest)
   - `PORT`: Port to expose the application (default: 3000)
   - `REPLICAS`: Number of container replicas (default: 1)
6. Click "Deploy the stack"

### Docker Swarm Deployment

If you're running a Docker Swarm cluster:

```bash
# Initialize swarm if not already done
docker swarm init

# Deploy the stack
docker stack deploy -c docker-compose.yml personal-website
```

## Environment Variables

The application can be configured using the following environment variables:

- `NODE_ENV`: Environment mode (development/production)
- `PORT`: The port on which the application will run (default: 3000)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
