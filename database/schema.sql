DROP TABLE IF EXISTS books;
CREATE TABLE books (
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
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);


INSERT INTO books (name, author, year, country, img, series, contributors, edition, grade, keywords)
VALUES
('Begin Again', 'Eddie S. Glaude', '2020', 'USA', 'https://images-production.bookshop.org/spree/images/attachments/3757047/original/9780525575320.jpg?1598388402',
'hard cover', 'none', '1', 'AE', 'Crown Publishing Group (NY)'),
('My Dark Venessa', 'Kate Elizabeth Russell', '2018', 'Canada', 'https://images-production.bookshop.org/spree/images/attachments/3757047/original/9780525575320.jpg?1598388402',
'E-Book', 'William Morrow & Company', '3', 'A', 'William Morrow & Company'),
('The Hair Affair', 'Heather Cocks', '2020', 'USA', 'https://images-production.bookshop.org/spree/images/attachments/12417625/original/9781538715918.jpg?1588429482',
'E-Book', 'Grand Central Publishing', '3', 'A', 'Grand Central Publishing'),
('More Myself: A Journey', 'Alicia KEys', '2018', 'UK', 'https://images-production.bookshop.org/spree/images/attachments/6292240/original/9781250153296.jpg?1588376449',
'E-Book', 'None', '2', 'B', 'None'),
('The Glass Hotel', 'Emily St John Mandel', '2020', 'USA', 'https://images-production.bookshop.org/spree/images/attachments/787491/original/9780525521143.jpg?1597743339',
'Hard Cover', 'Knopf Publishing Group', '2', 'A', 'Knopf Publishing Group'),
('All Adults Here', 'Emma Straub', '2019', 'Uk', 'https://images-production.bookshop.org/spree/images/attachments/4473732/original/9781594634697.jpg?1594163691',
'E-Book', 'Riverhead Books', '2', 'A', 'Riverhead Books'),
('New Waves', 'Kevin Nguyen', '2018', 'Canada', 'https://images-production.bookshop.org/spree/images/attachments/3203971/original/9781984855237.jpg?1588450299',
'E-Book', 'One World Publisher', '1', 'A', 'One World Publisher'),
('Cleans', 'James Humblin', '2019', 'UK', 'https://images-production.bookshop.org/spree/images/attachments/10837364/original/9780525538318.jpg?1587853125',
'Hard Cover', 'Riverhead Books', '7', 'A', 'Riverhead Books'),
('Wow, No Thanks; Essay', 'Samantha Irby', '2020', 'USA', 'https://images-production.bookshop.org/spree/images/attachments/1925394/original/9780525563488.jpg?1589084843',
'E-Book', 'Vintage', '4', 'B', 'Vintage'),
('The Vanishing Half', 'Brit Bennett', '2020', 'USA', 'https://images-production.bookshop.org/spree/images/attachments/4016870/original/9780525536291.jpg?1597167435',
'1', 'Riverhead', '3', 'B', 'Riverhead'),
('Hex', 'Rebecca Dinestein Knight', '2020', 'USA', 'https://images-production.bookshop.org/spree/images/attachments/333079/original/9781984877376.jpg?1588410069',
'E-Book', 'Viking Publisher', '3', 'B', 'Viking'),
('Weather', 'Jenny Offill', '2020', 'USA', 'https://images-production.bookshop.org/spree/images/attachments/337957/original/9780385351102.jpg?1589086190',
'Hard Cover', 'None', '1', 'A', 'None');
