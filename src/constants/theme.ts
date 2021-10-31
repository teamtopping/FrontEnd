import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const colors = {
  // Main
  MAIN: '#3C4650',

  // Sub
  SUB_SKYBLUE: '#0FB9E1',
  SUB_PURPLE: '#AF6EFF',
  SUB_YELLOW: '#FFDC55',
  SUB_PINK: '#FF5A96',

  // Gray
  GRAY01: '#212224',
  GRAY02: '#404244',
  GRAY03: '#707175',
  GRAY04: '#A5A7AB',
  GRAY05: '#D8D9DE',
  GRAY06: '#F4F5F5',
  FFF: '#FFF',

  SUCCESS: '#4BAF69',
  ERROR_ALERT: '#FF5555',
  WARNING: '#FA833D',
  INFORMATION: '#4696F5',
};

export const SMALL_DEVICE = {
  width: 380,
  height: 700,
};
const RATIO = 1.1;

export const maxScale = (size: number) => {
  return scale(size) <= scale(size) * RATIO ? scale(size) : scale(size) * RATIO;
};

/** 목적_폰트크기_폰트 앞글자_폰트타입 */
export const ScaledTextStyles = StyleSheet.create({
  button1_14_n_m: {
    fontFamily: 'Noto Sans KR',
    fontSize: maxScale(14),
    lineHeight: maxScale(18),
  },
});
