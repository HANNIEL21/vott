"use client"
import 'bootstrap/dist/css/bootstrap.css';


export default function Root() {
    return(
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row gap-4">
                    <div className="col p-4 bg-primary"></div>
                    <div className="col p-4 bg-primary"></div>
                    <div className="col p-4 bg-primary"></div>
                    <div className="col p-4 bg-primary"></div>
                </div>
            </div>
        </div>
    )
}