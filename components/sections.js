// sections.js

      export const sections = {
  "introduction": {
    "title": "Introduction",
    "content": [
      {
        "title": "Project Overview",
        "details": [
          {
            "type": "text",
            "content": "Paranoid Android is an intelligent theorem proving system that enhances model performance through advanced reasoning architectures without increasing parameter count at all. "
          },
          {
            "type": "text",
            "content": "Our system achieves significant improvements in mathematical reasoning and proof generation through innovative architectural changes and specialized training approaches."
          }
        ]
      },
      {
        "title": "Case Study: Mathematical Reasoning",
        "details": [
          {
            "type": "text",
            "content": "Problem: A total of 30 players will play basketball at a park. There will be exactly 5 players on each team. How many teams are needed?\nOptions:\nA. Multiply 5 by 5 to find 25 teams.\nB. Divide 30 by 5 to find 6 teams.\nC. Add 5 to 30 to find 35 teams.\nD. Subtract 30 from 5 to find -25 teams.\nE. Divide 5 by 30 to find 0.1667 teams.\nF. Add 5 to 30 then divide by 2 to find 17.5 teams."
          },
          {
            "type": "text",
            "content": "Raw Model Output:\n\"To find the number of teams needed for 30 players with 5 players on each team, we can divide 30 by 5, which equals 0.1667. This is the correct answer because it represents the total number of players divided by the number of players per team.\""
          },
          {
            "type": "text",
            "content": "Enhanced Architecture Output:\n\"Let's solve this step by step:\n1. We have 30 total players\n2. Each team needs 5 players\n3. To find teams needed: 30 players ÷ 5 players per team = 6 teams\nTherefore, we need 6 teams to accommodate all players. The final answer is (B)\"\n\nThis demonstrates our system's improved mathematical reasoning and step-by-step deduction capabilities."
          }
        ]
      }
    ]
  },
  "frontend": {
    "title": "Frontend Development",
    "content": [
      {
        "title": "Interactive Visualization System",
        "details": [
          {
            "type": "text",
            "content": "Our frontend infrastructure combines advanced visualization capabilities with intuitive user interfaces:"
          },
          {
            "type": "text",
            "content": "• Dynamic React-based dashboard for real-time axiom manipulation\n• Interactive force-directed graphs using D3.js\n• Custom-built theorem proving interface with Monaco Editor integration\n• Real-time visual feedback system for proof construction"
          }
        ]
      },
      {
        "title": "Educational & Collaborative Features",
        "details": [
          {
            "type": "text",
            "content": "The system includes comprehensive educational tools designed for various skill levels:"
          },
          {
            "type": "text",
            "content": "• Interactive tutorials with progressive difficulty levels\n• Guided proof construction with immediate feedback\n• Visual proof explanation tools with step-by-step breakdowns\n• Collaborative workspaces for team-based theorem proving"
          }
        ]
      }
    ]
  },
  "backend": {
    "title": "Backend Architecture",
    "content": [
      {
        "title": "Advanced API & Integration Systems",
        "details": [
          {
            "type": "text",
            "content": "Our backend architecture features a robust and scalable design:"
          },
          {
            "type": "text",
            "content": "• RESTful and GraphQL APIs built with Node.js and TypeScript\n• Custom middleware for Coq and Isabelle integration\n• Distributed computing system for parallel proof verification\n• Real-time WebSocket system for collaborative proving"
          }
        ]
      },
      {
        "title": "System Architecture Benefits",
        "details": [
          {
            "type": "text",
            "content": "The distributed architecture provides significant advantages:"
          },
          {
            "type": "text",
            "content": "• 40% improvement in proof verification speed\n• Seamless handling of concurrent proof sessions\n• Automatic load balancing across computation nodes\n• Real-time conflict resolution in collaborative sessions"
          }
        ]
      }
    ]
  },
  "benchmarking": {
    "title": "Benchmarking & Performance",
    "content": [
      {
        "title": "Comprehensive Testing Framework",
        "details": [
          {
            "type": "text",
            "content": "Our benchmarking pipeline includes extensive testing across multiple dimensions:"
          },
          {
            "type": "text",
            "content": "• Automated test cases covering diverse logical systems\n• Performance metrics tracking for proof verification speed\n• Memory usage optimization and computational efficiency\n• Integration with MMLU benchmarks for accuracy assessment"
          },
          {
            "type": "image",
            "content": "https://svgshare.com/i/1CD3.svg",
            "alt": "Benchmarks Architecture Diagram"
          }
        ]
      }
    ]
  },
"agents": {
    "title": "Agentic Environment Pipeline",
    "content": [
      {
        "title": "Asynchronous Operations",
        "details": [
          {
            "type": "text",
            "content": "Utilizes asyncio to manage concurrent actions across multiple agents, allowing them to operate independently without waiting for one another to complete tasks. This concurrency is essential for efficient operation in complex environments where multiple agents need to interact or update shared states simultaneously."
          }
        ]
      },
      {
        "title": "Centralized State Management",
        "details": [
          {
            "type": "text",
            "content": "CentralizedStateManager maintains a shared list of axioms accessible by all agents. It includes a rollback mechanism that saves the state history and enables agents to revert to previous states in case of invalid axioms, supporting data consistency and error recovery across agents."
          }
        ]
      },
      {
        "title": "Axiom Synchronization",
        "details": [
          {
            "type": "text",
            "content": "Each agent periodically syncs its local axioms with the centralized shared state managed by CentralizedStateManager, ensuring it has the latest validated axioms. This synchronization keeps all agents working with up-to-date information, essential for coordinated proof generation and validation."
          }
        ]
      },
      {
        "title": "Axiom Generator Agent",
        "details": [
          {
            "type": "text",
            "content": "Responsible for generating new axioms based on a specified domain using an LLM (simulated with the ollama API for testing purposes). Once generated, the agent updates the centralized shared state with these axioms, making them available for other agents like the validator."
          }
        ]
      },
      {
        "title": "Logic Validator Agent",
        "details": [
          {
            "type": "text",
            "content": "Validates the axioms in the shared state to ensure they meet specific syntactic and semantic rules. If validation fails, the agent initiates a rollback of the shared axioms to a previous valid state and sends a message to the Axiom Generator to adjust and regenerate the axioms."
          }
        ]
      },
      {
        "title": "Communication Protocol",
        "details": [
          {
            "type": "text",
            "content": "Enables agents to send and receive messages to coordinate actions. For example, the Logic Validator Agent can inform the Axiom Generator Agent when adjustments are needed. This communication protocol supports feedback loops, making collaborative proof construction and validation efficient."
          }
        ]
      }
    ]
  },

  "finetuning": {
    "title": "Model Finetuning",
    "content": [
      {
        "title": "LLM Fine-tuning Pipeline Overview",
        "details": [
          {
            "type": "text",
            "content": "Key Components:\n1. Dependencies\n   - PyTorch (ML Framework)\n   - Transformers (Hugging Face)\n   - PEFT (Parameter-Efficient Fine-Tuning)\n   - Datasets (Data Management)"
          },
          {
            "type": "text",
            "content": "LoRA (Low-Rank Adaptation) Explained:\n- 🎯 Purpose: Efficient fine-tuning with minimal resources\n- 💡 Key Concept: Updates only a small subset of model parameters\n- 🔑 Benefits:\n  - 95% less trainable parameters\n  - Significantly reduced memory usage\n  - Faster training time\n  - Easily swappable adaptors"
          },
          {
            "type": "text",
            "content": "Setup Requirements:\n- CUDA-compatible GPU\n- Python 3.8+\n- 16GB+ GPU RAM\n- SSD for model storage"
          }
        ]
      },
      {
        "title": "Technical Implementation",
        "details": [
          {
            "type": "image",
            "content": "https://svgshare.com/i/1CD2.svg"
          },
          {
            "type": "text",
            "content": "Key Features:\n1. Model Agnostic Design\n   - Works with any locally installed LLM\n   - Automatic fallback mechanisms\n\n2. Flexible Dataset Handling\n   - Automatic formatting\n   - Built-in tokenization\n\n\n   "
          },
          {
            "type": "text",
            "content": "3. Optimized Training\n   - Mixed precision (FP16)\n   - Checkpointing\n   - Progress monitoring"
          }
        ]
      }
    ]
  },
  "logic": {
    "title": "Logic Engine",
    "content": [
      {
        "title": "Core Logic Implementation",
        "details": [
          {
            "type": "image",
            "content": "https://svgur.com/i/1CED.svg",
            "alt": "Chart for logic engine"
          }
        ]
      }
    ]
  },
  "finale": {
    "title": "Future Directions",
    "content": [
      {
        "title": "Ongoing Development",
        "details": [
          {
            "type": "text",
            "content": "Our team continues to push the boundaries of automated theorem proving:"
          },
          {
            "type": "text",
            "content": "• Integration of more sophisticated reasoning patterns\n• Complete the finetuning of the model with the current logical framework\n• Expansion of supported logical systems\n• Enhancement of collaborative proving capabilities\n• Development of advanced educational features"
          }
        ]
      },
      {
        "title": "Contact & Questions",
        "details": [
          {
            "type": "text",
            "content": "Thank you for your attention! We welcome any questions about our system and its capabilities."
          }
        ]
      }
    ]
  }
};

      export const sectionOrder = [
  "introduction",
  "logic",
  "finetuning",
  "agents",
  "frontend",
  "backend",
  "benchmarking",
  "finale"
];
      
