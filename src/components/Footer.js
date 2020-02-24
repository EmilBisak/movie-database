import React, { Component } from 'react';
import { withAppContext } from '../store/AppContext';


class Footer extends Component {
    render() {
        return (
            <footer className={this.props.global.shouldFooterBePositionedAbsolute? "absolute-positioned-footer" : ""}>
                <small>Copyright &copy; Emil 2018</small>
            </footer>
        )
    }
}

export default withAppContext(Footer);;