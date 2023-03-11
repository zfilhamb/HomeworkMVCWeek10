const UserServices = require("../services/userservices.js");

class UserController  {

    static loginUser = async (req, res, next) => {
       
        try {
            const {email, password} = req.body;
            const data = await UserServices.loginUser(email, password, next);
                res.status(200).json({
                    id: data.id,
                    email: data.email,
                    role: data.role,
                    gender: data.gender
                })
        } catch (err) {
            next({name: "WrongPassword"});
        }
    }

    static registerUser = async (req, res, next) => {

        try { 
            const {id, email, gender, password, role} = req.body;
            const data = await UserServices.registerUser(
                id, email, gender, password, role, next);
            res.status(200).json({
                message: "User Registered Successfully",
                data
            });
        } catch (err) {
            next(err);
        }
    }

    static changePassword = async (req, res, next) => {
        try {
            const {id} = req.params;
            const {password} = req.body;

            const data = await UserServices.changePassword(id, password, next);
            res.status(200).json({message: "Successfully Change Password"});
        } catch (err) {
            next(err);
        }
    }

    static deleteUser = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await UserServices.deleteUser(id, next);
            
            if(data) {
                res.status(200).json({
                    message: "User deleted successfully",
                    data
                })
            }else {
                next({ name: "ErrorNotFound" })
            }
        } catch (err) {
            next(err);
        }
    }
}


module.exports = UserController; 