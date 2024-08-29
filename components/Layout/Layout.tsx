import React, { FC } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../styles';

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Layout: FC<LayoutProps> = ({ children, backgroundColor }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: backgroundColor || COLORS.BACKGROUND_LIGHT,
        }}
      >
        <StatusBar
          backgroundColor={backgroundColor || COLORS.BACKGROUND_LIGHT}
          barStyle="dark-content"
        />
        {children}
      </View>
    </ScrollView>
  );
};

export default Layout;
