import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {AuthStackParamsList} from '../../navigations/AuthNavigator';
import {RootStackParamsList} from '../../navigations/RootNavigator';
import {screenName} from '../../navigations/constants/screenName';
import AuthLoadingTemplate from '../templates/AuthLoadingTemplate';

export type AuthLoadingPageNP = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamsList, screenName.AuthLoadingPage>,
  StackNavigationProp<RootStackParamsList>
>;

const AuthLoadingPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<AuthLoadingPageNP>();
  console.log('here');
  return <AuthLoadingTemplate text={'AuthLoading'} />;
};

export default AuthLoadingPage;
