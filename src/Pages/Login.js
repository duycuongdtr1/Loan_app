import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = ({ userType, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kiểm tra xác thực với email và password đã biết trước
        if (email === 'duycuongtd1@gmail.com' && password === '123') {
            console.log('Đăng nhập thành công');
            setLoggedIn(true);
            onLogin(userType);
        } else {
            console.log('Email hoặc mật khẩu không chính xác');
        }
    };

    if (loggedIn) {
        // Chuyển hướng người dùng tới trang chính sau khi đăng nhập thành công
        return <Navigate to="/" />;
    }

    return (
        <div>
            <h2>Đăng nhập {userType === 'user' ? 'User' : 'Admin'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
};

export default Login;
