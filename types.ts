export enum UserRole {
  STUDENT = 'STUDENT',
  CLUB = 'CLUB',
  GUEST = 'GUEST'
}

export enum EventCategory {
  TECHNICAL = 'Technical',
  CULTURAL = 'Cultural',
  SPORTS = 'Sports',
  WORKSHOP = 'Workshop',
  SEMINAR = 'Seminar',
  OTHER = 'Other',
}

export interface User {
  id: string;
  name: string;
  email?: string; // Optional for clubs
  role: UserRole;
  clubId?: string; // if role is CLUB
}

export interface Club {
  id: string;
  name:string;
  logoUrl: string;
  description: string;
  contact: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  date: Date;
  location: string;
  clubId: string;
  category: EventCategory;
  imageUrl: string;
  tags: string[];
  bookmarkedBy: string[]; // array of user IDs
}

export interface GeneratedEventIdeas {
  title: string;
  description: string;
  activities: string[];
}

export interface RecruitmentPost {
  id: string;
  clubId: string;
  title: string;
  description: string;
  applicationLink: string;
  deadline: Date;
  isOpen: boolean;
}
