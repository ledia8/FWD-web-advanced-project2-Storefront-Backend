/* Replace with your SQL commands */
CREATE TABLE Users(id SERIAL PRIMARY KEY,firstName VARCHAR(50), lastName VARCHAR(50), password VARCHAR(50));
CREATE TABLE Product(id SERIAL PRIMARY KEY,name VARCHAR(50),price MONEY,category VARCHAR(50));
CREATE TABLE Orders (id SERIAL PRIMARY KEY , user_id int REFERENCES users(id), productId int  REFERENCES Product(id)
,productQuantity int, status_of_order VARCHAR(50));



