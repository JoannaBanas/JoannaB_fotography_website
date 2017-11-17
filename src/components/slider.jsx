import React from 'react';
import Nav from './header.jsx';

const urls = [
    '../../images/DSC_0258.jpg',
    '../../images/DSC_0251-2.jpg',
    '../../images/DSC_0191-2.jpg',
    '../../images/croatia5.jpg',
    '../../images/portret3.jpg',
    '../../images/DSC_0656.jpg',
    '../../images/DSC_0726.jpg',

];

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style:  { backgroundImage: "url('../../images/DSC_0726.jpg')" }
        };

        this.current = 0;
    }

    tick (slider){
        let name = urls[slider.current];
        let image = "url('"+ name +"')";

        slider.current++;

        if(slider.current >= urls.length){
            slider.current = 0;
        }


        slider.setState({
            style:  { backgroundImage: image}
        });
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.tick(this)
        },3000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

    return (
        <section className="classSlider">
            <div className="sliderContainer">
                <div className="slider" style ={this.state.style}>
                    <div className="name">
                        <Nav className = "nav"/>
                        <h1>Joanna Banaś</h1>
                        <h2>Fotografia</h2>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

module.exports = Slider;