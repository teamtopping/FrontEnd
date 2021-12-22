import React from 'react';
import {View, StyleSheet} from 'react-native';
import Onboarding from '../templates/Onboarding';

const LandingPage = () => {
  return (
    <View style={style.container}>
      {/* If run the app for the first time */}
      <Onboarding />
    </View>
  );
};

export default LandingPage;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
