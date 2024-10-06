import Footer from '../Footer'
import Header from '../Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function SubLayout() {
    return (
        <div className='ar_mainBody'>
            <Header />
            <div className='sub-layout-child'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default SubLayout
