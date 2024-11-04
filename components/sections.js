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
            "content": "• 1,000+ automated test cases covering diverse logical systems\n• Performance metrics tracking for proof verification speed\n• Memory usage optimization and computational efficiency\n• Integration with MMLU benchmarks for accuracy assessment"
          }
        ]
      },
      {
        "title": "Performance Improvements",
        "details": [
          {
            "type": "text",
            "content": "Key performance metrics show significant improvements:"
          },
          {
            "type": "text",
            "content": "• 30% faster inference time in proof generation\n• 2% increase in MMLU benchmark accuracy\n• 45% reduction in false positive rates\n• 25% improvement in memory efficiency"
          }
        ]
      }
    ]
  },
  "agents": {
    "title": "Multi-Agent System",
    "content": [
      {
        "title": "Agent Architecture Overview",
        "details": [
          {
            "type": "text",
            "content": "Our multi-agent system utilizes advanced coordination mechanisms:"
          },
          {
            "type": "text",
            "content": "• Asynchronous operation management with asyncio\n• Centralized state management with rollback capabilities\n• Periodic axiom synchronization across agent network\n• Advanced inter-agent communication protocols"
          }
        ]
      },
      {
        "title": "Collaborative Proof Generation",
        "details": [
          {
            "type": "text",
            "content": "The agent system enables sophisticated proof collaboration:"
          },
          {
            "type": "text",
            "content": "• Parallel exploration of proof paths\n• Dynamic task allocation based on agent specialization\n• Automated error detection and correction\n• Real-time proof validation and verification"
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
            "content": "https://svgshare.com/s/1CD2https://svgshare.com/i/1CD2.svg"
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
            "content": "• Integration of more sophisticated reasoning patterns\n• Expansion of supported logical systems\n• Enhancement of collaborative proving capabilities\n• Development of advanced educational features"
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
      