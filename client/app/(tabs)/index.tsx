import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';

export default function PlatformScreen() {
  const [text, onChangeText]= useState('')
  
  return (
    <View style={styles.Container}>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Platform Page</Text>
    </View>
  );
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    // justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  input:{

  }
});
