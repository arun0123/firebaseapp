import React,{useState,useEffect} from 'react'
import {View,StyleSheet,Text,Button,TextInput} from 'react-native'
import database from '@react-native-firebase/database'



let itemref=database().ref('/Items')


function List(){
  const [itemarray,setitemarray]=useState([])
  const [keys,setkeys]=useState([])
  const [ifupdate,setupdate]=useState(false)
  const[updatetext,setupdatetext]=useState('')
  const[updateindx,setupdateindex]=useState(null)
  useEffect(()=>{
    itemref.on('value',snapshot=>{
      const data=snapshot.val();
      const items=Object.values(data)
      setkeys(Object.keys(data))
      console.log(keys)
      setitemarray(items)
      


    })

  },[])
  const  handledelete=(index)=>{
    let childkey=keys[index]
    itemref.child(childkey).remove()
  }
  const handleupdate=(name,index)=>{
    setupdatetext(name)
    setupdateindex(index)
    setupdate(true)
   

  }
  const submitupdate=()=>{
    let childkey=keys[index]
    itemref.child(childkey).update({name:updatetext})
    setupdatetext(false)
  }

  return(
<View style={styles.list}>
{(itemarray.length > 0)
                ?
               ifupdate
                ?
                <View>
                  <TextInput style={styles.inputL}  onChangeText={()=>setupdatetext()}/>
                  <Button title='Submit' onPress={()=>submitupdate()}/>
                  <Button title='cancel' onPress={()=>setupdate(false)} />
                </View>
                :
              
                <View style={styles.list}>{itemarray.map((item, index) => {
                    return (
                      <View>
                        <Text style={styles.text}>{item.name}</Text>
                        <Button title='Update' onPress={()=>{
                          handleupdate(item.name,index)
                        }}/>
                        <Button title='Delete' onPress={()=>{
                          handledelete(index)
                        }}/>
                        </View>
                    )
                })}
                </View>
                :
                <Text>ITEM NOT FOUND</Text>


            }

   
</View>
  )
}

const styles=StyleSheet.create({
  list:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:24,
    color:'blue',
    fontWeight:'bold'

  },
  item:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginBottom:10

  },
  name:{
    paddingEnd:10
  },
  inputL:{
    borderWidth:1,
    borderColor:'black',marginBottom:16
    ,width:300
 }
})
 export default List;
 