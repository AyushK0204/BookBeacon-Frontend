import React from 'react';

const Toast = ({ message, onClose }) => {
    return (
        <div className="fixed bottom-4 right-4 bg-violet-600 text-white  py-4 px-4 rounded-md shadow-lg">
            {message}<br/>
          
        </div>
    );
};

export default Toast;

