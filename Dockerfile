FROM php:7.3.8-apache

LABEL maintainer="Austin Rodgers"

COPY app /srv/app

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

//Docker Root: root@2a1897d67700:/var/www/html#
