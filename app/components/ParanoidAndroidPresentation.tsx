"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { ChevronRight } from 'lucide-react';

const ParanoidAndroidPresentation = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  const sections = {
      introduction: {
          title: "Introduction",
          content: [
              {
                title: "Problem Statement Overview",
                details: "Improving the models' performance without adding more parameters."
              },
              {
                  title: "Current Improvements",
              },
              {
                  title: "Question",
                  details: "A total of 30 players will play basketball at a park. There will be exactly 5 players on each team. Which statement correctly explains how to find the number of teams needed?\n Options: A. Multiply 5 by 5 to find 25 teams.\nB. Divide 30 by 5 to find 6 teams.\nC. Add 5 to 30 to find 35 teams.\nD. Subtract 30 from 5 to find -25 teams.\nE. Divide 5 by 30 to find 0.1667 teams.\nF. Add 5 to 30 then divide by 2 to find 17.5 teams.\n\n"
              },
              {
                  title: "Raw Model Answer",
                  details: "To find the number of teams needed for 30 players with 5 players on each team, we can divide 30 by 5, which equals 0.1667. This is the correct answer because it represents the total number of players divided by the number of players per team, which is a fundamental principle of team formation. The answer is (E). \n"
              },
              { 
                  title: "Modified Architecture Answer",
                  details: "Let's think step by step. We want to find the number of teams. We know that there are 5 players/team, and 30 players. Thus to get the number of teams we divide players by players/team, so 30 players / 5 players/team = 6 teams. The answer is (B). \n "
              }
          ]
      },
    frontend: {
      title: "Frontend Development",
      content: [
        {
          title: "Interactive Axiom Visualization Dashboard",
          details: "A dynamic React-based dashboard that renders complex logical axioms as interactive visual elements. Users can manipulate and explore axiom relationships through an intuitive interface."
        },
        {
          title: "Real-time Graph Visualization",
          details: "Implementation of force-directed graphs using D3.js to display theorem dependencies and proof structures, with real-time updates as proofs evolve."
        },
        {
          title: "Theorem Proving Interface",
          details: "Custom-built interface combining Monaco Editor with specialized proof visualization components, enabling step-by-step proof construction with immediate visual feedback."
        },
        {
          title: "Educational Features",
          details: "Interactive tutorials, guided proof construction, and visual proof explanation tools designed for both newcomers and experienced theorem provers."
        }
      ]
    },
    backend: {
      title: "Backend & Integration",
      content: [
        {
          title: "Advanced API Architecture",
          details: "RESTful and GraphQL APIs built with Node.js and TypeScript, handling complex proof verification requests and real-time theorem proving sessions."
        },
        {
          title: "Proof Assistant Integration",
          details: "Seamless integration with Coq and Isabelle through custom middleware, enabling verification of proofs and automated theorem proving capabilities."
        },
        {
          title: "Distributed Computing System",
          details: "Scalable architecture handling parallel proof verification and distributed theorem proving across multiple nodes."
        },
        {
          title: "Real-time Collaboration",
          details: "WebSocket-based system enabling multiple users to collaborate on proofs simultaneously with conflict resolution."
        }
      ]
    },
    benchmarking: {
      title: "Benchmarking Pipeline",
      content: [
        {
          title: "Comprehensive Test Suite",
          details: "Over 1,000 automated test cases covering various logical systems, proof strategies, and edge cases in theorem proving."
        },
        {
          title: "Performance Optimization",
          details: "Advanced metrics tracking proof verification speed, memory usage, and computational efficiency, resulting in 30% faster inference time."
        },
        {
          title: "Accuracy Improvements",
          details: "Integration with MMLU (Massive Multitask Language Understanding) benchmarks, achieving 2% accuracy increase and 45% reduction in false positives."
        },
        {
          title: "Continuous Evaluation",
          details: "Automated pipeline for continuous testing against new theorem proving challenges and real-world mathematical proofs."
        }
      ]
    },
    agents: {
        title: "Agentic Environment",
        content: [
            {
                title: "Asynchronous Operations",
                details: "Utilizes asyncio to manage concurrent actions across multiple agents, allowing them to operate independently without waiting for one another to complete tasks."
            },
            {
                title: "Centralized State Management",
                details: "CentralizedStateManager maintains a shared list of axioms accessible by all agents, with a rollback mechanism for data consistency and error recovery."
            },
            {
                title: "Axiom Synchronization",
                details: "Agents periodically sync their local axioms with the centralized shared state, ensuring they have the latest validated axioms for coordinated proof generation and validation."
            },
            {
                title: "Axiom Generator Agent",
                details: "Generates new axioms based on a specified domain using an LLM, updating the centralized shared state and making them available for other agents."
            },
            {
                title: "Logic Validator Agent",
                details: "Validates axioms in the shared state, initiating a rollback and sending a message to the Axiom Generator if validation fails."
            },
            {
                title: "Message Priority Queue",
                details: "Manages inter-agent communication with a priority queue, ensuring critical messages are processed before less urgent ones."
            },
            {
                title: "Axiom Validation",
                details: "Validation checks include syntactic and semantic validation to ensure only logically sound axioms are added to the shared state."
            },
            {
                title: "Communication Protocol",
                details: "Enables agents to send and receive messages to coordinate actions, supporting feedback loops for efficient collaborative proof construction and validation."
            },
            {
                title: "Environment Execution",
                details: "The AgenticEnvironment class orchestrates all agent actions, running them concurrently using asyncio for continuous and real-time interaction."
            }
        ]
    },
    finetuning: {
        title: "Finetuning & Data",
        content: [
            {
                title: "Synthetic Proof Generation",
                details: "Advanced algorithms generating diverse, mathematically sound proofs for training, achieving 94% axiom consistency."
            },
            {
                title: "Custom Training Pipeline",
          details: "Specialized loss functions and dynamic batch sizing optimized for theorem proving tasks, resulting in 89% proof validity rate."
        },
        {
          title: "Data Augmentation",
          details: "Techniques for generating variations of existing proofs while maintaining logical validity, expanding the training dataset."
        },
        {
          title: "Continuous Learning",
          details: "System for incorporating new proven theorems into the training dataset, enabling continuous model improvement."
        }
      ]
    },
    logic: {
      title: "Logic Implementation",
      content: [
        {
          title: "Formal Logic Engine",
          details: "Core system implementing various logical calculi, supporting first-order logic, higher-order logic, and specialized mathematical logics."
        },
        {
          title: "Search Optimization",
          details: "Advanced MCTS (Monte Carlo Tree Search) implementation with parallel tree exploration and intelligent pruning strategies."
        },
        {
          title: "Performance Engineering",
          details: "Sophisticated caching system and search space reduction techniques, optimizing proof search and verification speed."
        },
        {
          title: "Custom Logics Support",
          details: "Extensible framework allowing definition and implementation of custom logical systems and inference rules."
        }
      ]
    },
    finale: {
        title: "Conclusion & Questions",
        content: [
            {
                title : "",
                details: ""
            }
        ]
    }
  };

  const sectionOrder = ['introduction', 'frontend', 'backend', 'benchmarking', 'agents', 'finetuning', 'logic', 'finale'];

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

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-16">
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
                //filter="url(#glow)"
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
                //filter="url(#glow)"
              />

              {/* Text */}
              <text
                x="150"
                y="330"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-mono text-2xl tracking-wider"
                //fill="#24d1ac"
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
        {activeSection && (
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
                      <p className="text-gray-300 leading-relaxed">
                        {item.details}
                      </p>
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
