-- CREATE DATABASE storedb;
-- CREATE DATABASE storedb_test;

CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    password VARCHAR(100)
    );


CREATE TABLE Product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price integer NOT NULL,
    category VARCHAR(100)
    );

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES users(id),
    status_of_order VARCHAR(20)
    );

CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint REFERENCES Orders(id),
    product_id bigint REFERENCES Product(id)
);



