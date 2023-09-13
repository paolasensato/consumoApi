import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';

type CountriesType = {
  name: string;
  capital: string[];
  region: string;
  languages: any;
  flag: string;
  alt_flag: string;
};

const Countries = () => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadCountries = useCallback(async () => {
    try {
      setLoading(true);
      const {data} = await axios.get('https://restcountries.com/v3.1/all');
      data.map((country: any) => {
        setCountries([
          ...countries,
          {
            name: country.translations.por.official,
            capital: country.capital,
            region: country.region,
            languages: country.languages,
            flag: country.flags.png,
            alt_flag: country.flags.alt,
          },
        ]);
      });
      //   [Object.keys(country.languages)[0]]
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [countries]);

  useEffect(() => {
    loadCountries();
  }, []);

  return <></>;
};

export default Countries;
