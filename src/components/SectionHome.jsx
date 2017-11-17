import React from 'react';

import Slider from './slider.jsx';
import Portfolio from './portfolio.jsx';
import About from './about.jsx';
import Background from './background.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';




class Home extends React.Component{
    render(){
        return (
            <section>
                <Slider/>
                <Portfolio/>
                <Background/>
                <About/>
                <Contact/>
                <Footer/>
            </section>
        )
    }
}

module.exports = Home;