import { FC } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal as ModalRN,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

import styles from './ModalStyles';
import Toast from 'react-native-toast-message';
import { ToastConfig } from '../Toaster';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  height: number;
  visible: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({
  children,
  title,
  height,
  visible,
  onClose,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <ModalRN
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <BlurView intensity={8} style={StyleSheet.absoluteFill} tint="default" />

      <View style={styles.modalContent}>
        <View
          style={[
            styles.modal,
            { paddingBottom: insets.bottom + 32, height: height },
          ]}
        >
          <View style={styles.headerModal}>
            <TouchableOpacity
              style={{ position: 'absolute', left: 16, top: 16 }}
              onPress={onClose}
            >
              <Ionicons name="close" size={24} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={{ paddingVertical: 16 }}>{children}</View>
        </View>
      </View>
      <Toast config={ToastConfig} />
    </ModalRN>
  );
};

export default Modal;
