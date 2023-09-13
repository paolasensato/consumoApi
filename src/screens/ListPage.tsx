import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import axios from 'axios';

// memoizado é algo em cash -> isso é o que useCallback e useMemo faz

type ListItemProps = {
  university: {
    name: string;
    web_pages: string[];
  };
};

const ListItem = ({university}: ListItemProps) => {
  return (
    <View>
      <Text>{university.name}</Text>
      <Text>{university.web_pages[0]}</Text>
    </View>
  );
};

const ListPage = ({route}: any) => {
  const {params} = route;
  const [universities, setUniversities] = useState();
  const [loading, setLoading] = useState(false);

  const getUniversityData = useCallback(async () => {
    try {
      setLoading(true);
      const {data} = await axios.get(
        'http://universities.hipolabs.com/search?country=Brazil',
      );
      setUniversities(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUniversityData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text style={{fontSize: 32}}>ID: {params.id}</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={universities}
          renderItem={({item}) => <ListItem university={item} />}
        />
      )}
    </View>
  );
};

export default ListPage;
