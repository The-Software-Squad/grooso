const jwt = require('jsonwebtoken');
const { refreshTokenGenerator, accessTokenGenerator } = require('../../middleware/jwt.middleware');
const verifyJwt = require('../../middleware/verifyJWT.middleware');
const userModel = require('../../models/user.model');



const logoutController = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) { return res.sendStatus(204) } //no content
    const refreshToken = cookies.jwt;


    try {
        //get data form DB through the refreshToken if user is availbale or not
        const userData = await userModel.findOne({ 'refreshToken': refreshToken });
        //if user is not available
        if (!userData) {
            res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            return res.sendStatus(204) ;
        } //no content

        //delete refreshToken
        const deletedData = await userModel.findByIdAndUpdate({"_id": userData._id}, {"refreshToken":""});
        if(deletedData){ 
            res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            return res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({
            "message": error.message,
            'error': "internal server error. "
        })
    }

}

module.exports = logoutController;