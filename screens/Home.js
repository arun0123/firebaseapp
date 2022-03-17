import React from 'react'
import {View,StyleSheet,Text,Button} from 'react-native'
import 'react-native-gesture-handler'
import auth  from '@react-native-firebase/auth'

function Home({navigation}){
  sign =() =>{
    auth().signOut().then((res)=>{
      console.log('response',res)
      navigation.navigate('home')
    
    })
  }
  return(
  
<View> 
  <Button title='logout' onPress={sign}/>
    <Text>home screen</Text>
    <Button title='Additem' onPress={()=>navigation.navigate('additem')}/>
    <Button title='List' onPress={()=>navigation.navigate('list')}/>
</View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
 export default Home;
