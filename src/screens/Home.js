import React from 'react';
import {View,Text,StyleSheet, Dimensions} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SelectMultiple from 'react-native-select-multiple';

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
                    marginTop:50
                }}>Find your best house</Text>

                <View style={{flexDirection:'row', flexWrap:'wrap', marginVertical: 20}}>
                <Text style={{fontFamily:"ExtraBold", fontSize:18}}>Location</Text>
                
                <View style={{
                    backgroundColor:"#FFF",
                    height:40,
                    width:100,                        
                    borderRadius:20,
                    marginTop:30,
                    marginLeft: -80
                 }}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Beitou</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    backgroundColor:"#FFF",
                    height:40,
                    width:100,                        
                    borderRadius:20,
                    marginTop:30,
                    marginHorizontal:5
                 }}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Neihu</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    backgroundColor:"#FFF",
                    height:40,
                    width:100,                        
                    borderRadius:20,
                    marginTop:30,
                    marginHorizontal:5
                 }}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Datong</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Zhongshan</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Shongshan</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Shihlin</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Daan</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
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
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Wanhua</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Zhongzheng</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Detail')}>
                    <Text style={styles.text}>Wenshan</Text>
                    </TouchableOpacity>
                </View>
                </View>

                <Text style={{fontFamily:"ExtraBold", fontSize:18, marginVertical: 10}}>Query</Text>
                    <SelectMultiple
                        items={environment}
                        selectedItems={this.state.selectedOption}
                        onSelectionsChange={this.onSelectionsChange} />
                
                <View style={styles.button}>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Result')}>
                    <Text 
                    style={{color:"#000",
                            fontFamily:"SemiBold",
                            fontSize:15,
                            padding:10,
                            textAlign:'center'
                        }}>Search</Text>
                    </TouchableOpacity>
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
        width:100,                        
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
    button: {
        backgroundColor:"#FFF",
        height:40,
        width:300,                        
        borderRadius:20,
        marginTop: 30,
        alignSelf:'center'
    }
  })