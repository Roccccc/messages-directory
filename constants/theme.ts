export const colors = {
  background: '#f0f4f8',
  surface: '#ffffff',
  textPrimary: '#0f172a',
  textSecondary: '#64748b',
  border: '#e2e8f0',
  accent: '#4f46e5',
};

export type CategoryTheme = {
  emoji: string;
  color: string;
  lightColor: string;
};

export const categoryThemes: Record<string, CategoryTheme> = {
  home: { emoji: '🏠', color: '#059669', lightColor: '#d1fae5' },
  love: { emoji: '❤️', color: '#db2777', lightColor: '#fce7f3' },
  family: { emoji: '👨‍👩‍👧‍👦', color: '#d97706', lightColor: '#fef3c7' },
  friends: { emoji: '🤝', color: '#2563eb', lightColor: '#dbeafe' },
  school: { emoji: '🎓', color: '#7c3aed', lightColor: '#ede9fe' },
};

export function getCategoryTheme(categoryId: string): CategoryTheme {
  return (
    categoryThemes[categoryId] ?? {
      emoji: '💬',
      color: colors.accent,
      lightColor: '#e0e7ff',
    }
  );
}
