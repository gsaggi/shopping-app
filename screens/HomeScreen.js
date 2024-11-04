import React, { useEffect, useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import { fetchAllCategories } from '../utils/api';

export default function HomeScreen(props) {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const fetchCategories = await fetchAllCategories();
            setCategories(fetchCategories);
        };
        fetchData();
},[]);


    
  return (
    <Surface style={styles.container}>
      <Text style={styles.text}> HomeScreen</Text>
          {categories.map((category) => (
                <Text key={category.id}>{category.name}</Text>
          ))
          }
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
      fontSize: 18
  }
});