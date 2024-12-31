import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Đăng nhập</Text>
      </View>
      <Text style={styles.text1}>Nhập số điện thoại</Text>
      <Text style={styles.text}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Tiếp tục</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    marginBottom: 50,
    borderBottomWidth: 2,
    borderColor: '#efefef',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  text1: {
    fontSize: 22,
    paddingBottom: 15,
  },
  text: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomColor: 'gray',
    paddingLeft: 8,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#629ae3',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
});