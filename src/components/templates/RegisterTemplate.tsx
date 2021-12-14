import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IMAGES} from '@constants/images';

import {PublicHeader} from '../molecules/PublicHeader';
import RegisterInput from '../molecules/RegisterInput';
import MainButton from '../molecules/MainButton';

const RegisterTemplate = () => {
  return (
    <View style={styles.container}>
      <PublicHeader
        leftImg={IMAGES.icBack}
        centerTxt={'회원가입'}
        //TODO:: Header_onPressLeft()
      />
      <Text>가입하고 토핑업에서</Text>
      <Text>당신을 레벨업하세요!</Text>
      <RegisterInput label={'이메일'} />
      <RegisterInput label={'비밀번호'} />
      <RegisterInput label={'비밀번호 확인'} />
      <RegisterInput label={'닉네임'} />
      {/* BUTTON */}
      <MainButton title={'다음'} onPress={() => console.log('?')} />
    </View>
  );
};

export default RegisterTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
