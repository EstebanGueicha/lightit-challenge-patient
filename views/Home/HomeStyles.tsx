import { Platform, StyleSheet } from 'react-native';
import { COLORS, FONT, SPACING } from '../../styles';

const HomeStyles = StyleSheet.create({
  addNewPatientContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.SPACE_3,
    justifyContent: 'center',
    marginVertical: 16,
  },
  container: {
    backgroundColor: COLORS.BACKGROUND_LIGHT,
  },
  headerContainer: {
    backgroundColor: COLORS.PRIMARY,
    paddingBottom: 32,
    paddingHorizontal:
      Platform.OS === 'ios' ? SPACING.SPACE_4 : SPACING.SPACE_3,
  },
  patientsList: {
    flexDirection: 'column',
    gap: SPACING.SPACE_5,
    paddingBottom: 500,
    paddingHorizontal:
      Platform.OS === 'ios' ? SPACING.SPACE_4 : SPACING.SPACE_3,
    paddingTop: 16,
  },
  searchInput: {
    backgroundColor: 'white',
    borderColor: '#A2A6B5',
    borderRadius: 12,
    borderWidth: 1,
    fontFamily: FONT.Manrope_400,
    fontSize: 16,
    padding: 15,
    width: '100%',
  },
  title: {
    color: COLORS.GRAY_LIGHT,
    fontFamily: FONT.Manrope_800,
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 16,
  },
});

export default HomeStyles;
