FROM nginx:latest

# Delete nginx default configuration file in virtual directory
RUN rm /etc/nginx/default.conf
COPY ./nginx/nginx.conf /etc/nginx/default.conf