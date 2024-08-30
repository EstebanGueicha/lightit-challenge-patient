import { upload } from 'cloudinary-react-native';
import { Cloudinary } from '@cloudinary/url-gen';
import { useState } from 'react';
import { ToastType } from '@/types';
import { showToast } from '@/components/Toaster';

const CLOUDNAME = process.env.EXPO_PUBLIC_CLOUD_NAME;
const UPLOAD_PRESET = process.env.EXPO_PUBLIC_UPLOAD_PRESET;

export const useUploadImage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadImage = async (urlImage: string) => {
    let newUrlImage = '';

    try {
      setIsLoading(true);

      const cld = new Cloudinary({
        cloud: {
          cloudName: CLOUDNAME,
        },
        url: {
          secure: true,
        },
      });
      const options = {
        upload_preset: UPLOAD_PRESET,
        unsigned: true,
      };

      await upload(cld, {
        file: urlImage,
        options: options,
        callback: (error: any, response: any) => {
          newUrlImage = response.url;
          if (error) throw new Error('Error uploading image');
        },
      });

      return newUrlImage;
    } catch (error) {
      console.log('error image', error);
      showToast(ToastType.ERROR, `Error uploading image, try again later`);

      return newUrlImage;
    } finally {
      setIsLoading(false);
    }
  };

  return { onUploadImage: handleUploadImage, isLoading };
};
