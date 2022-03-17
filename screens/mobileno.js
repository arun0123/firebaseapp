import React,{useState} from 'react'
import {View,StyleSheet,Text,Button} from 'react-native'
import 'react-native-gesture-handler'
import auth  from '@react-native-firebase/auth'
import { TextInput } from 'react-native-gesture-handler'

function Mobileno(props){
    const [phonenum,setphoneno]=useState(null)
  return(
  
<View> 

    <Text style={styles.test}> enter phone number</Text>
    <TextInput style={styles.input} value={phonenum} onChangeText={setphoneno}
    
    autoFocus/>
    <Button  title='sign in with otp' onPress={()=>props.onSubmit(phonenum)}/>

    
</View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
      borderRadius:8,
      borderWidth:2,
      backgroundColor:'green',
      marginBottom:20,
      marginVertical:30,
      padding:10,
      fontSize:25
  },test:{
      fontSize:25,
      color:'black'
  }
})
 export default Mobileno
