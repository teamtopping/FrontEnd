import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import AuthLoadingPage from './AuthLoadingPage';
import StoryNavigator from '@navigations/constants/navigationOptions';

const GROUP_ID = 'AuthLoadingPage';

storiesOf('components|pages', module)
  .addDecorator(withKnobs)
  // .addDecorator((getStory: any) => {
  //   return <View style={styles.container}>{getStory()}</View>
  // })
  .add(
    GROUP_ID,
    () => {
      return <StoryNavigator name={GROUP_ID} component={AuthLoadingPage} />;
    },
    {
      notes: GROUP_ID,
    },
  );
