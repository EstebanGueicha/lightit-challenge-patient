import { Platform, StyleSheet } from 'react-native';
import { COLORS, FONT, SPACING } from '@/styles';

const HomeStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_LIGHT,
  },
  contentContainer: {
    height: '100%',
  },
  filterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.SPACE_3,
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal:
      Platform.OS === 'ios' ? SPACING.SPACE_4 : SPACING.SPACE_3,
  },
  patientsList: {
    flexDirection: 'column',
    gap: SPACING.SPACE_5,
    paddingBottom: 500,
    paddingHorizontal:
      Platform.OS === 'ios' ? SPACING.SPACE_4 : SPACING.SPACE_3,
    paddingTop: 20,
  },
  text: {
    color: COLORS.DARK_TEXT,
    fontFamily: FONT.Manrope_400,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeStyles;
