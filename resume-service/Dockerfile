FROM python:3.8-alpine
WORKDIR /app

RUN apk add --update nginx supervisor build-base gcc linux-headers

# Weasyprint dependencies
RUN apk add py3-pip py3-pillow py3-cffi py3-brotli gcc musl-dev python3-dev pango libffi-dev zlib-dev jpeg-dev fontconfig

# Install fonts
RUN apk add font-noto

RUN pip3 install uwsgi

COPY ./requirements.txt /app/requirements.txt
RUN pip3 install -r /app/requirements.txt

# Add www-data user
RUN set -x ; \
  addgroup -g 82 -S www-data ; \
  adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

# Copy code.
COPY . /app

# Copy deployment files
COPY ./deploy/nginx.conf /etc/nginx
COPY ./deploy/uwsgi.ini /etc/uwsgi
COPY ./deploy/supervisord.conf /etc

CMD ["/usr/bin/supervisord"]  
