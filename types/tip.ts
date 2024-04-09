export interface Tip {
  id: string;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
}

const tipsAndTricks: Tip[] = [
  {
    id: '332a56fc-9e8d-4699-91f2-ca95ae17f107',
    title: 'Finding Your Classroom',
    content:
      "On your first day, grab a school map from the main office. Most classrooms have numbers or codes displayed outside. If you're still lost, ask a friendly teacher or staff member for directions.",
    category: 'School Life',
    imageUrl: 'https://picsum.photos/id/23/200',
  },
  {
    id: '246a591c-2ce4-4c27-b4d6-2495e4f968e7',
    title: 'Registering for Courses',
    content:
      'Course registration usually happens in spring. Make sure to meet with your advisor to discuss course options and requirements. Pay attention to deadlines and course prerequisites.',
    category: 'Registration',
    imageUrl: 'https://picsum.photos/id/23/200',
  },
  {
    id: '3579dac1-8538-47d0-829b-f72903269b45',
    title: 'Joining a Club',
    content:
      'There are many clubs and activities to explore at our school! Check the bulletin boards or attend the clubs fair to find a group that interests you. Most clubs welcome new members year-round.',
    category: 'Extra curricular',
    imageUrl: 'https://picsum.photos/id/23/200',
  },
  {
    id: '0b9fd258-6f04-4f04-8623-d99f8dc70198',
    title: 'Using the Library',
    content:
      'The school library is a great resource for studying, borrowing books, and finding research materials. Librarians can also help you with research skills and finding specific resources. Students can book study rooms for private or small groups to focus together. The learning center provides valuable resources including research help, the writing centre, and the exam centre.',
    category: 'School Life',
    imageUrl: 'https://picsum.photos/id/23/200',
  },
  {
    id: 'e46c98e1-50b5-44b8-946e-cf17c01b005b',
    title: 'Time Management Tips',
    content:
      'Juggling classes, homework, and extracurriculars can be challenging. Develop a study schedule, prioritize tasks, and set realistic goals to stay organized and manage your time effectively.',
    category: 'School Life',
    imageUrl: 'https://picsum.photos/id/23/200',
  },
  {
    id: 'b1191f7f-899b-48fa-867d-3c5fc0b26916',
    title: 'Communication with Teachers',
    content:
      "Don't hesitate to ask your teachers for help if you're struggling with a concept or assignment. Most teachers hold office hours or are available by appointment to answer your questions and provide guidance.",
    category: 'School Life',
    imageUrl: 'https://picsum.photos/id/23/200',
  },
];

export default tipsAndTricks;
