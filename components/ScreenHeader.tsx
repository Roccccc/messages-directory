import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/theme';

type ScreenHeaderProps = {
  title: string;
  subtitle: string;
  badge?: string;
  accentColor?: string;
  lightColor?: string;
};

export default function ScreenHeader({
  title,
  subtitle,
  badge,
  accentColor = colors.accent,
  lightColor = '#e0e7ff',
}: ScreenHeaderProps) {
  return (
    <View style={[styles.header, { backgroundColor: lightColor, borderColor: accentColor }]}>
      {badge ? (
        <View style={[styles.badge, { backgroundColor: accentColor }]}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      ) : null}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});
