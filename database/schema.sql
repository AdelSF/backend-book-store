DROP TABLE IF EXISTS books;
CREATE TABLE books
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    author VARCHAR(255),
    year VARCHAR(255),
    country VARCHAR(255),
    img VARCHAR(255),
    series VARCHAR(255),
    contributors VARCHAR(255),
    edition VARCHAR(255),
    grade VARCHAR(255),
    keywords VARCHAR(255)
)

