import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import {scale} from '@/utils/scale'


export default function MineScreen() {
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        Mine Page
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    width: "100%",
    // borderWidth: 1,
    // borderColor: 'red',
  },

  header: {
    width: '100%',
    height: scale(92),
    backgroundColor: 'lightblue',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  linearGradient:{
    flex:1,
  }
});
