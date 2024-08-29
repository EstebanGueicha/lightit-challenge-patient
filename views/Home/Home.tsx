import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { usePatients } from '../../context/PatientsProvider';
import { Card } from '../../components/Card';
import styles from './HomeStyles';
import { Patient, ToastType } from '../../types';
import { Modal } from '../../components/Modal';
import { ModalForm } from '../ModalForm';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { showToast, ToastConfig } from '../../components/Toaster';
import Toast from 'react-native-toast-message';
import { Button } from '../../components/Button';

const Home = () => {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const { patients, getPatients } = usePatients();
  const [showModal, setShowModal] = useState(false);
  const [patientSelected, setPatientSelected] = useState<Patient | null>(null);

  const handlePressPatients = (patient?: Patient) => {
    // showToast(ToastType.SUCCESS, `Patient  successfully`);
    setShowModal(true);
    setPatientSelected(patient || null);
  };

  const handleClose = () => {
    setShowModal(false);
    setPatientSelected(null);
  };

  const handleRefetch = (state?: string) => {
    if (state) {
      showToast(ToastType.SUCCESS, `Patient ${state} successfully`);
    }
    getPatients();
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.headerContainer,
          { paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 32 },
        ]}
      >
        <View>
          <Text style={styles.title}>Welcome Back</Text>
          <TextInput placeholder="Search patient" style={styles.searchInput} />
        </View>
      </View>
      <View style={styles.addNewPatientContainer}>
        <Button
          rightIcon={<Ionicons name="add" size={16} />}
          text="Create new patient"
          variant="outlined"
          onPress={() => handlePressPatients()}
        />
      </View>
      <ScrollView>
        <View style={styles.patientsList}>
          {patients.map((patient) => (
            <Card
              key={patient.id}
              patient={patient}
              onPressCard={handlePressPatients}
            />
          ))}
        </View>
      </ScrollView>
      <Toast config={ToastConfig} />
      {showModal && (
        <Modal
          height={height - 100}
          title="Patient Detail"
          visible={showModal}
          onClose={() => handleClose()}
        >
          <ModalForm
            patient={patientSelected}
            onClose={handleClose}
            onRefetch={handleRefetch}
          />
        </Modal>
      )}
    </View>
  );
};

export default Home;
