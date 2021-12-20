import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IMAGES} from '@constants/images';

import {colors, maxScale} from '~/constants/theme';
import {STRING} from '~/constants/ko';
import {
  ValueObj as RegisterInputValueObj,
  ValidObj as RegisterInputValidObj,
} from '../pages/RegisterPage';
import {PublicHeader} from '../molecules/PublicHeader';
import RegisterInput from '../molecules/RegisterInput';
import MainButton from '../molecules/MainButton';

interface Props {
  isCertified?: boolean;
  value?: RegisterInputValueObj;
  valid?: RegisterInputValidObj;
  emailErrMsg?: string;
  pwdErrMsg?: string;
  checkPwdErrMsg?: string;
  nickErrMsg?: string;
  btnTxt?: string;
  onChangeEmail?: (text) => void;
  onChangePwd?: (text) => void;
  onChangeCheckPwd?: (text) => void;
  onChangeNick?: (text) => void;
  onPressEmailIcon?: () => void;
  onPressNickIcon?: () => void;
  onPressLeft?: () => void;
  onPressButton?: () => void;
}

const RegisterTemplate = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PublicHeader
          leftImg={IMAGES.icBack}
          centerTxt={STRING.registerHeader}
          onPressLeft={props.onPressLeft}
        />
      </View>
      <Text style={styles.title}>
        <Text>{STRING.registerTitleStart}</Text>
        <Text style={styles.coloredTitle}>{STRING.registerColoredTitle}</Text>
        <Text>{STRING.registerTitleEnd}</Text>
      </Text>
      <View>
        <RegisterInput
          type={'default'}
          label={STRING.emailLabel}
          placeholder={STRING.fillEmail}
          value={props.value?.email}
          isValid={props.valid?.emailValid}
          onChangeText={props.onChangeEmail}
          onPressIcon={props.onPressEmailIcon}
          errorMsg={
            props.valid?.emailValid === undefined
              ? undefined
              : props.emailErrMsg
          }
        />
        <RegisterInput
          type={'password'}
          label={STRING.pwdLabel}
          placeholder={STRING.defaultPwdInput}
          value={props.value?.pwd}
          isValid={props.valid?.pwdValid}
          onChangeText={props.onChangePwd}
          errorMsg={
            props.valid?.pwdValid === undefined
              ? STRING.defaultPwdErrMsg
              : props.pwdErrMsg
          }
        />
        <RegisterInput
          type={'password'}
          label={STRING.pwdCheckLabel}
          placeholder={STRING.defaultCheckPwd}
          value={props.value?.checkPwd}
          isValid={props.valid?.checkPwdValid}
          onChangeText={props.onChangeCheckPwd}
          errorMsg={
            props.valid?.checkPwdValid === undefined
              ? undefined
              : props.checkPwdErrMsg
          }
        />
        <RegisterInput
          type={'default'}
          label={STRING.nickLabel}
          placeholder={STRING.defaultNick}
          value={props.value?.nick}
          isValid={props.valid?.nickValid}
          onChangeText={props.onChangeNick}
          onPressIcon={props.onPressNickIcon}
          errorMsg={
            props.valid?.nickValid === undefined ? undefined : props.nickErrMsg
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        {props.isCertified ? (
          <MainButton title={props.btnTxt} onPress={props.onPressButton} />
        ) : (
          <MainButton title={props.btnTxt} disabled onPress={undefined} />
        )}
      </View>
    </View>
  );
};

export default RegisterTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
  },
  title: {
    marginVertical: maxScale(27),
    fontSize: maxScale(20),
    fontWeight: '700',
  },
  coloredTitle: {
    color: colors.SUB_PURPLE,
  },
  buttonContainer: {
    marginTop: maxScale(40),
    marginBottom: maxScale(28),
  },
  button: {
    borderWidth: 1,
    borderColor: colors.GRAY05,
    width: maxScale(320),
  },
  buttonText: {
    color: colors.GRAY02,
  },
});
