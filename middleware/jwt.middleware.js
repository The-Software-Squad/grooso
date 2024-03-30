const jwt = require('jsonwebtoken');
require('dotenv').config("./.env");

const accessTokenGenerator = (userName) => {
    const accessToken = jwt.sign({
        "user": userName
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' });

        return accessToken ;
} 


const refreshTokenGenerator = (userName) => {
    const refreshToken = jwt.sign({
        "user": userName
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' });

        return refreshToken ;
} 


module.exports = {
    accessTokenGenerator,
    refreshTokenGenerator
}




