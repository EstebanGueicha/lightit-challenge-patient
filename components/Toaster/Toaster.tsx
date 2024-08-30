import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import { COLORS } from '@/styles';

import styles from './ToasterStyles';

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
