import React from 'react';

import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

class Welcome extends React.Component{
    render(){
        return (
            <section>
                 <div>
                    <img className="MainPicture" src="../../images/DSC_0251-2.jpg"/>
                 </div>
                 <div className="title">
                    <h1>Joanna Banaś</h1>
                    <h2>Fotografia</h2>
                     <div><Link to="/home">Find out more...</Link></div>
                </div>

            </section>
        )
    }
}

module.exports = Welcome;