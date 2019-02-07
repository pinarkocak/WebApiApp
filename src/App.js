import React, {Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';

import MainPage from './MainPage';
import People from './People';
import Films from './Films';
import Planets from './Planets';
import Vehicles from './Vehicles';
import Starships from './Starships';

class App extends Component {
    render () {
        return (
         <Router>
             <Scene key="root">

                 <Scene 
                  key="main"
                  component={MainPage}
                  initial
                 />

                 <Scene 
                  key="films"
                  component={Films}
                 />

                   <Scene 
                  key="people"
                  component={People}
                 />

                    <Scene 
                  key="planets"
                  component={Planets}
                 />

                 
                    <Scene 
                  key="vehicles"
                  component={Vehicles}
                 />

                     <Scene 
                  key="starships"
                  component={Starships}
                 />

             </Scene>
         </Router>
        );
    }
};

export default App;