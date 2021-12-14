import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IMAGES} from '@constants/images';

import {PublicHeader} from '../molecules/PublicHeader';
import RegisterInput from '../molecules/RegisterInput';
import MainButton from '../molecules/MainButton';
import {colors, maxScale} from '~/constants/theme';

const RegisterTemplate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PublicHeader
          leftImg={IMAGES.icBack}
          centerTxt={'회원가입'}
          // TODO:: Header_onPressLeft()
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
          errorMsg={'?????????????????'}
        />
        <RegisterInput
          type={'password'}
          label={'비밀번호'}
          errorMsg={'?????????????????'}
        />
        <RegisterInput
          label={'비밀번호 확인'}
          type={'password'}
          errorMsg={'?'}
        />
        <RegisterInput
          type={'default'}
          label={'닉네임'}
          errorMsg={'?????????????????'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <MainButton title={'다음'} onPress={() => console.log('?')} />
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
    paddingTop: maxScale(40),
  },
});
