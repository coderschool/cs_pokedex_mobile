import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class PokeRow extends Component {
  render() {
    let pokemon = this.props.pokemon;
    console.log('pokemon', pokemon);
    return (
      <View>
        <Image
          uri={`https://raw.githubusercontent.com/fanzeyi/Pokemon-DB/master/img/${pokemon.id}${pokemon.ename}.png`}
        />
        <Text> {pokemon.ename} </Text>
      </View>
    );
  }
}
