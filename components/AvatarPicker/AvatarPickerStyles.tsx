import { StyleSheet } from 'react-native';
import { COLORS } from '@/styles';

const ModalFormStyles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  editButton: {
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20,
    bottom: -5,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    right: -10,
    width: 40,
  },
});

export default ModalFormStyles;
