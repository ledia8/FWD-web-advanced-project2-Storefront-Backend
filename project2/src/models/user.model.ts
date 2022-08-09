export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    password?: string;
}

//CREATE TABLE Users(id SERIAL PRIMARY KEY,firstName VARCHAR(50), lastName VARCHAR(50), password VARCHAR(50));