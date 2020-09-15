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
    
    // datebase 
    // - I neeed to figure out
    editABook(x) {
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
    }

}