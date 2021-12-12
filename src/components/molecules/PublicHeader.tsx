import React from 'react';
import {
  StyleSheet,
  View,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {colors, maxScale} from '~/constants/theme';
import {IconButton} from '../atoms/IconButton';

export interface Props {
  isDarkMode?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  leftImg?: ImageSourcePropType;
  centerTxt?: string;
  rightTxt?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

export const PublicHeader = (props: Props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.leftContent}>
        {props.leftImg && (
          <IconButton img={props.leftImg} imgStyle={styles.leftContainer} />
        )}
      </View>
      <View style={styles.centerContent}>
        {props.centerTxt && (
          <Text
            style={[
              {color: props.isDarkMode ? colors.FFF : colors.GRAY01},
              styles.centerTxt,
            ]}>
            {props.centerTxt}
          </Text>
        )}
      </View>
      <View style={styles.rightContent}>
        {props.rightTxt && (
          <TouchableOpacity
            hitSlop={{top: 7, right: 7, left: 7, bottom: 7}}
            onPress={props.onPressRight}>
            <Text
              style={[
                {color: props.isDarkMode ? colors.FFF : colors.GRAY03},
                styles.rightTxt,
              ]}>
              {props.rightTxt}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: maxScale(22),
    marginHorizontal: maxScale(25),
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  leftContainer: {
    width: maxScale(24),
    height: maxScale(24),
  },
  centerTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightTxt: {
    fontSize: 12,
  },
});
