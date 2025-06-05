import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  Linkedin,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    Backend: ["Django", "FastAPI", "PostgreSQL", "MongoDB", "ElasticDB"],
    Frontend: ["React JS", "JavaScript"],
    DevOps: ["Docker", "Kubernetes", "Ansible", "Kafka"],
    "AI/ML": [
      "LangChain",
      "LLMs (Llama, HuggingFace, GPT4o)",
      "GraphDB - ChromaDB",
      "Knowledge Graphs - Neo4j",
    ],
  };

  const experience = [
    {
      title: "Software Consulting Engineer",
      company: "Cisco",
      period: "July 2022 - Present",
      description: [
        "Designed a multi-model AI architecture consisting multiple agents incorporating GraphDB, Knowledge Graph, and GPT models to elevate testing accuracy.",
        "Automated test case generation in Robot Framework with advanced AI models, significantly reducing manual effort.",
        "Engineered a robust backend with Django & PostgreSQL to streamline data processing.",
        "Built authentication systems, designed notification modules, and developed overall architecture for Software Management.",
        "Optimized authentication and data flows using REST APIs for enhanced efficiency.",
        "Built an end-to-end chatbot UI with chat history in ReactJS for seamless user interaction.",
        "Streamlined deployment via Ansible Playbooks and Jenkins integration to standardize workflows.",
      ],
    },
    {
      title: "Technical UG Intern",
      company: "Cisco",
      period: "Jan 2022 - June 2022",
      description: [
        "Developed dynamic dashboards with decoupled data retrieval.",
        "Remodeled data storage from JSON to KPI format for structured insights.",
        "Integrated JavaScript for real-time visualization and table selection.",
        "Optimized data presentation, improving analysis speed.",
      ],
    },
  ];

  const achievements = [
    {
      title: "Cisco Offensive Summit CTF Challenge Winner",
      description:
        "Devised and orchestrated innovative exploit strategies to diagnose and resolve critical network vulnerabilities—including UI, RDP, FTP, SSH, and DDoS—thereby reinforcing overall system security.",
    },
    {
      title: "Sustainathon Hackathon Winner",
      description:
        "Conceptualized and developed an AI-driven chatbot solution leveraging LLMs to interface with research papers on biodiversity and wildlife, effectively synthesizing complex data into actionable insights.",
    },
  ];

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );

  const NavBar = () => (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            AR
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              "Home",
              "About",
              "Experience",
              "Skills",
              "Achievements",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center z-10 px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-shimmer">
            AYUSH RAJ
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-6 animate-fade-in-up animation-delay-300">
            SOFTWARE ENGINEER
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-600">
            Software Consulting Engineer at Cisco with over 3 years of
            experience. Spearheaded team projects and led end-to-end development
            in backend and frontend environments. Engineered scalable systems
            and built innovative AI-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
            <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Phone size={20} />
              <span>+91 7004429537</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <Mail size={20} />
              <span>rrajayush1@gmail.com</span>
            </div>
            <a
              href="https://www.linkedin.com/in/mr-ayush-raj/"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </section>
  );

  const ExperienceSection = () => (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-105 animate-slide-in-left"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400 text-lg font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-400 text-lg">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-3 mt-2">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const SkillsSection = () => (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="mr-2 text-purple-400" size={20} />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400 hover:transform hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const AchievementsSection = () => (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-8 border border-yellow-500/30 hover:border-yellow-400 transition-all duration-500 hover:transform hover:scale-105 animate-slide-in-right"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start mb-4">
                <Award
                  className="text-yellow-400 mr-3 mt-1 flex-shrink-0"
                  size={24}
                />
                <h3 className="text-xl font-bold text-white">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const EducationSection = () => (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="flex justify-center">
          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700 hover:border-green-500 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up max-w-2xl">
            <div className="flex items-start mb-4">
              <GraduationCap className="text-green-400 mr-3 mt-1" size={24} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Technology (ECE)
                </h3>
                <p className="text-green-400 text-lg font-semibold">
                  Lakshmi Narain College of Technology, Bhopal
                </p>
                <p className="text-gray-400">2018-2022</p>
                <p className="text-blue-300 font-semibold mt-2">
                  Score: 8.68 CGPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Let's connect and discuss opportunities to work together!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="tel:+917004429537"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg"
          >
            <Phone size={20} />
            <span>Contact me</span>
          </a>
          <a
            href="mailto:rrajayush1@gmail.com"
            className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mr-ayush-raj/"
            className="flex items-center gap-3 bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes text-shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-900 {
          animation-delay: 900ms;
        }
      `}</style>

      <FloatingParticles />
      <NavBar />

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {[
              "Home",
              "About",
              "Experience",
              "Skills",
              "Achievements",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
