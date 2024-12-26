import { Image, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

type ProductProps = PropsWithChildren<{
  product: Product;
}>;

const ProductItem = ({ product }: ProductProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>

        <View style={[styles.rowContainer, styles.ratingContainer]}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{product.rating} ★</Text>
          </View>
          <Text style={styles.ratingCount}>
            ({product.ratingCount.toLocaleString()})
          </Text>
        </View>

        <View style={[styles.rowContainer, styles.priceContainer]}>
          <Text style={styles.discountPrice}>
            ₹{product.discountPrice.toLocaleString()}
          </Text>
          <Text style={styles.originalPrice}>
            ₹{product.originalPrice.toLocaleString()}
          </Text>
          <Text style={styles.offerPercentage}>
            %{product.offerPercentage} off
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    margin: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 120,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  ratingContainer: {
    marginBottom: 8,
  },
  rating: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#008c00',
    marginRight: 6,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  ratingCount: {
    fontSize: 12,
    color: '#878787',
  },
  priceContainer: {
    marginTop: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginRight: 8,
  },
  offerPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4bb550',
  },
});

export default ProductItem;
