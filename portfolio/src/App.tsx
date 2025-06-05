import React, { useState, useEffect, useRef } from "react";
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
  ArrowUp,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    achievements: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Detect system theme
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    // const handleChange = (e) => setIsDarkMode(e.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      setShowScrollTop(scrollPosition > 500);

      // Update active section based on scroll position
      const sections = Object.entries(sectionRefs);
      for (let i = sections.length - 1; i >= 0; i--) {
        const [name, ref] = sections[i];
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  type SectionName = keyof typeof sectionRefs;

  const scrollToSection = (sectionName: SectionName) => {
    const element = sectionRefs[sectionName]?.current;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const theme = {
    dark: {
      bg: "bg-gray-900",
      bgSecondary: "bg-gray-800",
      bgTertiary: "bg-gray-700",
      text: "text-white",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      border: "border-gray-700",
      gradient: "from-gray-900 via-blue-900 to-purple-900",
      gradientSecondary: "from-blue-900 to-purple-900",
    },
    light: {
      bg: "bg-white",
      bgSecondary: "bg-gray-50",
      bgTertiary: "bg-gray-100",
      text: "text-gray-900",
      textSecondary: "text-gray-700",
      textMuted: "text-gray-600",
      border: "border-gray-300",
      gradient: "from-blue-50 via-indigo-50 to-purple-50",
      gradientSecondary: "from-blue-100 to-purple-100",
    },
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 ${isDarkMode ? "bg-blue-400" : "bg-blue-600"} rounded-full opacity-20 animate-float-complex`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );

  const NavBar = () => (
    <nav
      className={`fixed top-0 w-full ${isDarkMode ? "bg-gray-900/90" : "bg-white/90"} backdrop-blur-xl z-50 transition-all duration-500 transform ${scrollY > 50 ? "shadow-2xl scale-[0.98]" : "shadow-lg"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse-slow cursor-pointer transform hover:scale-110 transition-transform duration-300"
            onClick={() => scrollToSection("home")}
          >
            AR
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              "Home",
              "Experience",
              "Skills",
              "Achievements",
              "Education",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase() as SectionName)
                }
                className={`${currentTheme.textSecondary} hover:${currentTheme.text} transition-all duration-300 hover:scale-110 relative group font-medium ${
                  activeSection === item.toLowerCase()
                    ? `${currentTheme.text} scale-110`
                    : ""
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${currentTheme.text} hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:rotate-90`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section
      ref={sectionRefs.home}
      className={`min-h-screen flex items-center justify-center relative bg-gradient-to-br ${currentTheme.gradient} overflow-hidden`}
    >
      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        <div className="animate-hero-entrance">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-text-shimmer-slow transform hover:scale-105 transition-transform duration-500">
            AYUSH RAJ
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 animate-fade-in-up animation-delay-500 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            SOFTWARE ENGINEER
          </h2>
          <p
            className={`text-lg md:text-xl lg:text-2xl ${currentTheme.textMuted} max-w-4xl mx-auto mb-12 animate-fade-in-up animation-delay-800 leading-relaxed`}
          >
            Software Consulting Engineer at Cisco with over 3 years of
            experience. Spearheaded team projects and led end-to-end development
            in backend and frontend environments. Engineered scalable systems
            and built innovative AI-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-1100">
            <div
              className={`flex items-center gap-3 ${currentTheme.textSecondary} hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer`}
            >
              <Phone size={24} className="animate-bounce-slow" />
              <span className="text-lg">+91 7004429537</span>
            </div>
            <div
              className={`flex items-center gap-3 ${currentTheme.textSecondary} hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer`}
            >
              <Mail
                size={24}
                className="animate-bounce-slow animation-delay-200"
              />
              <span className="text-lg">ayush@xayush.com</span>
            </div>
            <a
              href="https://www.linkedin.com/in/mr-ayush-raj/"
              className={`flex items-center gap-3 ${currentTheme.textSecondary} hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
            >
              <Linkedin
                size={24}
                className="animate-bounce-slow animation-delay-400"
              />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>
        </div>
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-infinite cursor-pointer"
          onClick={() => scrollToSection("experience")}
        >
          <ChevronDown
            size={40}
            className={`${currentTheme.text} hover:text-blue-500 transition-colors duration-300`}
          />
        </div>
      </div>
    </section>
  );

  const ExperienceSection = () => (
    <section
      ref={sectionRefs.experience}
      className={`py-20 ${currentTheme.bgSecondary} relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-in-top">
          Professional Experience
        </h2>
        <div className="space-y-16">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`${isDarkMode ? "bg-gray-900/60" : "bg-white/80"} rounded-2xl p-8 backdrop-blur-xl ${currentTheme.border} border-2 hover:border-blue-500 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl animate-slide-in-left group`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div className="transform group-hover:scale-105 transition-transform duration-300">
                  <h3
                    className={`text-2xl md:text-3xl font-bold ${currentTheme.text} mb-3 group-hover:text-blue-500 transition-colors duration-300`}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-blue-500 text-lg md:text-xl font-semibold animate-pulse-slow">
                    {exp.company}
                  </p>
                </div>
                <span
                  className={`${currentTheme.textMuted} text-lg md:text-xl font-medium`}
                >
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-4">
                {exp.description.map((desc, i) => (
                  <li
                    key={i}
                    className={`${currentTheme.textSecondary} flex items-start text-lg leading-relaxed transform hover:translate-x-2 transition-transform duration-300`}
                  >
                    <span className="text-blue-500 mr-4 mt-2 text-xl animate-pulse">
                      •
                    </span>
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
    <section
      ref={sectionRefs.skills}
      className={`py-20 ${currentTheme.bg} relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-in-top">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className={`${isDarkMode ? "bg-gray-800/60" : "bg-white/80"} rounded-2xl p-8 backdrop-blur-xl ${currentTheme.border} border-2 hover:border-purple-500 transition-all duration-700 animate-scale-in group hover:shadow-2xl`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3
                className={`text-xl md:text-2xl font-bold ${currentTheme.text} mb-6 flex items-center group-hover:text-purple-500 transition-colors duration-300`}
              >
                <Code
                  className="mr-3 text-purple-500 animate-spin-slow"
                  size={28}
                />
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 rounded-full text-sm md:text-base font-medium border border-blue-500/30 hover:border-blue-400 hover:transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-fade-in-up hover:shadow-lg"
                    style={{ animationDelay: `${i * 100}ms` }}
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
    <section
      ref={sectionRefs.achievements}
      className={`py-20 ${currentTheme.bgSecondary} relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-in-top">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border-2 border-yellow-500/40 hover:border-yellow-400 transition-all duration-700 hover:transform hover:scale-105 animate-slide-in-right group hover:shadow-2xl"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex items-start mb-6">
                <Award
                  className="text-yellow-500 mr-4 mt-1 flex-shrink-0 animate-bounce-slow group-hover:animate-spin-slow"
                  size={32}
                />
                <h3
                  className={`text-xl md:text-2xl font-bold ${currentTheme.text} group-hover:text-yellow-500 transition-colors duration-300`}
                >
                  {achievement.title}
                </h3>
              </div>
              <p
                className={`${currentTheme.textSecondary} leading-relaxed text-lg`}
              >
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const EducationSection = () => (
    <section
      ref={sectionRefs.education}
      className={`py-20 ${currentTheme.bg} relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-in-top">
          Education
        </h2>
        <div className="flex justify-center">
          <div
            className={`${isDarkMode ? "bg-gray-800/60" : "bg-white/80"} rounded-2xl p-10 backdrop-blur-xl ${currentTheme.border} border-2 hover:border-green-500 transition-all duration-700 hover:transform hover:scale-105 animate-scale-in max-w-3xl hover:shadow-2xl group`}
          >
            <div className="flex items-start mb-6">
              <GraduationCap
                className="text-green-500 mr-4 mt-1 animate-bounce-slow group-hover:animate-spin-slow"
                size={36}
              />
              <div>
                <h3
                  className={`text-2xl md:text-3xl font-bold ${currentTheme.text} mb-3 group-hover:text-green-500 transition-colors duration-300`}
                >
                  Bachelor of Technology (ECE)
                </h3>
                <p className="text-green-500 text-lg md:text-xl font-semibold animate-pulse-slow">
                  Lakshmi Narain College of Technology, Bhopal
                </p>
                <p className={`${currentTheme.textMuted} text-lg`}>2018-2022</p>
                <p className="text-blue-600 font-semibold mt-3 text-lg">
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
    <section
      ref={sectionRefs.contact}
      className={`py-20 bg-gradient-to-br ${currentTheme.gradientSecondary} relative overflow-hidden`}
    >
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-in-top">
          Get In Touch
        </h2>
        <p
          className={`text-xl md:text-2xl ${currentTheme.textSecondary} mb-16 animate-fade-in-up animation-delay-300`}
        >
          Let's connect and discuss opportunities to work together!
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up animation-delay-600">
          <a
            href="tel:+917004429537"
            className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full transition-all duration-300 hover:transform hover:scale-110 hover:shadow-2xl animate-bounce-slow text-lg font-medium"
          >
            <Phone size={24} />
            <span>Contact me</span>
          </a>
          <a
            href="mailto:ayush@xayush.com"
            className="flex items-center gap-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-5 rounded-full transition-all duration-300 hover:transform hover:scale-110 hover:shadow-2xl animate-bounce-slow animation-delay-200 text-lg font-medium"
          >
            <Mail size={24} />
            <span>Email Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mr-ayush-raj/"
            className="flex items-center gap-4 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white px-10 py-5 rounded-full transition-all duration-300 hover:transform hover:scale-110 hover:shadow-2xl animate-bounce-slow animation-delay-400 text-lg font-medium"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );

  const ScrollToTopButton = () =>
    showScrollTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:transform hover:scale-110 z-50 animate-bounce-infinite"
      >
        <ArrowUp size={24} />
      </button>
    );

  return (
    <div
      className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} overflow-x-hidden relative`}
    >
      <style>{`
        @keyframes float-complex {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-30px) translateX(20px) rotate(90deg); }
          50% { transform: translateY(-20px) translateX(-20px) rotate(180deg); }
          75% { transform: translateY(-40px) translateX(10px) rotate(270deg); }
        }
        @keyframes hero-entrance {
          0% { opacity: 0; transform: translateY(100px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-top {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes text-shimmer-slow {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bounce-infinite {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float-complex { animation: float-complex 8s ease-in-out infinite; }
        .animate-hero-entrance { animation: hero-entrance 1.2s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 1s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out forwards; }
        .animate-slide-in-top { animation: slide-in-top 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 1s ease-out forwards; }
        .animate-text-shimmer-slow {
          background-size: 200% auto;
          animation: text-shimmer-slow 4s linear infinite;
        }
        .animate-bounce-infinite { animation: bounce-infinite 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }

        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1100 { animation-delay: 1100ms; }

        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      <FloatingParticles />
      <NavBar />
      {ScrollToTopButton() || null}

      {isMenuOpen && (
        <div
          className={`fixed inset-0 ${isDarkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-xl z-40 md:hidden animate-fade-in-up`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-12">
            {[
              "Home",
              "Experience",
              "Skills",
              "Achievements",
              "Education",
              "Contact",
            ].map((item, index) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase() as SectionName)
                }
                className={`text-3xl ${currentTheme.textSecondary} hover:${currentTheme.text} hover:text-blue-500 transition-all duration-300 transform hover:scale-110 animate-slide-in-top`}
                style={{ animationDelay: `${index * 100}ms` }}
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
