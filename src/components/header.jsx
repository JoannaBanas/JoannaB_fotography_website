import React from 'react';

import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


class Nav extends React.Component{
    render(){
        return (
                <nav className= "container row navigation">
                    <ul className = "list">
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/about">O mnie..</Link></li>
                        <li><Link to="/stories">Historie</Link></li>
                        <li><Link to="/">Oferta</Link></li>
                        <li><Link to="/">Kontakt</Link></li>
                    </ul>
                    {this.props.children}
                </nav>

        )
    }
}

module.exports = Nav;

