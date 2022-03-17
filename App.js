import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import Additem from './screens/Additem'
import List from './screens/List'
import Login from './screens/login'
import mobilelogin from './screens/mobilelogin'


const stack =createStackNavigator()
function App(){
  return(
  
<NavigationContainer>
  <stack.Navigator>
    {/* <stack.Screen name='mobilelogin' component={mobilelogin}/> */}
    {/* <stack.Screen name='login' component={Login}/> */}
    <stack.Screen name='Home' component={Home} />
    <stack.Screen name='additem' component={Additem} />
    <stack.Screen name='list' component={List} />
  </stack.Navigator>
</NavigationContainer>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
 export default App;