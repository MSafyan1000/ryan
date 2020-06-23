FROM ruby:2.5.1-alpine

RUN apk --update add build-base nodejs yarn tzdata postgresql-dev

RUN mkdir /myapp
WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
COPY /react-front/package*json /myapp/react-front/

RUN gem install foreman && \
  bundle install && \
  npm install --prefix react-front

COPY . /myapp

EXPOSE 3000 7000

CMD ["foreman", "start", "-f", "Procfile.dev"]
