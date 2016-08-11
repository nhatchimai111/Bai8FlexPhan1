// B1: import những thư viện cần thiết
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai8FlexPhan1 extends Component {
  render() {
    return (
      
      <View style={ao.bao}>
          <View style={ao.ti}></View>
          <View style={ao.teo}></View>
      </View>
      
    );
  }
}

var ao = StyleSheet.create({

  bao:{

    backgroundColor:'black',
    flex:1,
    flexDirection:'row',
  },

  ti:{

    backgroundColor:'red',
    flex:2,
  },

  teo:{

    backgroundColor:'yellow',
    flex:1, 
  },

});


// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai8FlexPhan1', () => Bai8FlexPhan1);
