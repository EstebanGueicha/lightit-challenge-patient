import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUsers } from '@/services/users';
import { Patient } from '@/types';
import { formatUsers } from '@/adapters/users';

const defaultValue = {
  loading: false,
  patients: [] as Patient[],
  error: '',
  getPatients: async () => {},
};
const PatientsContext = createContext(defaultValue);

export const PatientsProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string>('');

  const getPatients = async () => {
    try {
      setLoading(true);
      const responseUsers = await getUsers();

      setPatients(formatUsers(responseUsers));
      // fetch patients
    } catch (error) {
      console.log('error', error);
      setError('Error fetching patients, please try again later');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <PatientsContext.Provider
      value={{
        loading,
        patients,
        error,
        getPatients,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatients = () => useContext(PatientsContext);
