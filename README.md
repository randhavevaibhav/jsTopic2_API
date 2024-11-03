# jsTopic2_API

## Setup env variables in .env

1. create a .env file in root folder and then add following variables with corresponding values.

```
DB_USER=<user name>
DB_PASSWORD=<db password>
DB_HOST=<host name>
DB_PORT=<port>
DATABASE=<database>
```

2. add values without '' and without space btn =.

## Run app cmd

```
nodemon
```

## Deployment on vercel

#### IMP only deploy through command line.

### first time deployment

command ==>

```
vercel
```

### Re-deployment after updates

command ===>

```
vercel --prod
```
