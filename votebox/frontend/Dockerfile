# Първи етап: билд на React app с Vite
FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Втори етап: serve с nginx
FROM nginx:alpine

# Изтрий default конфигурацията на nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копирай твоя nginx конфигурация
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копирай билднатото React приложение
COPY --from=builder /app/dist /usr/share/nginx/html