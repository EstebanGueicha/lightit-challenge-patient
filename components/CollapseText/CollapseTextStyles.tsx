import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '@/styles';

const CardStyles = StyleSheet.create({
  showContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 4,
  },
  subtitle: {
    flexShrink: 1,
    fontFamily: FONT.Manrope_400,
    fontSize: 14,
  },
  textMore: {
    color: COLORS.LINK_TEXT,
    fontFamily: FONT.Manrope_400,
    fontSize: 14,
  },
});

export default CardStyles;
