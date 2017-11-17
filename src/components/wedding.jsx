import React from 'react';
import Portfolio from './SectionPortfolio.jsx';

import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


class Wedding extends React.Component{

    render(){


        const urls = [

            {name: '../../images/DSC_0258.jpg',
                orient: 'poziom'},
            {name: '../../images/DSC_0948.jpg',
                orient: 'pion'},
            {name: '../../images/DSC_0199.jpg',
                orient:'poziom'},
            {name: '../../images/DSC_0702.jpg',
                orient:'poziom'},
            {name: '../../images//DSC_0750.jpg',
                orient: 'poziom'},
            {name: '../../images//DSC_0941.jpg',
                orient: 'poziom'},
            {name: '../../images//DSC_0955.jpg',
                orient: 'poziom'},
            {name: '../../images//DSC_0004.jpg',
                orient: 'poziom'},


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

module.exports = Wedding;

