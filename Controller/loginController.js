const {findUserByEmail} =  require('../Business/user');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

require('dotenv').config();


const verifyPassword = (userInputPassword, hashedPassword) =>{
    const convertedInputPassword = md5(userInputPassword);
    return convertedInputPassword == hashedPassword;
}

const verifyLoginController = async(req,res)=>{
    const {Email,Password}= req.body;

    const userInfo = await findUserByEmail(Email);
    
    if (!userInfo) {
        return res.status(404).json({ message: 'User not found' });
    }
    

    if(!verifyPassword(Password, userInfo.Password)){
    return res.status(401).json({message: 'Authentication failed'});
}

const token = jwt.sign({email:Email}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});
res.json({message: 'Authentical successful', token});


}

module.exports={
    verifyLoginController
}