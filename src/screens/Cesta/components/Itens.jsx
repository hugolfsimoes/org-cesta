import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../components/Texto';

export default function Itens({ titulo, lista }) {
  return <>
    <Texto style={styles.titulo}>{titulo}</Texto>
    {lista?.map(({ nome, frutaImg }) => {
      return <View key={nome} style={styles.item}>
        <Image source={frutaImg} style={styles.frutaImg} />
        <Texto style={styles.nome}>{nome}</Texto>
      </View>;
    })}
  </>;
}

const styles = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    alignItems: 'center'
  },

  frutaImg: {
    width: 46,
    height: 46
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  },
});