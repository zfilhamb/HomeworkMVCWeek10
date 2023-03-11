const Movie = require("../models/movie.js");

class MovieRepository {

    static findMovies = async (next) => {
        try {
            const data = await Movie.findMovies(next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static findById = async (id, next) => {
        try {
            const data = await Movie.findById(id, next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static createMovie = async (params, next) => {
        try {
            const data = await Movie.createMovie(params, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static updateMovie = async (id, title, year, next) => {
        try {
            const data = await Movie.updateMovie(id, title, year, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static deleteMovie = async (id, next) => {
        try {
            const data = await Movie.deleteMovie(id, next);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = MovieRepository;