import React from 'react';
import ReactDOM from 'react-dom';
let sass = require ('../sass/style.scss');
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


import Welcome from './SectionWelcome.jsx';
import Home from './SectionHome.jsx';
import Portrait from './portraits.jsx';
import Wedding from './wedding.jsx';
import Kids from './kids.jsx';
import Travel from './travel.jsx';
import Animals from './animals.jsx';
import Story from './stories.jsx';





document.addEventListener('DOMContentLoaded', function(){




    class App extends React.Component{

        // constructor(props) {
        //     super(props);
        //     this.state={
        //         name:"",
        //         orient:"",
        //         category: "",
        //     }
        // }


        // loadData(){
        //     // let url = 'http://localhost:3000/pictures';
        //     // if(){
        //     //     url +=`?q=&category`;
        //     // }else if(){
        //     //     url +=`?q=orient`;
        //     // else {
        //     //     url = 'http://localhost:3000/pictures'
        //     // }
        //     fetch('http://localhost:3000/pictures')
        //         .then(resp => resp.json())
        //
        //         .then(pictures => this.setState({pictures}))
        //         .catch(e => console.log(e));
        // }
        //
        // componentDidMount() {
        //     this.loadData();
        // }

        render(){
            return(
                <Router history={hashHistory}>
                    <Route path='/' component={Welcome}> </Route>
                    <Route exact path='/home' component={Home}/>
                    <Route path='/animals' component={Animals}/>
                    <Route path='/travel' component={Travel}/>
                    <Route path='/wedding' component={Wedding}/>
                    <Route path='/kids' component={Kids}/>
                    <Route path='/portret' component={Portrait}/>
                    <Route path='/stories' component={Story}/>
                </Router>
            )
        }
    }


    ReactDOM.render(

        <div><App/></div>,
        document.getElementById('app')
    );


});

