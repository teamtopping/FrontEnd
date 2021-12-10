// import {action} from '@storybook/addon-actions';
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
        title={'이메일'}
        returnMsg={STRING.enableNick}
        type={'default'}
        isValid={true}
        value={'유효한 이메일'}
      />
      <RegisterInput
        title={'비밀번호'}
        returnMsg={STRING.notMatchPwd}
        type={'password'}
        isValid={false}
        value={'유효하지 않은 비밀번호'}
      />
      <RegisterInput
        title={'비밀번호'}
        returnMsg={STRING.notMatchPwd}
        type={'password'}
        isValid={false}
        value={'유효하지 않은 비밀번호'}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
