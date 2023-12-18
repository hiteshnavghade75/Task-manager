const User = require('../model/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
SECRET_KEY="INFINITY"

const userRegisterCtrl = async (req, res) => {
    try {
        const userInfo = req.body;
        const encryptedPassword = await bcrypt.hash(userInfo.user.password, 10);

        const newUser = new User({
            name: userInfo.user.name,
            email: userInfo.user.email,
            password: encryptedPassword
        });

        const savedUser = await newUser.save();
        res.status(201).json({
            message: "Encryption and User Creation Successful",
            data: savedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const userLoginCtrl = async (req, res) => {
    try {
        const userInfo = req.body;
        const user = await User.findOne({ email: userInfo.user.email });

        if (user) {
            const authStatus = await bcrypt.compare(userInfo.user.password, user.password);

            if (authStatus) {
                jwt.sign(
                    {
                        email: user.email,
                        id: user._id
                    },
                    SECRET_KEY,
                    {
                        expiresIn: "1h"
                    },
                    (err, token) => {
                        if (err) {
                            res.status(401).json({
                                message: "Authentication failed",
                                error: err
                            });
                        } else {
                            res.status(200).json({
                                message: "Authentication successful",
                                data: token
                            });
                        }
                    }
                );
            } else {
                res.status(401).json({
                    message: "Authentication failed",
                    error: "Invalid password"
                });
            }
        } else {
            res.status(401).json({
                message: "Authentication failed",
                error: "User not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = { userRegisterCtrl, userLoginCtrl };