import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import {IMAGES} from '@constants/images';
import {STRING} from '@constants/ko';
import {maxScale} from '@constants/theme';

import {PublicHeader} from '@components/molecules/PublicHeader';
import MainButton from '@components/molecules/MainButton';

const {width} = Dimensions.get('window');
const screenWidth = width;

const First = () => {
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <PublicHeader
          rightTxt={STRING.skip}
          onPressRight={() => {
            console.log('last page로 이동');
          }}
        />
      </View>
      <View style={styles.component}>
        <Image source={IMAGES.firstOnBoarding} />
      </View>
      <View style={styles.component}>
        <View style={styles.introContainer}>
          <Text style={styles.intro}>{STRING.toppingup}</Text>
          <Text style={styles.intro}>{STRING.careerup}</Text>
        </View>
      </View>
      <View style={styles.component}>
        <MainButton
          title={STRING.next}
          onPress={() => {
            console.log('2페이지로 이동');
          }}
        />
      </View>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  component: {
    width: '90%',
  },
  introContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  intro: {
    fontSize: maxScale(20),
    fontWeight: '700',
  },
});
