"use client"
import Dashboard from '@/components/dashboard/dashboard'
import Login from '@/components/login/login'
import { AuthenticationContext } from '@/context/authenticateWork'
import React, { useContext } from 'react'

export default function PageDashboard() {
  const {user}:any = useContext(AuthenticationContext)
 
  return (
    <>{user ? <Dashboard /> : <Login/>}</>
  )
}
