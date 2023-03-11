const pool = require("../config/config.js");

class User {
    static loginUser = async (email, password, next) => {
            const findUser = `
            SELECT
                * 
            FROM users
            WHERE email = $1
            AND password = $2
            `

        try {
            const data = await pool.query(findUser, [email, password])
            return data.rows[0];
            
        } catch (err) {
            next(err);
        }
    }

    static registerUser = async (id, email, gender, password, role, next) => {
        try {
            const insertQuiry = 
            `INSERT INTO users (id, email, gender, password, role)
                VALUES
                    ($1, $2, $3, $4, $5)
                RETURNING *
            `
            const data = await pool.query(insertQuiry, [id, email, gender, password, role])

            return data.rows[0]
        } catch (err) {
            next(err);
        }
    }

    static changePassword = async (id, password, next) => {
        const updateQuery =`
        UPDATE users
        SET password = $1
        WHERE id = $2
        `
        try { 
            const data = await pool.query(updateQuery, [password, id])
            return data.rows[0]
        } catch (err) {
            next(err);
        }
    }

    static deleteUser = async (id, next) => {
        try {
            const deleteQuery = `
            DELETE FROM users
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

module.exports = User;