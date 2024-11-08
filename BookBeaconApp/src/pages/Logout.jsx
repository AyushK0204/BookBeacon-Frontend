import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleRedirectToHome = () => {
        navigate('/'); 
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-violet-200 text-center">
            <div className="w-1/2 h-1/2 ml-20  bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl mt-28 font-bold mb-4">User Logged Out 😔</h2>
                <p className="text-xl mb-4">You have successfully logged out.</p>
                <button
                    onClick={handleRedirectToHome}
                    className="bg-violet-900 text-white px-6 py-2 rounded hover:bg-violet-400"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default Logout;
