import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { COLORS, FONT } from '../../styles';

export const ToastConfig = {
  errorToast: ({ text1 }: any) => (
    <View style={styles.container}>
      <Ionicons color={COLORS.ERROR} name="alert-circle-outline" size={24} />
      <View style={styles.content}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.text}>{text1}</Text>
      </View>
    </View>
  ),
  successToast: ({ text1 }: any) => (
    <View style={styles.container}>
      <Ionicons
        color={COLORS.SUCCESS}
        name="checkmark-circle-outline"
        size={24}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Success</Text>
        <Text style={styles.text}>{text1}</Text>
      </View>
    </View>
  ),
};

export const showToast = (type: string, text1: string) => {
  Toast.show({
    type,
    text1,
    position: 'top',
  });
};

const styles = StyleSheet.create({
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
