# Сайт курса «Основы веб-технологий» (лабораторные и задания) — статика за nginx
FROM nginx:1.27-alpine
COPY index.html /usr/share/nginx/html/
COPY labs /usr/share/nginx/html/labs
COPY tasks /usr/share/nginx/html/tasks
EXPOSE 80
