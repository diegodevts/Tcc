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
  <View styles={styles.container}>
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


const Paciente = ({navigation})=>{
  return(
    
    

      <View>
        
      <Image source={require('../src/assets/logo_size.jpg')} style={styles.logo} />
        <Image source={require('../src/assets/d.png')} style={styles.doctor} />
        
        <TextInput 
      placeholder="Nome"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />
      <TextInput 
      placeholder="E-mail"
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
      <TextInput 
      placeholder="CPF"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />
      <TextInput 
      placeholder="Data de Nascimento"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />

      
      <TouchableOpacity style={styles.botao} onPress={()=>{
        Alert.alert('Cadastrado com sucesso!')
        
      }}>
        <Text style={styles.txtBotao}>Cadastrar</Text>
        
      </TouchableOpacity>
      <Text style={styles.txtL}>Clique aqui se você for Médico:</Text>

      </View>
    
   
  );


}

//-----------------------------------------------------------------------------------------

const Medico = ()=>{
  return(
    
    

      <View>
        
      <Image source={require('../src/assets/logo_size.jpg')} style={styles.logo} />
        <Image source={require('../src/assets/d.png')} style={styles.doctor} />
        
        <TextInput 
      placeholder="Nome"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />
      <TextInput 
      placeholder="E-mail"
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
      <TextInput 
      placeholder="CRM"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />
      <TextInput 
      placeholder="CPF"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />
      <TextInput 
      placeholder="Data de Nascimento"
      autoCorrect={false}
      onChangeText={()=>{}}
      style={styles.input}
      />

      
      <TouchableOpacity style={styles.botao} onPress={()=>{
        Alert.alert('Cadastrado com sucesso!')
        
      }}>
        <Text style={styles.txtBotao}>Cadastrar</Text>
        
      </TouchableOpacity>
      
      <Text style={styles.txtL}>Clique aqui se você for Paciente:</Text>
      </View>
    
   
  );


}



const styles = StyleSheet.create({


  emc:{
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
    marginLeft: 50,
      color:"#FFF",
      fontSize: 20,
      justifyContent:"center",
      alignItems:"center"
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
  },
  txtL:{
      marginTop: 20,
      marginRight: 15,
      color:"#FFF",
      fontSize: 15,
      justifyContent:"center",
      alignItems:"center"
  }
  

});




