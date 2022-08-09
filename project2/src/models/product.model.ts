export interface Product{
    id?:number;
    name:string;
    price:number;
    category?:string;
}

// CREATE TABLE Product(id SERIAL PRIMARY KEY,name VARCHAR(50),price MONEY,category VARCHAR(50));