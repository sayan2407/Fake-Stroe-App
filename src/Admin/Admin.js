import React from 'react'
import adminMenu from '../AdminInfo/menu'
import { Link,Outlet, Navigate } from 'react-router-dom'

const Admin = () => {
    console.log('adminMenu ', adminMenu);
  return (
    <div className="row">
    <div className="col-2">
      <div className="list-group admin-menu-list" id="list-tab" role="tablist">
        {
            adminMenu.map((item, index)=> {
                return    <Link key={index} className="list-group-item list-group-item-action" id={`list-${item.id}-list`}  to={item.url}>{item.title}</Link>
            })
        }
       
      </div>
    </div>
    <div className="col-10">
      <div className="tab-content" id="nav-tabContent">
        <Outlet/>
      </div>
    </div>
  </div>
  )
}
export default Admin;
