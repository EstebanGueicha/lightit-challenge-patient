import React, { FC, useState } from 'react';
import { Alert, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useUploadImage } from '@/hooks/useUploadImage';
import { Patient, ToastType } from '@/types';
import { createUser, deleteUser, updateUser } from '@/services/users';
import { showToast } from '@/components/Toaster';
import AvatarPicker from '@/components/AvatarPicker/AvatarPicker';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { COLORS } from '@/styles';

import styles from './ModalFormStyles';

interface ModalFormProps {
  patient?: Patient | null;
  onClose: () => void;
  onRefetch: (state?: string) => void;
}

const websiteRegex = /^(http|https):/;

const patientValidationSchema = yup.object({
  name: yup.string().required('Name is required'),
  website: yup
    .string()
    .required('Website is required')
    .matches(websiteRegex, 'Invalid website'),
  description: yup.string().required('Description is required'),
});

const ModalForm: FC<ModalFormProps> = ({ patient, onClose, onRefetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);
  const [imageAvatar, setImageAvatar] = useState<string | null>(null);
  const { onUploadImage, isLoading: isLoadingImage } = useUploadImage();
  const isNewPatient = !patient;

  const initialValues: Patient = {
    name: patient?.name || '',
    website: patient?.website || '',
    description: patient?.description || '',
    avatar: patient?.avatar || '',
    id: patient?.id || '',
    createdAt: patient?.createdAt || '',
  };

  const handleSubmitForm = async (values: Patient) => {
    try {
      setIsLoading(true);

      const dataPatient = {
        ...values,
      };

      if (imageAvatar) {
        const newUrlAvatar = await onUploadImage(imageAvatar);

        if (newUrlAvatar) dataPatient.avatar = newUrlAvatar;
      }

      if (isNewPatient) {
        dataPatient.createdAt = new Date().toISOString();
        await createUser(dataPatient);
      } else {
        await updateUser(dataPatient);
      }
      showToast(
        ToastType.SUCCESS,
        `Patient ${isNewPatient ? 'created' : 'updated'} successfully`
      );
      onClose();
      onRefetch(isNewPatient ? 'created' : 'updated');
    } catch (error) {
      console.log(error);
      showToast(
        ToastType.ERROR,
        `Error ${isNewPatient ? 'creating' : 'updating'} patient, try again later`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoadingDelete(true);
      await deleteUser(patient?.id || '');
      onClose();
      onRefetch('deleted');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  const handleDeleteAlert = () => {
    Alert.alert(
      'Delete patient',
      'Are you sure you want to delete this patient?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: handleDelete },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <AvatarPicker
          callbackUrl={(value) => setImageAvatar(value)}
          isLoading={isLoadingImage}
          url={patient?.avatar}
        />
      </View>
      <Formik
        initialValues={initialValues}
        validationSchema={patientValidationSchema}
        onSubmit={handleSubmitForm}
      >
        {({ handleChange, handleSubmit, values, errors, isValid, dirty }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Input
                error={errors.name}
                label="Name"
                placeholder="Carlos"
                value={values.name}
                onChangeText={handleChange('name')}
              />
              <Input
                error={errors.website}
                inputMode="url"
                keyboardType="url"
                label="Website"
                placeholder="Insert website"
                value={values.website}
                onChangeText={handleChange('website')}
              />
              <Input
                error={errors.description}
                label="Description"
                multiline={true}
                numberOfLines={4}
                placeholder="Insert description"
                value={values.description}
                onChangeText={handleChange('description')}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                disabled={!isValid || isLoadingDelete || !dirty}
                loading={isLoading}
                text="Submit"
                onPress={handleSubmit}
              />
              {!isNewPatient && (
                <Button
                  backgroundColor={COLORS.ERROR}
                  disabled={isLoading}
                  indicatorColor={COLORS.ERROR}
                  loading={isLoadingDelete}
                  text="Delete"
                  textColor={COLORS.ERROR}
                  variant="outlined"
                  onPress={handleDeleteAlert}
                />
              )}
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ModalForm;
