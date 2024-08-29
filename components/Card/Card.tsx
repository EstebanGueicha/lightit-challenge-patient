import React, { FC, useState } from 'react';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';
import { Patient } from '../../types';

import styles from './CardStyles';
import { WebLink } from '../WebLink';

interface CardProps {
  patient: Patient;
  onPressCard: (patient: Patient) => void;
}

const blurhash = 'L7S?DXt7_1xut8fQj[ay~Voe9aWC';

const Card: FC<CardProps> = ({ patient, onPressCard }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <TouchableOpacity onPress={() => onPressCard(patient)}>
      <View style={styles.cardContainer}>
        <View style={styles.avatarContainer}>
          {patient?.avatar && (
            <Image
              contentFit="cover"
              placeholder={{ blurhash }}
              source={patient?.avatar}
              style={styles.avatar}
            />
          )}
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoHeader}>
            <Text numberOfLines={1} style={styles.title}>
              {patient?.name}
            </Text>
            <WebLink url={patient?.website} />
          </View>

          <Text numberOfLines={showMore ? 0 : 2} style={styles.subtitle}>
            {patient?.description}
          </Text>
          <View style={styles.showContainer}>
            <TouchableOpacity onPress={() => setShowMore((prev) => !prev)}>
              <Text style={styles.textMore}>
                {showMore ? 'View less' : 'View more'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
