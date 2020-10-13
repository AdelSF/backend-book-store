const pgp = require('pg-promise')()
const db = pgp({ database: 'book-store' })


module.exports = {

    getAllBooks() {
        const sql = `
            SELECT
                *
            FROM
                books
        `
        return db.any(sql)
    },
    
    postABook(x) {
        const { name, author, year, country, img, series, contributors, edition, grade, keywords } = x
        const sql = `
            INSERT INTO
                books(name, author, year, country, img, series, contributors, edition, grade, keywords)
            VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING
                *
        `
        return db.one(sql, [name, author, year, country, img, series, contributors, edition, grade, keywords])
    },
    
    // - 4th too data base update mishe - return mishe
    editABook({ id, name, author, year, country, img, series, contributors, edition, grade, keywords }) {
        const sql = `
        UPDATE
        books
        SET
        name = $1,
        author = $2,
        year = $3,
        country = $4,
        img = $5,
        series = $6,
        contributors = $7,
        edition = $8,
        grade = $9,
        keywords = $10
        WHERE
        id = $11
        RETURNING
        *
        `
        return db.one(sql, [name, author, year, country, img, series, contributors, edition, grade, keywords, id])
    },
    
    getBookById(id) {
        const sql = `
        SELECT
        *
        FROM
        books
        WHERE
        id = $1
        `
        return db.any(sql, [id])
    },
    
    
    // get all users function
    getAllUsers() {
        const sql = `
        SELECT 
        *
        FROM 
        users
        `
        return db.any(sql)
    },
    
    

    // 4th here and then..
    findUser(email) {
        const sql = `
            SELECT
                *
            FROM
                users
            WHERE
                email = $1
        `
        return db.any(sql, [email])
    },

    
    // and then 4th here...  function definition are here
    postAUser(usr) {
        const { fname, lname, email, hash } = usr

            const sql = `
            INSERT INTO
                users(fname, lname, email, password)
            VALUES
                ($1, $2, $3, $4)
            RETURNING
                *
            `
            return db.one(sql, [fname, lname, email, hash])
        // } else {
        //     return null
        // }

    }
}
