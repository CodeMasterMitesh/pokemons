import Language from '../Language'
import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Language />
      <Outlet/>
    </div>
  )
}

export default MainLayout
