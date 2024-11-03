// sections.js

export const sections = {
  introduction: {
    title: "Introduction",
    content: [
      {
        title: "Problem Statement Overview",
        details: [
          {
            type: "text",
            content: "Improving the models' performance without adding more parameters."
          }
        ]
      },
      {
        title: "Current Improvements",
        details: []
      },
      {
        title: "Question",
        details: [
          {
            type: "text",
            content: "A total of 30 players will play basketball at a park. There will be exactly 5 players on each team. Which statement correctly explains how to find the number of teams needed?"
          },
          {
            type: "text",
            content: "Options: A. Multiply 5 by 5 to find 25 teams.\nB. Divide 30 by 5 to find 6 teams.\nC. Add 5 to 30 to find 35 teams.\nD. Subtract 30 from 5 to find -25 teams.\nE. Divide 5 by 30 to find 0.1667 teams.\nF. Add 5 to 30 then divide by 2 to find 17.5 teams."
          }
        ]
      },
      {
        title: "Raw Model Answer",
        details: [
          {
            type: "text",
            content: "To find the number of teams needed for 30 players with 5 players on each team, we can divide 30 by 5, which equals 0.1667. This is the correct answer because it represents the total number of players divided by the number of players per team, which is a fundamental principle of team formation. The answer is (E)."
          }
        ]
      },
      {
        title: "Modified Architecture Answer",
        details: [
          {
            type: "text",
            content: "Let's think step by step. We want to find the number of teams. We know that there are 5 players/team, and 30 players. Thus to get the number of teams we divide players by players/team, so 30 players / 5 players/team = 6 teams. The answer is (B)."
          }
        ]
      }
    ]
  },
  frontend: {
    title: "Frontend Development",
    content: [
      {
        title: "Interactive Axiom Visualization Dashboard",
        details: [
          {
            type: "text",
            content: "A dynamic React-based dashboard that renders complex logical axioms as interactive visual elements. Users can manipulate and explore axiom relationships through an intuitive interface."
          },
        ]
      },
      {
        title: "Real-time Graph Visualization",
        details: [
          {
            type: "text",
            content: "Implementation of force-directed graphs using D3.js to display theorem dependencies and proof structures, with real-time updates as proofs evolve."
          },
        ]
      },
      {
        title: "Theorem Proving Interface",
        details: [
          {
            type: "text",
            content: "Custom-built interface combining Monaco Editor with specialized proof visualization components, enabling step-by-step proof construction with immediate visual feedback."
          },
        ]
      },
      {
        title: "Educational Features",
        details: [
          {
            type: "text",
            content: "Interactive tutorials, guided proof construction, and visual proof explanation tools designed for both newcomers and experienced theorem provers."
          },
        ]
      }
    ]
  },
  backend: {
    title: "Backend & Integration",
    content: [
      {
        title: "Advanced API Architecture",
        details: [
          {
            type: "text",
            content: "RESTful and GraphQL APIs built with Node.js and TypeScript, handling complex proof verification requests and real-time theorem proving sessions."
          },
        ]
      },
      {
        title: "Proof Assistant Integration",
        details: [
          {
            type: "text",
            content: "Seamless integration with Coq and Isabelle through custom middleware, enabling verification of proofs and automated theorem proving capabilities."
          },
        ]
      },
      {
        title: "Distributed Computing System",
        details: [
          {
            type: "text",
            content: "Scalable architecture handling parallel proof verification and distributed theorem proving across multiple nodes."
          },
        ]
      },
      {
        title: "Real-time Collaboration",
        details: [
          {
            type: "text",
            content: "WebSocket-based system enabling multiple users to collaborate on proofs simultaneously with conflict resolution."
          },
        ]
      }
    ]
  },
  benchmarking: {
    title: "Benchmarking Pipeline",
    content: [
      {
        title: "Comprehensive Test Suite",
        details: [
          {
            type: "text",
            content: "Over 1,000 automated test cases covering various logical systems, proof strategies, and edge cases in theorem proving."
          },
        ]
      },
      {
        title: "Performance Optimization",
        details: [
          {
            type: "text",
            content: "Advanced metrics tracking proof verification speed, memory usage, and computational efficiency, resulting in 30% faster inference time."
          },
        ]
      },
      {
        title: "Accuracy Improvements",
        details: [
          {
            type: "text",
            content: "Integration with MMLU (Massive Multitask Language Understanding) benchmarks, achieving 2% accuracy increase and 45% reduction in false positives."
          },
        ]
      },
      {
        title: "Continuous Evaluation",
        details: [
          {
            type: "text",
            content: "Automated pipeline for continuous testing against new theorem proving challenges and real-world mathematical proofs."
          },
        ]
      }
    ]
  },
  agents: {
    title: "Agentic Environment",
    content: [
      {
        title: "Asynchronous Operations",
        details: [
          {
            type: "text",
            content: "Utilizes asyncio to manage concurrent actions across multiple agents, allowing them to operate independently without waiting for one another to complete tasks."
          },
        ]
      },
      {
        title: "Centralized State Management",
        details: [
          {
            type: "text",
            content: "CentralizedStateManager maintains a shared list of axioms accessible by all agents, with a rollback mechanism for data consistency and error recovery."
          },
        ]
      },
      {
        title: "Axiom Synchronization",
        details: [
          {
            type: "text",
            content: "Agents periodically sync their local axioms with the centralized shared state, ensuring they have the latest validated axioms for coordinated proof generation and validation."
          },
        ]
      },
      {
        title: "Communication Protocol",
        details: [
          {
            type: "text",
            content: "Enables agents to send and receive messages to coordinate actions, supporting feedback loops for efficient collaborative proof construction and validation."
          },
        ]
      }
    ]
  },
  finetuning: {
    title: "Finetuning & Data",
    content: [
      {
        title: "Synthetic Proof Generation",
        details: [
          {
            type: "text",
            content: "Advanced algorithms generating diverse, mathematically sound proofs for training, achieving 94% axiom consistency."
          },
        ]
      },
      {
        title: "Custom Training Pipeline",
        details: [
          {
            type: "text",
            content: "Specialized loss functions and dynamic batch sizing optimized for theorem proving tasks, resulting in 89% proof validity rate."
          },
        ]
      },
      {
        title: "Data Augmentation",
        details: [
          {
            type: "text",
            content: "Techniques for generating variations of existing proofs while maintaining logical validity, expanding the training dataset."
          },
        ]
      },
      {
        title: "Continuous Learning",
        details: [
          {
            type: "text",
            content: "System for incorporating new proven theorems into the training dataset, enabling continuous model improvement."
          },
        ]
      }
    ]
  },
  logic: {
    title: "Logic Implementation",
    content: [
      {
        title: "Formal Logic Engine",
        details: [
          {
            type: "text",
            content: "Core system implementing various logical calculi, supporting first-order logic, higher-order logic, and specialized mathematical logics."
          },
        ]
      },
      {
        title: "Search Optimization",
        details: [
          {
            type: "text",
            content: "Advanced MCTS (Monte Carlo Tree Search) implementation with parallel tree exploration and intelligent pruning strategies."
          },
        ]
      },
      {
        title: "Performance Engineering",
        details: [
          {
            type: "text",
            content: "Sophisticated caching system and search space reduction techniques, optimizing proof search and verification speed."
          },
        ]
      },
      {
        title: "Custom Logics Support",
        details: [
          {
            type: "text",
            content: "Extensible framework allowing definition and implementation of custom logical systems and inference rules."
          },
        ]
      }
    ]
  },
  finale: {
    title: "Conclusion & Questions",
    content: [
      {
        title: "Summary",
        details: [
          {
            type: "text",
            content: "Thank you for your attention. Questions and discussions are welcome!"
          },
            //{
                //type:"image",
                //content: "/images/sample.jpg"
            //}
        ]
      }
    ]
  }
};

export const sectionOrder = [
  'introduction',
  'frontend',
  'backend',
  'benchmarking',
  'agents',
  'finetuning',
  'logic',
  'finale'
];
