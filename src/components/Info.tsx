import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

type Info = {
  label: string;
  value: string;
};

const Info = ({label, value}: Info) => {
  return (
    <View>
      <Text style={styles.text}>
        {label}: {value}
      </Text>
    </View>
  );
};

export default Info;
