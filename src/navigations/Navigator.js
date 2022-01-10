import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Result from '../screens/Result';

const stackNavigatorOption = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail},
    Result:{screen:Result}
},
    {defaultNavigationOptions:stackNavigatorOption}
);
export default createAppContainer(AppNavigator);