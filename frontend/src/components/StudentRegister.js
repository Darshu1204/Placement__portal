// import React, { useState} from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import '../styles/adminregister.css'
// import axios from 'axios';
// // import {useHistory} from 'react-router-dom';
//  const StudentRegister = () => {
//     const [student,setStudent]=useState({name:"",email:"",password:"",phone:"",gender:"",dob:"",department:"",year:"",address:""});
//     const handleChange=(e)=>{
//         e.preventDefault();
//         const field=e.target.name;
//         const value=e.target.value;
//         setStudent({...student,[field]:value});
//         // console.log(student);
//         // we used the spread operator to update the field after making its copy
//     }

//     const navigate=useNavigate();
//     // const postdata = async (e) => {
//     //     console.log("Post");
//     //      e.preventDefault();
//     //      const { name, email, phone, password, gender, dob, department, year, address } = student;
//     //      const res = await fetch('/student/register', {
//     //          method: "POST",
//     //          headers: {
//     //              "Content-Type": "application/json"
//     //          },
//     //          body: JSON.stringify({ name, email, phone, password, gender, dob, department, year, address })
//     //      });

//     //      console.log("post1");
//     //      const data = await res.json();
//     //      console.log(data);
//     //      if (res.status === 400 || !data) {
//     //          window.alert("Invalid Registration");
//     //      } else {
//     //          window.alert("Registration Successful");
//     //          navigate('/student/login');
//     //      }

//     //  }

//      const postdata = async (e) => {
//          console.log("Post");
//          e.preventDefault();
//          try{
             
//              const { name, email, phone, password, gender, dob, department, year, address } = student;
//          const res = await axios.post('/student/register', {
//              method: "POST",
//              headers: {
//                  "Content-Type": "application/json"
//              },
//              body: JSON.stringify({ name, email, phone, password, gender, dob, department, year, address })
//          });

//          console.log("post1");
//          const data = await res.json();
//          console.log(data);
//          if (res.status === 400 || !data) {
//              window.alert("Invalid Registration");
//          } else {
//              window.alert("Registration Successful");
//              navigate('/student/login');
//             }
            
//          } catch (error) {
//              console.error("Error:", error);
//              window.alert("An error occurred during registration.");
//          }
//      }

//     return (
//         <div className='student-container'>
//             <div className="signin-holder">
//                 <div className="signin-container">
//                     <h1 className="title">Student Signup</h1>
//                     <hr />
//                     <form className="signin-form" autoComplete='on'>
//                         <div className="name profile-input ">
//                             <input className="studentsign-input" type="text" name="name" onChange={handleChange} value={student.name} placeholder='Name'/>
//                         </div>
//                         <div className="email profile-input ">
//                             <input className="studentsign-input" type="email" name="email" onChange={handleChange} value={student.email} placeholder='Email' />
//                         </div>
//                         <div className="phone profile-input ">
//                             <input className="studentsign-input" type="phone" name="phone" onChange={handleChange} value={student.phone} placeholder='Mobile Number' />
//                         </div>
//                         <div className="password profile-input ">
//                             <input className="studentsign-input" type="password" name="password" onChange={handleChange} value={student.password}  id="password" placeholder="Password" />
//                         </div>
//                         <div className="gender profile-input ">
//                             <input className="studentsign-input" type="text" name="gender" onChange={handleChange} value={student.gender} placeholder='Gender' />
//                         </div>
//                         <div className="dob profile-input ">
//                             <input className="studentsign-input" type="text" name="dob" onChange={handleChange} value={student.dob} placeholder='Date of birth' />
//                         </div>
//                         <div className="department profile-input ">
//                             <input className="studentsign-input" type="text" name="department" onChange={handleChange} value={student.department} placeholder='Department' />
//                         </div>

//                         <div className="year profile-input ">
//                             <input className="studentsign-input" type="text" name="year" onChange={handleChange} value={student.year} placeholder='Year'/>
//                         </div>
//                         <div className="address profile-input ">
//                             {/* <input className="studentsign-input" type="text" name="year" onChange={handleChange} value={student.year} placeholder='Year' /> */}
//                             <textarea name="address" id="address" rows="3" placeholder='Address' value={student
//                             .address} onChange={handleChange}></textarea>
//                         </div>
//                         {/* <div className="password profile-input ">
//                             <input className="studentsign-input" type="password" name="confirm-password" id="confirm-password"
//                                 placeholder="Confirm Password" />
//                         </div> */}
//                         <input type="submit" value="signin" id="signinBtn" onClick={postdata} />
//                         <div className="login-link">
//                             <small>already registered?</small><Link to="/student/login">Login</Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default StudentRegister
/******************************************************************************************************** */
import React, { useState } from 'react';
import '../styles/studentregister.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const StudentRegister = () => {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        dob: "",
        department: "",
        year: "",
        cgpa:"",
        address: ""
    });

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setStudent({ ...student, [field]: value });
    }

    const navigate = useNavigate();

    const postdata = async (e) => {
        e.preventDefault();
        console.log("Post");
        console.log(student);

        try {
            const { name, email, phone, password, gender, dob, department, year,cgpa, address } = student;
            const response = await axios.post('http://localhost:5000/student/register', {
                name,
                email,
                phone,
                password,
                gender,
                dob,
                department,
                year,
                cgpa,
                address
            });

            console.log("post1");
            console.log(response.data); // Axios automatically parses JSON response

            if (response.status === 400) {
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            } else {
                window.alert("Registration Successful");
                console.log("Registration Successful");
                navigate('/student/login');
            }
        } catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred during registration.");
        }
    }

    return (
        <>
            <div className='student-container'>
                <div className="signin-container">
                    <h1 className="tit">Student Signup</h1>
                    <hr />
                    <form className="studentsignin-form" autoComplete='off'>
                        <div className="name profile-input ">
                            <input className="studentsign-input" type="text" name="name" onChange={handleChange} value={student.name} placeholder='Name' required autoComplete='off'/>
                        </div>
                        <div className="email profile-input ">
                            <input className="studentsign-input" type="email" name="email" onChange={handleChange} value={student.email} placeholder='Email' required  autoComplete='off'/>
                        </div>
                        <div className="phone profile-input ">
                            <input className="studentsign-input" type="phone" name="phone" onChange={handleChange} value={student.phone} placeholder='Mobile Number' required  autoComplete='off'/>
                        </div>
                        <div className="password profile-input ">
                            <input className="studentsign-input" type="password" name="password" onChange={handleChange} value={student.password} id="password" placeholder="Password" required  autoComplete='off'/>
                        </div>
                        <div className="gender profile-input ">
                            <input className="studentsign-input" type="text" name="gender" onChange={handleChange} value={student.gender} placeholder='Gender' required autoComplete='off'/>
                        </div>
                        <div className="dob profile-input ">
                            <input className="studentsign-input" type="text" name="dob" onChange={handleChange} value={student.dob} placeholder='Date of birth' required  autoComplete='off'/>
                        </div>
                        <div className="department profile-input ">
                            <input className="studentsign-input" type="text" name="department" onChange={handleChange} value={student.department} placeholder='Department' required  autoComplete='off'/>
                        </div>
                        <div className="year profile-input ">
                            <input className="studentsign-input" type="text" name="year" onChange={handleChange} value={student.year} placeholder='Year' required  autoComplete='off' />
                        </div>
                        <div className="cgpa profile-input ">
                            <input className="studentsign-input" type="text" name="cgpa" onChange={handleChange} value={student.cgpa} placeholder='CGPA' required  autoComplete='off'/>
                        </div>
                        <div className="address profile-input ">
                            {/* <input className="studentsign-input" type="text" name="year" onChange={handleChange} value={student.year} placeholder='Year' /> */}
                            <textarea name="address" id="address" rows="3" placeholder='Address' value={student.address} onChange={handleChange} required></textarea>
                        </div>
                        {/* <div className="password profile-input ">
                            <input className="studentsign-input" type="password" name="confirm-password" id="confirm-password"
                            placeholder="Confirm Password" />
                        </div> */}
                        <input type="submit" value="signin" id="signinBtn" onClick={postdata} />
                        <div className="slogin-link">
                            <small>already registered?</small><Link to="/student/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
    </>
    
  );
}
export default StudentRegister;
/************************************* */
// import React, { useState } from 'react';
// import '../styles/studentregister.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentRegister = () => {
//     const [student, setStudent] = useState({
//         name: "",
//         email: "",
//         password: "",
//         phone: "",
//         gender: "",
//         dob: "",
//         department: "",
//         year: "",
//         address: "",
//         cgpa:"",
//         resume: null, // Add a state for the resume file
//     });

//     const handleChange = (e) => {
//         const field = e.target.name;
//         const value = e.target.value;
//         setStudent({ ...student, [field]: value });
//     }

//     const handleResumeChange = (e) => {
//         const file = e.target.files[0];
//         setStudent({ ...student, resume: file }); // Store the selected file in the state
//     }

//     const navigate = useNavigate();

//     const postdata = async (e) => {
//         e.preventDefault();

//         try {
//             const formData = new FormData(); // Create a FormData object to send files

//             for (const key in student) {
//                 formData.append(key, student[key]);
//             }

//             const response = await axios.post('http://localhost:5000/student/register', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data', // Set content type for file upload
//                 },
//             });

//             if (response.status === 400) {
//                 window.alert("Invalid Registration");
//             } else {
//                 window.alert("Registration Successful");
//                 navigate('/student/login');
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             window.alert("An error occurred during registration.");
//         }
//     }

//     return (
//         <div className='student-container'>
//             <div className="signin-holder">
//                 <div className="signin-container">
//                     <h1 className="title">Student Signup</h1>
//                     <hr />
//                     <form className="signin-form" autoComplete='on'>
//                         <div className="name profile-input ">
//                             <input className="studentsign-input" type="text" name="name" onChange={handleChange} value={student.name} placeholder='Name' required/>
//                         </div>
//                         <div className="email profile-input ">
//                             <input className="studentsign-input" type="email" name="email" onChange={handleChange} value={student.email} placeholder='Email' required />
//                         </div>
//                         <div className="phone profile-input ">
//                             <input className="studentsign-input" type="phone" name="phone" onChange={handleChange} value={student.phone} placeholder='Mobile Number' required />
//                         </div>
//                         <div className="password profile-input ">
//                             <input className="studentsign-input" type="password" name="password" onChange={handleChange} value={student.password} id="password" placeholder="Password" required />
//                         </div>
//                         <div className="gender profile-input ">
//                             <input className="studentsign-input" type="text" name="gender" onChange={handleChange} value={student.gender} placeholder='Gender' required/>
//                         </div>
//                         <div className="dob profile-input ">
//                             <input className="studentsign-input" type="text" name="dob" onChange={handleChange} value={student.dob} placeholder='Date of birth' required/>
//                         </div>
//                         <div className="department profile-input ">
//                             <input className="studentsign-input" type="text" name="department" onChange={handleChange} value={student.department} placeholder='Department' required />
//                         </div>

//                         <div className="year profile-input ">
//                             <input className="studentsign-input" type="text" name="year" onChange={handleChange} value={student.year} placeholder='Year' required />
//                         </div>
//                         <div className="cgpa profile-input ">
//                             <input className="studentsign-input" type="text" name="cgpa" onChange={handleChange} value={student.cgpa} placeholder='Current Cgpa' required />
//                         </div>
//                         <div className="address profile-input ">
//                             {/* <input className="studentsign-input" type="text" name="year" onChange={handleChange} value={student.year} placeholder='Year' /> */}
//                             <textarea name="address" id="address" rows="3" placeholder='Address' value={student
//                             .address} onChange={handleChange} required></textarea>
//                         </div>
//                         {/* <div className="password profile-input ">
//                             <input className="studentsign-input" type="password" name="confirm-password" id="confirm-password"
//                                 placeholder="Confirm Password" />
//                         </div> */}
//                         <div className="resume profile-input">
//                             <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
//                         </div>
//                         <input type="submit" value="signin" id="signinBtn" onClick={postdata} />
//                         <div className="login-link">
//                             <small>already registered?</small><Link to="/student/login">Login</Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default StudentRegister;
