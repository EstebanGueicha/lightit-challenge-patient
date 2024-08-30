import { StyleSheet } from 'react-native';
import { COLORS } from '@/styles';

const AvatarStyles = StyleSheet.create({
  avatar: {
    borderRadius: 83,
    height: 83,
    width: 83,
  },
  avatarContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: COLORS.GRAY,
    borderRadius: 85,
    borderWidth: 1,
    height: 85,
    justifyContent: 'center',
    width: 85,
  },
});

export default AvatarStyles;
