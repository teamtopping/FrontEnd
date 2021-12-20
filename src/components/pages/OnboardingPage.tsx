import React from 'react';
import {Text} from 'react-native';
import {PublicHeader} from '../molecules/PublicHeader';
import MainButton from '@components/molecules/MainButton';
import {IMAGES} from '@constants/images';

const OnBoardingPage = () => {
  return (
    <>
      <PublicHeader
        leftImg={IMAGES.icBack}
        rightTxt={'건너뛰기'}
        onPressRight={() => {}}
      />
      <Text>토핑업!</Text>
      <Text>나의 커리어 업!</Text>
      <MainButton title={'다음'} onPress={() => {}} />
    </>
  );
};

export default OnBoardingPage;
