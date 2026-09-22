import ApiResponse from '../utils/apiResponse.js';
import { registerUserService, loginUserService } from '../services/authServices.js';

const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email.trim() || !password.trim()) {
            return res.status(400).json(new ApiResponse(400, 'Email and password are required', null));
        }
        
        const user = await loginUserService(req.body);

        return res.status(200).json(new ApiResponse(200, 'Login successful', { userId: user._id, email: user.email }));
    }
    catch (error) {
        return res.status(500).json(new ApiResponse(500, 'Internal server error', null));
    }

}


const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName.trim() || !email.trim() || !password.trim()) {
            return res.status(400).json(new ApiResponse(400, 'Full name, email and password are required', null));
        }

        const user = await registerUserService(req.body);

        return res.status(201).json(new ApiResponse(201, 'User created successfully', { userId: user._id, fullName: user.fullName, email: user.email }));
    }
    catch (error) {
        return res.status(500).json(new ApiResponse(500, 'Internal server error', null));
    }
}

export { 
    login,
    register
};