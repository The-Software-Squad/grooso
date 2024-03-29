const bcrypt = require('bcrypt');
const saltRound = 10 ;



const createHashedPassword = async(plainTextPassword) => {
    try {
        const hashedPassword = await bcrypt.hash(plainTextPassword,saltRound);
        return hashedPassword ;
    } catch (error) {
        console.log('error creating a hashedpassword')
        throw error ;
    }
}

const checkHashedPassword = async( hashedPassword, plainTextPassword ) => {
    try {
        const check = await bcrypt.compare(plainTextPassword, hashedPassword);
        return check ;
    } catch (error) {
        console.log(error)
        throw error;
    }
    
}


module.exports = {
    createHashedPassword,
    checkHashedPassword
}
