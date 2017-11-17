import React from 'react';
import Portfolio from './SectionPortfolio.jsx';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


class Kids extends React.Component{

    render(){


        const urls = [
            {name: '../../images/lucek.jpg',
            orient: 'pion'},
            {name: '../../images/DSC_0235.jpg',
             orient:'pion'},
            {name: '../../images//DSC_0165-2.jpg',
             orient: 'pion'},
            {name: '../../images/DSC_0184.jpg',
            orient: 'poziom'},
            {name: '../../images//DSC_0194.jpg',
            orient:'pion'},
            {name: '../../images/DSC_0239-2.jpg',
             orient:'poziom'},
            {name: '../../images/DSC_0712.jpg',
             orient:'poziom'},
            {name: '../../images/DSC_0749.jpg',
             orient:'poziom'},
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

module.exports = Kids;

