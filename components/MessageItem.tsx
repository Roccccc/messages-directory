import { StyleSheet, Text, View } from 'react-native';

import { Message } from '../data/mockMessages';

type MessageItemProps = {
  message: Message;
  index: number;
  accentColor: string;
  lightColor: string;
};

export default function MessageItem({
  message,
  index,
  accentColor,
  lightColor,
}: MessageItemProps) {
  return (
    <View style={styles.item}>
      <View style={[styles.number, { backgroundColor: accentColor }]}>
        <Text style={styles.numberText}>{index + 1}</Text>
      </View>

      <View style={[styles.bubble, { backgroundColor: lightColor, borderColor: accentColor }]}>
        <Text style={styles.label}>Message</Text>
        <Text style={styles.text}>{message.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  number: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 8,
  },
  numberText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 13,
  },
  bubble: {
    flex: 1,
    borderRadius: 16,
    borderTopLeftRadius: 4,
    padding: 16,
    borderWidth: 1,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    color: '#1e293b',
    lineHeight: 24,
  },
});
