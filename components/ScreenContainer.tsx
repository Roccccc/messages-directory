import { ReactNode } from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';

import { colors } from '../constants/theme';

type ScreenContainerProps = {
  children: ReactNode;
  scrollable?: boolean;
};

export default function ScreenContainer({ children, scrollable = false }: ScreenContainerProps) {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width - 32, 640);

  const content = <View style={[styles.content, { width: contentWidth }]}>{children}</View>;

  if (scrollable) {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {content}
      </ScrollView>
    );
  }

  return <View style={styles.wrapper}>{content}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
