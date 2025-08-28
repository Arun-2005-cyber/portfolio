import { GraduationCap, Code, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Bachelor of Science in Computer Science, Periyar University, 2025'
    },
    {
      icon: Code,
      title: 'Passion',
      description: 'Full Stack Development with modern technologies and best practices'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Solving real-world problems through creative technical solutions'
    },
    {
      icon: Target,
      title: 'Goal',
      description: 'Seeking opportunities to contribute to impactful projects'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated computer science student with a passion for creating innovative web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <div className="card-professional">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a Computer Science graduate from Periyar University, I've dedicated myself 
                  to mastering the art of full-stack development. My journey began with a curiosity 
                  about how digital solutions can transform everyday challenges into opportunities.
                </p>
                <p>
                  Through hands-on projects and continuous learning, I've developed expertise in 
                  modern web technologies including React, Node.js, Django, and MongoDB. Each project 
                  has been a stepping stone towards becoming a well-rounded developer.
                </p>
                <p>
                  I'm particularly passionate about creating scalable applications that not only 
                  meet technical requirements but also provide exceptional user experiences. 
                  As a fresher actively seeking opportunities, I'm excited to contribute my skills 
                  to meaningful projects.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-6 fade-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-professional group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary to-tech-blue rounded-lg shadow-medium group-hover:shadow-glow transition-all duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;