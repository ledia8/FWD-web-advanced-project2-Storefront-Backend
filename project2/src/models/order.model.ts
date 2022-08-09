export interface Orders{
    id?:number;
    productId:number;//[foreign key to product table]
    userId:number;//[foreign key to user table]
    productQuantity:number;
    status_of_order: string; //active ? complete;
}


//CREATE TABLE Orders(id SERIAL PRIMARY KEY,productId FOREIGN KEY REFERENCES Product(id), userId FOREIGN KEY REFERENCES User(id),productQuantity int, status_of_order VARCHAR(50));

//CREATE TABLE Orders(id SERIAL PRIMARY KEY,productQuantity int, status_of_order VARCHAR(50));
//ALTER TABLE Orders ADD FOREIGN KEY (productId) REFERENCES Product(id);
//ALTER TABLE Orders ADD FOREIGN KEY (userId) REFERENCES Users(id);
