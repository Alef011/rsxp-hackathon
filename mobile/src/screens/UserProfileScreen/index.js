import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Timeline from 'react-native-timeline-flatlist';
import * as Progress from 'react-native-progress';
import userImg from '../../../assets/imgs/user_img.png';
import userBkg from '../../../assets/imgs/user_bkg.png';
import styles from './styles';
import theme from '../../styles/themes';

const UserProfileScreen = () => {
  const [timelineData, setTimelineData] = useState([
    {
      id: 0,
      title: 'Fase 1: O começo da aventura',
      isComplete: true,
      totalCoins: 300,
      circleColor: theme.primaryDarkColor,
      lineColor: theme.primaryDarkColor,
    },
    {
      id: 1,
      title: 'Fase 2: Ferramentas e equipamentos',
      isComplete: false,
      totalCoins: 450,
      circleColor: theme.disabledColor,
      lineColor: theme.disabledColor,
    },
    {
      id: 2,
      title: 'Fase 3: Definindo meus objetivos',
      isComplete: false,
      totalCoins: 600,
      circleColor: theme.disabledColor,
      lineColor: theme.disabledColor,
    },
    {
      id: 3,
      title: 'Fase 4: A Primeira Conquista',
      isComplete: false,
      totalCoins: 600,
      circleColor: theme.disabledColor,
      lineColor: theme.disabledColor,
    },
    {
      id: 4,
      title: 'Fase 5: Indo além, muito além',
      isComplete: false,
      totalCoins: 600,
      circleColor: theme.disabledColor,
      lineColor: theme.disabledColor,
    },
    {
      id: 5,
      title: 'Fase 6: Criando soluções completas',
      isComplete: false,
      totalCoins: 600,
      circleColor: theme.disabledColor,
      lineColor: theme.disabledColor,
    },
    {
      id: 6,
      title: 'Fase 7: Um novo desafio',
      isComplete: false,
      totalCoins: 600,
      circleColor: theme.disabledColor,
      lineColor: theme.disabledColor,
    },
  ]);

  const renderDetail = (rowData, sectionID, rowID) => {
    const title = (
      <Text
        style={
          rowData.isComplete
            ? styles.timelineItemTitle
            : styles.timelineItemTitleDisabled
        }>
        {rowData.title}
      </Text>
    );
    let desc = (
      <View style={styles.coinsContainerDetail}>
        <Icon
          name="coin"
          color={rowData.isComplete ? theme.primaryColor : theme.disabledColor}
          size={24}
        />
        <Text
          style={
            rowData.isComplete ? styles.coinDetail : styles.coinDetailDisabled
          }>{`${rowData.totalCoins}`}</Text>
      </View>
    );

    return (
      <View style={styles.detail}>
        {title}
        {desc}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={userBkg} style={styles.userBackground}>
        <Image source={userImg} style={styles.userImage} />
      </ImageBackground>
      <View style={styles.userNameCoinsContainer}>
        <Text style={styles.userName}>Chris Rock</Text>
        <View style={styles.coinsContainer}>
          <Icon name="coin" color={theme.primaryColor} size={32} />
          <Text style={styles.coin}>150</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <Progress.Bar
          style={styles.progressBar}
          progress={0.5}
          height={30}
          width={0.8 * Dimensions.get('window').width}
          color={theme.primaryColor}
          borderRadius={12}
          borderWidth={4}
          borderColor={theme.primaryDarkColor}
        />
        <Text style={styles.percentage}>50%</Text>
      </View>
      <Text style={styles.prize}>
        Faltam 1500 pontos para você ganhar uma visita ao escritório do Spotify
        no Brasil!
      </Text>
      <Timeline
        style={styles.timeline}
        data={timelineData}
        lineColor={theme.primaryDarkColor}
        circleColor={theme.primaryDarkColor}
        separator
        separatorStyle={{
          backgroundColor: theme.primaryDarkColor,
        }}
        // innerCircle="dot"
        circleSize={24}
        renderDetail={renderDetail}
      />
    </View>
  );
};

export default UserProfileScreen;
