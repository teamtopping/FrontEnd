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
  image: ImageSourcePropType;
  buttonStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  onPressButton?: () => void;
}

export const IconButton = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={props.buttonStyle} onPress={props.onPressButton}>
        <Image source={props.image} style={props.imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'stretch',
  },
});
