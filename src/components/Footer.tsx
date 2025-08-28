import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-muted-foreground">Built with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span className="text-muted-foreground">and</span>
            <Code size={16} className="text-primary" />
            <span className="text-muted-foreground">by</span>
            <span className="font-semibold text-primary">Arunprakash S</span>
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            © 2024 Arunprakash S. All rights reserved.
          </div>
          <div className="text-xs text-muted-foreground">
            Passionate Full Stack Developer | Ready for New Opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;