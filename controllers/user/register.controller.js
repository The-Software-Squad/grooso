const userModel = require('../../models/user.model');
const { createHashedPassword, checkHashedPassword } = require('../../utils/bcrypt');

const handleNewUser = async (req, res) => {
    console.log(req.body)
    const { user, pwd, phoneNumber, email } = req.body;
    if (!user || !pwd || !phoneNumber || !email) return res.status(400).json({ 'error': 'username,phoneNumber and password required.' })

    try {
        const alreadyUser = await userModel.findOne({ "name": user, "phoneNumber": phoneNumber });
        console.log(alreadyUser);
        if (alreadyUser) return res.send(409).send({ "message": 'user is already exist .' }); //conflict
        //encrypt the password with bcrypt
        const hashedPassword = await createHashedPassword(pwd);
        console.log('hasedpwd', hashedPassword);
        const newUser = new userModel({
            'name': user,
            'password': hashedPassword,
            "email": email,
            "phoneNumber": phoneNumber
        });

        const savedNewUser = await newUser.save();
        res.status(200).send(savedNewUser);
    } catch (error) {
        res.status(500).json({ 'message': error.message })
    }
}

module.exports = handleNewUser;