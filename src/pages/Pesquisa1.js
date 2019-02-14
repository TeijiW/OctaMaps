import React from 'react'
import { StyleSheet, Text, View, Image,ImageBackground,FlatList,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
import data from './octa_maps.json'


export default class Pesquisa1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        volatileData: [], // Dados que podem/serão alterados
        fullData: [], // Dados recebidos da API
        loading: false, 
        error: false,
        query: "",
    }
  }

  componentDidMount(){
    this.setState({ loading: true })

    const result = data.result

    this.setState({
      volatileData: result,
      fullData: result,
      loading: false,
    })
    console.log(this.state.fullData)
  }
  contains = ({ titulo_bloco, numero_piso, codigo_sala, titulo_sala }, query) =>{ // Função que faz a filtragem
    if (titulo_bloco.includes(query) || numero_piso.includes(query) || codigo_sala.includes(query) || titulo_sala.includes(query)){
      return true
    }
  }
  
  search = (value) => { // Chamado toda vez que ocorrer alteração de algum caracter no textInput
    let newData = []
    console.log("value: ",value.toLowerCase())
    this.setState({ 
      query: value.toLowerCase() 
    },
    () => {
    if (this.state.query){
        this.state.fullData.forEach( function(item) {
            if (this.contains(item, this.state.query)){
                newData.push(item)
            }
            this.setState({ volatileData: newData})
        }) 
    }else{
        this.setState({ volatileData: this.state.fullData })
    }})
  }
  
  
  render() {
    return (
      
      <View style={styles.container}>
          
        <View style={{ height: 80, backgroundColor: 'transparent', justifyContent: 'center', paddingHorizontal: 5 }}>
          <Animatable.View animation="lightSpeedIn" duration={2000} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={40} name="search" />
              <TextInput onChangeText={ value => this.search(value) }placeholder="Pesquisa" style={{ fontSize: 24, marginLeft: 15, flex: 1 }} />
          </Animatable.View>
        </View>
          
        <Animatable.View animation="fadeIn" duration={5000}>  
          <FlatList
              style={{ backgroundColor: 'white' }}
              data={this.state.fullData}
              renderItem={({ item }) => <Text style={{ padding: 20, fontSize: 20 }}>{ item.titulo_sala }</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
        </Animatable.View>
     

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});

const header = StyleSheet.create({
  
  header:{
    height:65,
    flexDirection: 'row',
  }
});
