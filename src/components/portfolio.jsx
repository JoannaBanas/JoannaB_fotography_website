import React from 'react';

import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }


    render(){

        return (
            <section className="container row portf">
                <p>PORTFOLIO...</p>
                <div className="portfolio">
                    <div className="row">
                        <span className="hoov col-3"><Link to="/portret"><p className="linkName">  Portrety </p></Link></span>
                        <div style ={{ backgroundImage: "url('../../images/DSC_0688.jpg')" }} className='col-9 portfolioPict'> </div>

                    </div>

                    <div className="row ">
                        <span className="hoov col-3"><Link to="/animals"><p className="linkName"> Zwierzęta </p></Link></span>
                        <div style ={{ backgroundImage: "url('../../images/DSC_0350.jpg')" }} className='col-9 portfolioPict'> </div>
                    </div>

                    <div className="row">
                        <span className="hoov col-3"><Link to="/travel"><p className="linkName">  Podróże</p></Link></span>
                        <div style ={{ backgroundImage: "url('../../images/italy.jpg')" }} className='col-9 portfolioPict'> </div>
                    </div>

                    <div className="row">
                        <span className="hoov col-3"><Link to="/wedding"><p className="linkName"> Śluby i imprezy okolicznościowe</p></Link></span>
                        <div style ={{ backgroundImage: "url('../../images/DSC_0941.jpg')" }} className='col-9 portfolioPict'> </div>
                    </div>

                    <div className="row">
                        <span className="hoov col-3"><Link to="/kids"><p className="linkName"> Dzieci</p></Link></span>
                        <div style ={{ backgroundImage: "url('../../images/DSC_0239-2.jpg')" }} className='col-9 portfolioPict'> </div>
                    </div>

                    <div className="row">
                        <span className="hoov col-3"><Link to="/other"> <p className="linkName"> Inne</p></Link></span>
                        <div style ={{ backgroundImage: "url('../../images/DSC_0532-2.jpg')" }} className='col-9 portfolioPict'> </div>
                    </div>


                </div>
                {this.props.children}

            </section>

        )
    }
}

module.exports = Portfolio;