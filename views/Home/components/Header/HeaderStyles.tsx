import { Platform, StyleSheet } from 'react-native';
import { COLORS, FONT, SPACING } from '@/styles';

const HeaderStyles = StyleSheet.create({
  filterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.SPACE_3,
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal:
      Platform.OS === 'ios' ? SPACING.SPACE_4 : SPACING.SPACE_3,
  },
  headerContainer: {
    backgroundColor: COLORS.PRIMARY,
    paddingBottom: 32,
    paddingHorizontal:
      Platform.OS === 'ios' ? SPACING.SPACE_4 : SPACING.SPACE_3,
  },

  title: {
    color: COLORS.GRAY_LIGHT,
    fontFamily: FONT.Manrope_800,
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 16,
  },
});

export default HeaderStyles;
