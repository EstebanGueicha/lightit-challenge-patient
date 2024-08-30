import React, { FC } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input } from '@/components/Input';
import { Ionicons } from '@expo/vector-icons';

import styles from './HeaderStyles';

interface HeaderProps {
  search: string;
  onChange: (text: string) => void;
}

const Header: FC<HeaderProps> = ({ search, onChange }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        { paddingTop: Platform.OS === 'ios' ? insets.top : insets.top + 32 },
      ]}
    >
      <View>
        <Text style={styles.title}>Welcome Light-it 👋 </Text>
        <Input
          icon={<Ionicons name="search" size={16} />}
          placeholder="Search patient"
          rightIcon={
            search && (
              <TouchableOpacity onPress={() => onChange('')}>
                <Ionicons name="close" size={16} />
              </TouchableOpacity>
            )
          }
          value={search}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
};

export default Header;
