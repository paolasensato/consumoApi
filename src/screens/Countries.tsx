import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import CardInfo from '../components/CardInfo';

type CountriesType = {
  name: string;
  capital: string;
  region: string;
  languages: any;
  png: string;
  alt: string;
};

const ListItem = ({countries}: any) => {
  return (
    <View>
      <CardInfo
        name={countries.name}
        capital={countries.capital}
        region={countries.region}
        languages={countries.languages}
        png={countries.png}
        alt={countries.alt}
      />
    </View>
  );
};

const Countries = () => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadCountries = useCallback(async () => {
    try {
      setLoading(true);
      const {data} = await axios.get('https://restcountries.com/v3.1/all');

      setCountries(
        data.map((country: any) => ({
          name: country.translations.por.official,
          capital: country.capital || [''],
          region: country.region,
          languages: country.languages,
          png: country.flags.png,
          alt: country.flags.alt,
        })),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={countries}
          renderItem={({item}) => <ListItem countries={item} />}
        />
      )}
    </View>
  );
};

export default Countries;
