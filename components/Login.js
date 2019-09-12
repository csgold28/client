import React, {Component} from 'react'
import {login} from './UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
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
            email: this.state.email,
            password: this.state.password
        }

        login(newUser).then(res => {
            this.props.history.push(`/profile`)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Masuk Member Area</h1>
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
                                Masuk
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
