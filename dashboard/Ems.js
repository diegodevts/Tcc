import React from 'react';
import { KeyboardAvoidingView, Image, View, TouchableOpacity, StyleSheet, TextInput, Text, Alert} from 'react-native';


export default ({navigation})=>{
  return(
    
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.container}>
        
      <Image source={require('../src/assets/logo_size.jpg')} style={styles.logo} />
        <Image source={require('../src/assets/d.png')} style={styles.doctor} />
        
        <TextInput 
      placeholder="Digite seu e-mail para recuperação"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />
      
      <TouchableOpacity style={styles.botao} onPress={()=>{
        Alert.alert('E-mail enviado a sua caixa de entrada')
        
      }}>
        <Text style={styles.txtBotao}>Enviar e-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={()=>{
    
        navigation.navigate('Login')
      }}>
        <Text style={styles.txtBotao}>Voltar ao início</Text>
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
  label:{
    color:"#FFF",
      fontSize: 20,
      
      alignItems: "center",
      justifyContent: 'center'
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