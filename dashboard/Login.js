

import React from 'react';
import { KeyboardAvoidingView, Image, View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';


export default function Login({navigation}){
  return(
    
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.container}>
        
        <Image source={require('../src/assets/logo_size.jpg')} style={styles.logo} />
        <Image source={require('../src/assets/d.png')} style={styles.doctor} />
        

      <TextInput 
      placeholder="CPF"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />
      <TextInput 
      placeholder="Senha"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />

      <TouchableOpacity style={styles.botao} onPress={()=>{
        
        navigation.navigate('Página inicial')
      }}>
        <Text style={styles.txtBotao} >   Login</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={()=>{
        navigation.navigate('Cadastro')
      }}>
        <Text style={styles.txtBotao}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ems} onPress={()=>{
        navigation.navigate('Esqueci minha senha')
      }}>
      
        <Text style={styles.ems}>Esqueci minha senha</Text>
      </TouchableOpacity>

      
      
      </View>
      
    </KeyboardAvoidingView>
    
  )

    
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
      marginLeft: 93
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

    backgroundColor:"#FFF",
    width:'90%',
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
  

});