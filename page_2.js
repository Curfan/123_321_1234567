import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';

const Page_2 = () => {
  const { header,bk_img,text_style,Text_fix,like_img,navi_btn,box,navi_btn_text,navi_btn_2,scroll_btn,container,box_2,container_2,img_style,bottom} = styles;
  return(
    <View style={container}>
        <View style={header}>
          <Image source={require('./src/Asset/btn_back.png')} style={bk_img} />
           <View style={Text_fix}>
            <Text style={text_style}>HearthStone</Text>
                </View>
           <Image source={require('./src/Asset/btn_like.png')} style={like_img
           } />
          </View>
        <View style={navi_btn}>
          <View style={box}>
              <Text style={[navi_btn_text,{color:'#6641a5'}]}>LIVE</Text>
            </View>
            <View style={box}>
              <Text style={[navi_btn_text,{color:'#bbbbbb'}]}>RECENT</Text>
              </View>
              <View style={scroll_btn}>
                  </View>
          </View>
        <View style={container_2}>
          <View style={box_2}>
          <Image source={require('./src/Asset/img_firebat.png')} style={img_style}/>
            </View>
            <View style={box_2}>
            <Image source={require('./src/Asset/img_forsen.png')} style={img_style}/>
              </View>
              <View style={box_2}>
              <Image source={require('./src/Asset/img_kolento.png')} style={[img_style,{height:144}]}/>
          </View>

            </View>
      </View>
    )
};

const styles = StyleSheet.create(
  {
    header:{
        height:64,
        backgroundColor:'#6441a5',
        textAlign:'center'

    },
    bk_img:{
      width:33,
      height:33,
      top:29,
      left:10.5,
      position:'absolute'
    },
    Text_fix:{
      alignItems:'center'
    },
    text_style:{
        color:'white',
        position:'absolute',
        paddingTop:30.5,
        fontSize:18

    },
    like_img:{
      height:33,
      width:33,
      alignSelf:'flex-end',
      top:29,
      right:14
    },
    navi_btn:{
      height:44,
      backgroundColor:"#ffffff",
          flexDirection:'row'
    },
    box:{

      height:39,
      flex:1,
      backgroundColor:'white',
      textAlign:'center'
    },
    navi_btn_text:{
      textAlign:'center',
      top:15
    },

    scroll_btn:{
      height:5,
      width:187.5,
      position:"absolute",
      backgroundColor:'#6441a5',
      top:39

    },
    container:{
      backgroundColor:'#f1f1f1',
      flex:1
    },
    container_2:{
      alignItems:'center'
    },
    box_2:{
      marginTop:5,
      height:200,
      width:365,
      backgroundColor:'red',

    },
    img_style:{
      height:200,
      width:365,
    },

  }
);

export default Page_2
