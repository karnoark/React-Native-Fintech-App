import Dropdown from '@/components/Dropdown';
import RoundBtn from '@/components/RoundBtn';
// import WidgetList from '@/components/SortableList/WidgetList';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
// import { useBalanceStore } from '@/store/balanceStore';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import { useHeaderHeight } from '@react-navigation/elements';

const Page = () => {

  const onAddMoney = () => {};

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{
        // paddingTop: headerHeight,
      }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>1050</Text>
          <Text style={styles.currency}>€</Text>
        </View>
        <TouchableOpacity
          style={[
            defaultStyles.pillButtonSmall,
            { backgroundColor: Colors.lightGray, marginVertical: 20 },
          ]}>
          <Text style={[defaultStyles.buttonTextSmall, { color: Colors.dark }]}>Accounts</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn icon={'add'} text={'Add money'} onPress={onAddMoney} />
        <RoundBtn icon={'refresh'} text={'Exchange'} />
        <RoundBtn icon={'list'} text={'Details'} />
        <Dropdown />
      </View>

      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 20,
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Page;