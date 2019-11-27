import React, {useState} from 'react';
import {View, Linking, FlatList} from 'react-native';
import {TouchableRipple, Card, Title} from 'react-native-paper';

import styles from './styles';

const DiscoverScreen = () => {
  const [data, setData] = useState([
    {
      id: 0,
      videoUrl: 'https://www.youtube.com/watch?v=gBmnB7BwSRA',
      thumbnail: 'http://i3.ytimg.com/vi/gBmnB7BwSRA/maxresdefault.jpg',
      title:
        'Como comecei a programar? Por que criamos a Rocketseat? | Diego Fernandes',
    },
    {
      id: 1,
      videoUrl: 'https://www.youtube.com/watch?v=y95Nc7PpP8c',
      thumbnail: 'http://i3.ytimg.com/vi/y95Nc7PpP8c/maxresdefault.jpg',
      title:
        'Mark Zuckerberg ajudando crianças a Aprender a programar (Legendado Português)',
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/watch?v=mHW1Hsqlp6A',
      thumbnail: 'http://i3.ytimg.com/vi/mHW1Hsqlp6A/maxresdefault.jpg',
      title: 'Por que todos deveriam aprender a programar?',
    },
    {
      id: 3,
      videoUrl: 'https://www.youtube.com/watch?v=zVCYKMBoIFA',
      thumbnail: 'http://i3.ytimg.com/vi/zVCYKMBoIFA/maxresdefault.jpg',
      title: 'A história do Spotify',
    },
    {
      id: 4,
      videoUrl: 'https://www.youtube.com/watch?v=VdKwZEJRuYE',
      thumbnail: 'http://i3.ytimg.com/vi/VdKwZEJRuYE/maxresdefault.jpg',
      title: 'A História de Larry Ellison - O bilionárion dono da Oracle',
    },
  ]);

  const openUrl = url => {
    Linking.openURL(url);
  };

  const renderDetail = item => {
    console.log('Item', item);
    return (
      <TouchableRipple onPress={() => openUrl(item.videoUrl)}>
        <Card style={styles.card}>
          <Card.Cover source={{uri: item.thumbnail}} />
          <Card.Content>
            <Title>{item.title}</Title>
          </Card.Content>
        </Card>
      </TouchableRipple>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({item, index, separators}) => renderDetail(item)}
      />
    </View>
  );
};

export default DiscoverScreen;
