import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Map from '../screens/Map/Map';
import BeitouMap from '../screens/Map/BeitouMap';
import DaanMap from '../screens/Map/DaanMap';
import DatongMap from '../screens/Map/DatongMap'
import NeihuMap from '../screens/Map/ShihlinMap'
import ShihlinMap from '../screens/Map/ShihlinMap'
import ShongshanMap from '../screens/Map/ShongshanMap';
import WanhuaMap from '../screens/Map/WanhuaMap';
import WenshanMap from '../screens/Map/WenshanMap';
import XinyiMap from '../screens/Map/XinyiMap';
import ZhongshanMap from '../screens/Map/Zhongshan';
import ZhongzhengMap from '../screens/Map/ZhongzhengMap';

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