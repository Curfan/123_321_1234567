import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



const Page_1 = () => {
  const { container,stretch } = styles;
  return(
  <View style ={ container}>
    <View>
    <Image
      source={require('./src/Asset/logo_twitch.png')} style ={stretch}
        />
          </View>
  </View>
  );

};

const styles = StyleSheet.create(
  {
    container:{
      backgroundColor:"#6441a5",
      flex:1,
    alignItems:'center'
    },
stretch:{
width:185.5,
height:61.5,
top:253.5
}
  }
);
export default Page_1;
