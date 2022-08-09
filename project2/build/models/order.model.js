"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CREATE TABLE Orders(id SERIAL PRIMARY KEY,productId FOREIGN KEY REFERENCES Product(id), userId FOREIGN KEY REFERENCES User(id),productQuantity int, status_of_order VARCHAR(50));
//CREATE TABLE Orders(id SERIAL PRIMARY KEY,productQuantity int, status_of_order VARCHAR(50));
//ALTER TABLE Orders ADD FOREIGN KEY (productId) REFERENCES Product(id);
//ALTER TABLE Orders ADD FOREIGN KEY (userId) REFERENCES Users(id);
