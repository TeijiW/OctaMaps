import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';

const corAndar1 = 'transparent'
const corFundo1 = 'transparent'

const corAndar0 = 'transparent'
const corFundo0 = 'transparent'

 class MapD extends React.Component {

  terreo(){
    this.props.navigation.navigate('BlocoDTerreo')
  }

  piso1(){
    this.props.navigation.navigate('BlocoDP1')
  }

  render() {
    return (
      <View>
        <Svg height={"100%"} width={'100%'}>

            <Rect
              x={'0%'}
              y={'35%'}
              width={'100%'}
              height={'40%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() => this.terreo()}
            />

            <Rect
              x={'0%'}
              y={'25%'}
              width={'100%'}
              height={'12%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1()}
            />

            <Rect
              x={'20%'}
              y={'32%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1()}
            />

            <Rect
              x={'25%'}
              y={'33%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1() }
            />

            <Rect
              x={'30%'}
              y={'34%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1() }
            />

            <Rect
              x={'35%'}
              y={'36%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1() }
            />

            <Rect
              x={'40%'}
              y={'38%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1() }
            />

            <Rect
              x={'45%'}
              y={'40%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1() }
            />

            <Rect
              x={'50%'}
              y={'41%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1() }
            />

            <Rect
              x={'58%'}
              y={'42%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1() }
            />

            <Rect
              x={'62%'}
              y={'44%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1() }
            />

            <Rect
              x={'65%'}
              y={'46%'}
              width={'100%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() => this.piso1() }
            />

          </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
export default withNavigationFocus(MapD)
