// components/searchAndResults/searchAndResults.component.tsx
'use client';
import { useState, useEffect } from 'react';
import type { Story } from '@/app/types/types';
import { Button } from '../shared/Button';

type SearchAndResultsProps = {
  searchValue: string;
  results: Story[];
  isLoading: boolean;
  onSearchChangeAction: (value: string) => void;
  onAddAction: (id: string) => void;
};

export default function SearchAndResults({
  searchValue,
  results,
  isLoading,
  onSearchChangeAction,
  onAddAction,
}: SearchAndResultsProps) {
  const [localSearch, setLocalSearch] = useState(searchValue);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       onSearchChangeAction(localSearch);
//     }, 300);

//     return () => clearTimeout(handler);
//   }, [localSearch, onSearchChangeAction]);

  return (
    <div className='search-section'>
      <input
        type='text'
        value={searchValue}
        onChange={e => onSearchChangeAction(e.target.value)}
        placeholder='Search stories...'
        aria-label='Search stories'
      />

      {!isLoading && searchValue && (
        <div className='results-container'>
          {results.length === 0 ? (
            <p>No stories found matching your search</p>
          ) : (
            <ul>
              {results.map(story => (
                <li key={story.id}>
                  <div className='story-info'>
                    <h3>{story.title}</h3>
                    <p>{story.content.substring(0, 100)}...</p>
                  </div>
                  <Button
                    onClick={() => onAddAction(story.id)}
                    aria-label={`Add ${story.title} to recommendations`}
                  >
                    Add
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {isLoading && searchValue && <p>Searching stories...</p>}
    </div>
  );
}
