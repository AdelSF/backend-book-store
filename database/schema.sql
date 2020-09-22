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

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
)


INSERT INTO books (name, author, year, country, img, series, contributors, edition, grade, keywords)
VALUES
('Begin Again', 'Eddie S. Glaude', '2020', 'USA', 'https://images-production.bookshop.org/spree/images/attachments/3757047/original/9780525575320.jpg?1598388402',
'hard cover', 'none', '1', 'AE', 'Crown Publishing Group (NY)'),
();