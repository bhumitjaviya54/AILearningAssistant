import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'

const ProtectedRoute = () => {
    const isAuthenticated = true // Replace with actual authentication logic
    const loading = false

    if (loading) {
        return <div>Loading...</div>
    }

    return isAuthenticated ? (
        <div>
            <AppLayout>
                <Outlet />
            </AppLayout>
        </div>
    ) : (
        <Navigate to="/login" replace />
    )
}

export default ProtectedRoute
