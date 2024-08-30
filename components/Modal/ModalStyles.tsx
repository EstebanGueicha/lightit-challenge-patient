import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '@/styles';

const ModalStyles = StyleSheet.create({
  headerModal: {
    alignItems: 'center',
    borderBottomColor: COLORS.GRAY,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: 'relative',
  },
  modal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  modalContent: {
    backgroundColor: 'rgba(40, 50, 68, 0.60)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: COLORS.DARK_TEXT,
    fontFamily: FONT.Manrope_600,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ModalStyles;
