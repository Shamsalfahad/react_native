import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ad = {name: "Shams Al Fahad", id: 191071022 , age: 24 ,}

export default class App extends React.Component {
 state={
  count: 0,
  totalTaps:  0
 }
 incrementValue=()=>{
  this.setState({
    count: this.state.count + 1,
    totalTaps: this.state.totalTaps + 1
  })
  
  console.log("value:" + (this.state.count));

  
  
 }
 
  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize:60, marginBottom:-20}}>{this.state.count}</Text>
        <Text style={{fontSize:12, padding:20, color:'green'}}> { "Total taps"  + this.state.totalTaps}</Text>
        <Button style={{fontSize:60, marginTop:-60}} onPress={this.incrementValue} title="Increse"/>
        <Text>My name is {ad.name}</Text>
      <Text>My id is {ad.id}</Text>
      <Text>My age is {ad.age}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80ced6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
