import { GoogleGenAI, Type } from '@google/genai';
import { User as FirebaseUser, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebase';
import { User, UserRole, Event, Club, EventCategory, GeneratedEventIdeas, RecruitmentPost } from './types';

// --- MOCK DATABASE (REMAINS THE SAME) ---

export const CLUBS: Club[] = [
  { id: 'club-1', name: 'Tech Geeks', logoUrl: 'https://picsum.photos/seed/tech/100', description: 'A hub for all things tech, from coding to robotics.', contact: 'techgeeks@smail.institute.edu' },
  { id: 'club-2', name: 'Literary Society', logoUrl: 'https://picsum.photos/seed/lit/100', description: 'Celebrating the world of words through poetry, prose, and debates.', contact: 'litsoc@smail.institute.edu' },
  { id: 'club-3', name: 'Sports Club', logoUrl: 'https://picsum.photos/seed/sports/100', description: 'Promoting fitness, teamwork, and sportsmanship across campus.', contact: 'sports@smail.institute.edu' },
  { id: 'club-4', name: 'Arts & Culture', logoUrl: 'https://picsum.photos/seed/arts/100', description: 'Nurturing creativity through workshops, exhibitions, and performances.', contact: 'arts@smail.institute.edu' },
];

let events: Event[] = [
  {
    id: '1',
    title: 'AI & The Future Hackathon',
    description: 'A 24-hour hackathon to build the future.',
    longDescription: 'Join us for an exciting 24-hour hackathon focused on Artificial Intelligence. Collaborate with peers, build innovative projects, and win amazing prizes. Mentors from the industry will be available to guide you. Food and drinks will be provided.',
    date: new Date(new Date().setDate(new Date().getDate() + 7)),
    location: 'Main Auditorium',
    clubId: 'club-1',
    category: EventCategory.TECHNICAL,
    imageUrl: 'https://picsum.photos/seed/event1/600/400',
    tags: ['AI', 'Machine Learning', 'Coding'],
    bookmarkedBy: ['student-123']
  },
  {
    id: '2',
    title: 'Annual Poetry Slam',
    description: 'Express yourself through the art of poetry.',
    longDescription: 'The stage is set for our annual poetry slam. Whether you are a seasoned poet or a first-timer, we invite you to share your voice. The theme for this year is "Resilience". Sign up to perform or come and support the artists.',
    date: new Date(new Date().setDate(new Date().getDate() + 12)),
    location: 'Amphitheatre',
    clubId: 'club-2',
    category: EventCategory.CULTURAL,
    imageUrl: 'https://picsum.photos/seed/event2/600/400',
    tags: ['Poetry', 'Spoken Word', 'Literature'],
    bookmarkedBy: []
  },
    {
    id: '3',
    title: 'Inter-Departmental Football Tournament',
    description: 'Compete for the ultimate glory on the field.',
    longDescription: 'The most awaited sports event of the year is here! Form your teams and get ready to compete in the inter-departmental football tournament. Trophies and bragging rights are at stake. Register your team by the end of this week.',
    date: new Date(new Date().setDate(new Date().getDate() + 20)),
    location: 'Institute Sports Ground',
    clubId: 'club-3',
    category: EventCategory.SPORTS,
    imageUrl: 'https://picsum.photos/seed/event3/600/400',
    tags: ['Football', 'Tournament', 'Sports'],
    bookmarkedBy: ['student-123']
  },
  {
    id: '4',
    title: 'Digital Painting Workshop',
    description: 'Learn the basics of digital art with Procreate.',
    longDescription: 'Unlock your creativity in our Digital Painting Workshop. This session will cover the fundamentals of Procreate on the iPad, from basic tools to advanced techniques. No prior experience is required, but please bring your own device if possible.',
    date: new Date(new Date().setDate(new Date().getDate() + 5)),
    location: 'Design Studio, Block C',
    clubId: 'club-4',
    category: EventCategory.WORKSHOP,
    imageUrl: 'https://picsum.photos/seed/event4/600/400',
    tags: ['Art', 'Digital Art', 'Workshop', 'Procreate'],
    bookmarkedBy: []
  },
];

let recruitments: RecruitmentPost[] = [
    { id: 'rec-1', clubId: 'club-1', title: 'Tech Geeks is recruiting Core Team Members!', description: 'Looking for passionate coders and designers.', applicationLink: '#', deadline: new Date(new Date().setDate(new Date().getDate() + 14)), isOpen: true },
    { id: 'rec-2', clubId: 'club-4', title: 'Join the Arts & Culture design team!', description: 'We need illustrators and video editors.', applicationLink: '#', deadline: new Date(new Date().setDate(new Date().getDate() + 10)), isOpen: true }
];

// --- SIMULATED NETWORK DELAY ---
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));


// --- AUTH SERVICE (FIREBASE IMPLEMENTATION) ---
const mapFirebaseUserToAppUser = (firebaseUser: FirebaseUser): User => {
    // For now, all logged-in users are considered students.
    // A more complex implementation could check a database for roles.
    return {
        id: firebaseUser.uid,
        name: firebaseUser.displayName || 'Student',
        email: firebaseUser.email || '',
        role: UserRole.STUDENT,
    };
};

export const authService = {
  loginWithGoogle: async (): Promise<User> => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return mapFirebaseUserToAppUser(user);
  },
  logout: async (): Promise<void> => {
    await signOut(auth);
  },
  onAuthChange: (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        callback(mapFirebaseUserToAppUser(firebaseUser));
      } else {
        callback(null);
      }
    });
  }
};


// --- EVENT SERVICE ---
export const eventService = {
  getEvents: async (): Promise<Event[]> => {
    await delay(800);
    return [...events].sort((a,b) => a.date.getTime() - b.date.getTime());
  },
  toggleBookmark: async(eventId: string, userId: string): Promise<Event> => {
    await delay(300);
    const event = events.find(e => e.id === eventId);
    if (!event) throw new Error("Event not found");
    const userIndex = event.bookmarkedBy.indexOf(userId);
    if (userIndex > -1) {
        event.bookmarkedBy.splice(userIndex, 1);
    } else {
        event.bookmarkedBy.push(userId);
    }
    return {...event};
  },
  createEvent: async (eventData: Omit<Event, 'id' | 'bookmarkedBy'>, user: User): Promise<Event> => { return {} as Event; },
  updateEvent: async (eventData: Event, user: User): Promise<Event> => { return {} as Event; },
  deleteEvent: async (eventId: string, user: User): Promise<void> => { }
};

// --- CLUB & RECRUITMENT SERVICES ---
export const clubService = {
    getClubs: async (): Promise<Club[]> => {
        await delay(600);
        return CLUBS;
    }
};

export const recruitmentService = {
    getRecruitmentPosts: async (): Promise<RecruitmentPost[]> => {
        await delay(700);
        return recruitments.filter(r => r.isOpen).sort((a,b) => a.deadline.getTime() - b.deadline.getTime());
    }
};


// --- GEMINI SERVICE ---
export const geminiService = {
  generateEventIdeas: async (prompt: string): Promise<GeneratedEventIdeas> => {
    try {
      // Initialize the AI client here to prevent app crash on load
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Based on the following theme, generate an event idea for a college audience. Theme: "${prompt}". Provide a catchy title, an engaging 2-3 sentence description, and a list of 3-5 potential activities.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              activities: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            }
          },
        },
      });
      
      const jsonText = response.text.trim();
      const ideas = JSON.parse(jsonText) as GeneratedEventIdeas;
      return ideas;

    } catch (error) {
      console.error("Error generating event ideas with Gemini:", error);
      throw new Error("Failed to generate AI-powered event ideas. Please try again.");
    }
  }
};