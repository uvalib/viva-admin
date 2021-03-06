#FROM alpine:3.13
FROM ruby:2.7.1-alpine3.12

# Add necessary packages
RUN apk --update add bash tzdata build-base nodejs sqlite-dev mariadb-dev zlib-dev libxml2-dev libxslt-dev libffi-dev ca-certificates

# Create the run user and group
RUN addgroup --gid 18570 sse && adduser --uid 1984 docker -G sse -D

# set the timezone appropriatly
ENV TZ=UTC
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Add necessary gems
RUN gem install bundler -v 1.17.3 --no-document && gem install io-console --no-document

# Specify home 
ENV APP_HOME /viva-admin
WORKDIR $APP_HOME

# Copy the Gemfile into the image and install the gems
ADD Gemfile Gemfile.lock ./
RUN bundle install --jobs=4 --without=["development" "test"] --no-cache

# install the app
COPY . $APP_HOME

# create the precompiled assets
RUN RAILS_ENV=production SECRET_KEY_BASE=x rake assets:precompile

# Update permissions
RUN chown -R docker $APP_HOME && chgrp -R sse $APP_HOME

# Specify the user
USER docker

# define port and startup script
EXPOSE 3000
CMD scripts/entry.sh

# move in the profile
COPY data/container_bash_profile /home/docker/.profile

#
# end of file
#
