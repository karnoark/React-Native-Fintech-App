import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type RoundBtnProps = {
    text: string,
    icon: typeof Ionicons.defaultProps,
    onPress?: () => void;
}

const RoundBtn = (props :RoundBtnProps) => {
    const { icon, text, onPress } = props
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        <Ionicons name={icon} size={30} color={Colors.dark} />
      </View>
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: 10,
    },
    circle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: Colors.lightGray,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 16,
      fontWeight: '500',
      color: Colors.dark,
    },
  });


export default RoundBtn