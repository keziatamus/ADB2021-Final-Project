import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Map from '../screens/location/Map';
import BeitouMap from '../screens/location/BeitouMap';
import DaanMap from '../screens/location/DaanMap';
import DatongMap from '../screens/location/DatongMap';
import NeihuMap from '../screens/location/NeihuMap';
import ShihlinMap from '../screens/location/ShihlinMap';
import ShongshanMap from '../screens/location/ShongshanMap';
import WanhuaMap from '../screens/location/WanhuaMap';
import WenshanMap from '../screens/location/WenshanMap';
import XinyiMap from '../screens/location/XinyiMap';
import ZhongshanMap from '../screens/location/Zhongshan';
import ZhongzhengMap from '../screens/location/ZhongzhengMap';

const stackNavigatorOption = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Map:{screen:Map},
    BeitouMap:{screen:BeitouMap},
    DaanMap:{screen:DaanMap},
    DatongMap:{screen:DatongMap},
    NeihuMap:{screen:NeihuMap},
    ShihlinMap:{screen:ShihlinMap},
    ShongshanMap:{screen:ShongshanMap},
    WanhuaMap:{screen:WanhuaMap},
    WenshanMap:{screen:WenshanMap},
    XinyiMap:{screen:XinyiMap},
    ZhongshanMap:{screen:ZhongshanMap},
    ZhongzhengMap:{screen:ZhongzhengMap},
},
    {defaultNavigationOptions:stackNavigatorOption}
);
export default createAppContainer(AppNavigator);