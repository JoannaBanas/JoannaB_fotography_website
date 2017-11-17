import React from 'react';
import Portfolio from './SectionPortfolio.jsx';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


class Portrait extends React.Component{

    render(){


        const urls = [
            {name: '../../images/portret4.jpg',
                orient: 'pion'},
            {name: '../../images/portret7.jpg',
                orient:'pion'},
            {name: '../../images//portret.jpg',
                orient: 'pion'},
            {name: '../../images/portret6.jpg',
                orient: 'pion'},
            {name: '../../images/portret2.jpg',
                orient:'poziom'},
            {name: '../../images/portret3.jpg',
                orient:'poziom'},
            {name: '../../images//portret5.jpg',
                orient: 'poziom'},
            {name: '../../images//portret8.jpg',
                orient: 'poziom'},
            {name: '../../images//DSC_0037.jpg',
                orient: 'pion'},
            {name: '../../images//DSC_0121.jpg',
                orient: 'poziom'},
            {name: '../../images//DSC_0217.jpg',
                orient: 'pion'},
            {name: '../../images//DSC_0281-2.jpg',
                orient: 'pion'},

        ];

        return(
            <section className = "pic">
                <span><Link to="/home"><p className="linkName">  HOME </p></Link></span>

                <div className="picture">
                    {urls.map(function(element) {
                        return <div className= {element.orient} style = {{ backgroundImage: "url('"+ element.name +"')"}}> </div>
                    })
                    }
                </div>
            </section>
        )
    }
}

module.exports = Portrait;

