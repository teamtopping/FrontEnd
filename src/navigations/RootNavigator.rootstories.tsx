import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Navigator from './RootNavigator';

const Container = Navigator;

storiesOf('App|navigation', module)
  .addDecorator(withKnobs)
  // .addDecorator((getStory: any) => {
  //   return <View style={styles.container}>{getStory()}</View>
  // })
  .add(
    'Root',
    () => {
      return <Container />;
    },
    {
      notes: 'Container',
    },
  );
