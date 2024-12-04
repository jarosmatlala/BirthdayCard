import React, { useState } from "react";
import { Stack } from "expo-router";
import {
  Platform,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

export default function RootLayout() {
  const [readerName, setReaderName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [submittedData, setSubmittedData] = useState(true);
  const [isEditable, setIsEditable] = useState(true);

  const handleSubmit = () => {
    setSubmittedData({ readerName, message, image });
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };
  const pickImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (granted) {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!cancelled) {
        setImage(uri);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.appName}>Create Your Card</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
          <SafeAreaView style={styles.inputContainer}>
            <Text style={styles.label}>Full Names</Text>
            <TextInput
              style={styles.TextInput}
              placeholderTextColor={"#717171"}
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
            <Pressable style={styles.uploadButton} onPress={pickImage}>
              <Text style={styles.uploadButtonText}>Upload An Image</Text>
            </Pressable>

            {image && (
              <Image source={{ uri: image }} style={styles.selectedImage} />
            )}

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

      {submittedData && (
        <View style={styles.submittedDataContainer}>
          <Text style={styles.submittedLabel}>Submitted Data:</Text>
          <Text style={styles.submittedText}>
            Full Names: {submittedData.readerName}
          </Text>
          <Text style={styles.submittedText}>
            Message: {submittedData.message}
          </Text>
          {submittedData.image && (
            <Image
              source={{ uri: submittedData.image }}
              style={styles.submittedImage}
            />
          )}
        </View>
      )}
      </KeyboardAvoidingView> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#262F5B",
    paddingVertical: 80,
    alignItems: "center",
  },
  topContainer: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFF",
    fontFamily: "berkshire",
  },
  bottomContainer: {
    flex: 2.8,
    backgroundColor: "white",
    padding: 20,
    minHeight: 420,
    width: 320,
    borderRadius: 25,
  },
  inputContainer: {
    flex: 3,
  },
  label: {
    color: "#BDBDBD",
  },
  TextInput: {
    height: 46,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#1EA0E5",
    padding: 10,
    marginVertical: 10,
  },
  messageInput: {
    height: 120,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#1EA0E5",
    padding: 10,
    marginVertical: 10,
    textAlignVertical: "top",
  },
  uploadButton: {
    height: 46,
    borderRadius: 15,
    backgroundColor: "#1EA0E5",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  uploadButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  submittedDataContainer: {
    marginTop: 20,
  },
  submittedLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  submittedText: {
    fontSize: 14,
  },
  submittedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
});
