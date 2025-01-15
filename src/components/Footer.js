import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-light-lavender via-muted-purple to-deep-plum text-light-lavender py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
        {/* Credits */}
        <div className="text-center md:text-left">
          <p className="text-md md:text-base text-deep-purple font-bold ">
            Made with ❤️ by{" "}
            <a
              href="https://sahibsingh.dev"
              className="text-deep-purple font-bold hover:text-black underline"
              target="_blank"
              rel="noreferrer"
            >
             Shreyanshi
            </a>
          </p>
        </div>

      
        
        <div>
          <a
            href="#top"
            className="text-md text-deep-purple font-bold  hover:text-black transition text-center"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
