import { useNavigate } from "react-router-dom"
import { irParaHome } from "../Routes/coordinator"
import { useEffect } from "react"
export const useProtectPage = () =>{
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    
    useEffect(()=> {
      if(!token){
        irParaHome(navigate)
      }
    },[navigate])
    
}