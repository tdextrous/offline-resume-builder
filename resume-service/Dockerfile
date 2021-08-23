FROM python:3.8-alpine
WORKDIR /app

RUN apk add --update nginx supervisor build-base gcc linux-headers
RUN pip3 install uwsgi

COPY ./requirements.txt /app/requirements.txt
RUN pip3 install -r /app/requirements.txt

# Add www-data user
RUN set -x ; \
  addgroup -g 82 -S www-data ; \
  adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

# Copy code.
#COPY --chown=uwsgi:uwsgi . /app
COPY . /app

# Copy deployment files
COPY ./nginx.conf /etc/nginx
COPY ./uwsgi.ini /etc/uwsgi
COPY ./supervisord.conf /etc

CMD ["/usr/bin/supervisord"]
#CMD ["nginx", "-g", "daemon off;"]
#CMD ["uwsgi", "--ini", "uwsgi.ini"]
