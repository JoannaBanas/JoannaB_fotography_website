import React from 'react';
import Portfolio from './SectionPortfolio.jsx';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


class Travel extends React.Component{

    render(){


        const urls = [

            {
                "id" : 50,
                "name": "../../images/italia2.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 51,
                "name": "../../images/italia3.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 52,
                "name": "../../images/italy.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 53,
                "name": "../../images/krk.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 54,
                "name": "../../images/krokus.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 55,
                "name": "../../images/praga.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 56,
                "name": "../../images/praga2.jpg",
                "orient": "pion",
                "category" : "travel"
            },
            {
                "id" : 57,
                "name": "../../images/praga3.jpg",
                "orient": "pion",
                "category" : "travel"
            },
            {
                "id" : 58,
                "name": "../../images/afryka.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 59,
                "name": "../../images/afryka2.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 60,
                "name": "../../images/budapeszt.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 61,
                "name": "../../images/budapeszt2.jpg",
                "orient": "pion",
                "category" : "travel"
            },
            {
                "id" : 62,
                "name": "../../images/croatia.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 63,
                "name": "../../images/croatia2.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 64,
                "name": "../../images/croatia4.jpg",
                "orient": "poziom",
                "category" : "travel"
            },
            {
                "id" : 65,
                "name": "../../images/croatia5.jpg",
                "orient": "poziom",
                "category" : "travel"
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

module.exports = Travel;

