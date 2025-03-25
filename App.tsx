import { useState } from 'react'
import {
  SafeAreaView,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
  View,
  Image
} from 'react-native'

import User from './components/User'

export default function App() {
  const [cpf, setCpf] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const cpfCorrect = '000.000.000-00'

  const handleLogin = () => {
    if (cpf === cpfCorrect) {
      setIsLogged(true)
      alert('Login bem-sucedido!')
    } else {
      alert('CPF inválido!')
    }
  }

  return (
     
      <SafeAreaView style={styles.container}>
        {!isLogged ? (
          <View style={styles.subcontainer}>
            <User size= {120}/>
            <TextInput
              placeholder="CPF"
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
            />
            <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGAR</Text>
            </Pressable>
          </View>
          ) :(
          <View style={styles.subcontainer}>
            <Image source={require('./assets/UserLogged.png')} style={styles.image}/>
            <Text style={styles.textLogged}>Você está logado com o CPF: 000.000.000-00?</Text>
            <Pressable style={styles.button} onPress={() => { setIsLogged(false);setCpf('') }}>
              <Text style={styles.buttonText}>CPF NÃO É: 000.000.000-00</Text>
            </Pressable>
          </View>
          )}
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer:{
    width: '100%',
    height:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#eeeeee',
    color: '#b7bfc0',
    borderWidth: 5,
    borderColor: 'black',
    padding: 10,
    width: '85%',
    marginVertical:20,
    borderBottomWidth: 4,
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    paddingHorizontal: 30,
    borderRadius: 3,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 700,
  },
  image:{
    width: 100,
    height:100
  },
  textLogged:{
    marginVertical:20,
  }
})
