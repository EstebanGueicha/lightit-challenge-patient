import React, { FC } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Patient } from '@/types';
import { WebLink } from '../WebLink';
import { Avatar } from '../Avatar';

import styles from './CardStyles';
import { CollapseText } from '../CollapseText';

interface CardProps {
  patient: Patient;
  onPressCard: (patient: Patient) => void;
}

const Card: FC<CardProps> = ({ patient, onPressCard }) => {
  return (
    <TouchableOpacity onPress={() => onPressCard(patient)}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Avatar url={patient?.avatar} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoHeader}>
            <Text numberOfLines={1} style={styles.title}>
              {patient?.name}
            </Text>
            <WebLink url={patient?.website} />
          </View>
          <CollapseText text={patient?.description} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
