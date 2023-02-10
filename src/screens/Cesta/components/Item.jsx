import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Texto from '../../../components/Texto';

export default function Item({ item: { nome, frutaImg } }) {

  return <View style={styles.item}>
    <Image source={frutaImg} style={styles.frutaImg} />
    <Texto style={styles.nome}>{nome}</Texto>
  </View>;

}

const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
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