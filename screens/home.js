import React, {useState} from 'react';
import { StyleSheet, View, Button, Text, FlatList, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'Counter Strike 1.6', rating: 4, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt nam officia, molestiae, eos eaque minima maiores dolores esse reiciendis ipsa quasi asperiores voluptates ab adipisci inventore ipsum placeat beatae?', id: 1 },
    { title: 'Super Mario', rating: 3, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt nam officia, molestiae, eos eaque minima maiores dolores esse reiciendis ipsa quasi asperiores voluptates ab adipisci inventore ipsum placeat beatae?', id: 2 },
    { title: 'Bonkheads', rating: 5, body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt nam officia, molestiae, eos eaque minima maiores dolores esse reiciendis ipsa quasi asperiores voluptates ab adipisci inventore ipsum placeat beatae?', id: 3 },
  ])

  return (
    <View style = {globalStyles.container}>
      <FlatList 
        data = {reviews}
        renderItem = {({item}) => (
          <TouchableOpacity onPress = {() => navigation.navigate('ReviewDetails', item)}>
            <Text style = {globalStyles.titleText}>{ item.title }</Text>
          </TouchableOpacity>
        ) }
      />
    </View>
  )
}