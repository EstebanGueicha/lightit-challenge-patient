import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { usePatients } from '@/context/PatientsProvider';
import { Card } from '@/components/Card';
import { Patient, ToastType } from '@/types';
import { Modal } from '@/components/Modal';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { showToast, ToastConfig } from '@/components/Toaster';
import { Button } from '@/components/Button';
import { COLORS } from '@/styles';
import { sortArrayBy } from '@/utils/sortArray';
import { ModalForm } from './components/ModalForm';
import { Header } from './components/Header';

import styles from './HomeStyles';

const Home = () => {
  const { height } = useWindowDimensions();
  const { patients, getPatients, loading } = usePatients();
  const [showModal, setShowModal] = useState(false);
  const [patientSelected, setPatientSelected] = useState<Patient | null>(null);
  const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc');
  const [search, setSearch] = useState('');

  const filterPatients = useMemo(() => {
    const patientsFiltered = patients;

    sortArrayBy(patientsFiltered, 'createdAt', sortBy === 'desc');

    if (search === '') return patientsFiltered;

    return patientsFiltered.filter((patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [patients, sortBy, search]);

  const handlePressPatients = (patient?: Patient) => {
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
      <Header search={search} onChange={setSearch} />
      <View style={styles.contentContainer}>
        <View style={styles.filterContainer}>
          <Button
            rightIcon={<Ionicons name="add" size={16} />}
            text="New patient"
            variant="outlined"
            onPress={() => handlePressPatients()}
          />
          <TouchableOpacity
            onPress={() =>
              setSortBy((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            }
          >
            <Octicons
              color={COLORS.PRIMARY}
              name={`sort-${sortBy}`}
              size={24}
            />
          </TouchableOpacity>
        </View>
        {loading && patients.length === 0 ? (
          <ActivityIndicator color={COLORS.PRIMARY} size="large" />
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl
                colors={[COLORS.PRIMARY]}
                refreshing={loading}
                tintColor={COLORS.PRIMARY}
                onRefresh={getPatients}
              />
            }
          >
            <View style={styles.patientsList}>
              {filterPatients.length > 0 ? (
                filterPatients.map((patient) => (
                  <Card
                    key={patient.id}
                    patient={patient}
                    onPressCard={handlePressPatients}
                  />
                ))
              ) : (
                <Text style={styles.text}>No patients found</Text>
              )}
            </View>
          </ScrollView>
        )}
      </View>

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
