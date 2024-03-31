const jwt = require('jsonwebtoken');
const { refreshTokenGenerator, accessTokenGenerator } = require('../../middleware/jwt.middleware');
const verifyJwt = require('../../middleware/verifyJWT.middleware');
const userModel = require('../../models/user.model');



const RefreshTokenController = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) { return res.sendStatus(401) }
    const refreshToken = cookies.jwt;


    try {
        //get data form DB through the refreshToken if user is availbale or not
        const userData = await userModel.findOne({ 'refreshToken': refreshToken });
        //if user is not available
        if (!userData) { return res.status(403) } //forbidden
        //user is available so verify the jwt token if its working or not

        const checkJwt = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        if(!checkJwt){
           return res.sendStatus(403);
        }
        const accessToken = accessTokenGenerator(userData.name, userData.role)
        return res.status(200).json({ accessToken });
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message,
            'error': "internal server error. "
        })
    }

}

module.exports = RefreshTokenController;