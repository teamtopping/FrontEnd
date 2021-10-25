import React, {ReactNode} from 'react';
import {View, Platform, StyleSheet, ViewProps} from 'react-native';

export const RESIZE_MODE = Platform.OS === 'ios' ? 'repeat' : 'cover';

interface Props extends Omit<ViewProps, 'source'> {
  children: ReactNode;
  headerHeight?: number;
  isStatusBarNull?: boolean;
}

const StackNavigationView = (props: Props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      <View style={{height: props.headerHeight}} />
      {props.children}
    </View>
  );
};

export default StackNavigationView;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
