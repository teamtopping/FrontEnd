import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {IMAGES} from '@constants/images';
import {STRING} from '~/constants/ko';
import {maxScale} from '~/constants/theme';

import {PublicHeader} from '../molecules/PublicHeader';
import MainButton from '@components/molecules/MainButton';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <PublicHeader
        leftImg={IMAGES.icBack}
        rightTxt={STRING.skip}
        onPressLeft={() => {
          console.log('on press left button');
        }}
        onPressRight={() => {
          console.log('on press right button');
        }}
      />
      <View>
        <Image source={IMAGES.firstOnBoarding} />
      </View>
      <Text style={styles.intro}>
        <Text>{STRING.toppingup}</Text>
        <Text>{STRING.careerup}</Text>
      </Text>
      <MainButton
        title={STRING.next}
        onPress={() => {
          console.log('on press bottom button');
        }}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: maxScale(20),
  },
  imgContainer: {
    width: maxScale(320),
    height: maxScale(320),
  },
  intro: {
    fontSize: maxScale(20),
    fontWeight: '700',
  },
});
