FROM node:lts-slim as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine as run

WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/build ./build

EXPOSE 8080
ENTRYPOINT [ "npm", "run", "start" ]
