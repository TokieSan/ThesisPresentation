"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home, Maximize2, Minimize2 } from 'lucide-react';
import NavigationButtons, { reloadFromFile } from '@/components/NavigationButtons';

const ParanoidLogo = ({ sectionColors = {}, className = "", strokeColor = "#1abc9c" }) => {
  return (
    <svg 
      viewBox="0 0 300 380" 
      className={className}
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
        <path
          d="M100 80 C100 80, 120 55, 150 55 C180 55, 200 80, 200 80 L200 140 C200 140, 180 165, 150 165 C120 165, 100 140, 100 140 Z"
          fill={sectionColors['frontend'] || strokeColor}
        />
        
        <path
          d="M45 100 L90 75 L90 145 L45 170 Z"
          fill={sectionColors['backend'] || strokeColor}
        />
        
        <path
          d="M210 75 L255 100 L255 170 L210 145 Z"
          fill={sectionColors['backend'] || strokeColor}
        />
        
        <path
          d="M100 165 C100 165, 120 190, 150 190 C180 190, 200 165, 200 165 L200 210 C200 210, 180 235, 150 235 C120 235, 100 210, 100 210 Z"
          fill={sectionColors['benchmarking'] || strokeColor}
        />
        
        <circle
          cx="45"
          cy="210"
          r="28"
          fill={sectionColors['agents'] || strokeColor}
        />
        
        <circle
          cx="255"
          cy="210"
          r="28"
          fill={sectionColors['finetuning'] || strokeColor}
        />
        
        <path
          d="M100 245 L150 300 L200 245 Z"
          fill={sectionColors['logic'] || strokeColor}
        />

        <text
          x="150"
          y="330"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-mono text-2xl tracking-wider"
          fill={sectionColors['introduction'] || strokeColor}
          filter="url(#glow)"
        >
          PARANOID ANDROID
        </text>
      </g>
    </svg>
  );
};

const PresentationSlides = () => {
  const [sections, setSections] = useState({});
  const [sectionOrder, setSectionOrder] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [totalSlides, setTotalSlides] = useState(0);
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSections = async () => {
      try {
        const savedSections = localStorage.getItem('presentationSections');
        const savedOrder = localStorage.getItem('sectionOrder');
        
        if (savedSections && savedOrder) {
          const parsedSections = JSON.parse(savedSections);
          const parsedOrder = JSON.parse(savedOrder);
          setSections(parsedSections);
          setSectionOrder(parsedOrder);
          generateSlides(parsedSections, parsedOrder);
        } else {
          const response = await fetch('/api/sections');
          const data = await response.json();
          setSections(data.sections);
          setSectionOrder(data.sectionOrder);
          generateSlides(data.sections, data.sectionOrder);
        }
      } catch (error) {
        console.error('Error loading sections:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSections();
  }, []);

  const generateSlides = (sections, order) => {
    const generatedSlides = [];

    // Title slide
    generatedSlides.push({
      type: 'title',
      content: null
    });

    // Generate content slides
    order.forEach(sectionId => {
      const section = sections[sectionId];
      
      // Section title slide
      generatedSlides.push({
        type: 'section-title',
        title: section.title,
        sectionId: sectionId
      });

      // Content slides
      section.content.forEach(block => {
        generatedSlides.push({
          type: 'content',
          title: section.title,
          subtitle: block.title,
          details: block.details,
          sectionId: sectionId
        });
      });
    });

    setSlides(generatedSlides);
    setTotalSlides(generatedSlides.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const navigateSlide = (direction) => {
    if (direction === 'next' && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (direction === 'prev' && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goHome = () => {
    window.location.href = '/';  // Adjust based on your routing
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      navigateSlide('next');
    } else if (event.key === 'ArrowLeft') {
      navigateSlide('prev');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentSlide]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl text-emerald-400">Loading presentation...</div>
      </div>
    );
  }

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <ParanoidLogo className="w-2/3 max-w-2xl transition-all duration-500" />
            <p className="text-xl text-gray-400 whitespace-pre-wrap">A Transformer-Based Cognitive Assistant with Formal Verification for Automated Task Sequencing and Hallucination Mitigation</p>
          </div>
        );
      
      case 'section-title':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <ParanoidLogo 
              className="w-1/3 max-w-md opacity-20 absolute top-10" 
              sectionColors={{ [slide.sectionId]: "#1abc9c" }}
            />
            <h1 className="text-5xl font-bold text-emerald-400">{slide.title}</h1>
          </div>
        );
      
      case 'content':
        return (
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-emerald-400">{slide.title}</h2>
                <h3 className="text-xl text-gray-400 mt-2">{slide.subtitle}</h3>
              </div>
              <ParanoidLogo 
                className="w-24 h-24 opacity-20" 
                sectionColors={{ [slide.sectionId]: "#1abc9c" }}
              />
            </div>
            <div className="flex-grow overflow-auto space-y-4">
              {slide.details.map((detail, index) => (
                <div 
                  key={index}
                  className="transform transition-all duration-500 delay-100"
                  style={{
                    animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`
                  }}
                >
                {detail.type === 'image' ? (
                    <div className="flex justify-center items-center h-[60vh]">
                    <img 
                      src={detail.content}
                      alt={detail.alt || "Content image"}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    />
                    </div>
                ) : (
                <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {detail.content}
                </p>
                )} 
                </div>
              ))}
            </div>
          </div>
        );
    }
  };


  const navigateHome = () => {
    window.location.href = '/';
  };

  const navigateToSlides = () => {
    window.location.href = '/slides';
  };

  const navigateToEditor = () => {
    window.location.href = '/editor';
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed top-4 right-4 z-50 flex space-x-4">
        <NavigationButtons 
          onNavigateHome={navigateHome}
          onNavigateEditor={navigateToEditor}
          onNavigateSlides={navigateToSlides}
          onReloadFromFile={reloadFromFile}
          showSlides={false}
        />

      </div>
      <div className="fixed top-4 right-4 z-50 flex space-x-4">

        <Button
          onClick={toggleFullscreen}
          variant="outline"
          size="icon"
          className="bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600 text-emerald-400 hover:text-emerald-300"
        >
          {isFullscreen ? (
            <Minimize2 className="h-5 w-5" />
          ) : (
            <Maximize2 className="h-5 w-5" />
          )}
        </Button>
      </div>


      <div className="container mx-auto px-8 py-12 min-h-screen flex flex-col">
        <div className="flex-grow relative">
          <Card className="absolute inset-0 bg-gray-800 border-none shadow-xl overflow-hidden">
            <CardContent className="p-12 h-full">
              {renderSlide(slides[currentSlide])}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center mt-8 px-4">
          <Button
            onClick={() => navigateSlide('prev')}
            disabled={currentSlide === 0}
            className="bg-gray-800 hover:bg-gray-700"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Previous
          </Button>
          
          <div className="text-gray-400">
            {currentSlide + 1} / {totalSlides}
          </div>
          
          <Button
            onClick={() => navigateSlide('next')}
            disabled={currentSlide === totalSlides - 1}
            className="bg-gray-800 hover:bg-gray-700"
          >
            Next
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PresentationSlides;
