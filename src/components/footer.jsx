import React from 'react';

class Nav extends React.Component{
    render(){
        return (
            <section className="footer">
                <footer className="container">
                    <div className="row contactDetails">
                        <p>Kraków</p>
                        <p className="beforeAfter">joannak.banas@gmail.com</p>
                        <p> +48 604 144 337</p>
                    </div>
                    <div className="row socialMedia">
                        <a href='https://www.facebook.com/joanna.banas.14' target="_blank" style ={{ backgroundImage: "url('../../images/fb.png')" }}/>
                        <a href='https://www.instagram.com/joannabanas/' target="_blank" style ={{ backgroundImage: "url('../../images/instagram_PNG10.png')" }}/>
                        <a href='https://www.linkedin.com/in/joanna-bana%C5%9B-336b9a101/' target="_blank" style ={{ backgroundImage: "url('../../images/linkedin_circle_color-512.png')" }}/>
                        <a href='https://pl.pinterest.com/' target="_blank" style ={{ backgroundImage: "url('../../images/Pinterest_Favicon.png')" }}/>
                    </div>
                    <div className="row created"> @2017 by Joanna Banaś.</div>
                </footer>
            </section>
        )
    }
}

module.exports = Nav;