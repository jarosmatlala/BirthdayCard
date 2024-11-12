import React, { useState } from 'react';
import { Stack } from "expo-router";
import { View,Text,TextInput, Pressable,StyleSheet,KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
  const [readerName, setReaderName] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(true);
  const [isEditable, setIsEditable] = useState(true);

  const handleSubmit = () => { 
    setSubmittedData({ readerName, message });
    setIsEditable(false);
    
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <SafeAreaView style={styles.container}> 
    <SafeAreaView style={styles.topContainer}>
   <Text style={styles.appName}>Create Your Card</Text>
    </SafeAreaView>

    <SafeAreaView style={styles.bottomContainer}>
    <SafeAreaView  style={styles.inputContainer}>
    <Text style={styles.label}>Full Names</Text>
    <TextInput 
    style={styles.TextInput}
    placeholderTextColor={'#717171'} 
    value={readerName} 
    onChangeText={setReaderName}
    editable={isEditable} 
    />

<TextInput
            style={styles.messageInput}
            placeholder="Message for the Reader"
            value={message}
            onChangeText={setMessage}
            multiline
            editable={isEditable}
          />

{isEditable ? (
            <Pressable style={styles.uploadButton} onPress={handleSubmit}>
              <Text style={styles.uploadButtonText}>Submit</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.uploadButton} onPress={handleEdit}>
              <Text style={styles.uploadButtonText}>Edit</Text>
            </Pressable>
          )}
        </SafeAreaView>

    </SafeAreaView>

    {submittedData && (
          <View style={styles.submittedDataContainer}>
            <Text style={styles.submittedLabel}>Submitted Data:</Text>
            <Text style={styles.submittedText}>Full Names: {submittedData.readerName}</Text>
            <Text style={styles.submittedText}>Message: {submittedData.message}</Text>
          </View>
        )}
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
  },
  uploadButtonText: {
    color: '#FFF', 
    fontWeight: 'bold', 
  },
   submittedDataContainer: {
   marginTop: 20,
   }, 
   submittedLabel: { 
   fontWeight: 'bold',
   fontSize: 16,
   }, 
   submittedText: {
   fontSize: 14,
  },
  
})
