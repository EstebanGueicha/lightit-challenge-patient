import { Platform, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../styles';

const ModalFormStyles = StyleSheet.create({
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
    width: 85,
  },
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
