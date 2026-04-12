import "../App.css";
import HeaderDropdownNav from "../components/dropdownButton/dropdownButton";
import { useNavigate } from "react-router-dom";

export default function Template({children}) {
const navigate = useNavigate();

const navigateTo = (name) => {
    navigate(name);
  };

const navItems = [
  {
    label: "Projects",
    children: [
      { label: "Software + Hardware", onClick: () => navigateTo("/SoftwareHardware") },
      { label: "3D Printing",  onClick: () => navigateTo("/Printing") },
      { label: "Custom UI + Visualization",  onClick: () => navigateTo("/CustomUI") },
    ],
  },
  {
    label: "Builder",
    children: [
      { label: "Gauge Editor", onClick: () => navigateTo("/GaugeEditor") },
      { label: "Hydroponics Editor", onClick: () => navigateTo("/HydroEditor") },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "Email Me", href: "mailto:joshorames2@gmail.com" },
      { label: "GitHub", href: "https://github.com/joshorames?tab=repositories" },
    ],
  },
];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#071018] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.10),transparent_26%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:42px_42px]" />

      <main className="relative z-10 min-h-screen">
        <div className="sticky top-0 z-50 border-b border-white/10 bg-[#071018]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
            <div>
              <div className="text-lg font-black text-white">Josh Orames</div>
              <div className="text-xs text-slate-400"></div>
            </div>

            <div className="flex flex-wrap gap-3">
            <HeaderDropdownNav navItems={navItems}/>

            </div>
          </div>
        </div>

          <div className="mx-auto max-w-[1400px] px-6 py-8">
            {children}
        </div>
      </main>
    </div>
  );
}