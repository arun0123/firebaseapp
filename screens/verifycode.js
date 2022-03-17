import React,{useState} from 'react'
import {View,StyleSheet,Text,Button} from 'react-native'
import auth  from '@react-native-firebase/auth'
import { TextInput } from 'react-native-gesture-handler'


function Verification(props){
  const [code,setcode]=useState('')
 
  return(
  
<View> 
    <Text style={styles.test} >enter otp</Text>
    <TextInput autoFocus  style={styles.input} value={code} onChangeText={setcode} />
    <Button title='confirm otp'onPress={()=>props.onSubmit(code)} />
</View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },input:{
    borderRadius:8,
    borderWidth:2,
    backgroundColor:'green',
    marginBottom:20,
    marginVertical:30,
    padding:10,
    fontSize:25
},test:{
    fontSize:25,
    color:'white'
}

})
 export default Verification
