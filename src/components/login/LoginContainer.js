import React, { Component } from 'react'

export default class LoginContainer extends Component {
    state = {
        user: {
            username: '',
            password: ''
        },
        errorChecker: false
    }

    handleInput = (e) => {
        const  { user } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;
        this.setState({ user });
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.user.username === 'user@grupoabraxas.com' && this.state.user.password === '123macarena'){
            this.props.history.push('/map')
        } else {
            this.setState(prevState => {
                return{
                    ...prevState,
                    errorChecker: true
                }
            })
            console.log(this.state.errorChecker)
        }
    }

    render() {
        return (
            <div className="general-background">
                <div className="form-wrapper">
                    <h2>Abraxas Intelligence</h2>
                    <h2>Iniciar sesión</h2>
                    <form onSubmit={this.onSubmit} className="login-form" >
                        <input className={this.state.errorChecker ? "login-input-error" : "login-input"} type="text" name="username" onChange={this.handleInput} placeholder="Nombre de usuario" />
                        <input className={this.state.errorChecker ? "login-input-error" : "login-input"} type="password" name="password" onChange={this.handleInput} placeholder="Contraseña" />
                        {this.state.errorChecker && <p className="error-message">Datos de acceso incorrecto</p>}
                        <input className="login-button" type="submit" value="iniciar sesión"/>
                    </form>
                </div>
            </div>
        )
    }
}
