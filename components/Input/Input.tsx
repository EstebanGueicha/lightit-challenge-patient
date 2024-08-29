import React, { FC, useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './InputStyles';
import { COLORS } from '../../styles';
import { Ionicons } from '@expo/vector-icons';

type inputModeType =
  | 'decimal'
  | 'email'
  | 'none'
  | 'numeric'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

type keyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'url'
  | 'number-pad'
  | 'name-phone-pad'
  | 'decimal-pad'
  | 'twitter'
  | 'web-search'
  | 'visible-password';

interface InputProps {
  placeholder: string;
  icon?: React.ReactElement;
  inputMode?: inputModeType;
  keyboardType?: keyboardType;
  error?: string;
  onChangeText: (text: string) => void;
  value: string;
  label?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  disabled?: boolean;
  rightIcon?: any;
  multiline?: boolean;
  numberOfLines?: number;
}

const Input: FC<InputProps> = ({
  placeholder,
  icon,
  inputMode = 'text',
  keyboardType,
  error,
  onChangeText,
  value,
  label,
  autoCapitalize,
  disabled,
  rightIcon,
  multiline,
  numberOfLines,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      {label && (
        <Text
          style={[
            styles.label,
            {
              color: error
                ? COLORS.ERROR
                : isFocused
                  ? COLORS.PRIMARY
                  : COLORS.INK_MEDIUM,
            },
          ]}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.ERROR
              : isFocused
                ? COLORS.PRIMARY
                : COLORS.INK_MEDIUM,
          },
        ]}
      >
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          {icon}
          <TextInput
            autoCapitalize={autoCapitalize}
            editable={disabled}
            inputMode={inputMode}
            keyboardType={keyboardType}
            multiline={multiline}
            numberOfLines={numberOfLines}
            placeholder={placeholder}
            placeholderTextColor={COLORS.INK_MEDIUM}
            style={styles.input}
            value={value}
            onBlur={handleBlur}
            onChangeText={onChangeText}
            onFocus={handleFocus}
          />
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          {error ? (
            <Ionicons
              color={COLORS.ERROR}
              name="alert-circle-outline"
              size={16}
            />
          ) : (
            rightIcon && rightIcon
          )}
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
