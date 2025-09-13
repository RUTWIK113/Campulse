import React from 'react';
import { Event } from '../types';
import { formatDate } from '../utils';
import { Button } from './ui/Button';
import { Tag } from './ui/Tag';
import { CalendarIcon, LocationIcon, AddToCalendarIcon, BookmarkIcon } from './Icons';
import { generateGoogleCalendarLink } from '../utils';

interface EventCardProps {
  event: Event;
  isBookmarked: boolean;
  onBookmarkToggle: (eventId: string) => void;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({ event, isBookmarked, onBookmarkToggle, className }) => {

  const handleAddToCalendar = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(generateGoogleCalendarLink(event), '_blank');
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBookmarkToggle(event.id);
  };
  
  return (
    <div className={`
      bg-brand-surface-light dark:bg-brand-surface-dark 
      border border-gray-200 dark:border-gray-700/50
      rounded-2xl shadow-lg overflow-hidden
      transform hover:-translate-y-2 transition-transform duration-300
      animate-slide-in flex flex-col ${className}`}
      style={{ animationDelay: `${Math.random() * 0.3}s` }}
      >
      <div className="relative">
        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
         <div 
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/40 cursor-pointer hover:bg-brand-primary-light dark:hover:bg-brand-primary-dark transition-colors"
            onClick={handleBookmarkClick}
            title={isBookmarked ? "Remove bookmark" : "Bookmark event"}
            >
            <BookmarkIcon filled={isBookmarked} className="w-5 h-5 text-white"/>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
            {event.tags.slice(0, 3).map(tag => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <h3 className="text-xl font-bold text-brand-text-light dark:text-brand-text-dark mb-2 truncate">{event.title}</h3>
        <p className="text-brand-text-secondary-light dark:text-brand-text-secondary-dark text-sm mb-4 h-10 overflow-hidden">
          {event.description}
        </p>
        <div className="space-y-2 text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark mb-5 mt-auto">
            <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-brand-secondary-light dark:text-brand-secondary-dark"/>
                <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
                <LocationIcon className="w-4 h-4 text-brand-secondary-light dark:text-brand-secondary-dark"/>
                <span>{event.location}</span>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <Button variant="secondary" onClick={handleAddToCalendar}>
                <AddToCalendarIcon className="w-5 h-5"/>
                Add to Calendar
            </Button>
        </div>
      </div>
    </div>
  );
};
