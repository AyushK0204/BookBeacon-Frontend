// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from './UserContext'; // Import the useUser hook

// const ProfilePage = () => {
//     const { user, setUser } = useUser(); // Access user data and setUser function from context
//     const [settings, setSettings] = useState({
//         notifications: true,
//         darkMode: false,
//     });

//     const [editMode, setEditMode] = useState(false);
//     const [formData, setFormData] = useState({ ...user });
//     const [profilePic, setProfilePic] = useState(null);

//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const toggleEditMode = () => {
//         setEditMode(!editMode);
//         setFormData({ ...user });
//     };

//     const saveChanges = () => {
//         setUser({ ...formData }); // Update the user data in context
//         setEditMode(false);
//     };

//     const toggleSetting = (setting) => {
//         setSettings((prevSettings) => ({
//             ...prevSettings,
//             [setting]: !prevSettings[setting],
//         }));
//     };

//     const handleProfilePicChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setProfilePic(URL.createObjectURL(file));
//         }
//     };

//     const removeProfilePic = () => {
//         setProfilePic(null);
//     };

//     useEffect(() => {
//         if (settings.darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [settings.darkMode]);

//     const handleLogout = () => {
//         navigate('/logout');
//     };

//     return (
//         <div className="w-screen min-h-screen bg-fixed bg-cover bg-center bg-[url('../src/assets/testimage.jpg')] bg-violet-900">
//             <div className="p-6 max-w-2xl mx-auto font-sans text-gray-800 dark:text-gray-100 pl-48 bg-transparent z-10">
//                 <div className="w-full h-full bg-gradient-to-r from-violet-200 to-purple-300 dark:bg-gray-800 p-10 rounded-lg shadow-lg mb-6">
//                     <h2 className="text-3xl font-bold mb-6 text-center text-violet-900 dark:text-gray-200">Profile</h2>

//                     <div className="flex items-center mb-6">
//                         {profilePic ? (
//                             <img
//                                 src={profilePic}
//                                 alt="Profile"
//                                 className="w-24 h-24 rounded-full mr-6 border-4 border-violet-500 shadow-md"
//                             />
//                         ) : (
//                             <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-violet-700 mr-6 border-4 border-gray-400 shadow-md">
//                                 No Image
//                             </div>
//                         )}
//                         <div>
//                             <label className="block mb-3 text-lg font-semibold text-gray-800 dark:text-gray-300">
//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={handleProfilePicChange}
//                                     className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:font-medium file:bg-blue-50 file:text-violet-900 hover:file:bg-grey-100"
//                                 />
//                             </label>
//                             {profilePic && (
//                                 <button
//                                     onClick={removeProfilePic}
//                                     className="mt-2 bg-violet-900 text-white px-4 py-1 rounded-lg font-semibold text-sm hover:bg-violet-400 transition duration-200"
//                                 >
//                                     Remove Picture
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                     <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Name:</strong> {user.name}</p>
//     <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Email:</strong> {user.email}</p>
//      <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Membership ID:</strong> {user.membershipId}</p>
//      <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Date of Joining:</strong> {user.joinDate}</p>
//      <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Phone:</strong> {user.phone}</p>     <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Address:</strong> {user.address}</p>

//      <button
//         className="mt-6 w-1/2 ml-20 bg-gradient-to-r from-violet-900 to-purple-700 text-white py-3 rounded-lg font-bold text-xl hover:bg-violet-600 transition duration-200 dark:bg-violet-700 dark:hover:bg-violet-500"
//         onClick={toggleEditMode}
//     >
//         {editMode ? "Close" : "Edit Profile"}
//     </button>
// </div>


//                 {editMode && (
//     <div className="bg-gradient-to-r from-violet-200 to-purple-300 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-6">
//         <h3 className="text-3xl font-bold mb-6 text-center text-violet-900 dark:text-gray-200">Edit Profile</h3>
//         <form onSubmit={(e) => { e.preventDefault(); saveChanges(); }}>

//             <label className="block mb-5">
//                 <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Name:</span>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="mt-2 block w-full p-3 border border-gray-400 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
//                 />
//             </label>

//             <label className="block mb-5">
//                 <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Email:</span>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="mt-2 block w-full p-3 border border-gray-400 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
//                 />
//             </label>

//             <label className="block mb-5">
//                 <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Phone:</span>
//                 <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="mt-2 block w-full p-3 border border-gray-400 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
//                 />
//             </label>

//             <label className="block mb-5">
//                 <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Address:</span>
//                 <input
//                     type="text"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     className="mt-2 block w-full p-3 border border-gray-400 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
//                 />
//             </label>

//             <button
//                 type="submit"
//                 className="w-1/2  ml-20 mt-6 bg-gradient-to-r from-violet-900 to-purple-700 text-white py-3 rounded-lg font-bold text-xl hover:bg-violet-600 transition-colors duration-200 dark:bg-violet-700 dark:hover:bg-violet-500"
//             >
//                 Save Changes
//             </button>
//         </form>
//     </div>
// )}

// <div className="bg-gradient-to-r from-violet-200 to-purple-300 dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
//     <h3 className="text-3xl font-bold mb-6 text-center text-violet-900 dark:text-gray-200">Settings</h3>

//     <label className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-300">
//         <input
//             type="checkbox"
//             checked={settings.darkMode}
//             onChange={() => toggleSetting('darkMode')}
//             className="mr-3 w-6 h-6 border-2 border-gray-400 rounded-md checked:bg-violet-500 focus:ring-violet-700 dark:border-gray-500 dark:checked:bg-violet-400"
//         />
//         <span>Enable Dark Mode</span>
//     </label>
// </div>

//                 <div className="mt-6 text-center">
//                     <button
//                         onClick={handleLogout}
//                         className="bg-white text-violet-900 text-xl px-6 py-2 rounded hover:bg-violet-200"
//                     >
//                         Logout
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ProfilePage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from './UserContext'; // Import the useUser hook

// const ProfilePage = () => {
//     const { user, setUser } = useUser(); // Access user data and setUser function from context
//     const [settings, setSettings] = useState({
//         notifications: true,
//         darkMode: false,
//     });

//     const [editMode, setEditMode] = useState(false);
//     const [formData, setFormData] = useState({ ...user });
//     const [profilePic, setProfilePic] = useState(null);

//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const toggleEditMode = () => {
//         setEditMode(!editMode);
//         setFormData({ ...user });
//     };

//     const saveChanges = () => {
//         setUser({ ...formData }); // Update the user data in context
//         setEditMode(false);
//     };

//     const toggleSetting = (setting) => {
//         setSettings((prevSettings) => ({
//             ...prevSettings,
//             [setting]: !prevSettings[setting],
//         }));
//     };

//     const handleProfilePicChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setProfilePic(URL.createObjectURL(file));
//         }
//     };

//     const removeProfilePic = () => {
//         setProfilePic(null);
//     };

//     useEffect(() => {
//         // Apply dark mode class to the document root based on state
//         if (settings.darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [settings.darkMode]);

//     const handleLogout = () => {
//         navigate('/logout');
//     };

//     return (
//         <div className="w-screen min-h-screen bg-fixed bg-cover bg-center bg-[url('../src/assets/testimage.jpg')] bg-violet-900">
//             <div className="p-6 max-w-2xl mx-auto font-sans text-gray-800 dark:text-gray-100 pl-48 bg-transparent z-10">
//                 <div className="w-full h-full bg-gradient-to-r from-violet-200 to-purple-300 dark:bg-gray-800 p-10 rounded-lg shadow-lg mb-6">
//                     <h2 className="text-3xl font-bold mb-6 text-center text-violet-900 dark:text-gray-200">Profile</h2>

//                     <div className="flex items-center mb-6">
//                         {profilePic ? (
//                             <img
//                                 src={profilePic}
//                                 alt="Profile"
//                                 className="w-24 h-24 rounded-full mr-6 border-4 border-violet-500 shadow-md"
//                             />
//                         ) : (
//                             <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-violet-700 mr-6 border-4 border-gray-400 shadow-md">
//                                 No Image
//                             </div>
//                         )}
//                         <div>
//                             <label className="block mb-3 text-lg font-semibold text-gray-800 dark:text-gray-300">
//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={handleProfilePicChange}
//                                     className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:font-medium file:bg-blue-50 file:text-violet-900 hover:file:bg-grey-100"
//                                 />
//                             </label>
//                             {profilePic && (
//                                 <button
//                                     onClick={removeProfilePic}
//                                     className="mt-2 bg-violet-900 text-white px-4 py-1 rounded-lg font-semibold text-sm hover:bg-violet-400 transition duration-200"
//                                 >
//                                     Remove Picture
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                     <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Name:</strong> {user.name}</p>
//                     <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Email:</strong> {user.email}</p>
//                     <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Membership ID:</strong> {user.membershipId}</p>
//                     <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Date of Joining:</strong> {user.joinDate}</p>
//                     <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Phone:</strong> {user.phone}</p>
//                     <p className="text-xl mb-2  text-gray-800 dark:text-gray-300"><strong>Address:</strong> {user.address}</p>

//                     <button
//                         className="mt-6 w-1/2 ml-20 bg-gradient-to-r from-violet-900 to-purple-700 text-white py-3 rounded-lg font-bold text-xl hover:bg-violet-600 transition duration-200 dark:bg-violet-700 dark:hover:bg-violet-500"
//                         onClick={toggleEditMode}
//                     >
//                         {editMode ? "Close" : "Edit Profile"}
//                     </button>
//                 </div>

//                 {editMode && (
//                     <div className="bg-gradient-to-r from-violet-200 to-purple-300 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-6">
//                         <h3 className="text-3xl font-bold mb-6 text-center text-violet-900 dark:text-gray-200">Edit Profile</h3>
//                         <form onSubmit={(e) => { e.preventDefault(); saveChanges(); }}>
//                             {/* Form fields for profile */}
//                             <label className="block mb-5">
//                                 <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Name:</span>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleInputChange}
//                                     className="mt-2 block w-full p-3 border border-gray-400 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
//                                 />
//                             </label>
//                             <button
//                                 type="submit"
//                                 className="w-1/2  ml-20 mt-6 bg-gradient-to-r from-violet-900 to-purple-700 text-white py-3 rounded-lg font-bold text-xl hover:bg-violet-600 transition-colors duration-200 dark:bg-violet-700 dark:hover:bg-violet-500"
//                             >
//                                 Save Changes
//                             </button>
//                         </form>
//                     </div>
//                 )}

//                 <div className="bg-gradient-to-r from-violet-200 to-purple-300 dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
//                     <h3 className="text-3xl font-bold mb-6 text-center text-violet-900 dark:text-gray-200">Settings</h3>

//                     <label className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-300">
//                         <input
//                             type="checkbox"
//                             checked={settings.darkMode}
//                             onChange={() => toggleSetting('darkMode')}
//                             className="mr-3 w-6 h-6 border-2 border-gray-400 rounded-md checked:bg-violet-500 focus:ring-violet-700 dark:border-gray-500 dark:checked:bg-violet-400"
//                         />
//                         <span>Enable Dark Mode</span>
//                     </label>
//                 </div>

//                 <div className="mt-6 text-center">
//                     <button
//                         onClick={handleLogout}
//                         className="bg-white text-violet-900 text-xl px-6 py-2 rounded hover:bg-violet-200"
//                     >
//                         Logout
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Import the useUser hook

const ProfilePage = () => {
    const { user, setUser } = useUser(); // Access user data and setUser function from context
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
    });

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({ ...user });
    const [profilePic, setProfilePic] = useState(null);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
        setFormData({ ...user });
    };

    const saveChanges = () => {
        setUser({ ...formData }); // Update the user data in context
        setEditMode(false);
    };

    const toggleSetting = (setting) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [setting]: !prevSettings[setting],
        }));
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    const removeProfilePic = () => {
        setProfilePic(null);
    };

    useEffect(() => {
        // Apply dark mode class to the document root based on state
        if (settings.darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [settings.darkMode]);

    const handleLogout = () => {
        navigate('/logout');
    };

    return (
        <div className="w-screen min-h-screen bg-fixed bg-cover bg-center bg-[url('../src/assets/testimage.jpg')] bg-violet-900">
            <div className="p-6 max-w-2xl mx-auto font-sans text-gray-800 dark:text-gray-100 pl-48 bg-transparent z-10">
                <div className="w-full h-full bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg mb-6">
                    <h2 className="text-3xl font-bold mb-6 text-center text-violet-900 dark:text-gray-200">Profile</h2>

                    <div className="flex items-center mb-6">
                        {profilePic ? (
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-24 h-24 rounded-full mr-6 border-4 border-violet-500 shadow-md"
                            />
                        ) : (
                            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-violet-700 mr-6 border-4 border-gray-400 shadow-md">
                                No Image
                            </div>
                        )}
                        <div>
                            <label className="block mb-3 text-lg font-semibold text-gray-800 dark:text-gray-300">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfilePicChange}
                                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:font-medium file:bg-blue-50 file:text-violet-900 hover:file:bg-grey-100"
                                />
                            </label>
                            {profilePic && (
                                <button
                                    onClick={removeProfilePic}
                                    className="mt-2 bg-violet-900 text-white px-4 py-1 rounded-lg font-semibold text-sm hover:bg-violet-400 transition duration-200"
                                >
                                    Remove Picture
                                </button>
                            )}
                        </div>
                    </div>

                    <p className="text-xl mb-2 text-gray-800 dark:text-gray-300"><strong>Name:</strong> {user.name}</p>
                    <p className="text-xl mb-2 text-gray-800 dark:text-gray-300"><strong>Email:</strong> {user.email}</p>
                    <p className="text-xl mb-2 text-gray-800 dark:text-gray-300"><strong>College ID:</strong> {user.CollegeId}</p>
                    <p className="text-xl mb-2 text-gray-800 dark:text-gray-300"><strong>Date of Joining:</strong> {user.joinDate}</p>
                    <p className="text-xl mb-2 text-gray-800 dark:text-gray-300"><strong>Phone:</strong> {user.phone}</p>
                    <p className="text-xl mb-2 text-gray-800 dark:text-gray-300"><strong>Address:</strong> {user.address}</p>

                    <button
                        className="mt-6 w-1/2 ml-20 bg-gradient-to-r from-violet-900 to-purple-700 text-white py-3 rounded-lg font-bold text-xl hover:bg-violet-600 transition duration-200 dark:bg-violet-700 dark:hover:bg-violet-500"
                        onClick={toggleEditMode}
                    >
                        {editMode ? "Close" : "Edit Profile"}
                    </button>
                </div>

                {editMode && (
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-6">
                        <h3 className="text-3xl font-bold mb-6 text-center text-violet-900 dark:text-gray-200">Edit Profile</h3>
                        <form onSubmit={(e) => { e.preventDefault(); saveChanges(); }}>
                            <label className="block mb-5">
                                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Name:</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="bg-violet-200 mt-2 block w-full p-3 border border-gray-400 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                />
                            </label>

                            <label className="block mb-5">
                                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Email:</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="bg-violet-200 mt-2 block w-full p-3 border border-gray-400 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                />
                            </label>

                            <label className="block mb-5">
                                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Phone:</span>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="bg-violet-200 mt-2 block w-full p-3 border border-gray-400 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                />
                            </label>

                            <label className="block mb-5">
                                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Address:</span>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="bg-violet-200 mt-2 block w-full p-3 border border-gray-400 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                />
                            </label>

                            <button
                                type="submit"
                                className="w-1/2 ml-20 mt-6 bg-gradient-to-r from-violet-900 to-purple-700 text-white py-3 rounded-lg font-bold text-xl hover:bg-violet-600 transition-colors duration-200 dark:bg-violet-700 dark:hover:bg-violet-500"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                )}

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                    <h3 className="text-3xl font-bold mb-6 text-center text-violet-900 dark:text-gray-200">Settings</h3>

                    <label className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-300">
                        <input
                            type="checkbox"
                            checked={settings.darkMode}
                            onChange={() => toggleSetting('darkMode')}
                            className="mr-3 w-6 h-6 border-2 border-gray-400 rounded-md checked:bg-violet-500 focus:ring-violet-700 dark:border-gray-500 dark:checked:bg-violet-400"
                        />
                        <span>Enable Dark Mode</span>
                    </label>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={handleLogout}
                        className="bg-violet-200 text-violet-900 text-xl px-6 py-2 rounded hover:bg-violet-200"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

