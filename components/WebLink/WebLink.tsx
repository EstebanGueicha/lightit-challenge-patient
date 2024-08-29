import React, { FC } from 'react';
import * as Linking from 'expo-linking';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../styles';

import styles from './WebLinkStyles';

interface WebLinkProps {
  url: string;
}

const WebLink: FC<WebLinkProps> = ({ url }) => {
  const urlText = url.replace(/(^\w+:|^)\/\//, '');

  const handlePress = async () => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={styles.webLinkContainer} onPress={handlePress}>
      <Text numberOfLines={1} style={styles.textLink}>
        {urlText}
      </Text>
      <Ionicons color={COLORS.LINK_TEXT} name="planet-outline" size={16} />
    </TouchableOpacity>
  );
};

export default WebLink;
