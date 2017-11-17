import React from 'react';

class About extends React.Component{
    render(){
        return (
            <section className=" about">
                <div className="container row">
                <p className="aboutMe">O MNIE...</p>
                <div className='aboutContent'>
                    <div style ={{ backgroundImage: "url('../../images/me2.jpg')" }} className='myPict  col-12'/>
                    <div>
                        <p className=" col-11"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci cupiditate, deserunt distinctio eius labore molestiae nisi nobis nulla, odio omnis perferendis perspiciatis quasi recusandae rem repudiandae sapiente temporibus veniam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam architecto consequuntur dicta doloribus exercitationem harum id illo iste iusto laborum modi natus nemo optio pariatur placeat possimus, repellat saepe.</p>
                    </div>
                </div>
                </div>
            </section>


        )
    }
}

module.exports = About;