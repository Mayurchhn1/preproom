import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

export interface TileProps {
  label: string;
  icon?: ImageSourcePropType;
  iconText?: string;
  isFocused: boolean;
  onFocus: () => void;
  onBlur?: () => void;
  onPress?: () => void;
  testID?: string;
  accessibilityLabel?: string;
  hasTVPreferredFocus?: boolean;
}

export const Tile = ({
  label,
  icon,
  iconText,
  isFocused,
  onFocus,
  onBlur,
  onPress,
  testID,
  accessibilityLabel,
  hasTVPreferredFocus,
}: TileProps) => {
  return (
    <Pressable
      style={[styles.tile, isFocused ? styles.focused : styles.default]}
      onFocus={onFocus}
      onBlur={onBlur}
      onPress={onPress}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      hasTVPreferredFocus={hasTVPreferredFocus}>
      <View style={styles.topHalf}>
        {icon ? (
          <Image
            source={icon}
            style={styles.icon}
            resizeMode="contain"
            accessible={false}
          />
        ) : (
          <Text style={styles.iconText}>{iconText}</Text>
        )}
      </View>
      <View style={styles.bottomHalf}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: 140,
    height: 140,
    borderRadius: 16,
    overflow: 'hidden',
    padding: 12,
  },
  topHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  default: {
    backgroundColor: '#0074B8',
  },
  focused: {
    backgroundColor: '#FF6200',
    transform: [{scale: 1.1}],
    opacity: 1,
  },
  icon: {
    width: 36,
    height: 36,
    tintColor: '#FFFFFF',
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 26,
    includeFontPadding: false,
  },
});
