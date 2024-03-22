export interface UserBio {
  status: 'international' | 'domestic';
  isEnrolled: boolean;
  interests: string[];
}

export interface User {
  id: string;
  name?: string;
  email?: string;
  bio?: UserBio;
}
