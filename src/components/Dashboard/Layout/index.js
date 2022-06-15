import DashBoardFooter from "../Footer";
import DashBoardNavbar from "../Navbar";
import DashBoardSidebar from "../Sidebar";
import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom";
import dashboardRoutes from "../../../_nav";


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
            <nav style={{ backgroundColor: "#F6F9FF" }}>
              <ol className="breadcrumb py-1">
                <li className="breadcrumb-item">
                
                  <Link to={"/dashboard"} href="#">Home</Link>
                </li>
                <li  aria-current="page">{window.location.pathname}</li>
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


