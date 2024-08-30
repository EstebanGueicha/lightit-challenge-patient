import { Platform, StyleSheet } from 'react-native';
import { SPACING } from '@/styles';

const ModalFormStyles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'column',
    gap: SPACING.SPACE_3,
  },
  container: {
    height: '100%',
    paddingHorizontal:
      Platform.OS === 'ios' ? SPACING.SPACE_4 : SPACING.SPACE_3,
  },
  formContainer: {
    flexDirection: 'column',
    height: '80%',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'column',
    gap: SPACING.SPACE_4,
  },
});

export default ModalFormStyles;
