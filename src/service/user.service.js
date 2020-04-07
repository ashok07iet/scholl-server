const users=require('../models/user.model');

module.exports = {
    authenticate,
    getAll

};

async function authenticate({ username, password }) {
    const user = await users.findOne({userName:username,password:password});
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}