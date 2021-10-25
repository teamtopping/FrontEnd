import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const colors = {
  /** Text Color */
  HighEmphasis: '#FFFFFF',
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
