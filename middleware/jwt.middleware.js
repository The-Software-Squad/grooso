const jwt = require('jsonwebtoken');
require('dotenv').config("./.env");

const accessTokenGenerator = (userName,role) => {
    const accessToken = jwt.sign({
        "user": userName,
        "role": role
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' });

        return accessToken ;
} 


const refreshTokenGenerator = (userName, role) => {
    const refreshToken = jwt.sign({
        "user": userName,
        "role": role
    },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' });

        return refreshToken ;
}




module.exports = {
    accessTokenGenerator,
    refreshTokenGenerator
}




