import { StyleSheet } from 'react-native';
import { COLORS, FONT, SPACING } from '@/styles';

const WebLinkStyles = StyleSheet.create({
  textLink: {
    color: COLORS.LINK_TEXT,
    flexShrink: 1,
    fontFamily: FONT.Manrope_400,
    fontSize: 14,
  },
  webLinkContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: SPACING.SPACE_2,
  },
});

export default WebLinkStyles;
