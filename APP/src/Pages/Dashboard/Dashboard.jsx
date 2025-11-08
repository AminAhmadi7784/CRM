import React from 'react'
import DashboardHeader from '../../Components/DashboardHeder/DashboardHeader'
import Workload from '../../Components/Workload/Workload'
import NearestEvent from '../../Components/NearestEvent/NearestEvent'
import ViewAllBtn from '../../Components/ViewAllBtn/ViewAllBtn'

import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <DashboardHeader />

      <div className='dashboard__main d-flex justify-content-between'>
        <Workload />

        <NearestEvent />
      </div>

      {/* <div className='dashboard__bottom'>
        <div className='dashboard__bottom--project col-8'>
          <h4><span>پروژه ها</span></h4>
          <ViewAllBtn/>
        </div>
        <div className='dashboard__bottom--stream col-3-5'></div>
      </div> */}
    </div>
  )
}
