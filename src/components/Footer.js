import React, { Component } from 'react';
import { withAppContext } from '../store/AppContext';


class Footer extends Component {
    render() {
        console.log('this.props.global.isLoaded', this.props.global.isLoaded)
        return (
            <footer className={this.props.global.shouldFooterBePositionedAbsolute? "absolute-positioned-footer" : ""}>
                <small>Copyright &copy; Emil 2018</small>
            </footer>
        )
    }
}

export default withAppContext(Footer);;