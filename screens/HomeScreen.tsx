import { FlatList, StyleSheet, Text, View } from 'react-native';

import CategoryCard from '../components/CategoryCard';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { colors } from '../constants/theme';
import { messageCategories, MessageCategory } from '../data/mockMessages';

type HomeScreenProps = {
  onSelectCategory: (category: MessageCategory) => void;
};

const totalMessages = messageCategories.reduce(
  (count, category) => count + category.messages.length,
  0,
);

export default function HomeScreen({ onSelectCategory }: HomeScreenProps) {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <ScreenHeader
          title="Messages Directory"
          subtitle="Browse important messages grouped by category."
          badge="Your inbox"
        />

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{messageCategories.length}</Text>
            <Text style={styles.statLabel}>Categories</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{totalMessages}</Text>
            <Text style={styles.statLabel}>Messages</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>All Categories</Text>

        <FlatList
          data={messageCategories}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryCard category={item} onPress={() => onSelectCategory(item)} />
          )}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  statLabel: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  list: {
    paddingBottom: 24,
  },
});
