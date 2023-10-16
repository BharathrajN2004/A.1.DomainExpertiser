import React, { useState } from 'react';
import {
    Routes,
    Route,
    useNavigate,
    Navigate
} from 'react-router-dom';

// Import pages
import Home from './Common/Home/HomePage';
import Profile from './Common/Profile/Profile';
import Setting from './Common/Settings/Setting';
import Project from './Common/Project/Project';
import Developers from './Common/Developers/Developers';
import Request from "./Common/Request/Request";
// partials
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
// Company
import Job from './Company/Job/Job';
import Intern from './Company/Intern/intern';
// Students
import DevelopProject from './User/DevelopProject/DevelopProject';
import PersonalTrack from './User/PersonalTrack/PersonalTrack';
import Learn from './User/Learn/Learn';
import Publish from './User/Publish/Publish';


function MainPage() {
    const [userDetails, setUserDetails] = useState(JSON.parse(sessionStorage.getItem('userData')));
    const role = "Company";

    // useEffect(() => {
    // Fetch user details using the token
    //     const fetchUserDetails = async () => {
    //         try {
    //             const token = sessionStorage.getItem('token');

    //             if (!token) {
    //                 // Redirect to login page if token is not present
    //                 const navigate = useNavigate();
    //                 navigate('/login');
    //                 return;
    //             }

    //             const response = await fetch('http://127.0.0.1:3000/user', {
    //                 headers: {
    //                   Authorization: `Bearer ${token}`,
    //                   'Content-Type': 'application/json',
    //                 },
    //               });
    //             // Assuming the API returns user details as `response.data`
    //             setUserDetails(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchUserDetails();
    // }, []);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleOverlayClick = () => {
        if (sidebarOpen) {
            setSidebarOpen(false);
        }
    };

    return (
        <>

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} role={role} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden" onClick={handleOverlayClick}>

                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} userDetail={userDetails} />
                <main >
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <Routes>
                            <Route exact path="/" element={<Home userDetail={userDetails} />} />
                            <Route exact path="/Home" element={<Home userDetail={userDetails} />} />
                            <Route exact path="/Settings" element={<Setting />} />
                            <Route exact path="/Settings/Profile" element={<Profile />} />
                            {/* company and client */}
                            {(role == "Company" || role == "Client") &&
                                <>
                                    <Route exact path="/Project" element={<Project />} />
                                    <Route exact path="/Developers" element={<Developers />} />
                                    <Route exact path="/Project" element={<Project />} />
                                    <Route exact path="/Request" element={<Request />} />
                                </>
                            }
                            {/* comapny */}
                            {role == "Company" &&
                                <>
                                    <Route exact path="/Intern" element={<Intern />} />
                                    <Route exact path="/Job" element={<Job />} />
                                </>
                            }
                            {/* student */}
                            {role == "Student" &&
                                <>
                                    <Route exact path="/PersonalTrack" element={<PersonalTrack />} />
                                    <Route exact path="/Learn" element={<Learn />} />
                                    <Route exact path="/Develop" element={<DevelopProject />} />
                                    <Route exact path="/Publish" element={<Publish />} />
                                </>
                            }
                            <Route exact path="/*" element={<Navigate replace to={"/"} />} />
                        </Routes>
                    </div>
                </main>
                <Banner />
            </div>
        </>
    )
}

export default MainPage