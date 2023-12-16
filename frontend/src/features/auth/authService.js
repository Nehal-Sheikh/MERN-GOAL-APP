import axios from "axios";

const API_URL = 'http://localhost:8080/api/users/'

//Register User
const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){                                                          //when using axios when it gets response it is kept in object called data
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Logit User
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register
}

export default authService