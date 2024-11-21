import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Imagem do projeto */}
      <Image
        source={require('../assets/logo2Enem-removebg-preview.png')} // Altere o caminho quando adicionar a imagem
        style={styles.image}
      />

      {/* Texto de boas-vindas */}
      <Text style={styles.title}>Bem-vindo ao HelpEnem!</Text>

      {/* Botão de Entrar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de Cadastro */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>

      {/* Botão de Ajuda */}
      <TouchableOpacity
        style={styles.helpButton}
        onPress={() => navigation.navigate('Ajuda')}
      >
        <Text style={styles.buttonText}> ? </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#8f5bbd',
    padding: 15,
    borderRadius: 40,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  helpButton:{
    backgroundColor: '#8f5bbd',
    padding: 10,
    borderRadius: 180,
    width: '11%',
    marginBottom: 20,
    marginTop: 70,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
