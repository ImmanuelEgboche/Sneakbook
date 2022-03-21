DROP TABLE IF EXISTS info;

CREATE TABLE info (
    id serial PRIMARY KEY,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    email varchar(255) NOT NULL
);
