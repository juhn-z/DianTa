
import { Dimensions } from "react-native";


export const scale = (num: number) => {
  let width = Dimensions.get('window').width < Dimensions.get('window').height ? Dimensions.get('window').width : Dimensions.get('window').height;

  return (width/375)*num
}