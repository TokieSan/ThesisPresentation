"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Settings, Presentation } from 'lucide-react';

const ParanoidAndroidPresentation = () => {
  const [sections, setSections] = useState({});
  const [sectionOrder, setSectionOrder] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSections = async () => {
      try {
        // First try to load from localStorage
        const savedSections = localStorage.getItem('presentationSections');
        const savedOrder = localStorage.getItem('sectionOrder');
        
        if (savedSections && savedOrder) {
          setSections(JSON.parse(savedSections));
          setSectionOrder(JSON.parse(savedOrder));
        } else {
          // If no local storage data, load from API
          const response = await fetch('/api/sections');
          const data = await response.json();
          setSections(data.sections);
          setSectionOrder(data.sectionOrder);
        }
      } catch (error) {
        console.error('Error loading sections:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSections();
  }, []);

  const handleSectionClick = (section) => {
    setIsAnimating(true);
    if (activeSection === section) {
      setCompletedSections(new Set([...completedSections, section]));
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNextSection = () => {
    setIsAnimating(true);
    const currentIndex = activeSection ? sectionOrder.indexOf(activeSection) : -1;
    const nextIndex = (currentIndex + 1) % sectionOrder.length;
    if (currentIndex !== -1) {
      setCompletedSections(new Set([...completedSections, activeSection]));
    }
    setTimeout(() => {
      setActiveSection(sectionOrder[nextIndex]);
      setIsAnimating(false);
    }, 150);
  };

  const getSectionColor = (section) => {
    if (completedSections.has(section)) return "#1abc9c";
    if (activeSection === section) return "#2ecc71";
    return "#34495e";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl text-emerald-400">Loading presentation...</div>
      </div>
    );
  }

  const ContentDetail = ({ detail }) => {
    if (detail.type === "image") {
      return (
        <div className="w-full my-4">
          <img 
            src={detail.content}
            alt={detail.alt || "Content image"}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      );
    }
    return (
      <p className="text-gray-300 leading-relaxed">
        {detail.content}
      </p>
    );
  };

  const navigateToEditor = () => {
    window.location.href = '/editor'; 
  };

  const navigateToSlides = () => {
      window.location.href = '/slides';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-16">
      {/* Editor Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={navigateToEditor}
          variant="outline"
          size="icon"
          className="bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-emerald-400 hover:text-emerald-300"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    {/* Control Buttons */}
    <div className="fixed top-4 right-4 z-50 flex space-x-4">
      <Button
        onClick={navigateToSlides}
        variant="outline"
        size="icon"
        className="bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-emerald-400 hover:text-emerald-300"
      >
        <Presentation className="h-5 w-5" />
      </Button>
      <Button
        onClick={navigateToEditor}
        variant="outline"
        size="icon"
        className="bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-emerald-400 hover:text-emerald-300"
      >
        <Settings className="h-5 w-5" />
      </Button>
    </div>
        {/* Logo */}
        <div className="w-full max-w-md mx-auto">
          <svg 
            viewBox="0 0 300 380" 
            className="w-full transition-transform duration-300 ease-in-out"
            style={{ transform: isAnimating ? 'scale(0.95)' : 'scale(1)' }}
          >
          <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <g transform="translate(0, 40)">
              {/* Central face/mask structure */}
              <path
                d="M100 80 C100 80, 120 55, 150 55 C180 55, 200 80, 200 80 L200 140 C200 140, 180 165, 150 165 C120 165, 100 140, 100 140 Z"
                fill={getSectionColor('frontend')}
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => handleSectionClick('frontend')}
              />
              
              {/* Side panels */}
              <path
                d="M45 100 L90 75 L90 145 L45 170 Z"
                fill={getSectionColor('backend')}
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => handleSectionClick('backend')}
              />
              
              <path
                d="M210 75 L255 100 L255 170 L210 145 Z"
                fill={getSectionColor('backend')}
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => handleSectionClick('backend')}
              />
              
              {/* Bottom section */}
              <path
                d="M100 165 C100 165, 120 190, 150 190 C180 190, 200 165, 200 165 L200 210 C200 210, 180 235, 150 235 C120 235, 100 210, 100 210 Z"
                fill={getSectionColor('benchmarking')}
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => handleSectionClick('benchmarking')}
              />
              
              {/* Circular elements */}
              <circle
                cx="45"
                cy="210"
                r="28"
                fill={getSectionColor('agents')}
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => handleSectionClick('agents')}
              />
              
              <circle
                cx="255"
                cy="210"
                r="28"
                fill={getSectionColor('finetuning')}
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => handleSectionClick('finetuning')}
              />
              
              {/* Bottom triangular section */}
              <path
                d="M100 245 L150 300 L200 245 Z"
                fill={getSectionColor('logic')}
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => handleSectionClick('logic')}
              />

              {/* Text */}
              <text
                x="150"
                y="330"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-mono text-2xl tracking-wider"
                fill={getSectionColor('introduction')}
                filter="url(#glow)"
              >
                PARANOID ANDROID
              </text>
            </g>
          </svg>
        </div>

        {/* Next Section Button */}
        <Button
          onClick={handleNextSection}
          className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2 px-6 py-3 text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Next Section
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Content Section */}
        {activeSection && sections[activeSection] && (
          <div className="w-full max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-none shadow-xl">
              <CardHeader className="bg-gray-800/50 border-b border-gray-700 p-6">
                <CardTitle className="text-3xl text-emerald-400 font-bold text-center">
                  {sections[activeSection].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {sections[activeSection].content.map((item, index) => (
                    <div 
                      key={index} 
                      className="border-l-2 border-emerald-500 pl-6 transform transition-all duration-300 hover:translate-x-2"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'slideIn 0.5s ease-out forwards'
                      }}
                    >
                      <h3 className="text-xl font-semibold text-emerald-300 mb-3">
                        {item.title}
                      </h3>
                      <div className="space-y-4">
                        {item.details.map((detail, detailIndex) => (
                          <ContentDetail key={detailIndex} detail={detail} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Instructions */}
        <div className="text-center max-w-2xl mx-auto space-y-2 text-gray-400">
          <p className="text-lg">Click on each section of the logo to explore project components.</p>
          <p>Click again to mark as complete and illuminate that section.</p>
          <p>Use the Next Section button for a guided tour through all sections.</p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hover\\:brightness-110:hover {
          filter: brightness(1.1);
        }
      `}</style>
    </div>
  );
};

export default ParanoidAndroidPresentation;
