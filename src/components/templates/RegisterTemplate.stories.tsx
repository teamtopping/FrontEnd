import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {STRING} from '~/constants/ko';
import RegisterTemplate from './RegisterTemplate';

storiesOf('components|templates', module)
  .addDecorator(withKnobs)
  .add('RegisterTemplate', () => (
    <View style={styles.container}>
      <RegisterTemplate
        email={'?'}
        pwd={'?'}
        checkPwd={'?'}
        nick={'?'}
        emailValid={undefined}
        pwdValid={undefined}
        checkPwdValid={undefined}
        nickValid={undefined}
        pwdErrMsg={STRING.defaultPwdErrMsg}
        onChangeEmail={action('act')}
        onChangePwd={action('act')}
        onChangeCheckPwd={action('act')}
        onChangeNick={action('act')}
        onPressEmailIcon={action('act')}
        onPressNickIcon={action('act')}
        onPressLeft={action('act')}
        onPressButton={action('act')}
        btnTxt={'다음 (1/4)'}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
