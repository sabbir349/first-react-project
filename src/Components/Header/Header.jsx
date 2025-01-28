import React from 'react';
import logo from '../../assets/logo.png'
import logoImg from '../../assets/1.png'

const Header = () => {
    return (
        <div className='bg-blue-100'>
        <div className='flex justify-between max-w-6xl mx-auto py-5'>
            <img className='h-[60px] w-[200px]' src={logo} alt="" />
            <img src={logoImg} alt="" />
        </div>
        <hr className='border-2-black' />
        </div>
    );
};

export default Header;