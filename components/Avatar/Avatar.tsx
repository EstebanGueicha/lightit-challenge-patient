import { Image } from 'expo-image';
import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { COLORS } from '@/styles';
import { Ionicons } from '@expo/vector-icons';

import styles from './AvatarStyles';

interface AvatarProps {
  url?: string | null;
}

const Avatar: FC<AvatarProps> = ({ url }) => {
  const [image, setImage] = useState<string | null>(null);
  const [errorImage, setErrorImage] = useState<boolean>(false);

  useEffect(() => {
    if (url) {
      setErrorImage(false);
      setImage(url);
    }
  }, [url]);

  return (
    <View style={styles.avatarContainer}>
      {errorImage ? (
        <MaterialIcons color={COLORS.ERROR} name="error-outline" size={24} />
      ) : image ? (
        <Image
          contentFit="cover"
          source={image}
          style={styles.avatar}
          onError={() => setErrorImage(true)}
        />
      ) : (
        <Ionicons color={COLORS.GRAY} name="camera-outline" size={24} />
      )}
    </View>
  );
};

export default Avatar;
