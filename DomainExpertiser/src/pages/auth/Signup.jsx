import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    // const [profilePhoto, setProfilePhoto] = useState(null);
    const [state, setState] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setaddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [country, setCountry] = useState("");
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [selectedOccupation, setSelectedOccupation] = useState("Employee");
    const [scname, setSCname] = useState("");
    const [location, setLocation] = useState("");
    const [degree, setDegree] = useState("");
    const [dept, setDept] = useState("");
    const [year, setYear] = useState("");
    const [sc, setClass] = useState("");
    const [type, setType] = useState("Select");
    const [git, setGit] = useState("");
    const [lin, setLin] = useState("");
    const [license, setL] = useState("");
    const [cwlink, setCWLink] = useState("");
    const [rc, setRC] = useState("");

    const [toc, setToC] = useState("");
    const [wayu, setWayu] = useState("Select");
    const [con, setCon] = useState("");
    const [desc, setDesc] = useState("");
    const Interests = [
        "Game Development",
        "App Development",
        "Web Development",
        "UI/UX desin",
        "API creation",
        "AI and ML",
        "Data Analystics",
    ];
    const includedFeatures = [
        "Innovative Drag and Drop Interface",
        "Cutting-edge AI Integration",
        "Real-time Code Generation",
        "Seamless Integration and Deployment",
        "Thriving Collaborative Community",
        "AI-Enhanced Learning Environment",
    ];

    const handleInterestChange = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(
                selectedInterests.filter((item) => item !== interest)
            );
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const handleOccupationChange = (event) => {
        setSelectedOccupation(event.target.value);
    };
    const sorc = (event) => {
        setType(event.target.value);
    };
    const wayufun = (event) => {
        setWayu(event.target.value);
    };

    const validateFunction = () => {
        if (state == 0) {
            if (firstName != "" && lastName != "" && email != "" && password != "" && address != "" && country != "" && pincode != "" && selectedOccupation != "") {
                setState((prev) => prev += 1);
                setUserData({ "firstName": firstName, "lastName": lastName, "email": email, "password": password, "location": address + ", " + country + ", " + pincode, "role": selectedOccupation });
            } else {
                alert("Kindly enter all the details!");
            }
        } else if (state == 1) {
            if (selectedOccupation == "Student" && (scname != "" && type != "")) {
                if (type == "School" && sc != "") {
                    setState((prev) => prev += 1);
                    setUserData({
                        ...userData, "roleData": {
                            "name": scname, "type": type, "standard": sc
                        },
                    });
                }
                else if (type == "College" && year != "" && degree != "" && dept != "") {
                    setState((prev) => prev += 1);
                    setUserData({
                        ...userData, "roleData": {
                            "name": scname, "type": type, "year": year, "degree": degree, "dept": dept
                        },
                    });
                }
                else {
                    alert("kindly enter all the details!");
                }
            }
            else if (selectedOccupation == "Client" && lin != "") {
                setState((pre) => pre += 1);
                setUserData({
                    ...userData, "roleData": {
                        "linkedIn": lin
                    },
                });
            }
            else if (selectedOccupation == "Employee" && scname != "" && dept != "" && year != "") {
                setState((prev) => prev += 1);
                setUserData({
                    ...userData, "roleData": {
                        "linkedIn": lin
                    },
                });

            } else if (selectedOccupation == "Company" && scname != "" && cwlink != "" && year != "" && license != "" && rc != "" && degree != "" && toc != "" && desc != "" && con != "") {
                setState((prev) => prev += 1);
                setUserData({
                    ...userData, "roleData": {
                        "name": scname, "webLink": cwlink, "startYear": year, "license": license, "country": rc, "services": degree, "description": desc, "contact": con,
                    },
                });
            } else {
                alert("kindly enter all the details!");
            }
        } else if (state == 2) {
            if (selectedOccupation == "Employee" && git != "" && lin != "" && selectedInterests.length != 0) {
                setState((prev) => prev += 1);
            }
            else if (selectedOccupation == "College" && git != "" && lin != "" && wayu != "" && selectedInterests.length != 0) {
                setState((prev) => prev += 1);
                setUserData({
                    ...userData, "roleData": {
                        "github": git, "linkedIn": lin, "intresets": selectedInterests
                    },
                });

            } else {
                alert("kindly enter all the details!");
            }
        }
        console.log(userData);
    }

    const handleSubmit = async () => {
        const DataToSend = {
            firstName,
            lastName,
            email,
            password,
            location: address + ", " + country + ", " + pincode,
            interests: selectedInterests,
            occupation: selectedOccupation,
            paymentDetail: {
                package: "learner",
                payterm: "free",
            },
        };
        try {
            const response = await fetch("http://127.0.0.1:3000/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(DataToSend),
            });

            if (response.ok) {
                navigate("/Login");
                console.log("Request sent successfully", response.json);
            } else {
                console.log("error in sending the request");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="bg-slate-100 w-screen h-screen overflow-y-scroll">
            <div className="flex flex-col justify-start items-center xs:mx-auto xs:w-full xs:max-w-xl">
                {/* header Block */}
                <section className="mt-6">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="src/assets/logo.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Join{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-green-400">
                            Domain Expertiser
                        </span>
                    </h2>
                    <h5 className="mt-2 text-center text-base font-bold leading-9 tracking-tight text-gray-700">
                        Fostering expertise, connecting minds, transforming ideas into
                        impactful realities
                    </h5>
                </section>

                {/* Basic Detail */}

                <section className="mt-6 w-full">
                    {state == 0 && (
                        <section>
                            <div className="flex flex-row justify-between items-center mt-4">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            value={firstName}
                                            onChange={(event) => setFirstName(event.target.value)}
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            value={lastName}
                                            onChange={(event) => setLastName(event.target.value)}
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="Full-address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Full address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Full-address"
                                        id="Full-address"
                                        value={address}
                                        onChange={(event) => setaddress(event.target.value)}
                                        autoComplete="Full-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-4">
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Country
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="country"
                                            id="country"
                                            value={country}
                                            onChange={(event) => setCountry(event.target.value)}
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="postal-code"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            value={pincode}
                                            onChange={(event) => setPincode(event.target.value)}
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="Occupation"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Occupation
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="Occupation"
                                        name="Occupation"
                                        autoComplete="Occupation-name"
                                        value={selectedOccupation}
                                        onChange={handleOccupationChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value="Employee">Employee</option>
                                        <option value="Student">Student</option>
                                        <option value="Client">Client</option>
                                        <option value="Company">Company</option>
                                    </select>
                                </div>
                            </div>
                        </section>
                    )}
                    {state == 1 && selectedOccupation == "Student" && (
                        <section>
                            <div className="mt-4">
                                <label
                                    htmlFor="SCname"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    School/College Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="SCname"
                                        name="SCname"
                                        type="SCname"
                                        value={scname}
                                        onChange={(event) => setSCname(event.target.value)}
                                        autoComplete="SCName"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="Occupation"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Institution Type
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="Type"
                                        name="Type"
                                        autoComplete="Institution-type"
                                        value={type}
                                        onChange={sorc}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value="Select">Select</option>
                                        <option value="College">College</option>
                                        <option value="School">School</option>
                                    </select>
                                </div>
                                {type == "College" && (
                                    <div>
                                        <div className="mt-4">
                                            <label
                                                htmlFor="Degree"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Degree
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="Degree"
                                                    name="Degree"
                                                    type="Degree"
                                                    value={degree}
                                                    onChange={(event) => setDegree(event.target.value)}
                                                    autoComplete="deg"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between mt-4">
                                            <div>
                                                <label
                                                    htmlFor="yr"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Year
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="Year"
                                                        id="Year"
                                                        value={year}
                                                        onChange={(event) => setYear(event.target.value)}
                                                        autoComplete="Yr"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="Dept"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Department
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="dept"
                                                        id="dept"
                                                        value={dept}
                                                        onChange={(event) => setDept(event.target.value)}
                                                        autoComplete="dept"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {type == "School" && (
                                    <div>
                                        <div className="mt-4">
                                            <label
                                                htmlFor="Sch"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Class/Standard
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="Sch"
                                                    name="Sch"
                                                    type="Sch"
                                                    value={sc}
                                                    onChange={(event) => setClass(event.target.value)}
                                                    autoComplete="Cls"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                    {state == 1 && selectedOccupation == "Employee" && (
                        <section>
                            <div className="mt-4">
                                <label
                                    htmlFor="SCname"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Company Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="SCname"
                                        name="SCname"
                                        type="SCname"
                                        value={scname}
                                        onChange={(event) => setSCname(event.target.value)}
                                        autoComplete="SCName"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="SCname"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Location
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Location"
                                            name="Location"
                                            type="Location"
                                            value={location}
                                            onChange={(event) => setLocation(event.target.value)}
                                            autoComplete="loc"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-4">
                                <div>
                                    <label
                                        htmlFor="yr"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Job
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="Year"
                                            id="Year"
                                            value={dept}
                                            onChange={(event) => setDept(event.target.value)}
                                            autoComplete="Yr"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="Dept"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Experience
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="dept"
                                            id="dept"
                                            value={year}
                                            onChange={(event) => setYear(event.target.value)}
                                            autoComplete="dept"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {state == 1 && selectedOccupation == "Company" && (
                        <section>
                            <div className="mt-4">
                                <label
                                    htmlFor="SCname"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Company Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="SCname"
                                        name="SCname"
                                        type="SCname"
                                        value={scname}
                                        onChange={(event) => setSCname(event.target.value)}
                                        autoComplete="SCName"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-center mt-4">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Company Website Link
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            value={cwlink}
                                            onChange={(event) => setCWLink(event.target.value)}
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Start Year of Company
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            value={year}
                                            onChange={(event) => setYear(event.target.value)}
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="loc"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    License
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="loc"
                                        name="loc"
                                        type="loc"
                                        value={license}
                                        onChange={(event) => setL(event.target.value)}
                                        autoComplete="loc"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="loc"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Registered Country
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="loc"
                                        name="loc"
                                        type="loc"
                                        value={rc}
                                        onChange={(event) => setRC(event.target.value)}
                                        autoComplete="loc"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label
                                    htmlFor="loc"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Products/Services
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="deg"
                                        name="deg"
                                        type="deg"
                                        value={degree}
                                        onChange={(event) => setDegree(event.target.value)}
                                        autoComplete="deg"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-center mt-4">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Type of Company(Product/Service/IETS)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            value={toc}
                                            onChange={(event) => setToC(event.target.value)}
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Contact Information
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            value={con}
                                            onChange={(event) => setCon(event.target.value)}
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="loc"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Description
                                </label>

                                <div className="mt-2">
                                    <input
                                        id="f"
                                        name="f"
                                        type="f"
                                        value={desc}
                                        onChange={(event) => setDesc(event.target.value)}
                                        autoComplete="f"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </section>
                    )}
                    {state == 0 && selectedOccupation == "Client" && (
                        <div className="mt-4">
                            <label
                                htmlFor="SCname"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Linkedin Link
                            </label>
                            <div className="mt-2">
                                <input
                                    id="lin"
                                    name="lin"
                                    type="lin"
                                    value={lin}
                                    onChange={(event) => setLin(event.target.value)}
                                    autoComplete="lin"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    )}
                    {state == 2 && selectedOccupation != "Client" && type != "School" && (
                        <section>
                            <div className="mt-4">
                                <label
                                    htmlFor="SCname"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Linkedin Link
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lin"
                                        name="lin"
                                        type="lin"
                                        value={lin}
                                        onChange={(event) => setLin(event.target.value)}
                                        autoComplete="lin"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {selectedOccupation != "Company" && (
                                <section>
                                    <div className="mt-4">
                                        <label
                                            htmlFor="SCname"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Github Link
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="git"
                                                name="git"
                                                type="git"
                                                value={git}
                                                onChange={(event) => setGit(event.target.value)}
                                                autoComplete="git"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label
                                            htmlFor="SCname"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Location
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="Location"
                                                name="Location"
                                                type="Location"
                                                value={location}
                                                onChange={(event) => setLocation(event.target.value)}
                                                autoComplete="loc"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label
                                            htmlFor="Occupation"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            What are you upto?
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="Type"
                                                name="Type"
                                                autoComplete="Institution-type"
                                                value={wayu}
                                                onChange={wayufun}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option value="Job">Job</option>
                                                <option value="Internship">Internship</option>
                                                <option value="Project">Project</option>
                                            </select>
                                        </div>
                                    </div>
                                    <fieldset className="mt-4">
                                        <legend className="block text-sm font-medium leading-6 text-gray-900">
                                            Choose your field of Interests
                                        </legend>
                                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 items-center justify-around">
                                            {Interests.map((interest) => (
                                                <div
                                                    className="relative flex gap-x-3 items-center"
                                                    key={interest}
                                                >
                                                    <input
                                                        id={interest}
                                                        name={interest}
                                                        type="checkbox"
                                                        checked={selectedInterests.includes(interest)}
                                                        onChange={() => handleInterestChange(interest)}
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <p className="text-sm leading-6 font-normal text-gray-900">
                                                        {interest}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </fieldset>
                                </section>
                            )}
                        </section>
                    )}
                    <div className="my-6 flex justify-between">
                        {state != 0 && (
                            <button
                                onClick={() => {
                                    setState((pre) => (pre -= 1));
                                    console.log(state);
                                }}
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                            >
                                <svg
                                    className="w-3.5 h-3.5 ml-3 mr-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Previous
                                </span>
                            </button>
                        )}
                        <button
                            onClick={() => {
                                validateFunction();
                                console.log(state);
                            }}
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                {(selectedOccupation == "Client" && state == 0) ||
                                    (selectedOccupation == "Student" && type == "School" && state == 1) || (selectedOccupation == "Student" && type == "College" && state == 2) || (selectedOccupation == "Employee" && state == 2) ? "Submit" : "Next"}
                            </span>
                            <svg
                                className="w-3.5 h-3.5 ml-2 mr-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Signup;

//         <div className="flex flex-col justify-start items-center mb-6">
//     <div className="flex flex-col mt-10 max-w-4xl rounded-3xl ring-1 ring-gray-200">
//         <div className="flex flex-row justify-around items-start">
//             <div className="px-8 pt-8 sm:px-10 sm:pt-10 lg:flex-auto">
//                 <h3 className="text-2xl font-bold tracking-tight text-gray-900">Learner Access</h3>
//                 <p className="mt-6 text-base leading-7 text-gray-600">
//                     Unleash your creativity with our platform's exquisite UI and UX creation capabilities. Design seamlessly using drag and drop components, powered by image and speech recognition. Experience real-time auto-generated code for any language or framework, offering unmatched flexibility. Transform your creation into a production-level masterpiece with auto connections between APIs, databases, servers, and front-end code. Join our thriving community, fostering collaboration and limitless possibilities for creators, developers, learners, and collaborators.
//                 </p>

//             </div>
//             <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
//                 <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
//                     <div className="mx-auto max-w-xs px-8">
//                         <p className="text-base font-semibold text-gray-600">Get it for free</p>
//                         <p className="mt-6 flex items-baseline justify-center gap-x-2">
//                             <span className="text-5xl font-bold tracking-tight text-gray-900">₹0</span>
//                             <span className="text-xs font-semibold leading-6 tracking-wide text-gray-600">Rupee</span>
//                         </p>
//                         <button
//                             onClick={handleSubmit}
//                             className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Get access
//                         </button>
//                         <p className="mt-6 text-xs leading-5 text-gray-600">
//                             ... for ultimate access to the platform try PRO Access
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="px-10 pb-10 ">
//             <div className="mt-10 flex items-center gap-x-4">
//                 <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
//                 <div className="h-px flex-auto bg-gray-100" />
//             </div>
//             <ul
//                 role="list"
//                 className="mt-8 max-w-7xl grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-3 sm:gap-6"
//             >
//                 {includedFeatures.map((feature) => (
//                     <li key={feature} className="flex gap-x-3">
//                         <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                         {feature}
//                     </li>
//                 ))}
//             </ul>
//             <p className='mt-4 text-sm leading-6 text-gray-600'>...more and more beyound the thoughts</p>
//         </div>
//     </div>
// </div>
