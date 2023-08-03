import api from "../utils/api";
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

const useAuth = () => {
    const[authenticated, setAuthenticated] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])

    async function login(user){
        try {
            const data = await api.post('/users/login', user).then((response)=>{
                return response.data
            })

            await authUser(data)
            history.push('/')
        } catch (error) {
            console.log(error.response)
        }
    }

    async function register(user){

        try {
            const data = await api.post('/users/register', user).then((response)=>{
                return response.data
            })

            await authUser(data)

        } catch (error) {
            console.log(error)
        }
    }

    async function authUser(data){
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))

    }

    function logout(){
        setAuthenticated(false)
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = undefined
        window.location.reload()
    }

    return {authenticated, register, logout,login}
}
 
export default useAuth