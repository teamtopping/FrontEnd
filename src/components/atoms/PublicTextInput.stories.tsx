import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PublicTextInput from './PublicTextInput';
import {STRING} from '@constants/ko';

storiesOf('components|atoms', module)
  .addDecorator(withKnobs)
  .add('PublicTextInput', () => (
    <View style={styles.container}>
      <PublicTextInput
        type={'Password'}
        secureTextEntry
        contentTitle={'비밀번호'}
        placeholder={'비밀번호를 입력해주세요'}
        onPressButton={action('onPressButton')}
        isPreview={false}
      />
      <PublicTextInput
        type={'Password'}
        isPreview={true}
        secureTextEntry={false}
        contentTitle={'비밀번호 확인'}
        placeholder={'비밀번호를 입력해주세요'}
        onPressButton={action('onPressButton')}
      />
      <PublicTextInput
        contentTitle={'닉네임'}
        placeholder={'닉네임을 입력해주세요'}
        onPressButton={action('onPressButton')}
        type={'Validity'}
        value={'닉네임 값'}
        isValid={true}
        warningMsg={STRING.nickname}
      />
      <PublicTextInput
        contentTitle={'닉네임'}
        placeholder={'닉네임을 입력해주세요'}
        onPressButton={action('onPressButton')}
        type={'Validity'}
        value={'닉네임 값'}
        isValid={false}
        warningMsg={STRING.overlap}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
