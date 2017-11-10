import React, { Component } from "react";

import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Tile } from "react-native-elements";
const dataPokemons = require("./pokedex.json");

export default class App extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={dataPokemons}
          renderItem={({ item }) => <PokeRow pokemon={item} />}
        />
      </View>
    );
  }
}

class PokeRow extends Component {
  render() {
    let pokemon = this.props.pokemon;
    return (
      <Tile
        title={pokemon.ename}
        featured
        imageSrc={{uri: `https://raw.githubusercontent.com/fanzeyi/Pokemon-DB/master/img/${pokemon.id}${pokemon.ename}.png`}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
