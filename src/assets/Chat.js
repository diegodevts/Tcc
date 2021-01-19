 import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { KeyboardAvoidingView, Image, View, TouchableOpacity, StyleSheet, TextInput, Text, Alert} from 'react-native';
import { Switch } from 'react-native-gesture-handler';




 export default class Cadastro extends Component{
   
  constructor(props){
    super(props)
    this.state = {switchValue: false}
  }

  toggleSwitch = (value) =>{
    this.setState({switchValue: value})
  }

    render(){
   return(

    <KeyboardAvoidingView style={styles.background}>
  <View style={styles.container}>
    <Text>{this.state.switchValue?<Medico/>: <Paciente/>} </Text>
    
<Switch

  value = {this.state.switchValue}
  onValueChange={this.toggleSwitch}

  />
  

</View>
</KeyboardAvoidingView>
   )
    }
}


const Paciente = ()=>{
  return(
    
    

<KeyboardAvoidingView style={styles.background}>
<View style={styles.container}>
  
  <Image source={require('../assets/logo_size.jpg')} style={styles.logo} />
  <Image source={require('../assets/d.png')} style={styles.doctor} />
  <View style={{width: 300, height: 300, backgroundColor: "#FFF"}}/>
  <TextInput style={styles.input} />
  <TouchableOpacity style={styles.botao}><Text style={styles.txtBotao}>Enviar</Text></TouchableOpacity>
    <Text style={styles.txtBotao}>Paciente</Text>
  </View>
</KeyboardAvoidingView>
    
   
  );


}

//-----------------------------------------------------------------------------------------

const Medico = ()=>{
  return(
    
    

<View style={styles.container}>
  
  <Image source={require('../assets/logo_size.jpg')} style={styles.logo} />
  <Image source={require('../assets/d.png')} style={styles.doctor} />

    <View style={{width: 250, height: 250, backgroundColor: "#FFF"}}/>
    
  <TextInput style={styles.input} />
  <TouchableOpacity style={styles.botao}><Text style={styles.txtBotao}>Enviar</Text></TouchableOpacity>
  <TouchableOpacity style={styles.botao}><Text style={styles.txtBotao} 
  onPress={()=>{Alert.alert('Atendimento encerrado')

  }}>Encerrar atendimento</Text></TouchableOpacity>
  <TouchableOpacity style={styles.botao}><Text style={styles.txtBotao} 
  onPress={()=>{Alert.alert('Receita gerada com sucesso')

  }}>Gerar receita</Text></TouchableOpacity>
  <Text style={styles.txtBotao}>Médico</Text>
  </View>

    
   
  );


}


        const styles = StyleSheet.create({


            ems:{
                color: "#FFF",
                fontSize: 16
            },
            background:{
              flex:1,
              alignItems:'center',
              justifyContent: 'center',
              backgroundColor: '#276955'
          
            },
            txtBotao:{
                color:"#FFF",
                fontSize: 20,
               
            },
            botao:{
              backgroundColor:"#276955",
              borderWidth:1,
              borderColor: '#FFF',
              paddingTop:4,
              paddingBottom:4,
              paddingRight: 25,
              paddingLeft: 25,
              marginTop: 10,
              marginBottom:5,
              width: '90%',
              borderRadius: 15,
              height:40
            },
            input
          :{
                flex: 1,
              backgroundColor:"#FFF",
              width: 300,
              marginBottom: 15,
              marginTop: 5,
              color: '#222',
              fontSize: 17,
              borderRadius: 7,
              padding: 10
            },
            container:{
              flex:1,
              alignItems: 'center',
              justifyContent:'center',
              width: '90%'
            },
          
            doctor:{
              marginTop: 4,
              marginBottom:10,
              marginLeft:15,
              alignItems:'center',
              justifyContent: 'center'
            },
            logo:{
              marginRight:5
            }
            
          
          })