import { StyleSheet } from 'react-native';
import { COLORS, FONT, SPACING } from '../../styles';

const CardStyles = StyleSheet.create({
  avatar: {
    borderRadius: 83,
    height: 83,
    width: 83,
  },
  avatarContainer: {
    backgroundColor: 'white',
    borderColor: COLORS.GRAY,
    borderRadius: 85,
    borderWidth: 1,
    height: 85,
    position: 'absolute',
    right: 0,
    top: -20,
    width: 85,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 16,
    borderColor: COLORS.GRAY,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 26,
    borderWidth: 1,

    flexDirection: 'row',
    gap: SPACING.SPACE_3,
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    width: '100%',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    width: '100%',
  },
  infoHeader: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    width: '70%',
  },
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
  title: {
    color: COLORS.PRIMARY,
    flexShrink: 1,
    fontFamily: FONT.Manrope_700,
    fontSize: 14,
  },
});

export default CardStyles;
