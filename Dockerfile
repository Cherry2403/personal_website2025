# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json only (no package-lock.json reference)
COPY package.json ./

# Install dependencies
# Use npm install instead of npm ci since we don't have a package-lock.json
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy necessary files from build stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Add health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
