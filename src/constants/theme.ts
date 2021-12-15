import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const colors = {
  PRIMARY_BLACK: '#181A18',
  PRIMARY_WHITE: '#FCFCFC',

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
export const textStyles = StyleSheet.create({
  /** Regular */
  font_NR22: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: maxScale(22),
    lineHeight: maxScale(32),
  },
  font_NR20: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: maxScale(20),
    lineHeight: maxScale(29),
  },
  font_NR16: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: maxScale(16),
    lineHeight: maxScale(23),
  },
  font_NR14: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: maxScale(14),
    lineHeight: maxScale(20),
  },
  font_NR12: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: maxScale(12),
    lineHeight: maxScale(17),
  },

  /** Medium */
  font_NM22: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: maxScale(22),
    lineHeight: maxScale(32),
  },
  font_NM20: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: maxScale(20),
    lineHeight: maxScale(29),
  },
  font_NM16: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: maxScale(16),
    lineHeight: maxScale(23),
  },
  font_NM14: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: maxScale(14),
    lineHeight: maxScale(20),
  },
  font_NM12: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: maxScale(12),
    lineHeight: maxScale(17),
  },
  /** Bold */
  font_NB22: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: maxScale(22),
    lineHeight: maxScale(32),
  },
  font_NB20: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: maxScale(20),
    lineHeight: maxScale(29),
  },
  font_NB16: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: maxScale(16),
    lineHeight: maxScale(23),
  },
  font_NB14: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: maxScale(14),
    lineHeight: maxScale(20),
  },
  font_NB12: {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: maxScale(12),
    lineHeight: maxScale(17),
  },
});
