import { navItems } from "../constants";

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-center fixed z-50 top-0 left-0 md:p-0 px-5">
      <div className="container md:my-10 my-5 flex items-center justify-center">
        <div className="flex items-center md:gap-6 gap-4 bg-[#0b062030] border border-white/10 rounded-full backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] md:px-6 md:p-4 px-4 p-3">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <a className="gradient-title md:text-lg" href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
