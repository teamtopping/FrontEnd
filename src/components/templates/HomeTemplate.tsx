import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  text?: string;
}

const HomeTemplate = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeTemplate;
