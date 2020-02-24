import React from 'react';

const AppContext = React.createContext({
    shouldFooterBePositionedAbsolute: false,
    setFooterToBottom: (boolean) => {},
    isLoggedIn: false,
    login: (password) => {},
    logout: () => {},
})

//create the consumer as higher order component
export const withAppContext = ChildComponent => props => (
    <AppContext.Consumer>
        {context => <ChildComponent {...props} global={context} />}
    </AppContext.Consumer>
)

export default AppContext;