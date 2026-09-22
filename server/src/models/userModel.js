import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;