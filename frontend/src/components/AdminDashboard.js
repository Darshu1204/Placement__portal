import React from 'react'
import { Link } from 'react-router-dom'
import Adminnav from './Adminnav'
const AdminDashboard = () => {
  return (
    <div className='adminDashboard' style={{position:'relative',minHeight:'100vh'}}>
      <Adminnav heading="Welcome Admin" />
      <div>
        <main>
          <section className="dashboard">
            <h2>Admin Dashboard</h2>
            <p>Here you can access various functionalities:</p>
            <ul>
              <li><Link to="viewapplican">View available job opportunities</Link></li>
              <li><Link to="applicationstatus">See the status of your applications</Link></li>
              <li><Link to="updateresume">Update your resume for better chances</Link></li>
            </ul>
          </section>
        </main>
      </div>
      <footer style={{width:'100vw',padding:'15px',position:'absolute',bottom:'0px',color:'white',backgroundColor:'black',textAlign:"center"}}>
        <p>&copy; 2023 Placement Management System</p>
      </footer>
    </div>
  )
}

export default AdminDashboard
