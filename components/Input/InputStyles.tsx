import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../styles';

const InputStyles = StyleSheet.create({
  errorText: {
    color: COLORS.ERROR,
    fontFamily: FONT.Manrope_400,
    fontSize: 12,
    marginTop: 6,
  },
  input: {
    flexGrow: 1,
    fontFamily: FONT.Manrope_400,
    maxHeight: 100,
    minHeight: 44,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 100,
    minHeight: 44,
    paddingRight: 18,
  },
  label: {
    fontFamily: FONT.Manrope_500,
    fontSize: 12,
    marginBottom: 6,
  },
});

export default InputStyles;
