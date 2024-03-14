// import React from 'react'
// import '../styles/updateresume.css'
// import Studentnav from './Studentnav'
// const Updateresume = () => {
//   return (
//     <div>
//       <Studentnav heading={"Update Resume"}/>
//           <main class="resume">
//               <section className="update-form">
//                   <h2>Update Your Resume</h2>
//                   <form>
//                       <label htmlFor="resume">Upload Resume:</label>
//                       <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx"/>
//                           <button type="submit">Update</button>
//                   </form>
//               </section>
//           </main>
//           <footer>
//               <p>&copy; 2023 Placement Management System</p>
//           </footer>

//     </div>
//   )
// }

// export default Updateresume

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <metLink charset="UTF-8">
// //     <metLink name="viewport" content="width=device-width, initial-scale=1.0">
// //     <link rel="stylesheet" to="updateresume.css">
// //     <title>Update Resume</title>
// // </head>
// // <body>
// //     <header>
// //         <h1>Update Resume</h1>
// //         <nav>
// //             <ul>
// //                 <li><Link to="#">Dashboard</Link></li>
// //                 <li><Link to="viewapplicant.html">View Applicants</Link></li>
// //                 <li><Link to="postjoboppourtunity.html">Post Job Opportunity</Link></li>
// //                 <li><Link to="home.html">Logout</Link></li>
// //             </ul>
// //         </nav>
// //     </header>
// //     <main>
// //         <section className="update-form">
// //             <h2>Update Your Resume</h2>
// //             <form>
// //                 <label htmlFor="resume">Upload Resume:</label>
// //                 <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">
// //                 <button type="submit">Update</button>
// //             </form>
// //         </section>
// //     </main>
// //     <footer>
// //         <p>&copy; 2023 Placement Management System</p>
// //     </footer>
// // </body>
// // </html>
import React from 'react'
import '../styles/updateresume.css'
import Studentnav from './Studentnav'
const Updateresume = () => {
  return (
    <div className='updateResume'>
      <Studentnav heading={"Update Resume"}/>
          <main class="resumeSection">
              <section className="update-form">
                  <h2>Update Your Resume</h2>
                  <form>
                      <div>
                        <label htmlFor="resume"><i class="fas fa-upload"></i>Upload Resume:</  label>
                        <input type="file" id="resume"  name="resume" accept=".pdf,.doc,.docx"/>
                      </div>
                      <button type="submit">Update</button>

                  <div className='buildCheck'>
                  <a href='https://resume.io/resume-builder?ga_utm_source=google&ga_utm_medium=ppc&ga_utm_campaign=18251012851&ga_utm_term=create%20resume%20online&gad_source=1&gclid=Cj0KCQiA5fetBhC9ARIsAP1UMgF6gichTHdXRAtwXajB8WMv4taJtC5-iPdLfkV2Hy14uQIdKIXBUqMaAg0bEALw_wcB' target='_blank'><i class="fas fa-file"></i>create Resume</a>

                  <a href='https://www.jobscan.co/resume-scanner?utm_term=check%20my%20resume%20ats%20score&utm_campaign=Non+Brand+-+ATS&utm_source=adwords&utm_medium=ppc&hsa_acc=6653739431&hsa_cam=13543830643&hsa_grp=124066336776&hsa_ad=676024188128&hsa_src=g&hsa_tgt=kwd-1457847095009&hsa_kw=check%20my%20resume%20ats%20score&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAiP2tBhBXEiwACslfngDZvI6O6bWsC9X_WNFAwLHNJf_K-qo5h415rEu5kB7GW34fI5a5rhoCQVEQAvD_BwE' target='_blank'><i class="fas fa-check"></i>ATS Score</a>
                  </div>
                  </form>
              </section>
          </main>
          <footer>
              <p>&copy; 2023 Placement Management System</p>
          </footer>

    </div>
  )
}

export default Updateresume

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <metLink charset="UTF-8">
//     <metLink name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" to="updateresume.css">
//     <title>Update Resume</title>
// </head>
// <body>
//     <header>
//         <h1>Update Resume</h1>
//         <nav>
//             <ul>
//                 <li><Link to="#">Dashboard</Link></li>
//                 <li><Link to="viewapplicant.html">View Applicants</Link></li>
//                 <li><Link to="postjoboppourtunity.html">Post Job Opportunity</Link></li>
//                 <li><Link to="home.html">Logout</Link></li>
//             </ul>
//         </nav>
//     </header>
//     <main>
//         <section className="update-form">
//             <h2>Update Your Resume</h2>
//             <form>
//                 <label htmlFor="resume">Upload Resume:</label>
//                 <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">
//                 <button type="submit">Update</button>
//             </form>
//         </section>
//     </main>
//     <footer>
//         <p>&copy; 2023 Placement Management System</p>
//     </footer>
// </body>
// </html>
