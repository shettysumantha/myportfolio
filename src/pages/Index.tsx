
import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, Briefcase, GraduationCap, User, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    frameworks: ['React.js', 'VS Code', 'Android Studio'],
    databases: ['PostgreSQL', 'MySQL'],
    tools: ['Git', 'GitHub', 'IntelliJ']
  };

  const experiences = [
    {
      title: 'SQL Developer',
      company: 'Prasanna Technologies PVT Ltd',
      location: 'Mangalore',
      period: 'September 2024 - Present',
      description: 'As an SQL Developer, redesigned web application configurations and integrated APIs to dynamically fetch and display data in apps and websites, enhancing functionality and user interaction. Developed various API functions, created reports and dashboards using HTML/CSS, and managed database maintenance and optimization for Smart Meter projects.'
    },
    {
      title: 'Front-end Developer',
      company: 'CodeInBound',
      location: 'Mangalore',
      period: 'September 2024 - November 2024',
      description: 'Worked as a Frontend Developer to redesign web application configurations and improve UI/UX. Integrated APIs to fetch and display data dynamically, enhancing functionality and user interaction across the website.'
    },
    {
      title: 'Software Trainee',
      company: 'EvoluteIQ',
      location: 'Mangalore',
      period: 'February 2024 - April 2024',
      description: 'Developed user-friendly projects using EvoluteIQ\'s proprietary platform, AppStudio, prioritizing user experience and interface design. Enhanced skills in application design and development, ensuring functionality and ease of navigation.'
    }
  ];

  const projects = [
    {
      title: 'Eye Tracking Graph Encoder for Dyslexia Detection Using GNN',
      tech: 'Python, Tkinter',
      description: 'Developed a system that uses real-time eye movement data captured via a webcam and a graph neural network model to detect dyslexia. Analyzed a dataset of eye movements from 88 control and 98 dyslexic patients to identify patterns in dyslexia diagnosis.',
      link: 'https://github.com/shettysumantha/Dyslexia-Detection-Using-GNN'
    },
    {
      title: 'File Security by Encryption and Compression',
      tech: 'Java',
      description: 'Implemented AES encryption and GZIP compression algorithms to secure files, ensuring enhanced security and reduced file sizes.',
      link: 'https://github.com/shettysumantha/File_Security'
    },
    {
      title: 'Fertilizer Management System',
      tech: 'Java Swing, MySQL',
      description: 'Designed a system to help farmers track fertilizer quality and suggest optimal fertilizers and brands to improve crop yields.',
      link: 'https://github.com/shettysumantha/fertilizer-management'
    },
    {
      title: 'Student Grievance Application',
      tech: 'Java, Firebase',
      description: 'Developed a mobile app to facilitate the submission and resolution of student grievances, improving accountability and problem-solving in educational institutions.',
      link: 'https://github.com/shettysumantha/Student-Grievance-Application'
    },
    {
      title: 'Smart Metering Project-PVVNL',
      tech: 'PostgreSQL, DBSolo, ETL',
      description: 'Developed APK and web apps for smart meter installations across North India with configurable client-specific changes. Created reports and dashboards to monitor daily progress of surveys and installations, ensuring real-time data updates for stakeholders.'
    }
  ];

  const education = [
    {
      degree: 'B.E in Information Science and Engineering',
      college: 'Sahyadri College of Engineering and Management',
      cgpa: '8.52',
      period: 'December 2020 - June 2024',
      location: 'Mangalore'
    },
    {
      degree: 'Science PUC',
      college: 'PRN Amrathabharath PU College',
      percentage: '85%',
      period: 'June 2019 - June 2020',
      location: 'Hebri'
    },
    {
      degree: 'SSLC',
      college: 'CNSM Government High School',
      percentage: '92.64%',
      period: 'June 2017 - May 2018',
      location: 'Ardi'
    }
  ];

  const certifications = [
    'Operating System - NPTEL',
    'Database Management System - NPTEL'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Particle animation component
  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Enhanced Navigation with glassmorphism */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-xl z-50 border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sumantha Shetty
            </h1>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white/80 hover:text-white transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/10 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with parallax and particles */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20">
        <ParticleBackground />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
          />
        </div>

        <div className={`text-center z-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}>
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full p-1 shadow-2xl shadow-purple-500/25 hover:scale-110 transition-transform duration-500 relative z-40">
              <img 
                src="/lovable-uploads/baad551f-a5cb-4dc5-91b0-40830a8c4974.png" 
                alt="Sumantha Shetty" 
                className="w-full h-full rounded-full object-cover border-2 border-white/20"
              />
            </div>
            
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Sumantha Shetty
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-2xl md:text-3xl text-white/90 mb-4 font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Software Developer
              </p>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
                Passionate about creating innovative solutions and building user-friendly applications
              </p>
            </div>
          </div>
          
          {/* Enhanced contact info with animations */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Mail, text: 'sumanthaardi@gmail.com' },
              { icon: Phone, text: '8105385992' },
              { icon: MapPin, text: 'Hebri, Karnataka' }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon size={20} className="text-purple-400" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced social buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { icon: Github, text: 'GitHub', url: 'https://github.com/shettysumantha', color: 'from-gray-600 to-gray-800' },
              { icon: Linkedin, text: 'LinkedIn', url: 'https://www.linkedin.com/in/sumantha-shetty-4b6756208', color: 'from-blue-600 to-blue-800' },
              { icon: Code, text: 'LeetCode', url: 'https://leetcode.com/u/sumanthaardi/', color: 'from-orange-500 to-red-600' },
              { icon: Award, text: 'HackerRank', url: 'https://www.hackerrank.com/profile/sumanthaardi', color: 'from-green-500 to-teal-600' }
            ].map((social, index) => (
              <Button 
                key={index}
                variant="outline" 
                className={`bg-gradient-to-r ${social.color} border-0 text-white hover:scale-110 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm`}
                onClick={() => window.open(social.url, '_blank')}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon size={20} className="mr-2" />
                {social.text}
              </Button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-purple-400 transition-all duration-300 hover:scale-125 p-2 rounded-full hover:bg-white/10"
          >
            <ChevronDown size={36} />
          </button>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="transform hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                  <GraduationCap className="text-white" size={24} />
                </div>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index} 
                    className="bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          {edu.degree}
                        </h4>
                        <p className="text-white/90 font-medium">{edu.college}</p>
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <span className="text-white/70">{edu.period}</span>
                          <Badge variant="secondary" className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-200 border-purple-400/20 hover:scale-110 transition-transform duration-300">
                            {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                          </Badge>
                        </div>
                        <p className="text-white/60">{edu.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="transform hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                  <Award className="text-white" size={24} />
                </div>
                Certifications
              </h3>
              <Card className="bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-3">
                    {certifications.map((cert, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-yellow-600/30 to-orange-600/30 text-yellow-200 border-yellow-400/20 hover:scale-110 transition-transform duration-300 px-4 py-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-24 px-6 bg-black/20 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:rotate-12 transition-transform duration-300">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {exp.title}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-white/80 text-lg ml-16">
                    {exp.company} • {exp.location} • {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 leading-relaxed ml-16">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:rotate-12 transition-transform duration-300">
                      <Code className="text-white" size={20} />
                    </div>
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-200 border-purple-400/20 hover:scale-110 transition-transform duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-white/90 mb-4 leading-relaxed">{project.description}</p>
                  {project.link && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-400/30 text-green-300 hover:bg-gradient-to-r hover:from-green-600/40 hover:to-emerald-600/40 hover:scale-110 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 px-6 bg-black/20 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Languages', icon: Code, color: 'from-yellow-500 to-orange-500', skills: skills.languages },
              { title: 'Frameworks', icon: Globe, color: 'from-blue-500 to-cyan-500', skills: skills.frameworks },
              { title: 'Databases', icon: Database, color: 'from-green-500 to-emerald-500', skills: skills.databases },
              { title: 'Tools', icon: Award, color: 'from-purple-500 to-pink-500', skills: skills.tools }
            ].map((category, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:scale-110 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`p-2 bg-gradient-to-r ${category.color} rounded-full group-hover:rotate-12 transition-transform duration-300`}>
                      <category.icon className="text-white" size={20} />
                    </div>
                    <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className={`bg-gradient-to-r ${category.color.replace('500', '600/30')} text-white border-white/20 hover:scale-110 transition-transform duration-300`}
                        style={{ animationDelay: `${skillIndex * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Let's connect and create something amazing together!
            </p>
            <div className="flex justify-center gap-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white hover:scale-110 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 px-8 py-4 text-lg"
                onClick={() => window.open('mailto:sumanthaardi@gmail.com', '_blank')}
              >
                <Mail size={24} className="mr-3" />
                Send Email
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-110 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 px-8 py-4 text-lg backdrop-blur-sm"
                onClick={() => window.open('tel:8105385992', '_blank')}
              >
                <Phone size={24} className="mr-3" />
                Call Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 px-6 bg-black/50 backdrop-blur-xl border-t border-white/20">
        <div className="container mx-auto text-center">
          <p className="text-white/60 text-lg">
            © 2024 Sumantha Shetty. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
