import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Result from '../screens/Result';
import Map from '../screens/Map';

const stackNavigatorOption = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Map:{screen:Map},
    Home:{screen:Home},
    Result:{screen:Result}
},
    {defaultNavigationOptions:stackNavigatorOption}
);
export default createAppContainer(AppNavigator);