import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import First from '../organisms/Onboarding/First';
import Last from '../organisms/Onboarding/Last';
import Second from '../organisms/Onboarding/Second';
import Third from '../organisms/Onboarding/Third';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        <First />
        <Second />
        <Third />
        <Last />
      </ScrollView>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
