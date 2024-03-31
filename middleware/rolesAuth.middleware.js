

const rolesAuth = (roles) => {

    return ( req,res,next ) => {
        if (!roles.includes(req.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    }
}

module.exports = rolesAuth ;