import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import {IMAGES} from '@constants/images';
import {STRING} from '@constants/ko';
import {maxScale} from '@constants/theme';

import {PublicHeader} from '@components/molecules/PublicHeader';
import MainButton from '@components/molecules/MainButton';

const {width} = Dimensions.get('window');
const screenWidth = width;

const Last = () => {
  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <PublicHeader
          leftImg={IMAGES.icBack}
          onPressLeft={() => {
            console.log('third page로 이동');
          }}
        />
      </View>
      <Image source={IMAGES.lastOnBoard} />
      <View style={styles.component}>
        <View style={styles.introContainer}>
          <Text style={styles.intro}>{STRING.myExpereience}</Text>
          <Text style={styles.intro}>{STRING.shareEx}</Text>
        </View>
      </View>
      <Image source={IMAGES.fourFourth} />
      <View style={styles.component}>
        <MainButton
          title={STRING.start}
          onPress={() => {
            console.log('finish');
          }}
        />
      </View>
    </View>
  );
};

export default Last;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
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
