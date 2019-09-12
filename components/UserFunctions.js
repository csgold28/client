import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        name: newUser.name,
        phone: newUser.phone,
        email: newUser.email,
        password: newUser.password
    })
    .then(response => {
        console.log('Pendaftaran member baru berhasil!')
    })
}

export const login = user => {
    return axios 
    .post('users/login', {
        email: user.email,
        password: user.password        
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data.token)
        return res.data
    })
    .catch(err => {
        console.log('Invalid E-mail atau password ' + err)
    })
}

export const getUser = id => {
    return axios
    .get(`users/getuser/${id}`)
    .then(response => {
        return response
    })
    .catch(err => {
        return err
    })
}