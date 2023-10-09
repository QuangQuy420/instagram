import User from '../models/User';
import connectMongo from '../lib/mongo';
import bcrypt from 'bcryptjs';

async function userRegister( userInfo: any) {
    try {
        await connectMongo();
        const { username } = userInfo;
        const usernameExist = await User.findOne({ username });
        if (usernameExist) return 1;
        
        const password = await bcrypt.hash(userInfo.password, 10);
        const avatar = '/images/avatar_default.png'

        await User.create({
            ...userInfo,
            password: password,
            nickname: userInfo.username,
            avatar: avatar
        });
        console.log('Create user successfully!');
    } catch (error) {
        throw new Error('Error in the process register user');
    }
}

export default userRegister;