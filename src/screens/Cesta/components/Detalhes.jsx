import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Texto from '../../../components/Texto';
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
  return <>
    <Texto style={styles.nome}>Cesta de Verduras</Texto>
    <View style={styles.fazenda}>
      <Image source={logo} style={styles.imagemFazenda} />
      <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
    </View>
    <Texto style={styles.descicao}>Uma cesta com produtos selecionados cuidadosamente da fazenda
      direto para sua cozinha.
    </Texto>
    <Texto style={styles.preco}>R$ 40,00</Texto>
  </>;
}

const styles = StyleSheet.create({
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold'
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  imagemFazenda: {
    width: 32,
    height: 32,
    borderRadius: 100
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descicao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
});