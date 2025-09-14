<<<<<<< HEAD

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { User, UserRole, Event, Club, GeneratedEventIdeas, RecruitmentPost } from './types';
import { eventService, clubService, recruitmentService, geminiService } from './services';
=======
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { User, UserRole, Event, Club, GeneratedEventIdeas, RecruitmentPost } from './types';
import { authService, eventService, clubService, recruitmentService, geminiService } from './services';
>>>>>>> 623e149 (your message here)
import { EventCard } from './components/EventCard';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Modal } from './components/ui/Modal';
<<<<<<< HEAD
import { SparklesIcon, SunIcon, MoonIcon, HomeIcon, CalendarIcon, BriefcaseIcon, UsersIcon, MenuIcon, CloseIcon, GoogleIcon } from './components/Icons';

// --- Mock User ---
const mockStudentUser: User = {
  id: 'guest-student-001',
  name: 'Guest Student',
  email: 'guest@smail.institute.edu',
  role: UserRole.STUDENT,
};
=======
import { SparklesIcon, SunIcon, MoonIcon, LogoutIcon, HomeIcon, CalendarIcon, BriefcaseIcon, UsersIcon, MenuIcon, CloseIcon, GoogleIcon } from './components/Icons';
>>>>>>> 623e149 (your message here)

// --- Reusable UI Components ---

const LoadingPulse: React.FC = () => (
  <div className="fixed inset-0 bg-brand-bg-dark flex items-center justify-center z-50">
    <div className="text-center">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="absolute inset-0 bg-brand-primary-dark rounded-full animate-pulse-glow"></div>
        <div className="absolute inset-2 bg-brand-secondary-dark rounded-full animate-pulse-glow animation-delay-300"></div>
        <div className="absolute inset-4 bg-brand-bg-dark rounded-full flex items-center justify-center">
          <p className="font-bold text-lg text-white">C</p>
        </div>
      </div>
      <p className="text-brand-text-secondary-dark">Loading Campus Pulse...</p>
    </div>
  </div>
);

const Header: React.FC<{
<<<<<<< HEAD
  user: User;
=======
  user: User | null;
  onLogout: () => void;
>>>>>>> 623e149 (your message here)
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
<<<<<<< HEAD
}> = ({ user, theme, onThemeToggle, currentPage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navItems = user.role === UserRole.STUDENT ? [
=======
}> = ({ user, onLogout, theme, onThemeToggle, currentPage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navItems = user ? (user.role === UserRole.STUDENT ? [
>>>>>>> 623e149 (your message here)
        { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
        { id: 'events', label: 'All Events', icon: CalendarIcon },
        { id: 'clubs', label: 'Clubs', icon: UsersIcon },
        { id: 'recruitment', label: 'Recruitment', icon: BriefcaseIcon }
    ] : [
        { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
        { id: 'my-events', label: 'Manage Events', icon: CalendarIcon },
<<<<<<< HEAD
    ];
=======
    ]) : [];
>>>>>>> 623e149 (your message here)

    const NavLink: React.FC<{id: string, label: string}> = ({id, label}) => (
         <button
            onClick={() => { onNavigate(id); setIsMenuOpen(false); }}
            className={`
                px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${currentPage === id
                    ? 'bg-brand-primary-light text-white dark:bg-brand-primary-dark dark:text-brand-bg-dark'
                    : 'text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:bg-gray-200 dark:hover:bg-gray-700'
                }
            `}
        >
            {label}
        </button>
    );

    return (
        <header className="sticky top-0 z-40 bg-brand-surface-light/80 dark:bg-brand-surface-dark/80 backdrop-blur-lg shadow-md">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
<<<<<<< HEAD
                    <h1 className="text-2xl font-bold text-brand-text-light dark:text-brand-text-dark cursor-pointer" onClick={() => onNavigate('dashboard')}>
=======
                    <h1 className="text-2xl font-bold text-brand-text-light dark:text-brand-text-dark cursor-pointer" onClick={() => onNavigate(user ? 'dashboard' : 'home')}>
>>>>>>> 623e149 (your message here)
                        Campulse
                    </h1>
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-4">
<<<<<<< HEAD
                        {navItems.map(item => <NavLink key={item.id} id={item.id} label={item.label} />)}
=======
                        {user && navItems.map(item => <NavLink key={item.id} id={item.id} label={item.label} />)}
>>>>>>> 623e149 (your message here)
                        <button
                            onClick={onThemeToggle}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-brand-primary-light" />}
                        </button>
<<<<<<< HEAD
=======
                        {user ? (
                            <Button variant="ghost" onClick={onLogout}><LogoutIcon className="w-5 h-5" /> Logout</Button>
                        ) : (
                            <Button onClick={() => onNavigate('login')}>Login</Button>
                        )}
>>>>>>> 623e149 (your message here)
                    </nav>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={onThemeToggle}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-brand-primary-light" />}
                        </button>
<<<<<<< HEAD
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-brand-text-light dark:text-brand-text-dark">
                            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                 {/* Mobile Nav Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-brand-surface-light dark:bg-brand-surface-dark rounded-lg p-4 space-y-2 animate-slide-in">
                        {navItems.map(item => <NavLink key={item.id} id={item.id} label={item.label} />)}
=======
                         {user && (
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-brand-text-light dark:text-brand-text-dark">
                                {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                            </button>
                        )}
                         {!user && <Button onClick={() => onNavigate('login')}>Login</Button>}
                    </div>
                </div>
                 {/* Mobile Nav Menu */}
                {isMenuOpen && user && (
                    <div className="md:hidden mt-4 bg-brand-surface-light dark:bg-brand-surface-dark rounded-lg p-4 space-y-2 animate-slide-in">
                        {navItems.map(item => <NavLink key={item.id} id={item.id} label={item.label} />)}
                         <Button variant="ghost" onClick={onLogout} className="w-full justify-start"><LogoutIcon className="w-5 h-5" /> Logout</Button>
>>>>>>> 623e149 (your message here)
                    </div>
                )}
            </div>
        </header>
    );
};


// --- Main Application ---
const App: React.FC = () => {
<<<<<<< HEAD
  const [user, setUser] = useState<User>(mockStudentUser);
  const [page, setPage] = useState('dashboard');
  const [hasEntered, setHasEntered] = useState(false);
=======
  const [user, setUser] = useState<User | null>(null);
  const [page, setPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
>>>>>>> 623e149 (your message here)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Effect to handle theme changes on the DOM
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

<<<<<<< HEAD
=======
  // Effect to subscribe to auth state changes from Firebase
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = authService.onAuthChange(currentUser => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []); // Empty dependency array ensures this runs only once on mount

  // Effect to handle navigation based on authentication state
  useEffect(() => {
    if (isLoading) return; // Wait until the initial auth check is complete

    if (user && (page === 'home' || page === 'login')) {
      // If user is logged in and on a public page, redirect to their dashboard
      setPage('dashboard');
    } else if (!user && page !== 'home' && page !== 'login') {
      // If user is logged out and on a private page, redirect to the landing page
      setPage('home');
    }
  }, [user, page, isLoading]);

  const handleLogout = async () => {
    await authService.logout();
    // The onAuthChange listener will handle setting the user to null and the navigation effect will redirect
  };

>>>>>>> 623e149 (your message here)
  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  
  const renderPage = () => {
<<<<<<< HEAD
=======
    if (isLoading) return <LoadingPulse />;
    
    if (!user) {
        switch(page) {
            case 'login': return <LoginPage onNavigate={setPage}/>
            default: return <LandingPage onNavigate={setPage}/>
        }
    }

    // --- Logged in views ---
>>>>>>> 623e149 (your message here)
    const mainContent = () => {
      switch(page) {
        case 'dashboard':
            return user.role === UserRole.STUDENT ? <StudentDashboard user={user} /> : <ClubDashboard user={user} />;
        case 'events':
            return <AllEventsPage user={user} />;
        case 'clubs':
            return <ClubsPage />;
        case 'recruitment':
            return <RecruitmentPage />;
        case 'my-events':
            return <ClubDashboard user={user} />;
        default:
            setPage('dashboard'); // Redirect to dashboard if page is invalid
            return <StudentDashboard user={user} />;
      }
    };
    
    return (
        <main className="flex-1 p-4 sm:p-6 md:p-8 bg-brand-bg-light dark:bg-brand-bg-dark">
            <div className="container mx-auto">
                {mainContent()}
            </div>
        </main>
    );
  };
  
<<<<<<< HEAD
  if (!hasEntered) {
    return <LandingPage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} theme={theme} onThemeToggle={handleThemeToggle} onNavigate={setPage} currentPage={page} />
=======
  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} onLogout={handleLogout} theme={theme} onThemeToggle={handleThemeToggle} onNavigate={setPage} currentPage={page} />
>>>>>>> 623e149 (your message here)
      {renderPage()}
    </div>
  );
};


<<<<<<< HEAD
// --- Page Components (Unused login/landing pages remain for potential future use) ---

const LandingPage: React.FC<{ onEnter: () => void }> = ({ onEnter }) => (
  <div className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-teal-50 via-cyan-100 to-emerald-100 dark:from-emerald-900/50 dark:via-brand-bg-dark dark:to-cyan-900/30 text-brand-text-light dark:text-brand-text-dark overflow-hidden min-h-screen">
=======
// --- Page Components ---

const LandingPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <div className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-teal-50 via-cyan-100 to-emerald-100 dark:from-emerald-900/50 dark:via-brand-bg-dark dark:to-cyan-900/30 text-brand-text-light dark:text-brand-text-dark overflow-hidden">
>>>>>>> 623e149 (your message here)
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left animate-slide-in">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-primary-light to-brand-secondary-light dark:from-brand-primary-dark dark:to-brand-secondary-dark">
            Campulse
          </h1>
          <p className="text-lg md:text-xl text-brand-text-secondary-light dark:text-brand-text-secondary-dark mb-8 max-w-md mx-auto md:mx-0">
            Your Campus Pulse. Discover, create, and join events. All in one place.
          </p>
<<<<<<< HEAD
          <Button onClick={onEnter} className="text-lg px-8 py-4 animate-pulse-glow">
=======
          <Button onClick={() => onNavigate('login')} className="text-lg px-8 py-4 animate-pulse-glow">
>>>>>>> 623e149 (your message here)
            Get Started
          </Button>
        </div>
        
        {/* Right Column: Visual Graphic */}
        <div className="relative h-80 md:h-96 w-full flex items-center justify-center animate-slide-in" style={{animationDelay: '0.2s'}}>
            {/* Animated SVG Blob */}
            <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute opacity-60 dark:opacity-30 max-w-lg">
                <defs>
                    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="text-brand-primary-dark" stopColor="currentColor" />
                        <stop offset="100%" className="text-brand-secondary-dark" stopColor="currentColor" />
                    </linearGradient>
                </defs>
                <path fill="url(#blobGradient)" d="M334,295Q268,340,200,342.5Q132,345,74.5,297.5Q17,250,71.5,196Q126,142,197,126Q268,110,334,155Q400,200,334,295Z" transform="translate(0, -50)">
                    <animate attributeName="d" dur="15s" repeatCount="indefinite" values="M334,295Q268,340,200,342.5Q132,345,74.5,297.5Q17,250,71.5,196Q126,142,197,126Q268,110,334,155Q400,200,334,295Z; M349.5,296.5Q299,343,224.5,348Q150,353,101,301.5Q52,250,91.5,194.5Q131,139,203,131Q275,123,325,186.5Q375,250,349.5,296.5Z; M334,295Q268,340,200,342.5Q132,345,74.5,297.5Q17,250,71.5,196Q126,142,197,126Q268,110,334,155Q400,200,334,295Z;"></animate>
                </path>
            </svg>
            
            {/* Floating "Event Type" cards */}
            <div className="relative w-full h-full">
                <div className="absolute top-[20%] left-[25%] w-12 h-12 bg-brand-surface-light/80 dark:bg-brand-surface-dark/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 animate-pulse-glow" style={{ animationDelay: '0.2s' }}>
                    <div className="w-6 h-6 bg-brand-primary-light dark:bg-brand-primary-dark rounded-md"></div>
                </div>
                <div className="absolute top-[55%] left-[15%] w-16 h-16 bg-brand-surface-light/80 dark:bg-brand-surface-dark/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12 animate-pulse-glow" style={{animationDelay: '0.7s'}}>
                    <div className="w-8 h-8 bg-brand-secondary-light dark:bg-brand-secondary-dark rounded-full"></div>
                </div>
                 <div className="absolute top-[30%] right-[20%] w-14 h-14 bg-brand-surface-light/80 dark:bg-brand-surface-dark/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center transform rotate-6 animate-pulse-glow" style={{animationDelay: '1.2s'}}>
                    <div className="w-7 h-7 bg-brand-accent rounded-lg"></div>
                </div>
            </div>
        </div>

      </div>
    </div>
  </div>
);


const FirebaseConfigErrorGuide: React.FC<{ projectId: string }> = ({ projectId }) => {
  const consoleUrl = `https://console.firebase.google.com/u/0/project/${projectId}/authentication/providers`;

  return (
    <div className="text-left text-sm bg-yellow-100 dark:bg-yellow-500/10 border border-yellow-400 dark:border-yellow-500/20 p-4 rounded-lg my-4">
      <h3 className="font-bold text-yellow-800 dark:text-yellow-100 text-base mb-2">Action Required: Enable Google Sign-In</h3>
      <p className="text-yellow-700 dark:text-yellow-200 mb-3">
        This app can't log you in because Google Sign-In is disabled in its backend. This is a one-time setup step you need to perform.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-yellow-900 dark:text-yellow-300">
        <li>
          Click this direct link to open the settings page:
          <br />
          <a href={consoleUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 dark:text-indigo-400 underline hover:opacity-80 break-all">
            Open Firebase Auth Settings
          </a>
        </li>
        <li>
          Find and click on <strong>"Google"</strong> in the list of sign-in providers.
        </li>
        <li>
          A new panel will open. Click the <strong>"Enable"</strong> toggle switch.
        </li>
        <li>
          Click the <strong>"Save"</strong> button.
        </li>
        <li>
          Return to this page and try logging in again.
        </li>
      </ol>
      <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-4">
        (Project ID: <strong className="font-mono">{projectId}</strong>)
      </p>
    </div>
  );
};

const FirebaseDomainErrorGuide: React.FC<{ projectId: string; currentDomain: string }> = ({ projectId, currentDomain }) => {
  const consoleUrl = `https://console.firebase.google.com/u/0/project/${projectId}/authentication/settings`;

  return (
    <div className="text-left text-sm bg-red-100 dark:bg-red-900/50 border-2 border-red-500 dark:border-red-400 p-4 my-6 rounded-xl shadow-lg" role="alert">
      <div className="flex items-start">
        <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-red-500 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        </div>
        <div className="ml-3 flex-grow">
            <h3 className="font-bold text-red-800 dark:text-red-100 text-lg mb-2">Login Blocked: Domain Not Authorized</h3>
            <p className="text-red-700 dark:text-red-200 mb-4">
                This is a one-time security step. Your website's address must be added to a "safe list" in your Firebase project before login will work.
            </p>
            <div className="bg-red-200 dark:bg-red-800/50 p-4 rounded-lg">
                <p className="text-red-800 dark:text-red-200 mb-2 font-semibold">1. Copy this domain:</p>
                <div className="flex items-center gap-2 p-2 bg-white dark:bg-black/50 rounded-md">
                    <input 
                        type="text" 
                        readOnly 
                        value={currentDomain}
                        className="flex-grow bg-transparent text-red-900 dark:text-red-100 font-mono text-sm focus:outline-none" 
                    />
                    <button 
                        onClick={() => navigator.clipboard.writeText(currentDomain)} 
                        className="px-2 py-1 text-xs font-semibold text-red-700 bg-red-200 rounded hover:bg-red-300 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-700 transition-colors"
                        title="Copy to clipboard"
                    >
                        Copy
                    </button>
                </div>
                 <p className="text-red-800 dark:text-red-200 mt-4 mb-2 font-semibold">2. Add it to your Firebase project:</p>
                 <a href={consoleUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
                    Open Firebase Auth Settings
                 </a>
                 <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                    In the settings, find "Authorized domains", click "Add domain", and paste what you copied.
                 </p>
            </div>
            <p className="text-xs text-red-600 dark:text-red-400 mt-4">
                After adding the domain, return here and try logging in again. (Project ID: {projectId})
            </p>
        </div>
      </div>
    </div>
  );
};


const LoginPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [error, setError] = useState<React.ReactNode>('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    setError('');
    setIsLoggingIn(true);
<<<<<<< HEAD
    // This function will not be called in the current app state, but is kept for reference
=======
    try {
      await authService.loginWithGoogle();
      // onAuthChange listener in App.tsx will handle navigation
    } catch (err: any) {
      console.error("Firebase Login Error:", err);
      if (err.code === 'auth/configuration-not-found') {
          setError(<FirebaseConfigErrorGuide projectId="campulse-9f1c8" />);
      } else if (err.code === 'auth/unauthorized-domain') {
          const currentDomain = window.location.hostname;
          setError(<FirebaseDomainErrorGuide projectId="campulse-9f1c8" currentDomain={currentDomain} />);
      } else if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') {
        setError("Login cancelled. Please try again when you're ready.");
      } else if (err.code === 'auth/operation-not-allowed') {
          setError("Login failed. Please ensure this domain is authorized in your Firebase project settings under Authentication > Settings.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      setIsLoggingIn(false);
    }
>>>>>>> 623e149 (your message here)
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-brand-bg-light dark:bg-brand-bg-dark p-4">
      <div className="w-full max-w-sm bg-brand-surface-light dark:bg-brand-surface-dark rounded-2xl shadow-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-brand-text-light dark:text-brand-text-dark mb-2">Welcome Back</h2>
        <p className="text-brand-text-secondary-light dark:text-brand-text-secondary-dark mb-8">Sign in to continue to Campulse.</p>
        
        {error ? (
            <div>{error}</div>
        ) : null}

        <Button onClick={handleLogin} className="w-full text-base" disabled={isLoggingIn}>
            <GoogleIcon className="w-5 h-5"/>
            {isLoggingIn ? 'Redirecting...' : 'Sign in with Google'}
        </Button>
        <p className="text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark mt-6">
            By continuing, you agree to our terms of service.
        </p>
      </div>
    </div>
  );
};


// --- Student Dashboard Pages ---

const StudentDashboard: React.FC<{ user: User }> = ({ user }) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [bookmarkedEvents, setBookmarkedEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            const allEvents = await eventService.getEvents();
            setEvents(allEvents);
            setBookmarkedEvents(allEvents.filter(e => e.bookmarkedBy.includes(user.id)));
            setIsLoading(false);
        };
        fetchEvents();
    }, [user.id]);
    
    const handleBookmarkToggle = async (eventId: string) => {
        const updatedEvent = await eventService.toggleBookmark(eventId, user.id);
        setEvents(prevEvents => prevEvents.map(e => e.id === eventId ? updatedEvent : e));
        setBookmarkedEvents(prevBookmarked => {
            if (updatedEvent.bookmarkedBy.includes(user.id)) {
                const existing = prevBookmarked.find(e => e.id === eventId);
                return existing ? prevBookmarked : [...prevBookmarked, updatedEvent];
            } else {
                return prevBookmarked.filter(e => e.id !== eventId);
            }
        });
    };

    if (isLoading) return <p className="text-center text-brand-text-secondary-dark">Loading dashboard...</p>;

    return (
        <div>
            <h2 className="text-3xl font-bold text-brand-text-light dark:text-brand-text-dark mb-6">Welcome, {user.name.split(' ')[0]}!</h2>
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-brand-text-light dark:text-brand-text-dark">Your Bookmarked Events</h3>
                {bookmarkedEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookmarkedEvents.map(event => (
                            <EventCard key={event.id} event={event} isBookmarked={true} onBookmarkToggle={handleBookmarkToggle} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 px-4 bg-brand-surface-light dark:bg-brand-surface-dark rounded-lg">
                        <p className="text-brand-text-secondary-light dark:text-brand-text-secondary-dark">You haven't bookmarked any events yet.</p>
                        <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark mt-2">Click the bookmark icon on an event to save it here!</p>
                    </div>
                )}
            </div>
             <div>
                <h3 className="text-2xl font-semibold mb-4 text-brand-text-light dark:text-brand-text-dark">Happening Soon</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.slice(0, 3).map(event => (
                        <EventCard key={event.id} event={event} isBookmarked={event.bookmarkedBy.includes(user.id)} onBookmarkToggle={handleBookmarkToggle} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const AllEventsPage: React.FC<{user: User}> = ({user}) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            const allEvents = await eventService.getEvents();
            setEvents(allEvents);
            setIsLoading(false);
        };
        fetchEvents();
    }, []);
    
    const handleBookmarkToggle = async (eventId: string) => {
        const updatedEvent = await eventService.toggleBookmark(eventId, user.id);
        setEvents(prevEvents => prevEvents.map(e => e.id === eventId ? updatedEvent : e));
    };

    const filteredEvents = useMemo(() =>
        events.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase())
        ), [events, searchTerm]);
    
    if (isLoading) return <p className="text-center text-brand-text-secondary-dark">Loading events...</p>;

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-brand-text-light dark:text-brand-text-dark">All Upcoming Events</h2>
            <Input 
                label="Search Events"
                id="search"
                type="text"
                placeholder="Search by title or description..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="mb-6 max-w-lg mx-auto"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                 {filteredEvents.map(event => (
                    <EventCard 
                        key={event.id}
                        event={event} 
                        isBookmarked={event.bookmarkedBy.includes(user.id)}
                        onBookmarkToggle={handleBookmarkToggle}
                    />
                ))}
            </div>
        </div>
    );
};

const ClubsPage: React.FC = () => {
    const [clubs, setClubs] = useState<Club[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchClubs = async () => {
            setIsLoading(true);
            const allClubs = await clubService.getClubs();
            setClubs(allClubs);
            setIsLoading(false);
        }
        fetchClubs();
    }, []);

    if(isLoading) return <p className="text-center text-brand-text-secondary-dark">Loading clubs...</p>;

    return (
        <div>
             <h2 className="text-3xl font-bold mb-6 text-brand-text-light dark:text-brand-text-dark">Institute Clubs</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map(club => (
                    <div key={club.id} className="bg-brand-surface-light dark:bg-brand-surface-dark p-6 rounded-2xl shadow-lg text-center animate-slide-in transition-transform transform hover:-translate-y-1">
                        <img src={club.logoUrl} alt={`${club.name} logo`} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-primary-light dark:border-brand-primary-dark" />
                        <h3 className="text-xl font-bold text-brand-text-light dark:text-brand-text-dark">{club.name}</h3>
                        <p className="text-brand-text-secondary-light dark:text-brand-text-secondary-dark mt-2 text-sm">{club.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

const RecruitmentPage: React.FC = () => {
    const [posts, setPosts] = useState<RecruitmentPost[]>([]);
    const [clubs, setClubs] = useState<Map<string, Club>>(new Map());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [recPosts, clubList] = await Promise.all([
                recruitmentService.getRecruitmentPosts(),
                clubService.getClubs()
            ]);
            setPosts(recPosts);
            setClubs(new Map(clubList.map(c => [c.id, c])));
            setIsLoading(false);
        }
        fetchData();
    }, []);
    
    const tickerContent = posts.map(p => {
        const clubName = clubs.get(p.clubId)?.name || 'A club';
        return `${clubName} is hiring!`;
    }).join(' • ');

    if(isLoading) return <p className="text-center text-brand-text-secondary-dark">Loading recruitment info...</p>
    
    return (
        <div>
            <h2 className="text-3xl font-bold mb-2 text-brand-text-light dark:text-brand-text-dark">Club Recruitment</h2>
            
            <div className="relative w-full overflow-hidden bg-brand-primary-light dark:bg-brand-primary-dark text-white py-2 mb-6 rounded-md shadow-lg">
                <div className="whitespace-nowrap animate-ticker-scroll">
                    <span className="font-semibold px-4">{tickerContent}</span>
                    <span className="font-semibold px-4">{tickerContent}</span>
                </div>
            </div>

            <div className="space-y-4">
                {posts.map(post => {
                    const club = clubs.get(post.clubId);
                    if (!club) return null;
                    return (
                        <div key={post.id} className="bg-brand-surface-light dark:bg-brand-surface-dark p-5 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-5">
                            <img src={club.logoUrl} alt={club.name} className="w-16 h-16 rounded-full" />
                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="font-bold text-lg text-brand-text-light dark:text-brand-text-dark">{post.title}</h3>
                                <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark">{post.description}</p>
                                <p className="text-xs text-brand-secondary-light dark:text-brand-secondary-dark mt-1">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
                            </div>
                            <Button onClick={() => alert('Application submission is simulated.')} className="w-full sm:w-auto">Apply Now</Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


// --- Club Dashboard ---
const ClubDashboard: React.FC<{ user: User }> = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idea, setIdea] = useState<GeneratedEventIdeas | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    
    const handleGenerateIdea = async () => {
        setIsGenerating(true);
        setIdea(null);
        try {
            const newIdea = await geminiService.generateEventIdeas('a fun technical workshop for college students');
            setIdea(newIdea);
        } catch (error) {
            console.error(error);
            // Show some error to the user
        }
        setIsGenerating(false);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-brand-text-light dark:text-brand-text-dark mb-6">Welcome, {user.name}!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* My Events List */}
                <div className="bg-brand-surface-light dark:bg-brand-surface-dark p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-brand-text-light dark:text-brand-text-dark">Your Events</h3>
                    <p className="text-brand-text-secondary-light dark:text-brand-text-secondary-dark mb-4">You have 2 upcoming events.</p>
                     <Button onClick={() => setIsModalOpen(true)}>Create New Event</Button>
                </div>
                {/* AI Event Generator */}
                <div className="bg-brand-surface-light dark:bg-brand-surface-dark p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-brand-text-light dark:text-brand-text-dark">
                        <SparklesIcon className="w-6 h-6 text-brand-accent" />
                        AI Event Idea Generator
                    </h3>
                    <p className="text-brand-text-secondary-light dark:text-brand-text-secondary-dark mb-4">Stuck for ideas? Let AI help you brainstorm.</p>
                    <Button onClick={handleGenerateIdea} disabled={isGenerating}>
                        {isGenerating ? 'Generating...' : 'Generate Idea'}
                    </Button>
                    {idea && (
                        <div className="mt-4 p-4 bg-brand-bg-light dark:bg-brand-bg-dark rounded-lg border border-gray-200 dark:border-gray-700">
                            <h4 className="font-bold text-brand-primary-light dark:text-brand-primary-dark">{idea.title}</h4>
                            <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark mt-1">{idea.description}</p>
                        </div>
                    )}
                </div>
            </div>
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Event">
                {/* Form to create a new event will go here */}
                <p className="text-brand-text-secondary-light dark:text-brand-text-secondary-dark">Event creation form fields will be here...</p>
            </Modal>
        </div>
    );
};


<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 623e149 (your message here)
