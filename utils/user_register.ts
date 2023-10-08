import User from '../models/User';

async function userRegister( userInfo: any) {
    try {
        await User.create(userInfo);
        console.log('Create user successfully!');
    } catch (error) {
        throw new Error('Error in the process register user');
    }
}

export default userRegister;