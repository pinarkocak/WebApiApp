import React, { Component } from 'react';
import { 
        ActivityIndicator,
        ListView,
        Text,
        View,
        StyleSheet 
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount(){
        var url= 'https://swapi.co/api/starships/'
        return fetch(url)
        .then((response)=>response.json())
        .then((responseJson)=> {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        data: responseJson.results,
        dataSource: ds.cloneWithRows(responseJson.results),
      })
    })
  }

  render() {
    console.log("Data: " , this.state.data);

    if(this.state.data[0]){
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.text}>{rowData.name}, {rowData.model}, {rowData.manufacturer}</Text>}
        />
      </View>
    );
    }
  else{
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
   
  },
  text: {
    fontSize:20,
    marginBottom:10,
  }
});