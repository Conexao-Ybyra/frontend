import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex justify-self-center pb-6 items-center space-x-2">
      <input
        type="text"
        className="px-4 py-2 rounded-md focus:border-indigo-100"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-orange-crayola text-white rounded-md hover:bg-indigo-600 focus:ring focus:ring-indigo-200"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
