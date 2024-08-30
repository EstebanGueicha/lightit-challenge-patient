import React, { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '@/styles';

import styles from './ButtonStyles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  width?: number;
  variant?: 'primary' | 'outlined';
  rightIcon?: React.ReactElement;
  indicatorColor?: string;
}

const Button: FC<ButtonProps> = ({
  onPress,
  text,
  backgroundColor,
  textColor,
  disabled = false,
  loading,
  fullWidth,
  width,
  variant,
  rightIcon,
  indicatorColor,
}) => {
  const variantButton = {
    primary: {
      backgroundColor: disabled
        ? COLORS.GRAY
        : backgroundColor || COLORS.PRIMARY,
    },
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: disabled ? COLORS.GRAY : backgroundColor || COLORS.PRIMARY,
    },
  };

  const variantText = {
    primary: {
      color: disabled ? COLORS.DARK_TEXT : textColor || COLORS.GRAY_LIGHT,
    },
    outlined: {
      color: disabled ? COLORS.DARK_TEXT : textColor || COLORS.DARK_TEXT,
    },
  };

  const handlePress = () => {
    if (disabled) return;

    onPress();
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        {
          ...variantButton[variant || 'primary'],
          width: fullWidth ? '100%' : width,
        },
      ]}
      onPress={handlePress}
    >
      {loading ? (
        <ActivityIndicator
          color={indicatorColor || COLORS.GRAY_LIGHT}
          size="small"
        />
      ) : (
        <Text
          style={[styles.buttonText, { ...variantText[variant || 'primary'] }]}
        >
          {text}
        </Text>
      )}
      {rightIcon}
    </TouchableOpacity>
  );
};

export default Button;
