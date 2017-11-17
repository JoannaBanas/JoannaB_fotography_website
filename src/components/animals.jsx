import React from 'react';
import Portfolio from './SectionPortfolio.jsx';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


class Animals extends React.Component{



    render(){


        const urls = [
            {
                "id" : 27,
                "name": "../../images/DSC_0251-2.jpg",
                "orient": "poziom",
                "category" : "animals"
            },
            {
                "id" : 28,
                "name": "../../images/DSC_0350.jpg",
                "orient": "poziom",
                "category" : "animals"
            },
            {
                "id" : 29,
                "name": "../../images/DSC_0656.jpg",
                "orient": "poziom",
                "category" : "animals"
            },
            {
                "id" : 30,
                "name": "../../images/kon.jpg",
                "orient": "poziom",
                "category" : "animals"
            },{
                "id" : 31,
                "name": "../../images/kot.jpg",
                "orient": "poziom",
                "category" : "animals"
            },
            {
                "id" : 32,
                "name": "../../images/kot2.jpg",
                "orient": "pion",
                "category" : "animals"
            },{
                "id" : 33,
                "name": "../../images/kot3.jpg",
                "orient": "poziom",
                "category" : "animals"
            },
            {
                "id" : 34,
                "name": "../../images/kot4.jpg",
                "orient": "poziom",
                "category" : "animals"
            },{
                "id" : 35,
                "name": "../../images/kot5.jpg",
                "orient": "poziom",
                "category" : "animals"
            },{
                "id" : 36,
                "name": "../../images/krowa.jpg",
                "orient": "pion",
                "category" : "animals"
            },
            {
                "id" : 37,
                "name": "../../images/krowa2.jpg",
                "orient": "pion",
                "category" : "animals"
            },
            {
                "id" : 38,
                "name": "../../images/krowa3.jpg",
                "orient": "poziom",
                "category" : "animals"
            },{
                "id" : 39,
                "name": "../../images/osiol.jpg",
                "orient": "poziom",
                "category" : "animals"
            },
            {
                "id" : 40,
                "name": "../../images/owca.jpg",
                "orient": "poziom",
                "category" : "animals"
            },{
                "id" : 41,
                "name": "../../images/pies.jpg",
                "orient": "poziom",
                "category" : "animals"
            },
            {
                "id" : 42,
                "name": "../../images/pies3.jpg",
                "orient": "pion",
                "category" : "animals"
            },
            {
                "id" : 43,
                "name": "../../images/pies4.jpg",
                "orient": "pion",
                "category" : "animals"
            },{
                "id" : 44,
                "name": "../../images/slon.jpg",
                "orient": "poziom",
                "category" : "animals"
            },
            {
                "id" : 45,
                "name": "../../images/szczur.jpg",
                "orient": "pion",
                "category" : "animals"
            },{
                "id" : 46,
                "name": "../../images/zygzak.jpg",
                "orient": "pion",
                "category" : "animals"
            },
            {
                "id" : 47,
                "name": "../../images/zygzak2.jpg",
                "orient": "poziom",
                "category" : "animals"
            },
            {
                "id" : 48,
                "name": "../../images/zyzgak3.jpg",
                "orient": "poziom",
                "category" : "animals"
            }

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

module.exports = Animals;

