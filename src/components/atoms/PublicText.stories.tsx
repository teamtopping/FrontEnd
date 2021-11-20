import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PublicText from './PublicText';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('PublicText', () => (
    <View style={styles.container}>
      <PublicText content={'회원가입'} />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
