import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';

const Page_3 =() => {
  const {container,header,search_bar,search_img,search_text,btn_cast,container_2,box,tab_bar,box_2,img_size,TextStyle} =styles;
  return(
      <View style = {container}>
      <View style={header}>
        <View style={search_bar}>
          <Image source={require('./src/Asset/icon_search.png')} style={search_img} />
          <Text style={search_text}>Search</Text>
          </View>
            <Image source ={require('./src/Asset/btn_cast.png')} style={btn_cast} />
        </View>
        <View style={container_2}>
          <Image source={require('./src/Asset/img_leagueoflegends.png')}style={box} />
          <Image source={require('./src/Asset/img_counterstrike.png')}style={[box,{position:'absolute'},{right:0}]} />
          </View>
          <View style={container_2}>
            <Image source={require('./src/Asset/img_hearthstone.png')}style={box} />
            <Image source={require('./src/Asset/img_dota2.png')}style={[box,{position:'absolute'},{right:0}]} />
            </View>
            <View style={container_2}>
              <Image source={require('./src/Asset/img_h1z1.png')}style={box} />
              <Image source={require('./src/Asset/img_destiny.png')}style={[box,{position:'absolute'},{right:0}]} />
              </View>
              <View style={tab_bar}>
                <View style={box_2}>
                    <Image source={require('./src/Asset/btn_games_selected.png')} style={img_size} />
                    <Text style={TextStyle}>Games</Text>
                </View>
                <View style={[box_2,{width:93.5}]}>
                <Image source={require('./src/Asset/btn_channels.png')} style={img_size} />
                <Text style={[TextStyle,{color:'#bbbbbb'},{left:24}]}>Channels</Text>
                </View>
                <View style={[box_2,{width:93.5}]}>
                <Image source={require('./src/Asset/btn_channels.png')} style={img_size} />
                <Text style={[TextStyle,{color:'#bbbbbb'},,{left:24}]}>Following</Text>
                </View>
                <View style={box_2}>
                <Image source={require('./src/Asset/btn_me.png')} style={img_size} />
                <Text style={[TextStyle,{color:'#bbbbbb'},{left:39.5}]}>Me</Text>
                </View>
                </View>

                </View>

  )
};

const styles = StyleSheet.create(
  {
    container:{
    backgroundColor:'#f1f1f1',
    flex:1
  },
  header:{
      height:64,
      backgroundColor:'#6441a5',
      textAlign:'center'
    },
    search_bar:{
      width:320,
      height:30,
      backgroundColor:'#311f53',
      top:26.5,
      left:8.5,
      borderRadius:5,
    },
    search_img:{
      height:18,
      width:18,
      top:6.5,
      left:11,
    },
    search_text:{
      fontSize:15,
      color:'#b9a3e3',
      position:'absolute',
      top:5,
      left:32,
    },
    btn_cast:{
      height:33,
      width:33,
      alignSelf:'flex-end',
      top:-5,
      right:8.5,
    },
    container_2:{
      height:180,
      width:365,
      margin:5,
      marginBottom:0,

    },
    box:{
      width:180,
      height:180,
      backgroundColor:'gray',
    },
    tab_bar:{
      width:375,
      height:49,
      flexDirection:'row'
    },
    box_2:{
      width:94,
      height:49,
      textAlign:'center',

    },
    img_size:{
      width:94,
      height:49,
      position:'absolute'
    },
    TextStyle:{
      fontSize:10,
      left:30.5,
      color:'#6441a5',
      top:33,

    }

}
);

export default Page_3
