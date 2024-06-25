-- db/schema.sql
DROP DATABASE IF EXISTS firebase_test;
CREATE DATABASE firebase_test;

\c firebase_test;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    uid VARCHAR(255),
    email VARCHAR(100),
    username VARCHAR(100),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    photo VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

