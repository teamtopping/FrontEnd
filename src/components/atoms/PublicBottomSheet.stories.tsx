import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, maxScale} from '~/constants/theme';
import PublicBottomSheet from './PublicBottomSheet';

storiesOf('components|atoms', module)
  .addDecorator(withKnobs)
  .add('PublicBottomSheet', () => (
    <View style={styles.container}>
      {/* 기본 버튼 - disabled */}
      <PublicBottomSheet/>
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
