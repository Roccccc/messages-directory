import { Pressable, StyleSheet, Text, View } from 'react-native';

import { getCategoryTheme } from '../constants/theme';
import { MessageCategory } from '../data/mockMessages';

type CategoryCardProps = {
  category: MessageCategory;
  onPress: () => void;
};

export default function CategoryCard({ category, onPress }: CategoryCardProps) {
  const theme = getCategoryTheme(category.id);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { borderLeftColor: theme.color },
        pressed && styles.cardPressed,
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: theme.lightColor }]}>
        <Text style={styles.emoji}>{theme.emoji}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>{category.title}</Text>
        <Text style={styles.subtitle}>
          {category.messages.length} saved message{category.messages.length === 1 ? '' : 's'}
        </Text>
      </View>

      <View style={[styles.arrowWrap, { backgroundColor: theme.lightColor }]}>
        <Text style={[styles.arrow, { color: theme.color }]}>›</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderLeftWidth: 5,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.92,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  emoji: {
    fontSize: 26,
  },
  body: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  arrowWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 24,
  },
});
