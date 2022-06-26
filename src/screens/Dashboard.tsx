import React, { useContext } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { Button, Header, RegularText } from '../common';
import { NavigationProps } from '../navigation';
import { AppContext } from '../store';
import { dashboardStyles as styles } from './styles';

const ListView = ({
  name,
  price,
  stock,
  onPress,
}: {
  name: string;
  price: number;
  stock: number;
  onPress?: () => void;
}) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.list} onPress={onPress}>
    <Text style={styles.listTitle}>{name}</Text>
    <View style={{ flexDirection: 'row' }}>
      <RegularText
        text={`₦${Number(Number(price).toFixed(1)).toLocaleString()}`}
      />
      <Text>{' - '}</Text>
      <RegularText text={`${stock}qty`} />
    </View>
  </TouchableOpacity>
);

const Dashboard = ({ navigation }: NavigationProps) => {
  const {
    state: { products },
  } = useContext(AppContext);
  return (
    <>
      <Header title="Inventory Listing" />
      <View style={styles.wrapper}>
        {products.length === 0 ? (
          <Text style={styles.nothing}>No product in your inventory yet!</Text>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {products.map((product, index) => (
              <ListView
                key={index}
                name={product.name}
                price={product.price}
                stock={product.stock}
                onPress={() =>
                  navigation.navigate('new_product', { product: product })
                }
              />
            ))}
          </ScrollView>
        )}
        <Button
          onPress={() => navigation.navigate('new_product')}
          transparent
          text="Add New Item"
          buttonStyle={styles.addBtn}
        />
      </View>
    </>
  );
};
export default Dashboard;
