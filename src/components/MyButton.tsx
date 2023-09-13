import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type MyButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor: string;
  subtitle: string;
};

const styles = StyleSheet.create({
  viewButton: {
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 15,
  },
});

const MyButton = ({
  title,
  subtitle,
  onPress,
  backgroundColor,
}: MyButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={{...styles.viewButton, backgroundColor: backgroundColor}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </Pressable>
  );
};

export default MyButton;
