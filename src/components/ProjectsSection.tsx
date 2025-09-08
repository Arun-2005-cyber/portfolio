import { ExternalLink, Github, ShoppingCart, Users, Zap, Layout, Calendar, Cloud } from 'lucide-react';

const ProjectsSection = () => {
  const majorProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with user authentication, shopping cart functionality, and secure payment integration.',
      features: [
        'User Authentication (Login/Signup)',
        'Add-to-Cart & Product Management',
        'Redux State Management',
        'Responsive UI with React & Bootstrap',
        'Django Backend APIs'
      ],
      technologies: ['React', 'Django', 'Redux', 'Bootstrap', 'MongoDB'],
      icon: ShoppingCart,
      color: 'tech-blue',
      github: 'https://github.com/Arun-2005-cyber/Majorproject1-Ecommerce-cart',
      demo: 'http://ecommerce-c.netlify.app'
    },
    {
      title: 'Social Media Application',
      description: 'Comprehensive social platform with real-time features, user interactions, and secure authentication.',
      features: [
        'Two-Factor Authentication',
        'Real-time Chat with Socket.io',
        'Post Upload & Comments',
        'Follow/Unfollow System',
        'Scalable Backend Architecture'
      ],
      technologies: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
      icon: Users,
      color: 'tech-green',
      github: 'https://github.com/Arun-2005-cyber/Major-Project-2--Social-media-app-MERN-Stack-',
      demo: 'http://socia-media.netlify.app'
    },
    {
      title: 'Electricity Board Applicants',
      description: 'A platform for managing electricity board applications with user-friendly interfaces and secure authentication.',
      features: [
        'User Registration & Login',
        'Application Status Tracking',
        'Document Upload & Verification',
        'Admin Dashboard for Application Management',
        'Email Notifications'
      ],
      technologies: ['React', 'Django.js', 'SQL'],
      icon: Zap,
      color: 'tech-blue',
      github: 'https://github.com/Arun-2005-cyber/Major-Project-3--Electricity-Board-Applicants',
      demo: 'http://electricboard.netlify.app'
    }
  ];


  const miniProjects = [
    {
      title: 'Gym Landing Page',
      tech: 'HTML/CSS',
      icon: Zap,
      color: 'tech-orange'
    },
    {
      title: 'Digital Resume',
      tech: 'React',
      icon: Layout,
      color: 'tech-purple'
    },
    {
      title: 'Weather App',
      tech: 'JavaScript/API',
      icon: Cloud,
      color: 'tech-blue'
    },
    {
      title: 'Movie Search',
      tech: 'React',
      icon: Layout,
      color: 'tech-green'
    },
    {
      title: 'Todo App',
      tech: 'React/Redux',
      icon: Calendar,
      color: 'tech-orange'
    },
    {
      title: 'Library System',
      tech: 'React/Reducers',
      icon: Layout,
      color: 'tech-purple'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development skills through real-world applications
          </p>
        </div>

        {/* Major Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {majorProjects.map((project, index) => (
            <div
              key={project.title}
              className="card-project fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 bg-${project.color} rounded-lg shadow-medium group-hover:shadow-glow transition-all duration-300`}>
                  <project.icon size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-badge text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="btn-outline flex items-center gap-2 flex-1 justify-center"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="btn-hero flex items-center gap-2 flex-1 justify-center"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-bold text-center mb-8">
            Mini <span className="gradient-text">Projects</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {miniProjects.map((project, index) => (
              <div
                key={project.title}
                className="card-professional text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-3 bg-${project.color} rounded-lg shadow-medium mx-auto mb-3 w-fit group-hover:shadow-glow transition-all duration-300`}>
                  <project.icon size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {project.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;