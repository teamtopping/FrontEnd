import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {STRING} from '~/constants/ko';
import RegisterInput from './RegisterInput';

storiesOf('components|molecules', module)
  .addDecorator(withKnobs)
  .add('RegisterInput', () => (
    <View style={styles.container}>
      <RegisterInput
        label={'이메일'}
        type={'default'}
        placeholder={STRING.fillEmail}
        errorMsg={STRING.enableNick}
        value={'?'}
      />
      <RegisterInput
        label={'비밀번호'}
        type={'password'}
        placeholder={STRING.defaultPwdInput}
        errorMsg={STRING.notMatchPwd}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});