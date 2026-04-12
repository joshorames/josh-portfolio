import "../App.css";
import Template from "./template";
import Display from "../components/display/display";
export default function PrintingPage() {
    const printProjects = [
  {
    name: "Hydroponics Tower",
    description: "Compact indoor grow system with modular printed parts",
    image: "hydro.png",
    url: "https://github.com/joshorames",
    buttons: [
    ],
  },
];
return(
<Template>
 <div className="mx-auto max-w-[1400px] px-6 py-8">
            
                  <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                    Custom 3D Printable Designs
                  </h1>
                  <Display displayData={printProjects} />
                  </div>
</Template>
  );
}