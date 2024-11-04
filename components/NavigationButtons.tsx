// /components/NavigationButtons.tsx
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Presentation, Home, RotateCcw } from 'lucide-react';

// Function to reload sections from file
const reloadFromFile = async () => {
  try {
    const response = await fetch('/api/sections');
    const data = await response.json();
    localStorage.setItem('presentationSections', JSON.stringify(data.sections));
    localStorage.setItem('sectionOrder', JSON.stringify(data.sectionOrder));
    window.location.reload();
  } catch (error) {
    console.error('Error reloading sections:', error);
  }
};

interface NavigationButtonsProps {
  onNavigateHome: () => void;
  onNavigateEditor: () => void;
  onNavigateSlides: () => void;
  onReloadFromFile: () => void;
  showEditor?: boolean;
  showSlides?: boolean;
  showReload?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNavigateHome,
  onNavigateEditor,
  onNavigateSlides,
  onReloadFromFile,
  showEditor = true,
  showSlides = true,
  showReload = true,
}) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-4">
      <Button
        onClick={onNavigateHome}
        variant="outline"
        size="icon"
        className="bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-emerald-400 hover:text-emerald-300"
      >
        <Home className="h-5 w-5" />
      </Button>
      {showSlides && (
        <Button
          onClick={onNavigateSlides}
          variant="outline"
          size="icon"
          className="bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-emerald-400 hover:text-emerald-300"
        >
          <Presentation className="h-5 w-5" />
        </Button>
      )}
      {showEditor && (
        <Button
          onClick={onNavigateEditor}
          variant="outline"
          size="icon"
          className="bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-emerald-400 hover:text-emerald-300"
        >
          <Settings className="h-5 w-5" />
        </Button>
      )}
      {showReload && (
        <Button
          onClick={onReloadFromFile}
          variant="outline"
          size="icon"
          className="bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-emerald-400 hover:text-emerald-300"
          title="Reload from sections.js"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
export { reloadFromFile };
