FROM ruby:2.5.1-alpine

RUN apk --update add build-base nodejs yarn tzdata postgresql-dev

RUN mkdir /myapp
WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN gem install foreman && \
  bundle install && \
  yarn install --cwd react-front

COPY . /myapp

EXPOSE 3000 7000

CMD ["foreman", "start", "-f", "Procfile.dev"]
