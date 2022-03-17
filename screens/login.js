import React,{useState} from 'react'
import { View, StyleSheet,Alert, Text, Button,TextInput } from 'react-native'
import auth from '@react-native-firebase/auth'




 
    
function Login({navigation}) {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

     const signup=()=>{
         if(email!='' && password!=''){
             auth().createUserWithEmailAndPassword(email,password).then((res)=>{
                 console.log('response',res)
                 Alert.alert('user created successfully')
             })
             .catch((error)=>{
                 console.log('error',error)
                 Alert.alert(error.message)
             })
         }
         else{
             Alert.alert('both fields are mandatory')
         }
     }

     const Login=()=>{
         auth().signInWithEmailAndPassword(email,password).then((res)=>{
             console.log('response',res)
             navigation.navigate('Home')
            
            
             Alert.alert('login successfully')
         })
         .catch((error)=>{
             console.log('error is ',error)
             Alert.alert('login failed')
         })
     }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Login</Text>
                <TextInput onChangeText={setemail} style={styles.textinput} placeholder='Email' />
                <TextInput  secureTextEntryL={true} onChangeText={setpassword} style={styles.textinput} placeholder='password' />

            </View>
            <View style={styles.button}>
                <Button title='sign up '  onPress={signup} />
                <Button title='Login' onPress={Login} />

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        justifyContent:'center',alignItems:'center'
    },
    text: {
        fontSize: 24,
        color: 'red',
        textAlign:'center'
    },
    textinput: {
        marginBottom: 20,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: 'green',
        padding: 10,
        width:300
       

    },
    button: {
        width: 150,
        marginTop: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
       
    },

})
export default Login;