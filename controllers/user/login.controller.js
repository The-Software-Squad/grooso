const userModel = require('../../models/user.model');
const { createHashedPassword, checkHashedPassword } = require('../../utils/bcrypt');

const loginUser = async () => {
    const { email, pwd } = req.body;
    if (!pwd || !email) return res.status(400).json({ 'error': 'email and password required.' })
    try {
        const userData = await userModel.findOne({ 'email': email });
        const checkPassword = await checkHashedPassword(userData.password, pwd);
        if (checkPassword) {

        } else {

        }
    } catch (error) {

    }

}