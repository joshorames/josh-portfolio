import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderDropdownNav({navItems}) {
    const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  const navigateTo = (name) => {
    navigate(name);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

   const commonClass =
                      "block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10 hover:text-white";

  return (
    

        <nav ref={navRef} className="flex items-center gap-3">
             <button
                type="button"
                onClick={() => navigateTo('/')}
                className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Home
              </button>
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(index)}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenMenu((prev) => (prev === index ? null : index))
                }
                className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {item.label}
                <span
                  className={`text-xs opacity-70 transition ${
                    openMenu === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {openMenu === index && (
                
                <div className="absolute right-0 top-full mt-2 min-w-[240px] rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl">
                    
                  {item.children.map((child) => {
                   

                    if (child.href) {
                      return (
                        <a
                          key={child.label}
                          href={child.href}
                          className={commonClass}
                          target={child.href.startsWith("http") ? "_blank" : undefined}
                          rel={child.href.startsWith("http") ? "noreferrer" : undefined}
                          onClick={() => setOpenMenu(null)}
                        >
                          {child.label}
                        </a>
                      );
                    }

                    return (
                      <button
                        key={child.label}
                        type="button"
                        className={commonClass}
                        onClick={() => {
                          child.onClick?.();
                          setOpenMenu(null);
                        }}
                      >
                        {child.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
  );
}