import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';

export interface Props {
  img: ImageSourcePropType;
  btnStyle?: ViewStyle;
  imgStyle?: ImageStyle;
  onPressButton?: () => void;
}

export const IconButton = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={props.btnStyle} onPress={props.onPressButton}>
        <Image source={props.img} style={props.imgStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'stretch',
  },
});
