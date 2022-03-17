import React,{useState} from 'react'
import {View,StyleSheet,Text,Alert} from 'react-native'
import database from '@react-native-firebase/database'
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler'

 let additem=item=>{
   database().ref('/Items').push({
     name:item
   })
 }

function Additem(){
  const [name,setname]=useState('')
  const handsubmit=()=>{
    additem(name);
    console.log(name)
    setname('');
    Alert.alert('item successfully saved')

  }

  return(
  
<View>
    <Text style={{textAlign:'center',color:'red',marginBottom:15}}>add item</Text>
    <TextInput style={styles.textinput}  onChangeText={(text)=>{setname(text)}}/>
    <TouchableHighlight style={styles.touchable} onPress={handsubmit}>
      <Text style={styles.text1}>test</Text>
    </TouchableHighlight>
</View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textinput:{
    height:45,
    width:'90%',
    borderRadius:5,
    borderWidth:1,
    borderColor:'grey',
    backgroundColor:'green',
    marginBottom:20,marginLeft:17
    
  },
  touchable:{
      height:45,
      width:'90%',
      borderRadius:5,
      borderWidth:1,
      borderColor:'red',
      backgroundColor:'green',marginLeft:17

  },
  text1:{
    color:'white',fontSize:14
  }
})
 export default Additem;