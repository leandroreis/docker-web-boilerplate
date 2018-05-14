FROM laradock/php-fpm:2.2-7.2

###########################################################################
# pgsql
###########################################################################

RUN docker-php-ext-install pgsql


###########################################################################
# xDebug:
###########################################################################

RUN pecl install xdebug && \
    docker-php-ext-enable xdebug

# Copy xdebug configuration for remote debugging
COPY ./xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini


###########################################################################
# PHP REDIS EXTENSION
###########################################################################

RUN printf "\n" | pecl install -o -f redis \
    &&  rm -rf /tmp/pear \
    &&  docker-php-ext-enable redis


###########################################################################
# bcmath:
###########################################################################

RUN docker-php-ext-install bcmath


###########################################################################
# Human Language and Character Encoding Support:
###########################################################################

RUN apt-get update -yqq && \
    apt-get install -y zlib1g-dev libicu-dev g++ && \
    docker-php-ext-configure intl && \
    docker-php-ext-install intl


###########################################################################
# Check PHP version:
###########################################################################

RUN php -v | head -n 1 | grep -q "PHP 7.2."


#
#--------------------------------------------------------------------------
# Final Touch
#--------------------------------------------------------------------------
#

COPY ./php72.ini /usr/local/etc/php/php.ini
COPY ./xlaravel.pool.conf /usr/local/etc/php-fpm.d/

USER root

# Clean up
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    rm /var/log/lastlog /var/log/faillog

RUN usermod -u 1000 www-data

WORKDIR /usr/src/app

# Install app dependencies
COPY composer.json ./
RUN composer self-update && composer installaj

EXPOSE 5000

CMD ["php", "-S", "0.0.0.0:5000", "-t", "src"]