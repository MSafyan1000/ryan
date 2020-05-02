# This is Rails Application + React App

## To run application using foreman please follow commands:

```
bundle install
rake db:create && rake db:migrate && rake db:seed
gem install foreman
foreman start -f Procfile.dev
open http://localhost:7000
```

## To run application using Dockerfile please follow steps:

Modify your database configuration to use the postgresql container configuration:

```yaml
default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  host: db
  username: postgres
```

Build the project:

```sh
docker-compose build
```

Create the database and run the migrations:

```
docker-compose run --rm web bin/rails db:create db:migrate db:seed
```

Run the app:

```sh
docker-compose up
```

Visit your application at localhost:7000.
