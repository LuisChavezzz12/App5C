import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React from 'react';

type ProductoDetalleProps = {
  producto: {
    title: string;
    price: number;
    description: string;
    category: string;
    image: any; // Debe ser un objeto de imagen local
    features: string[];
    stock: number;
  };
  onVolver: () => void;
};

const ProductoDetalle = ({ producto, onVolver }: ProductoDetalleProps) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {producto.image && (
        <Image source={producto.image} style={styles.productImage} />
      )}
      
      <View style={styles.infoContainer}>
        <Text style={styles.productTitle}>{producto.title}</Text>
        <Text style={styles.productPrice}>${producto.price}</Text>
        <Text style={styles.productCategory}>{producto.category}</Text>
        <Text style={styles.productDescription}>{producto.description}</Text>
        
        <Text style={styles.sectionTitle}>Características:</Text>
        {producto.features.map((feature, index) => (
          <Text key={index} style={styles.featureItem}>• {feature}</Text>
        ))}

        <Text style={styles.stock}>Stock disponible: {producto.stock}</Text>
        
        <Button title="Volver" onPress={onVolver} />
      </View>
    </ScrollView>
  );
};

export default ProductoDetalle;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#ddd', // Borde sutil alrededor de la imagen
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Sombra para Android
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Sombra para Android
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50',
  },
  productPrice: {
    fontSize: 26,
    color: '#E74C3C',
    marginBottom: 12,
  },
  productCategory: {
    fontSize: 18,
    color: '#34495e',
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    color: '#2ECC71',
  },
  featureItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  stock: {
    fontSize: 16,
    color: '#E74C3C',
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 20,
  },
});
