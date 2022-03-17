import React,{useState} from 'react'
import {View,StyleSheet,Text,Button,Alert} from 'react-native'
import auth  from '@react-native-firebase/auth'
import { TextInput } from 'react-native-gesture-handler'
import Verification from './verifycode'
import Mobileno from './mobileno'

function Mobilelogin({navigation}){
    const [confirm,setconfirm]=useState(null)

    const mobilelogin=async(phonenumber)=>{
      console.log(phonenumber)
      auth().signInWithPhoneNumber("+91" +phonenumber).then((res)=>{
          console.log('response',res)
          setconfirm(res)

        })
        .catch((error)=>{
          console.log('error',error)
        })
        
       
    }

const confirmverification=async(code)=>{
  try{
    await confirm.confirm(code)
    
  }
  catch (error){
   Alert.alert('Invalid code')

  }
  auth().onAuthStateChanged((user)=>{
    if(user){
      setconfirm(null)
      navigation.navigate('Home')
    }
    else{
      if(confirm){
        setconfirm(null)
      }
     
    }

  })
}

    if(confirm) return <Verification onSubmit={confirmverification}/>
    return<Mobileno onSubmit={mobilelogin} />
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },input:{
    borderRadius:8,
    borderWidth:2,
    backgroundColor:'light blue',
    marginBottom:20,
    marginVertical:30,
    padding:10,
    fontSize:25
},test:{
    fontSize:25,
    color:'white'
}

})
 export default Mobilelogin
