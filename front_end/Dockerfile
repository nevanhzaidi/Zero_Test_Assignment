FROM node:14 AS builder

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /build /usr/share/nginx/html

EXPOSE 80
