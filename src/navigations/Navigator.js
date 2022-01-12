import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Map from '../screens/Map';
import BeitouMap from '../screens/location/BeitouMap';
import DaanMap from '../screens/location/DaanMap';
import DatongMap from '../screens/location/DatongMap'
import NeihuMap from '../screens/location/NeihuMap'
import ShihlinMap from '../screens/location/ShihlinMap'
import ShongshanMap from '../screens/location/ShongshanMap';
import WanhuaMap from '../screens/location/WanhuaMap';
import WenshanMap from '../screens/location/WenshanMap';
import XinyiMap from '../screens/location/XinyiMap';
import ZhongshanMap from '../screens/location/ZhongshanMap';
import ZhongzhengMap from '../screens/location/ZhongzhengMap';
import NangangMap from '../screens/location/NangangMap';
import MRT100 from '../screens/object/MRT100';
import MRT300 from '../screens/object/MRT300';
import MRT500 from '../screens/object/MRT500';
import Park100 from '../screens/object/Park100';
import Park300 from '../screens/object/Park300';
import Park500 from '../screens/object/Park500';
import Primary_School from '../screens/object/Primary_School';
import Secondary_School from '../screens/object/Secondary_School';
import High_School from '../screens/object/High_School';

const AppNavigator = createStackNavigator({
    Home:{screen:Home, 
        navigationOptions: {
        header: null,
      },},
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
    NangangMap:{screen:NangangMap, 
        navigationOptions: {
        headerTitle:'',
      },},
    MRT100:{screen:MRT100},
    MRT300:{screen:MRT300},
    MRT500:{screen:MRT500},
    Park100:{screen:Park100},
    Park300:{screen:Park300},
    Park500:{screen:Park500},
    Primary_School:{screen:Primary_School},
    Secondary_School:{screen:Secondary_School},
    High_School:{screen:High_School},
},
{
    defaultNavigationOptions: {
        title: 'Map',
        headerTitleAlign: 'center'
    }
}, 
);
export default createAppContainer(AppNavigator);