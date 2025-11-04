import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`,
});

export const { 
  PORT,
  FRONTEND_URL,
  DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT
} = process.env;


// DB_HOST=localhost
// DB_PORT=5432
// DB_NAME=govttrack
// DB_USER=postgres
// DB_PASSWORD="P@55word"
// NODE_ENV=production
