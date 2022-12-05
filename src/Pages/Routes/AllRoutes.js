import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Capsules } from '../Capsules/Capsules'
import { Landpage } from '../Landpage.js/Landpage'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landpage/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/capsule" element={<Capsules/>}></Route>
    </Routes>
  )
}
