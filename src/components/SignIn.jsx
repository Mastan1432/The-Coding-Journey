import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import { RxCross1 } from "react-icons/rx";


const SignIn = ({ handleSignIn }) => {
    const closeSignIn = () => {
        handleSignIn(false);  // Close the sign-in modal
    };

    return (
        <div className='absolute lg:ml-[45%] lg:mt-[130px] mt-[150px] ml-[30%] flex justify-center items-center'>
            <div className='flex bg-yellow-200 flex-col p-4 rounded-md gap-2 relative'>
                <RxCross1 
                    className='absolute right-3 top-2 cursor-pointer' 
                    onClick={closeSignIn} 
                />
                <label htmlFor="" className='text-[13px]'>Email Or PhoneNumber</label>
                <input type="text" className='border-2 rounded-md' />
                <label htmlFor="" className='text-[13px]'>Password</label>
                <input type="password" className='border-2 rounded-md' />
                <div className="flex justify-between">
                    <a href="" className='text-[10px] 'onClick={closeSignIn}>ForgotPassword</a>
                    <a href="" className='text-[10px]' onClick={closeSignIn}>Create Account</a>
                </div>
                <button className='primary-btn'>Sign In</button>
            </div>
        </div>
    );
};

// Prop validation for SignIn component
SignIn.propTypes = {
    handleSignIn: PropTypes.func.isRequired,
};

export default SignIn;


