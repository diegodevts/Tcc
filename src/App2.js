import React from 'react';
import { View, StyleSheet, FlatList, Alert} from 'react-native';
import { KeyboardAvoidingView, Image,  TouchableOpacity, Text} from 'react-native';
import ListItem from '../ListItem/index';



export default ({navigation})=> {

  

  const tarefas = [  
    {id: '1', tarefa: '                  Médico/Paciente 1'},
    {id: '2', tarefa: '                  Médico/Paciente 2'},
    {id: '3', tarefa: '                  Médico/Paciente 3'},
    {id: '4', tarefa: '                  Médico/Paciente 4'},
    {id: '5', tarefa: '                  Médico/Paciente 5'},
    {id: '6', tarefa: '                  Médico/Paciente 6'},
    {id: '7', tarefa: '                  Médico/Paciente 7'}
  ];

  return (
   
    <KeyboardAvoidingView style={styless.background}>

    <View style={styless.container}>
  
  
    <Image source={require('../src/assets/d.png')} style={styless.doctor} />

  

  
      <Text style={styless.txtB}>Lista de médicos/pacientes:</Text>
      <FlatList style={{backgroundColor:"#FFF",
    width:'90%',
    marginBottom: 15,
    marginTop: 5,
    color: '#222',
    fontSize: 17,
    borderRadius: 25,
    padding: 10
        
      }}
      data={tarefas}
      keyExtractor={item => item.id}
      renderItem={ ({item}) => (
        <ListItem
        data={item}
        handleLeft={ ()=> navigation.navigate('Chat')}
        handleRight={()=>{Alert.alert('Atendimento rejeitado!')}}
        />
      )}
      ItemSeparatorComponent={ () => <Separator/> }
      />

<TouchableOpacity style={styless.botao} onPress={()=>{
  navigation.goBack()
}}><Text style={styless.txtBotao}>      Sair</Text></TouchableOpacity>

    </View>

    </KeyboardAvoidingView>
  );
}

const Separator = () => <View style={styless.separator}></View>

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF'
  }
});

const styless = StyleSheet.create({
  txtB:{
    color:"#FFF",
      fontSize:40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator:{
    flex:1, 
    height:3,
     backgroundColor: '#DDD'
  },
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
    width: '90%',
    borderRadius: 15,
    height:40,
    marginBottom: 20
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

