const {createUser, findUserByEmail} = require('../Business/user');
const {format} = require('date-fns');
const md5 = require('md5');

const createUserController = async (req, res) => {
    try {
        // Check if user already exists
        const userExist = await findUserByEmail(req.body.Email);
        if (userExist) {
            return res.status(400).send("User Already Exists!!!");
        }
        // Prepare user info
        const userInfo = {
            Username: req.body.Username,
            Password: md5(req.body.Password),
            UserCategory: req.body.UserCategory,
            Email: req.body.Email,
            Mobile: req.body.Mobile,
            Country: req.body.Country,
            City: req.body.City,
            UserStatus: req.body.UserStatus,
            
        };
        // Create new user
        const item = await createUser(userInfo);
        res.status(201).json(item); // Changed status code to 201 Created

    } catch (err) {
        // Log the error for debugging
        console.error(err);

        // Send a 500 Internal Server Error response
        res.status(500).send("Internal Server Error");
    }
};
module.exports = { createUserController };