import React from 'react';
import {View,Text,StyleSheet, Dimensions} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const environment = [{
    label: 'School',
    value: '1'
  }, {
    label: 'Park',
    value: '2'
  }, {
    label: 'MRT Station',
    value: '3'
  }]

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
                    fontSize:24,
                    marginTop:50,
                    padding: 5
                }}>Find your best house</Text>

                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text style={{fontFamily:"ExtraBold", fontSize:18, marginVertical: 10, marginHorizontal: 5}}>Location</Text>
                <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Map')}>
                    <Text style={{fontFamily:"Regular", fontSize:15, marginVertical: 15, marginLeft: 180}}>View all</Text>
                    </TouchableOpacity>
                
                <View style={{flexDirection:'row', flexWrap:'wrap', alignContent:'center', marginBottom: 20}}>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('BeitouMap')}>
                    <Text style={styles.text}>Beitou</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('NeihuMap')}>
                    <Text style={styles.text}>Neihu</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('DatongMap')}>
                    <Text style={styles.text}>Datong</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('ZhongshanMap')}>
                    <Text style={styles.text}>Zhongshan</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('ShongshanMap')}>
                    <Text style={styles.text}>Shongshan</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('ShihlinMap')}>
                    <Text style={styles.text}>Shihlin</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('DaanMap')}>
                    <Text style={styles.text}>Daan</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('XinyiMap')}>
                    <Text style={styles.text}>Xinyi</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Nangang</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('WanhuaMap')}>
                    <Text style={styles.text}>Wanhua</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('ZhongzhengMap')}>
                    <Text style={styles.text}>Zhongzheng</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('WenshanMap')}>
                    <Text style={styles.text}>Wenshan</Text>
                    </TouchableOpacity>
                </View>
                </View>
                </View>

                <Text style={{fontFamily:"ExtraBold", fontSize:18, marginVertical: 10, marginHorizontal: 5}}>Query</Text>

                <Text style={styles.object}>Public park</Text>
                <Text style={styles.description}>Find buildings with park within:</Text>
                <View style={{flexDirection:'row', flexWrap:'wrap', alignContent:'center', marginBottom: 20}}>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Park100')}>
                    <Text style={styles.text}>100 m</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Park300')}>
                    <Text style={styles.text}>300 m</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Park500')}>
                    <Text style={styles.text}>500 m</Text>
                    </TouchableOpacity>
                </View>
                </View>

                <Text style={styles.object}>MRT Station</Text>
                <Text style={styles.description}>Find buildings with MRT station within:</Text>
                <View style={{flexDirection:'row', flexWrap:'wrap', alignContent:'center', marginBottom: 20}}>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('MRT100')}>
                    <Text style={styles.text}>100 m</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('MRT300')}>
                    <Text style={styles.text}> 300 m</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('MRT500')}>
                    <Text style={styles.text}> 500 m</Text>
                    </TouchableOpacity>
                </View>
                </View>

                <Text style={styles.object}>School</Text>
                <Text style={styles.description}>Find buildings with school level:</Text>
                <View style={{flexDirection:'row', flexWrap:'wrap', alignContent:'center', marginBottom: 20}}>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Primary_School')}>
                    <Text style={styles.text}>國小</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Secondary_School')}>
                    <Text style={styles.text}>國中</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('High_School')}>
                    <Text style={styles.text}>高中</Text>
                    </TouchableOpacity>
                </View>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor:"#FFF",
        height:40,
        width:105,                        
        borderRadius:20,
        marginTop:10,
        marginHorizontal:5
    },
    text: {
        color:"#000",
        fontFamily:"Medium",
        fontSize:12,
        padding:10,
        textAlign:'center'
  },
    object: {
        fontFamily:"Medium", 
        fontSize:16, 
        marginVertical: 5,
        marginHorizontal: 5
    },
    description: {
        fontFamily:"Regular", 
        fontSize:15,
        marginHorizontal: 5
    },
    button: {
        backgroundColor:"#FFF",
        height:40,
        width: 340,                        
        borderRadius:20,
        alignSelf:'center'
    }
  })