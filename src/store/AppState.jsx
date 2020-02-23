import React, { Component } from 'react';
import AppContext from './AppContext';

class AppState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldFooterBePositionedAbsolute: false,
        }
    }

    setFooterToBottom = (shouldFooterBePositionedAbsolute) => {
        this.setState({shouldFooterBePositionedAbsolute})

    }

    render() {
        const { setFooterToBottom } = this
        const { shouldFooterBePositionedAbsolute } = this.state
        return (
            <AppContext.Provider value={{ shouldFooterBePositionedAbsolute, setFooterToBottom }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppState;