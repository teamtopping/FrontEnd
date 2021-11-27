import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PublicTextInput from './PublicTextInput';

storiesOf('components|atoms', module)
  .addDecorator(withKnobs)
  .add('PublicTextInput', () => (
    <View style={styles.container}>
      <PublicTextInput
        secureTextEntry
        contentTitle={'비밀번호'}
        placeholder={'비밀번호를 입력해주세요'}
        onPressButton={action('onPressButton')}
      />
      <PublicTextInput
        secureTextEntry
        contentTitle={'비밀번호 확인'}
        placeholder={'비밀번호를 입력해주세요'}
        onPressButton={action('onPressButton')}
        warningMsg={'입력하신 비밀번호가 달라요'}
      />
      <PublicTextInput
        contentTitle={'닉네임'}
        placeholder={'닉네임을 입력해주세요'}
        onPressButton={action('onPressButton')}
        type={'Default'}
        value={'닉네임 값'}
        isValid={true}
        warningMsg={'사용 가능한 닉네임이에요'}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
