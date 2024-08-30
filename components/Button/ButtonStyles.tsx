import { StyleSheet } from 'react-native';
import { FONT } from '@/styles';

const buttonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    flexShrink: 1,
    gap: 4,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonText: {
    fontFamily: FONT.Manrope_600,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default buttonStyles;
