import React from 'react';
import {View, StyleSheet, Text, TextInputProps} from 'react-native';
import {IMAGES} from '@constants/images';

import {colors, maxScale} from '~/constants/theme';

import {PublicHeader} from '../molecules/PublicHeader';
import RegisterInput from '../molecules/RegisterInput';
import MainButton from '../molecules/MainButton';
import PublicButton from '../atoms/PublicButton';
import {STRING} from '~/constants/ko';

interface Props extends TextInputProps {
  isCertified?: boolean;
  email?: string;
  pwd?: string;
  checkPwd?: string;
  nick?: string;
  emailValid?: boolean;
  pwdValid?: boolean;
  checkPwdValid?: boolean;
  nickValid?: boolean;
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
          centerTxt={'회원가입'}
          onPressLeft={props.onPressLeft}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>가입하고 토핑업에서</Text>
        <Text style={styles.title}>
          <Text style={styles.coloredTitle}>당신을 레벨업</Text>하세요!
        </Text>
      </View>
      <View>
        <RegisterInput
          type={'default'}
          label={'이메일'}
          placeholder={STRING.fillEmail}
          value={props.email}
          isValid={props.emailValid}
          onChangeText={props.onChangeEmail}
          onPressIcon={props.onPressEmailIcon}
          errorMsg={props.emailValid === undefined ? null : props.emailErrMsg}
        />
        <RegisterInput
          type={'password'}
          label={'비밀번호'}
          placeholder={STRING.defaultPwdInput}
          value={props.pwd}
          isValid={props.pwdValid}
          onChangeText={props.onChangePwd}
          errorMsg={
            props.pwdValid === undefined
              ? STRING.defaultPwdErrMsg
              : props.pwdErrMsg
          }
        />
        <RegisterInput
          label={'비밀번호 확인'}
          type={'password'}
          placeholder={STRING.defaultCheckPwd}
          value={props.checkPwd}
          isValid={props.checkPwdValid}
          onChangeText={props.onChangeCheckPwd}
          errorMsg={
            props.checkPwdValid === undefined ? null : props.checkPwdErrMsg
          }
        />
        <RegisterInput
          type={'default'}
          label={'닉네임'}
          placeholder={STRING.defaultNick}
          value={props.nick}
          isValid={props.nickValid}
          onChangeText={props.onChangeNick}
          onPressIcon={props.onPressNickIcon}
          errorMsg={props.nickValid === undefined ? null : props.nickErrMsg}
        />
      </View>
      <View style={styles.buttonContainer}>
        {props.emailValid &&
        props.pwdValid &&
        props.checkPwdValid &&
        props.nickValid &&
        props.isCertified ? (
          <MainButton title={props.btnTxt} onPress={props.onPressButton} />
        ) : (
          <PublicButton
            disabled={true}
            title={props.btnTxt}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={undefined}
          />
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
  titleContainer: {
    paddingVertical: maxScale(26),
  },
  title: {
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
