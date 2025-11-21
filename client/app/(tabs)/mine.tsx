import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import {scale} from '@/utils/scale'
// import { LinearGradient } from 'react-native-linear-gradient';


export default function MineScreen() {
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        {/* <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        </LinearGradient> */}
        <Text>Mine Page</Text>
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
    // borderWidth: 1,
    // borderColor: 'red',
  },
  linearGradient:{
    flex:1,
  }
});
