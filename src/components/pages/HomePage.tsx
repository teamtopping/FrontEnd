import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamsList} from '~/navigations/RootNavigator';
import {TrunkStackParamsList} from '~/navigations/TrunkStackNavigator';
import {screenName} from '~/navigations/constants/screenName';
import HomeTemplate from '../templates/HomeTemplate';

export type HomePageNP = CompositeNavigationProp<
  StackNavigationProp<TrunkStackParamsList, screenName.HomePage>,
  StackNavigationProp<RootStackParamsList>
>;

const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<HomePageNP>();
  return <HomeTemplate text={'Home'} />;
};

export default HomePage;
