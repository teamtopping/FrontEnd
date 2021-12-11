import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconButton} from './IconButton';
import {IMAGES} from '~/constants/images';
import {maxScale} from '~/constants/theme';

const GROUP_ID = 'IconButton';

storiesOf('components|atoms', module)
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <View style={styles.container}>
      <IconButton
        image={IMAGES.icBack}
        buttonStyle={styles.cancel}
        onPressButton={action('onPressButton')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancel: {
    width: maxScale(32),
  },
});
