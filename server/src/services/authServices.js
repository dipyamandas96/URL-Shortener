import User from "../models/userModel.js";
import { hashPassword, comparePassword } from "../utils/password.js"; 

const registerUserService = async (userData) => {
    const { fullName, email, password } = userData;

    const user = await User.findOne({ email });

    if (user) {
        throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({ fullName, email, password: hashedPassword });
    return newUser;
}


const loginUserService = async (userData) => {
    const { email, password } = userData;

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid email or password');
    }

    return user;
}



export {
    registerUserService,
    loginUserService
};