import React, {Component} from 'react'
import {register} from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            email: '',
            password: '',
            errors: {}

        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Mendaftar Member Baru</h1>
                            <div className="form-group">
                                <label htmlFor="name">Nama</label>
                                <input type="text"
                                className="from-control"
                                name="name"
                                placeholder="Isi Nama Anda"
                                value={this.state.name} 
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">No. Hanphone</label>
                                <input type="number"
                                className="from-control"
                                name="phone"
                                placeholder="isi No. Handphone"
                                value={this.state.phone} 
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail</label>
                                <input type="email"
                                className="from-control"
                                name="email"
                                placeholder="isi E-mail"
                                value={this.state.email} 
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                className="from-control"
                                name="password"
                                placeholder="isi Password"
                                value={this.state.password} 
                                onChange={this.onChange}/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block">
                                Daftar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
