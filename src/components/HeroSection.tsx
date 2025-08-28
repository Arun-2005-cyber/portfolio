import { Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/Arunprakash.S CS.jpg';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // This would link to an actual resume PDF
    window.open('/resume/Arunprakash-Resume.pdf', '_blank');
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Arun-2005-cyber',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/arun-prakash-a71a42291',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:arunprakashsekar2005@gmail.com',
      label: 'Email'
    }
  ];

  return (
    
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left fade-in-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">Arunprakash</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-secondary font-semibold mb-6">
                Full Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I am a passionate Full Stack Developer with a strong interest in building 
                scalable web applications and solving real-world problems through technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={handleDownloadResume}
                className="btn-hero inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
          
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card/80 backdrop-blur-sm rounded-lg shadow-soft hover:shadow-glow hover:bg-card transition-all duration-300 hover:-translate-y-2 hover:scale-110 group border border-border/30 hover:border-primary/50"
                  aria-label={social.label}
                >
                  <social.icon 
                    size={24} 
                    className="text-secondary group-hover:text-primary transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-tech-blue rounded-full blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large float">
                <img
                  src={profilePhoto}
                  alt="Arunprakash S - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
