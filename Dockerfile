FROM ruby:2.6.3

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y build-essential nodejs yarn

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ENV RAILS_ENV='production'
ENV RACK_ENV='production'

ADD Gemfile* $APP_HOME/
RUN gem install bundler && bundle config set without 'development test' && bundle install --jobs 20 --retry 5

ADD . $APP_HOME

RUN yarn install --check-files && bundle exec rake assets:precompile

CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
