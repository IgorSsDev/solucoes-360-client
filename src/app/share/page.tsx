"use client"
import Login from '@/components/login/login'
import Share from '@/components/share/share'
import { AuthenticationContext } from '@/context/authenticateWork'
import React, { useContext } from 'react'

export default function PageShare() {
  const {user}:any = useContext(AuthenticationContext)

  return (
    <>{user ? <Share /> : <Login/>}</>
    
  )
}
