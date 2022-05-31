import DashBoardFooter from "../Footer";
import DashBoardNavbar from "../Navbar";
import DashBoardSidebar from "../Sidebar";
import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom";


export default function IndexLayout() {

  const [toggleSidebar, setToggleSidebar] = useState(true)

  return (
    <div className="container-fluid " style={{ backgroundColor: "#F6F9FF" }}>
      <div className="layoutContainer">
        <div className="desktop mt-2">
          {toggleSidebar && <DashBoardSidebar />}
        </div>
        <div className="flex-item-right mt-2">
          <DashBoardNavbar
            setToggleSidebar={setToggleSidebar}
            toggleSidebar={toggleSidebar}
          />
          <div className="overflow-auto" style={{ height: "90vh", backgroundColor: "white" }}>
            <nav className="py-1" style={{ backgroundColor: "#F6F9FF" }}>
              <span>Dashboard</span>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dashboard" href="#">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
            <div className="p-2">
              <Outlet />
            </div>
          </div>

          <div className="fixed-bottom">
            <DashBoardFooter />
          </div>
        </div>
      </div>
    </div>
  )
}


