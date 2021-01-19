import React from 'react';
import  { NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import  Login from './dashboard/Login'
import Cadastro from './dashboard/Cadastro'
import App2 from './src/App2'
import Ems from './dashboard/Ems'
import Chat from './src/assets/Chat'

const Drawer = createDrawerNavigator()


export default ({navigation})=>{

  return(
    
      <NavigationContainer>


          <Drawer.Navigator initialRouteName="Login" >


              <Drawer.Screen  name="Login" component={Login}/>
              <Drawer.Screen  name="Página inicial" component={App2}/>
              <Drawer.Screen name="Cadastro"  component={Cadastro}/>
              <Drawer.Screen name="Esqueci minha senha" component={Ems}/>
              <Drawer.Screen name="Chat" component={Chat}/>
              
              
              
            
              </Drawer.Navigator>
              

      </NavigationContainer>
          
            
                 
        
        )
            
}



