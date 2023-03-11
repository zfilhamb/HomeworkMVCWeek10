const pool = require("../config/config.js");

class Movie {

    static findMovies = async (next) => {

        const findQuery = `
        SELECT 
        * 
        FROM movies;
        `

        try {
            const data = await pool.query(findQuery)

            return data.rows;
        } catch (err) {
            next(err);
        }
    }

    static findById = async (id, next) => {

        const findQuery = `
        SELECT 
        * 
        FROM movies 
        WHERE id = $1;
        `
        try {
            const data = await pool.query(findQuery, [id])

            if ( data.rows.length === 0 ) {
            } else {
                return data.rows[0];
            }
        } catch (err) {
            next(err);
        }
    }

    static createMovie = async (params, next) => {
        try {
            const {id, title, genres, year} = params;
            const insertQuiry = `
            INSERT INTO movies (id, title, genres, year)
                VALUES 
                    ($1, $2, $3, $4) 
                RETURNING *;
            `
            
            const data = await pool.query(insertQuiry, [id, title, genres, year])

            return data.rows[0]
        } catch (err) {
            next(err);
        }
    }

    static updateMovie = async (id, title, year, next) => {

        const updateQuery =`
        UPDATE movies
        SET title = $1,
            year = $2
        WHERE id = $3
        RETURNING *;
        `
        try { 
            const data = await pool.query(updateQuery, [title, year, id])
            return data.rows[0]
        } catch (err) {
            next(err);
        }
    }

    static deleteMovie = async (id, next) => {
        try {
            const deleteQuery = `
            DELETE FROM movies
            WHERE id = $1
            RETURNING *;
            `
            const data = await pool.query(deleteQuery, [id])
            return data.rows[0]
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Movie;