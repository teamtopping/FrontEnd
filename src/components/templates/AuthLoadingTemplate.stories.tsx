import {withKnobs, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import AuthLoadingTemplate from './AuthLoadingTemplate';

const GROUP_ID = 'AuthLoadingTemplate';

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
  .add(
    GROUP_ID,
    () => (
      <AuthLoadingTemplate
        text={'AuthLoadingTemplate'}
        isLoading={boolean('isLoading', true, GROUP_ID)}
      />
    ),
    {
      notes: GROUP_ID,
    },
  );
