import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeTemplate from './HomeTemplate';

const GROUP_ID = 'HomeTemplate';

storiesOf('components|templates', module)
  .addDecorator((getStory: any) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        {getStory()}
      </SafeAreaView>
    );
  })
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => <HomeTemplate text={'HomeTemplate'} />, {
    notes: GROUP_ID,
  });
