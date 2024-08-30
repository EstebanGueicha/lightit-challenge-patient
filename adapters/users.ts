import { Patient } from '@/types';
import { sortArrayBy } from '@/utils/sortArray';

export const formatUsers = (users: Patient[]) => {
  return sortArrayBy(users, 'createdAt', false);
};
