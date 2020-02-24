import React, { Component } from 'react';
import AppContext from './AppContext';
import md5 from "md5";

class AppState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldFooterBePositionedAbsolute: false,
            // isLoggedIn: false,
        }
    }

    handleFooterPositioning = (shouldFooterBePositionedAbsolute) => {
        this.setState({ shouldFooterBePositionedAbsolute })
    }

    login = (password) => {
        if ((md5(password) === "0e6db2e7ba7f8699a48028462a26a6f3") || (md5(password) === "319548ab86ededd8a60373579f99eba9")) {
            window.localStorage.setItem("isLoggedIn", "true")
            this.setState({ isLoggedIn: true })
            alert("Uspesno ste se ulogovali");
        } else {
            alert("Uneli ste pogresnu lozinku");
        }
    }

    logout = () => {
        window.localStorage.setItem("isLoggedIn", "")
        this.setState({ isLoggedIn: false })
        alert("Izlogovali ste se");
    }

    render() {
        const { handleFooterPositioning, login, logout } = this
        const { shouldFooterBePositionedAbsolute, isLoggedIn } = this.state
        return (
            <AppContext.Provider value={{ shouldFooterBePositionedAbsolute, handleFooterPositioning, isLoggedIn, login, logout }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppState;