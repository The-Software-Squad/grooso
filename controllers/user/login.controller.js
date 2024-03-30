const { refreshTokenGenerator, accessTokenGenerator } = require('../../middleware/jwt.middleware');
const userModel = require('../../models/user.model');
const { createHashedPassword, checkHashedPassword } = require('../../utils/bcrypt');


const loginUser = async (req,res) => {
    const { email, pwd } = req.body;
    if (!pwd || !email) return res.status(400).json({ 'error': 'email and password required.' })
    try {
        //get data form DB if user is availbale or not
        const userData = await userModel.findOne({ 'email': email });

        //if user is not available
        if (!userData) { return res.status(400).json({ 'error': 'bad request' }) }

        //user is available
        const checkPassword = await checkHashedPassword(userData.password, pwd);

        //if password is correct
        if (checkPassword) {
            //generate refresh token and access token
            const refreshToken = refreshTokenGenerator(userData.name);
            const accessToken = accessTokenGenerator(userData.name);
            //testing if refresh token available
            //send the refresh token to data base. 
            const updatedData = await userModel.findByIdAndUpdate({ "_id": userData._id }, { "refreshToken": refreshToken });
            console.log(updatedData);
            //if the refresh token got updated 
            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }) //generated refresh token for 24hrs
            return res.status(200).json({
                accessToken
            });
        } else {
            return res.status(500).json({
                'error': 'password is incorrect!!!'
            })
        }
    } catch (error) {
        res.status(500).json({
            'error': "internal server error. "
        })
    }

}

module.exports = loginUser ;