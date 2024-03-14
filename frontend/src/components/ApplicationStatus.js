import React from 'react';
import '../styles/ApplicationStatus.css';
import Studentnav from './Studentnav';
const ApplicationStatus = () => {
  return (
    <>
    <div>
        <Studentnav heading={"Application Status"} />
    <main>
        <section className="status-list">
            <h2>Your Application Status</h2>
            <table>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Software Developer</td>
                        <td>XYZ Corporation</td>
                        <td>Under Review</td>
                    </tr>
                    <tr>
                        <td>Marketing Intern</td>
                        <td>ABC Company</td>
                        <td>Accepted</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Placement Management System</p>
    </footer>
    </div>
  </>
  )
}

export default ApplicationStatus

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <metLink charset="UTF-8">
//     <metLink name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" to="applicationstatus.css">
//     <title>Application Status</title>
// </head>
// <body>
//     <header>
//         <h1>Application Status</h1>
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
//         <section className="status-list">
//             <h2>Your Application Status</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Job Title</th>
//                         <th>Company</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Software Developer</td>
//                         <td>XYZ Corporation</td>
//                         <td>Under Review</td>
//                     </tr>
//                     <tr>
//                         <td>Marketing Intern</td>
//                         <td>ABC Company</td>
//                         <td>Accepted</td>
//                     </tr>
//                     <!-- Add more application statuses here -->
//                 </tbody>
//             </table>
//         </section>
//     </main>
//     <footer>
//         <p>&copy; 2023 Placement Management System</p>
//     </footer>
// </body>
// </html>

