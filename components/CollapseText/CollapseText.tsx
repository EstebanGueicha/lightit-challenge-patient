import React, { FC, useEffect, useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

import styles from './CollapseTextStyles';

interface CollapseTextProps {
  text: string;
}

const CollapseText: FC<CollapseTextProps> = ({ text }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const value = showMore ? contentHeight : 40;

    Animated.timing(animatedHeight, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [showMore]);

  const onTextLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;

    setContentHeight(height);
  };

  return (
    <View>
      <Animated.View style={{ height: animatedHeight }}>
        <Text numberOfLines={showMore ? 0 : 2} style={styles.subtitle}>
          {text}
        </Text>
        <Text
          style={[styles.subtitle, { position: 'absolute', opacity: 0 }]}
          onLayout={onTextLayout}
        >
          {text}
        </Text>
      </Animated.View>

      {contentHeight > 40 && (
        <View style={styles.showContainer}>
          <TouchableOpacity onPress={() => setShowMore((prev) => !prev)}>
            <Text style={styles.textMore}>
              {showMore ? 'View less' : 'View more'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CollapseText;
