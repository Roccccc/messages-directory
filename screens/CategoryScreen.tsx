import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import MessageItem from '../components/MessageItem';
import ScreenContainer from '../components/ScreenContainer';
import ScreenHeader from '../components/ScreenHeader';
import { getCategoryTheme } from '../constants/theme';
import { MessageCategory } from '../data/mockMessages';

type CategoryScreenProps = {
  category: MessageCategory;
  onBack: () => void;
};

export default function CategoryScreen({ category, onBack }: CategoryScreenProps) {
  const theme = getCategoryTheme(category.id);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Pressable
          onPress={onBack}
          style={({ pressed }) => [styles.backButton, pressed && styles.backPressed]}
        >
          <Text style={[styles.backText, { color: theme.color }]}>‹ Back to categories</Text>
        </Pressable>

        <ScreenHeader
          title={`${theme.emoji} ${category.title}`}
          subtitle={`${category.messages.length} message${
            category.messages.length === 1 ? '' : 's'
          } in this folder`}
          badge={category.title}
          accentColor={theme.color}
          lightColor={theme.lightColor}
        />

        <FlatList
          data={category.messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <MessageItem
              message={item}
              index={index}
              accentColor={theme.color}
              lightColor={theme.lightColor}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No messages yet</Text>
              <Text style={styles.emptyText}>This category is empty for now.</Text>
            </View>
          }
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
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  backPressed: {
    opacity: 0.6,
  },
  backText: {
    fontSize: 15,
    fontWeight: '700',
  },
  list: {
    paddingBottom: 24,
  },
  emptyState: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  emptyText: {
    fontSize: 14,
    color: '#64748b',
  },
});
