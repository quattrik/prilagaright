import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Animated.Image 
        sharedTransitionTag={`image-${product.id}`}
        source={{ uri: product.image }} 
        style={styles.image} 
      />
      
      <Animated.View entering={FadeIn.delay(200)} style={styles.content}>
        <View style={styles.header}>
          <View style={styles.skuContainer}>
            <Text style={styles.skuLabel}>Артикул:</Text>
            <Text style={styles.skuValue}>{product.sku}</Text>
          </View>
          <Text style={styles.price}>{product.price}</Text>
        </View>

        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Характеристики</Text>
          <View style={styles.characteristicsBox}>
            {product.characteristics.map((char, index) => (
              <View 
                key={index} 
                style={[
                  styles.charRow, 
                  index === product.characteristics.length - 1 && styles.charRowLast
                ]}
              >
                <Text style={styles.charName}>{char.name}</Text>
                <Text style={styles.charValue}>{char.value}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <MaterialCommunityIcons name="cart-plus" size={24} color="#fff" />
          <Text style={styles.buttonText}>В корзину</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  skuContainer: {
    backgroundColor: '#ffe6e6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skuLabel: {
    fontSize: 12,
    color: '#cc0000',
    marginRight: 4,
  },
  skuValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#cc0000',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    lineHeight: 28,
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 25,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  characteristicsBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 15,
  },
  charRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  charRowLast: {
    borderBottomWidth: 0,
    paddingBottom: 0,
  },
  charName: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  charValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#cc0000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
    shadowColor: '#cc0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
