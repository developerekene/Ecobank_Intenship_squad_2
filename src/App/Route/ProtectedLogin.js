import { Navigate, Outlet } from "react-router-dom"

function ProtectedLogin() {
  const token = localStorage.getItem("token")
  return (
    !token ? <Outlet /> : <Navigate to="/"/>
  )
}

export default ProtectedLogin
