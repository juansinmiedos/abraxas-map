import React, { Component } from 'react'

export default class LoginContainer extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    }

    handleInput = (e) => {
        const  { user } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;
        this.setState({ user });
        console.log(this.state.user)
    }

    onSubmit = () => {
        if(this.state.user.username === 'user@grupoabraxas.com' && this.state.user.password === '123macarena'){
            this.props.history.push('/map')
        } else {
            // Mostrar el mensaje de error
        }
    }

    render() {
        return (
            <>
                <h1>Abraxas Intelligence</h1>
                <p>Iniciar sesión</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="username" onChange={this.handleInput} placeholder="Nombre de usuario" />
                    <input type="password" name="password" onChange={this.handleInput} placeholder="Contraseña" />
                    <input type="submit" value="iniciar sesión"/>
                </form>
                
            </>
        )
    }
}
