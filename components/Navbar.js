import { navItems } from "../constants";

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-center fixed z-50 top-0 left-0 md:p-0 px-4">
      <div className="container md:my-10 my-5 flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center md:gap-6 gap-3 bg-[#0b062030] border border-white/10 rounded-xl backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] md:px-6 md:p-4 px-3 p-3">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-0.5
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <a className="gradient-title md:text-lg text-sm" href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
          <a
            href="/resume/Garv_Singhal_Resume.pdf"
            // download="Garv_Singhal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-title py-2 px-4 rounded-lg bg-white/5 border border-white/10 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            <div className="flex items-center justify-center gap-2">
            <span>Download Resume</span>
            <img src="/images/download-26.png" alt="download" className='w-4 opacity-85' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
