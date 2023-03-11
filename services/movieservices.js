const MovieRepository = require("../repositories/movieRepository.js");


class MovieServices {

    static findMovies = async (next) => {
        try {
            const data = await MovieRepository.findMovies(next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static findById = async (id, next) => {
        try {
            const data = await MovieRepository.findById(id, next);
            return data;
        } catch (err) {
            next(err)
        }
    }
    static createMovie = async (params, next) => {
        try {
            const data = await MovieRepository.createMovie(params, next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static updateMovie = async (id, title, year, next) => {
        try {
            const data = await MovieRepository.updateMovie(id, title, year, next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static deleteMovie = async (id, next) => {
        try {
            const data = await MovieRepository.deleteMovie(id, next);
            return data;
        } catch (err) {
            next(err)
        }
    }
}

module.exports = MovieServices;