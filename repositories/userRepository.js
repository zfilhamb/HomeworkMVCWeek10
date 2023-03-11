const User = require("../models/user.js");

class UserRepository {
    static loginUser = async (email, password, next) => {
        try {
            const data = await User.loginUser(email, password, next);
            return data;
        } catch (err) {
            next(err);
        }
    }
    
    static registerUser = async (id, email, gender, password, role, next) => {
        try {
            const data = await User.registerUser(id, email, gender, password, role, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static changePassword = async (id, password, next) => {
        try {
            const data = await User.changePassword(id, password, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static deleteUser = async (id, next) => {
        try {
            const data = await User.deleteUser(id, next);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserRepository;