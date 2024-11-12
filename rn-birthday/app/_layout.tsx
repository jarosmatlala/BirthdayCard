import React, { useState } from 'react';
import { Stack } from "expo-router";
import { View,Text,TextInput, Pressable,StyleSheet,KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
  const [readerName, setReaderName] = useState('');
  const [message, setMessage] = useState('');




  return (
    <SafeAreaView style={styles.container}> 
  {/* <KeyboardAvoidingView> */}

    <SafeAreaView style={styles.topContainer}>
   <Text style={styles.appName}>Create Your Card</Text>
{/* <Pressable onPress={() => {console.log('button pressed')}}>
  <Text>Submit</Text>
</Pressable> */}
    </SafeAreaView>

    <SafeAreaView style={styles.bottomContainer}>
    <SafeAreaView  style={styles.inputContainer}>
    <Text style={styles.label}>Full Names</Text>
    <TextInput 
    placeholder="Name of Receiver" 
    style={styles.TextInput}  placeholderTextColor={'#747474'} 
    value={readerName}
    onChangeText={setReaderName}/>

<TextInput
            style={styles.messageInput}
            value={message}
            onChangeText={setMessage}
            multiline
          />

<Pressable style={styles.uploadButton} onPress={() => {console.log('button pressed')}}>
  <Text>Submit</Text>
</Pressable>

    </SafeAreaView>
    </SafeAreaView>
    {/* </KeyboardAvoidingView> */}
    </SafeAreaView>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#262F5B',
    paddingVertical: 80,
    alignItems: 'center',
  },
  topContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'berkshire',
  },
  bottomContainer:{
    flex: 2.8,
    backgroundColor: 'white',
    padding: 20,
    minHeight: 420,
    width: 320,
    borderRadius: 25, 

   },
   inputContainer: {
    flex: 3,
   },
   label:{
    color: '#BDBDBD',
   },
   TextInput:{
      height: 46,
      borderRadius: 15,
      borderWidth: 1,
      backgroundColor: '#1EA0E5',
      padding: 10,
      marginVertical: 10,
   },
   messageInput: {
    height: 120,  
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#1EA0E5',
    padding: 10,
    marginVertical: 10,
    textAlignVertical: 'top',
  },
  uploadButton: {
    height: 46,
    borderRadius: 15,
    backgroundColor: '#1EA0E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, 
  }
  
})
