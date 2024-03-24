import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get connected to resources as a current TWU student.</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <ServiceCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 24,
    textAlign: 'center',
    width:'80%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
