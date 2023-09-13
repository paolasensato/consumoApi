import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Info from './Info';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 14,
    width: 340,
    height: 100,
    backgroundColor: '#c7d6d6',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 125,
    height: 75,
    objectFit: 'cover',
  },
});

type CardInfoProps = {
  name: string;
  capital: string;
  region: string;
  languages: any;
  png: string;
  alt: string;
};

const CardInfo = ({
  name,
  capital,
  region,
  languages,
  png,
  alt,
}: CardInfoProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} alt={alt} source={{uri: png}} />
      <View>
        <Info label="Nome" value={name} />
        <Info label="Capital" value={capital[0]} />
        <Info label="Região" value={region} />
        <Info label="Languages" value={languages[Object.keys(languages)[0]]} />
      </View>
    </View>
  );
};

export default CardInfo;
