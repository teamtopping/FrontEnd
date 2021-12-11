import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {IMAGES} from '~/constants/images';
import {colors} from '~/constants/theme';
import {PublicHeader} from './PublicHeader';

const GROUP_ID = 'PublicHeader';

storiesOf('components|molecules', module)
  .addDecorator(getStory => {
    return (
      <View style={styles.decorator}>{getStory() as FunctionConstructor}</View>
    );
  })
  .addDecorator(withKnobs)
  .add(GROUP_ID, () => (
    <View style={styles.container}>
      <PublicHeader
        rightText={'건너뛰기'}
        onPressRight={action('onPressRight')}
      />
      <PublicHeader
        leftImage={IMAGES.icBack}
        centerText={'회원가입'}
        onPressLeft={action('onPressLeft')}
      />
      <PublicHeader
        leftImage={IMAGES.icBack}
        rightText={'건너뛰기'}
        onPressLeft={action('onPressLeft')}
        onPressRight={action('onPressRight')}
      />
      <PublicHeader
        isDarkMode
        leftImage={IMAGES.icBackWhite}
        centerText={'플레이트 생성'}
        onPressLeft={action('onPressLeft')}
        containerStyle={styles.darkMode}
      />
    </View>
  ));

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  decorator: {
    flex: 1,
  },
  darkMode: {
    backgroundColor: colors.MAIN,
  },
});
