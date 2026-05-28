export type Message = {
  id: string;
  text: string;
};

export type MessageCategory = {
  id: string;
  title: string;
  messages: Message[];
};

export const messageCategories: MessageCategory[] = [
  {
    id: 'home',
    title: 'Home',
    messages: [
      { id: 'home-1', text: 'Welcome home! Dinner is ready at 6 PM.' },
      { id: 'home-2', text: 'Please take out the trash before you leave.' },
      { id: 'home-3', text: 'The Wi-Fi password is on the fridge.' },
    ],
  },
  {
    id: 'love',
    title: 'Love',
    messages: [
      { id: 'love-1', text: 'Thinking of you today. Hope your day is going well.' },
      { id: 'love-2', text: 'Good morning, sunshine. You make every day brighter.' },
      { id: 'love-3', text: 'See you tonight. I picked up your favorite dessert.' },
    ],
  },
  {
    id: 'family',
    title: 'Family',
    messages: [
      { id: 'family-1', text: 'Family meeting this Sunday at 2 PM.' },
      { id: 'family-2', text: 'Grandma called—she wants us to visit this weekend.' },
      { id: 'family-3', text: 'Do not forget to wish your cousin a happy birthday.' },
    ],
  },
  {
    id: 'friends',
    title: 'Friends',
    messages: [
      { id: 'friends-1', text: 'Game night at my place on Friday. Bring snacks!' },
      { id: 'friends-2', text: 'Thanks for helping me move last weekend.' },
      { id: 'friends-3', text: 'Coffee tomorrow at 10 AM? Let me know.' },
    ],
  },
  {
    id: 'school',
    title: 'School',
    messages: [
      { id: 'school-1', text: 'Assignment 3 is due next Monday at 11:59 PM.' },
      { id: 'school-2', text: 'Lab session moved to Room 204 this week.' },
      { id: 'school-3', text: 'Study group meets in the library at 4 PM on Wednesday.' },
    ],
  },
];

export function getCategoryById(categoryId: string): MessageCategory | undefined {
  return messageCategories.find((category) => category.id === categoryId);
}
