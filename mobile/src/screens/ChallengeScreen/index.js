import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Card, IconButton, Avatar, TouchableRipple} from 'react-native-paper';

import styles from './styles';

const ChallengeScreen = () => {
  const [data, setData] = useState([
    {
      id: 0,
      coins: 10,
      icon: 'comment-question',
      title: 'Quiz: qual o meu perfil?',
    },
    {
      id: 1,
      coins: 20,
      icon: 'file-document-edit',
      title: 'Aula 1: O que é lógica.',
    },
    {
      id: 2,
      coins: 20,
      icon: 'video',
      title: 'A importância do design.',
    },
    {
      id: 3,
      coins: 30,
      icon: 'file-document-edit',
      title: 'Aula 2: Mão na massa!',
    },
    {
      id: 4,
      coins: '50',
      icon: 'folder',
      title: 'Projeto: O primeiro aplicativo.',
    },
  ]);

  const onClick = item => {
    console.log('Click', item);
  };

  const renderDetail = item => {
    console.log('Item', item);
    return (
      <TouchableRipple onPress={() => onClick(item)}>
        <Card.Title
          title={item.title}
          subtitle={`${item.coins} moedas`}
          left={props => <Avatar.Icon {...props} icon={item.icon} />}
          right={props => (
            <IconButton {...props} icon="chevron-right" onPress={() => {}} />
          )}
        />
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

export default ChallengeScreen;
