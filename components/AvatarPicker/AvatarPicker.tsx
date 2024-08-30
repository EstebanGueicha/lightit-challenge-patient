import { FC, useEffect, useState } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from '../Avatar';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/styles';

import styles from './AvatarPickerStyles';

interface AvatarPickerProps {
  url?: string | null;
  callbackUrl: (url: string) => void;
  isLoading?: boolean;
}

const AvatarPicker: FC<AvatarPickerProps> = ({
  url,
  callbackUrl,
  isLoading,
}) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (url) setImage(url);
  }, [url]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      callbackUrl(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Avatar url={image} />
      <TouchableOpacity
        disabled={isLoading}
        style={styles.editButton}
        onPress={pickImage}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Ionicons color={COLORS.GRAY_LIGHT} name="pencil" size={16} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AvatarPicker;
