import {StyleSheet} from 'react-native';
import {colors} from '../../styles';
import {fontSize, marginSize} from '../../styles/sizes';
import theme from '../../styles/themes';

const styles = StyleSheet.create({
  container: {flex: 1},
  userBackground: {
    width: '100%',
    height: 150,
  },
  userImage: {
    marginTop: 15,
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  userName: {
    fontSize: fontSize.veryBig,
  },
  userNameCoinsContainer: {
    padding: marginSize.large,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coinsContainer: {
    flexDirection: 'row',
  },
  coinsContainerDetail: {
    flexDirection: 'row',
    marginTop: marginSize.small,
    alignItems: 'center',
  },
  coin: {fontSize: fontSize.veryBig},
  coinDetail: {marginLeft: marginSize.verySmall, fontSize: fontSize.big},
  coinDetailDisabled: {
    marginLeft: marginSize.verySmall,
    fontSize: fontSize.big,
    color: theme.disabledColor,
  },
  progressBar: {
    alignSelf: 'center',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    fontSize: fontSize.veryBig,
    marginLeft: marginSize.small,
  },
  timeline: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
  },
  timelineItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timelineItemTitleDisabled: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.disabledColor,
  },
  timelineItemDesc: {
    color: 'gray',
  },
  detail: {flex: 1, marginTop: -12},
  prize: {
    padding: marginSize.large,
    fontSize: fontSize.medium,
    color: theme.primaryColor,
  },
});

export default styles;
