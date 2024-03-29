const bcrypt = require('bcrypt');

const handleNewUser = async(req,res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({ 'message':  'username and password required.'})
    //get data from db

    //check for duplicate in the db
    //checking if duplicate available
    if(duplicate) return res.sendStatus(409); //conflict
    try{
        //encrypt the password with bcrypt
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //store the new user
        const newUser = { 'username': user , 'password': hashedPwd};
        //send this to mongodb
        //send response 
    }catch(error){
        res.status(500).json({'message':error.message})
    }
}

module.exports = handleNewUser ;