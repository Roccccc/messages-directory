import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { colors } from './constants/theme';
import { MessageCategory } from './data/mockMessages';
import CategoryScreen from './screens/CategoryScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<MessageCategory | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      {selectedCategory ? (
        <CategoryScreen
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
        />
      ) : (
        <HomeScreen onSelectCategory={setSelectedCategory} />
      )}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
