FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

#copy all project files and build
COPY . .
RUN npm run build

#start new lightweight image for serving
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

#start a production server
CMD ["npm", "start"]