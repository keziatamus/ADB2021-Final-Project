import React from 'react';  
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';  
  
export default class Result extends React.Component {  
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    componentDidMount(){

        return fetch('https://reactnative.dev/movies.json')
            .then ((response) => response.json())
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                })
            })

        .catch((error) => {
            console.log(error)
        });
    }

  render() {  
      if (this.setState.isLoading) {
          return (
            <View>
                <ActivityIndicator/>
            </View>
          )

        } else {

            let movies = this.state.dataSource.map((val, key) => {
                return <View key ={key} style={styles.item}>
                    <Text>{val.title} {val.releaseYear}</Text>
                </View>
                
            });

            return (  
            <View style={styles.container}>
                {movies}
            </View>  
            );  
        }
    }  
}  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
})