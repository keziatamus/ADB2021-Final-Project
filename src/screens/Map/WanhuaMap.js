import React, {useState, useEffect, useRef} from 'react';
import { View, FlatList, useWindowDimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../component/CustomMarker';
import CarouselItem from '../../component/CarouselItem';

import places from '../../../data/wanhua'

export default function WanhuaMap () {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const flatlist= useRef();
    const map=useRef();

    const width= useWindowDimensions().width; 
    useEffect(() => {
        if (!selectedPlaceId  || !flatlist) {
            return;
          }
        const index = places.findIndex(place => place.building_id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})
    }, [selectedPlaceId])

    return (
    <View style={{width:'100%', height: '100%'}}>
     <MapView style={{width:'100%', height: '100%'}}
        ref={map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
         latitude: 25.0627177982732,
         longitude: 121.516657310173,
         latitudeDelta: 0.8,
         longitudeDelta: 0.8,
        }}
     >
        {places.map (place => (
            <CustomMarker
            coordinate={{
                longitude: place.longitude,
                latitude: place.latitude,
               }}
            price={place.price}
            isSelected={place.building_id == selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.building_id)}
            />)
        )}
     </MapView>
     <View style={{position:'absolute', bottom: 20}}>
         <FlatList
         ref={flatlist}
         data={places}
         renderItem={({item}) => <CarouselItem post={item}/>}
         horizontal
         showsHorizontalScrollIndicator={false}
         snapToInterval={width - 60}
         snapToAlignment={'center'}
         decelerationRate={'fast'}
         />
     </View>
   </View>
    )
};