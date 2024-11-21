import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ajuda = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Este projeto foi desenvolvido para ajudar os alunos a se prepararem para o ENEM.
        Ele inclui um sistema de cadastro, acesso a questões e organização dos livros.
      </Text>
      <Text style={styles.text}>

      </Text>
        <Text style={styles.text}>
        Projeto desenvolvido por:
        </Text>
        <Text style={styles.text}>

        </Text>
        <Text style={styles.text}>
        Adriana Monteiro Martani
        </Text>
        <Text style={styles.text}>

        </Text>
        <Text style={styles.text}>
        Matheus Galdino Xavier
        </Text>
        <Text style={styles.text}>

        </Text>
        <Text style={styles.text}>
        Yasmin Laisa Maciel
        </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default Ajuda;
