const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex-wrap gap-5 ">

      <div className="flex gap-10 align-center justify-center" >
        <a href="https://github.com/glasscharlie" target="_blank">
        <div className="social-icon">
          
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          
        </div>
        </a>
        <a href="https://www.linkedin.com/in/charles-glass1/" target="_blank">
        <div className="social-icon">
          <img src="/assets/linkedin.png" alt="LinkedIn" className="w-1/2 h-1/2" />
        </div>
        </a>
      </div>


    </footer>
  );
};

export default Footer;
