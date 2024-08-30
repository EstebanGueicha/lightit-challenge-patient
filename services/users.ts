import { Patient } from '@/types';
import { API } from './api';

export const getUsers = async (): Promise<Patient[]> => {
  return API.get('/users')
    .then((res) => res.data)
    .catch((err) => {
      throw err.response;
    });
};

export const updateUser = async (user: Patient): Promise<any> => {
  return API.put(`/users/${user.id}`, user)
    .then((res) => res.data)
    .catch((err) => {
      throw err.response;
    });
};

export const createUser = async (user: Patient): Promise<any> => {
  return API.post('/users', user)
    .then((res) => res.data)
    .catch((err) => {
      throw err.response;
    });
};

export const deleteUser = async (id: string): Promise<any> => {
  return API.delete(`/users/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err.response;
    });
};
