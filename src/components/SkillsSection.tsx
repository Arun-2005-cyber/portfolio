import { useState } from 'react';
import { 
  Code, 
  FileText, 
  Database, 
  Globe, 
  Layers, 
  Zap, 
  GitBranch, 
  Palette, 
  MessageSquare, 
  Settings,
  Monitor,
  Server
} from 'lucide-react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      skills: [
        { name: 'React', icon: Code },
        { name: 'JavaScript', icon: FileText },
        { name: 'HTML/CSS', icon: Globe },
        { name: 'Redux', icon: Layers }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', icon: Zap },
        { name: 'Django', icon: Settings },
        { name: 'MongoDB', icon: Database },
        { name: 'Express.js', icon: Code }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Settings,
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'Bootstrap', icon: Palette },
        { name: 'Socket.io', icon: MessageSquare },
        { name: 'REST APIs', icon: Globe }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern web technologies and development tools
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card-professional fade-in-up group"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-primary to-primary-light rounded-lg">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-accent/20 rounded-lg hover:bg-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-medium group cursor-default border border-border/30 hover:border-primary/30"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="p-3 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-full mb-3 group-hover:from-primary/30 group-hover:to-primary-light/30 transition-all duration-300">
                      <skill.icon 
                        size={28} 
                        className={`transition-all duration-300 ${
                          hoveredSkill === skill.name 
                            ? 'text-primary scale-110' 
                            : 'text-primary/70'
                        }`} 
                      />
                    </div>
                    <span className="font-semibold text-foreground text-sm text-center group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Skills Overview */}
        <div className="mt-16 fade-in-up">
          <div className="card-professional">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">
              All Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['React', 'Node.js', 'Django', 'MongoDB', 'Redux', 'HTML/CSS', 'JavaScript', 'Socket.io', 'Bootstrap', 'Git', 'Express.js', 'REST APIs'].map((skill) => (
                <span
                  key={skill}
                  className="skill-badge hover:scale-110 hover:shadow-glow hover:text-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;