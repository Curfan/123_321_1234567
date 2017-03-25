import React from 'react';
import { Text,View,StyleSheet} from 'react-native';

const Header =()=> {
  const {bk_color} = styles;
  return(
    <View style= {bk_color}>

    </View>
);
};

const styles = StyleSheet.create({
    bk_color:{
      backgroundColor:'#6441a5',
      flex:1
    }
}
);
export default Header;
