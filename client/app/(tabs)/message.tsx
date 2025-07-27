import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';


export default function MessageScreen() {
  return (
    <View style={styles.Container}>
      <Text>Message Page</Text>
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
