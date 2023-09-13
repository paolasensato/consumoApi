import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';

type ListItemProps = {
  population: {
    Population: string;
    Year: string[];
  };
};

const ListItem = ({population}: ListItemProps) => {
  return (
    <View>
      <Text>População: {population.Population}</Text>
      <Text>Ano: {population.Year}</Text>
    </View>
  );
};

const Eua = ({navigation}: any) => {
  const {navigate} = navigation;
  const [loading, setLoading] = useState<boolean>(false);
  const [population, setPopulation] = useState([]);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const {data} = await axios.get(
        'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
      );
      setPopulation(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Button onPress={() => navigate('Doguineos')} title="Ver doguineos" />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={population}
          renderItem={({item}) => <ListItem population={item} />}
        />
      )}
    </View>
  );
};

export default Eua;
