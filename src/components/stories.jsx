import React from 'react';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


class Story extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            time: this.props.time,
            content: ''
        }
    }


    handleClick = () => {

        let html = '';

        this.setState({
            points: points,
            time: this.props.time - (50 * points),
        });
    }

    render(){
        return(
            <section>
                <div className=" storyList">
                    <h1>BLOG</h1>
                    <p  className="container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis dicta et ratione? Accusantium corporis cupiditate illo iusto neque voluptatum. Dicta illo nisi quae quam, quibusdam sed tenetur voluptas. Quod.</p>
                </div>
             <div className='general'>
                <div className="container stories col-12">
                    <div  style ={{ backgroundImage: "url('../../images/DSC_0942.jpg')"}} className="mainPicture"> </div>
                    <article>
                      <div className="description">
                        <h2>Oliwia i Graham</h2>
                        <p>27.08.2017</p>
                        <p>  | Kraków</p>
                        <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, ad at dolore dolorem doloremque doloribus dolorum esse nam, officiis possimus quaerat, quasi sunt! Exercitationem minima omnis qui reiciendis rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias assumenda blanditiis consequuntur corporis dicta doloribus, inventore magnam nobis nulla omnis quos repellendus sapiente sed sint suscipit. Blanditiis, in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto beatae blanditiis deserunt dolorem doloribus est labore laudantium mollitia nihil nobis nostrum odit perspiciatis quaerat, quod ratione unde velit. </div>
                          <div>zobacz całą historię</div>
                      </div>
                        <div className="category">
                            <h3>kategoria</h3>
                            <p>reportaż ślubny</p>
                            <br/>
                            <h3>TAGI</h3>
                            <span>
                                <ul>
                                    <li><a href="">tag 1</a></li>
                                    <li><a href="">tag 2</a></li>
                                    <li><a href="">tag 3</a></li>
                                    <li><a href="">tag 4</a></li>
                                    <li><a href="">tag 5</a></li>
                                    <li><a href="">tag 5</a></li>
                                </ul>
                            </span>
                        </div>
                    </article>

                </div>

                </div>
                <div className='general'>
                <div className="container stories col-12">
                    <div  style ={{ backgroundImage: "url('../../images/DSC_0955.jpg')"}} className="mainPicture"> </div>
                    <article>
                        <div className="description">
                            <h2>Ala i Kamil</h2>
                            <p>19.05.2017</p>
                            <p>  | Kraków</p>
                            <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, ad at dolore dolorem doloremque doloribus dolorum esse nam, officiis possimus quaerat, quasi sunt! Exercitationem minima omnis qui reiciendis rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias assumenda blanditiis consequuntur corporis dicta doloribus, inventore magnam nobis nulla omnis quos repellendus sapiente sed sint suscipit. Blanditiis, in.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto beatae blanditiis deserunt dolorem doloribus est labore laudantium mollitia nihil nobis nostrum odit perspiciatis quaerat, quod ratione unde velit. </div>
                            <a href="">zobacz całą historię</a>
                        </div>
                        <div className="category">
                            <h3>kategoria</h3>
                            <p>reportaż ślubny</p>
                            <br/>
                            <h3>TAGI</h3>
                            <span>
                                <ul>
                                    <li><a href="">tag 1</a></li>
                                    <li><a href="">tag 2</a></li>
                                    <li><a href="">tag 3</a></li>
                                    <li><a href="">tag 4</a></li>
                                    <li><a href="">tag 5</a></li>
                                    <li><a href="">tag 5</a></li>
                                </ul>
                            </span>
                        </div>

                    </article>
                </div>
                </div>
                <span><Link to="/home"><p className="linkName">  HOME </p></Link></span>

            </section>
        )
    }
}

module.exports = Story;