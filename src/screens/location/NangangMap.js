import React from 'react';
import {View,Text,StyleSheet, Dimensions} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const config = {
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height
}

export default class Home extends React.Component {
    state = { selectedOption: [] }
 
    onSelectionsChange = (selectedOption) => {
    this.setState({ selectedOption })
  }
    render(){
        return(
            <ScrollView style={{
                backgroundColor:"#F8F8F8",
                paddingHorizontal:20,
                }}>
                <Text style={{
                    fontFamily:"ExtraBold",
                    fontSize:23,
                    marginTop: 280,
                    padding: 5,
                    textAlign:'center',
                }}>Sorry, the district you're looking for is unavailable</Text>

                <Text style={{
                    fontFamily:"Medium",
                    fontSize:18,
                    padding: 5,
                    textAlign:'center',
                }}>Please choose another district</Text>
            </ScrollView>
        )
    }
}