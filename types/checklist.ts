export interface Checklist {
  id: string;
  title: string;
  category: string;
  progress: number;
  totalSteps: number;
  priority: Priority;
  items: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  title: string;
  category: string;
}

interface Priority {
  id: string;
  name: string;
  type: 'warning' | 'info' | 'error';
}

export const STUDENT_CHECKLIST: Checklist[] = [
    {
      id: '2',
      title: 'Course Registration',
      category: 'Academic',
      progress: 3,
      totalSteps: 5,
      priority: {
        id: '1',
        name: 'High',
        type: 'warning',
      },
      items: [
        {
          id: '2-1',
          title: 'Review course offerings',
          category: 'Preparation',
        },
        {
          id: '2-2',
          title: 'Consult academic advisor',
          category: 'Preparation',
        },
        {
          id: '2-3',
          title: 'Prioritize course selections',
          category: 'Selection',
        },
        {
          id: '2-4',
          title: 'Register for courses online',
          category: 'Action',
        },
        {
          id: '2-5',
          title: 'Confirm schedule',
          category: 'Confirmation',
        },
      ],
    },
    {
      id: '3',
      title: 'Graduation Audit',
      category: 'Academic',
      progress: 0,
      totalSteps: 4,
      priority: {
        id: '2',
        name: 'Medium',
        type: 'info',
      },
      items: [
        {
          id: '3-1',
          title: 'Check degree requirements',
          category: 'Preparation',
        },
        {
          id: '3-2',
          title: 'List pending courses and requirements',
          category: 'Organization',
        },
        {
          id: '3-3',
          title: 'Meet with academic advisor',
          category: 'Consultation',
        },
        {
          id: '3-4',
          title: 'Submit audit form',
          category: 'Completion',
        },
      ],
    },
    {
      id: '4',
      title: 'Financial Aid Submission',
      category: 'Financial',
      progress: 1,
      totalSteps: 3,
      priority: {
        id: '1',
        name: 'Urgent',
        type: 'error',
      },
      items: [
        {
          id: '4-1',
          title: 'Gather financial documents',
          category: 'Preparation',
        },
        {
          id: '4-2',
          title: 'Complete FAFSA online',
          category: 'Action',
        },
        {
          id: '4-3',
          title: 'Submit supplementary documents to financial aid office',
          category: 'Completion',
        },
      ],
    },
  ];