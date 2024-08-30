import { StyleSheet } from 'react-native';
import { FONT } from '@/styles';

const ToasterStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  content: {
    flexDirection: 'column',
    gap: 8,
    width: '90%',
  },
  text: {
    fontFamily: FONT.Manrope_400,
    fontSize: 14,
  },
  title: {
    fontFamily: FONT.Manrope_600,
    fontSize: 16,
  },
});

export default ToasterStyles;
