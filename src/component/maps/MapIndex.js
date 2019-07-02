import React from 'react';
import {StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';
import { withNavigationFocus, NavigationEvents } from 'react-navigation';

class MapIndex extends React.Component {

  render() {
    return (
       <View style={{flex:1, alignItems: 'center',  flexDirection: 'column'}}>

          <TouchableOpacity style={bloco.Quadra} onPress={() => this.props.navigation.navigate('Bloco F')} />
          <TouchableOpacity style={bloco.F} onPress={() => this.props.navigation.navigate('Bloco F')} />

          <TouchableOpacity style={bloco.E} onPress={() => this.props.navigation.navigate('Bloco E')} />
          <TouchableOpacity style={bloco.E1} onPress={() => this.props.navigation.navigate('Bloco E')} />

          <TouchableOpacity style={bloco.D} onPress={() => this.props.navigation.navigate('Bloco D')} />
          <TouchableOpacity style={bloco.D1} onPress={() => this.props.navigation.navigate('Bloco D')} />

          <TouchableOpacity style={bloco.C} onPress={() => this.props.navigation.navigate('Bloco C')} />
          <TouchableOpacity style={bloco.C1} onPress={() => this.props.navigation.navigate('Bloco C')} />

          <TouchableOpacity style={bloco.A} onPress={() => this.props.navigation.navigate('Bloco A')} />
          <TouchableOpacity style={bloco.A1} onPress={() => this.props.navigation.navigate('Bloco A')} />

          <TouchableOpacity style={bloco.F2} onPress={() => this.props.navigation.navigate('Bloco F')} />

          <TouchableOpacity style={bloco.B} onPress={() => this.props.navigation.navigate('Bloco B')} />
          <TouchableOpacity style={bloco.B1} onPress={() => this.props.navigation.navigate('Bloco B')} />
          <TouchableOpacity style={bloco.B2} onPress={() => this.props.navigation.navigate('Bloco B')} />
          <TouchableOpacity style={bloco.B3} onPress={() => this.props.navigation.navigate('Bloco B')} />
          <TouchableOpacity style={bloco.B4} onPress={() => this.props.navigation.navigate('Bloco B')} />

          <TouchableOpacity style={bloco.Artes} onPress={() => this.props.navigation.navigate('Bloco B')} />

        </View>
    );
  }
}

export default withNavigationFocus(MapIndex)

const bloco = StyleSheet.create({
  Quadra:{
  //backgroundColor: 'brown',
    height: '20%',
    width: '41%',
    left:'-8%'
  },
  F:{
   //backgroundColor: 'orange',
    height: '12%',
    width: '41%',
    left:'-20%',
    marginTop: '5%'
  },
  E:{
   //backgroundColor: 'cyan',
    height: '8%',
    width: '41%',
    left:'-20%',
    marginTop: '6%'
  },
  E1:{
   //backgroundColor: 'white',
    height: '7%',
    width: '10%',
    left:'-40%',
    marginTop: '-16%'
  },
  D:{
   //backgroundColor: 'green',
    height: '9%',
    width: '41%',
    left:'-35%',
    marginTop: '6%'
  },
  D1:{
   //backgroundColor: 'green',
    height: '8%',
    width: '25%',
    left:'-16%',
    marginTop: '-6%'
  },
  C:{
  // backgroundColor: 'orange',
    height: '9%',
    width: '20%',
    left:'-40%',
    marginTop: '0%'
  },
  C1:{
   //backgroundColor: 'brown',
    height: '11%',
    width: '20%',
    left:'-20%',
    marginTop: '-12%'
  },
  A:{
  // backgroundColor: 'blue',
    height: '16%',
    width: '20%',
    left:'-40%',
    marginTop: '-2%'
  },
  A1:{
  //backgroundColor: 'cyan',
    height: '16%',
    width: '20%',
    left:'-20%',
    marginTop: '-23%'
  },
  F2:{
  // backgroundColor: 'brown',
    height: '8%',
    width: '20%',
    left:'-10%',
    marginTop: '-90%'
  },
  B:{
  // backgroundColor: 'yellow',
    height: '30%',
    width: '15%',
    left: '30%',
    marginTop: '-55%'
  },
  B1:{
  // backgroundColor: 'orange',
    height: '30%',
    width: '15%',
    left: '12%',
    marginTop: '-13%'
  },
  B2:{
   //backgroundColor: 'red',
    height: '30%',
    width: '15%',
    left: '20%',
    marginTop: '-45%'
  },
  B3:{
 //  backgroundColor: 'green',
    height: '50%',
    width: '15%',
    left: '10%',
    marginTop: '-10%'
  },
  B4:{
  // backgroundColor: 'cyan',
    height: '50%',
    width: '15%',
    left: '0%',
    marginTop: '-50%'
  },
  Artes:{
//  backgroundColor: 'red',
    height: '30%',
    width: '50%',
    left: '50%',
    marginTop: '-180%'
  }
});