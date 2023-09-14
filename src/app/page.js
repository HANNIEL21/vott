"use client"
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

export default function Home() {
  const [staffID, setStaffID] = useState("");

  const handleJoin = () => {

  }

  return (
    <div className='min-vh-100 d-flex align-items-center justify-content-center'>
      <div className='shadow-sm d-flex flex-column align-items-center justify-content-center p-2 rounded-3' style={{ height: "400px", width: "300px" }}>
        <input type="text" className='form-control' placeholder='Enter Staff ID' value={staffID} onChange={(e) => setStaffID(e.target.value)} />
        <button className='btn btn-primary mt-3' onClick={handleJoin}>Join</button>
      </div>
    </div>
  )
}