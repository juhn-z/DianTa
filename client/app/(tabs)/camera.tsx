import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';


export default function CameraScreen() {
  return (
    <View style={styles.Container}>
      <Text>Camera Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
