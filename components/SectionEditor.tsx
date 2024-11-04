// app/components/SectionEditor.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Save, ChevronDown, ChevronUp, Download, Presentation, Home } from 'lucide-react';
import NavigationButtons, { reloadFromFile } from '@/components/NavigationButtons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SectionEditor = () => {
  const [sections, setSections] = useState({});
  const [sectionOrder, setSectionOrder] = useState([]);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Load sections from localStorage or fetch from API
    const loadSections = async () => {
      try {
        const savedSections = localStorage.getItem('presentationSections');
        const savedOrder = localStorage.getItem('sectionOrder');
        
        if (savedSections && savedOrder) {
          setSections(JSON.parse(savedSections));
          setSectionOrder(JSON.parse(savedOrder));
        } else {
          // If no saved data, load from sections.js
          const response = await fetch('/api/sections');
          const data = await response.json();
          setSections(data.sections);
          setSectionOrder(data.sectionOrder);
        }
      } catch (error) {
        console.error('Error loading sections:', error);
      }
    };

    loadSections();
  }, []);

  const saveChanges = () => {
    localStorage.setItem('presentationSections', JSON.stringify(sections));
    localStorage.setItem('sectionOrder', JSON.stringify(sectionOrder));
    setUnsavedChanges(false);
  };

  const addSection = () => {
    const newSectionId = `section${Object.keys(sections).length + 1}`;
    setSections(prev => ({
      ...prev,
      [newSectionId]: {
        title: "New Section",
        content: []
      }
    }));
    setSectionOrder(prev => [...prev, newSectionId]);
    setUnsavedChanges(true);
  };

  const removeSection = (sectionId) => {
    const newSections = { ...sections };
    delete newSections[sectionId];
    setSections(newSections);
    setSectionOrder(prev => prev.filter(id => id !== sectionId));
    setUnsavedChanges(true);
  };

  const updateSection = (sectionId, field, value) => {
    setSections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [field]: value
      }
    }));
    setUnsavedChanges(true);
  };

  const addContentBlock = (sectionId) => {
    setSections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        content: [
          ...prev[sectionId].content,
          {
            title: "New Content Block",
            details: []
          }
        ]
      }
    }));
    setUnsavedChanges(true);
  };

  const removeContentBlock = (sectionId, blockIndex) => {
    setSections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        content: prev[sectionId].content.filter((_, index) => index !== blockIndex)
      }
    }));
    setUnsavedChanges(true);
  };

  const addDetail = (sectionId, blockIndex, type = "text") => {
    setSections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        content: prev[sectionId].content.map((block, idx) => {
          if (idx === blockIndex) {
            return {
              ...block,
              details: [
                ...block.details,
                {
                  type,
                  content: "",
                  alt: type === "image" ? "" : undefined
                }
              ]
            };
          }
          return block;
        })
      }
    }));
    setUnsavedChanges(true);
  };

  const updateDetail = (sectionId, blockIndex, detailIndex, field, value) => {
    setSections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        content: prev[sectionId].content.map((block, bIdx) => {
          if (bIdx === blockIndex) {
            return {
              ...block,
              details: block.details.map((detail, dIdx) => {
                if (dIdx === detailIndex) {
                  return {
                    ...detail,
                    [field]: value
                  };
                }
                return detail;
              })
            };
          }
          return block;
        })
      }
    }));
    setUnsavedChanges(true);
  };

  const removeDetail = (sectionId, blockIndex, detailIndex) => {
    setSections(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        content: prev[sectionId].content.map((block, bIdx) => {
          if (bIdx === blockIndex) {
            return {
              ...block,
              details: block.details.filter((_, dIdx) => dIdx !== detailIndex)
            };
          }
          return block;
        })
      }
    }));
    setUnsavedChanges(true);
  };

  const moveSectionUp = (index) => {
    if (index > 0) {
      const newOrder = [...sectionOrder];
      [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
      setSectionOrder(newOrder);
      setUnsavedChanges(true);
    }
  };

  const moveSectionDown = (index) => {
    if (index < sectionOrder.length - 1) {
      const newOrder = [...sectionOrder];
      [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
      setSectionOrder(newOrder);
      setUnsavedChanges(true);
    }
  };

  const exportSectionsFile = () => {
      // Generate the sections.js content
      const fileContent = `// sections.js

      export const sections = ${JSON.stringify(sections, null, 2)};

      export const sectionOrder = ${JSON.stringify(sectionOrder, null, 2)};
      `;

      // Create a blob with the content
      const blob = new Blob([fileContent], { type: 'text/javascript' });
      const url = URL.createObjectURL(blob);

      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sections.js';
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
  };

  const navigateToSlides = () => {
      window.location.href = '/slides';
  };

  const navigateHome = () => {
      window.location.href = '/';
  };

  const navigateToEditor = () => {
    window.location.href = '/editor';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <NavigationButtons 
        onNavigateHome={navigateHome}
        onNavigateEditor={navigateToEditor}
        onNavigateSlides={navigateToSlides}
        onReloadFromFile={reloadFromFile}
        showEditor={false}
      />
    <Card className="bg-gray-800 border-none shadow-xl">
        <CardHeader className="bg-gray-800/50 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl text-emerald-400">Section Editor</CardTitle>
            <div className="space-x-4">
              <Button
                onClick={addSection}
                className="bg-emerald-500 hover:bg-emerald-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Section
              </Button>
              <Button
                onClick={saveChanges}
                disabled={!unsavedChanges}
                className={`${
                  unsavedChanges ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
              <Button
                onClick={exportSectionsFile}
                className="bg-purple-500 hover:bg-purple-600"
              >
                <Download className="w-4 h-4 mr-2" />
                Export sections.js
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            {sectionOrder.map((sectionId, index) => (
              <AccordionItem key={sectionId} value={sectionId} className="border-b border-gray-700">
                <AccordionTrigger className="text-lg text-emerald-300 hover:text-emerald-200">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="flex-grow">{sections[sectionId].title}</div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          moveSectionUp(index);
                        }}
                        disabled={index === 0}
                        className="text-gray-400 hover:text-white"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          moveSectionDown(index);
                        }}
                        disabled={index === sectionOrder.length - 1}
                        className="text-gray-400 hover:text-white"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSection(sectionId);
                        }}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Section Title
                      </label>
                      <Input
                        value={sections[sectionId].title}
                        onChange={(e) => updateSection(sectionId, 'title', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    
                    <div className="space-y-6">
                      {sections[sectionId].content.map((block, blockIndex) => (
                        <Card key={blockIndex} className="bg-gray-700 border-gray-600">
                          <CardHeader className="bg-gray-700/50 border-b border-gray-600">
                            <div className="flex justify-between items-center">
                              <Input
                                value={block.title}
                                onChange={(e) => {
                                  const newContent = [...sections[sectionId].content];
                                  newContent[blockIndex].title = e.target.value;
                                  updateSection(sectionId, 'content', newContent);
                                }}
                                className="bg-gray-600 border-gray-500 text-white"
                              />
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeContentBlock(sectionId, blockIndex)}
                                className="text-red-400 hover:text-red-300"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {block.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <select
                                    value={detail.type}
                                    onChange={(e) => updateDetail(sectionId, blockIndex, detailIndex, 'type', e.target.value)}
                                    className="bg-gray-600 border-gray-500 text-white rounded p-1"
                                  >
                                    <option value="text">Text</option>
                                    <option value="image">Image</option>
                                  </select>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => removeDetail(sectionId, blockIndex, detailIndex)}
                                    className="text-red-400 hover:text-red-300"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                                {detail.type === 'text' ? (
                                  <Textarea
                                    value={detail.content}
                                    onChange={(e) => updateDetail(sectionId, blockIndex, detailIndex, 'content', e.target.value)}
                                    className="bg-gray-600 border-gray-500 text-white min-h-[100px]"
                                  />
                                ) : (
                                  <div className="space-y-2">
                                    <Input
                                      placeholder="Image URL"
                                      value={detail.content}
                                      onChange={(e) => updateDetail(sectionId, blockIndex, detailIndex, 'content', e.target.value)}
                                      className="bg-gray-600 border-gray-500 text-white"
                                    />
                                    <Input
                                      placeholder="Alt text"
                                      value={detail.alt || ''}
                                      onChange={(e) => updateDetail(sectionId, blockIndex, detailIndex, 'alt', e.target.value)}
                                      className="bg-gray-600 border-gray-500 text-white"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                            <div className="flex justify-end space-x-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => addDetail(sectionId, blockIndex, 'text')}
                                className="text-emerald-400 hover:text-emerald-300"
                              >
                                <Plus className="w-4 h-4 mr-1" /> Add Text
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => addDetail(sectionId, blockIndex, 'image')}
                                className="text-emerald-400 hover:text-emerald-300"
                              >
                                <Plus className="w-4 h-4 mr-1" /> Add Image
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <Button
                        onClick={() => addContentBlock(sectionId)}
                        className="w-full bg-gray-700 hover:bg-gray-600"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Content Block
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectionEditor;
