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
  leftImage?: ImageSourcePropType;
  centerText?: string;
  rightText?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

export const PublicHeader = (props: Props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.leftContent}>
        {props.leftImage && (
          <IconButton
            image={props.leftImage}
            imageStyle={styles.leftContainer}
          />
        )}
      </View>
      <View style={styles.centerContent}>
        {props.centerText && (
          <Text
            style={[
              {color: props.isDarkMode ? colors.FFF : colors.GRAY01},
              styles.centerText,
            ]}>
            {props.centerText}
          </Text>
        )}
      </View>
      <View style={styles.rightContent}>
        {props.rightText && (
          <TouchableOpacity
            hitSlop={{top: 7, right: 7, left: 7, bottom: 7}}
            onPress={props.onPressRight}>
            <Text
              style={[
                {color: props.isDarkMode ? colors.FFF : colors.GRAY03},
                styles.rightText,
              ]}>
              {props.rightText}
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
    marginTop: maxScale(22),
    flexDirection: 'row',
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
  centerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 12,
  },
});
