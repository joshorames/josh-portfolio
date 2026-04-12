import "../App.css";
import Template from "./template";
import Display from "../components/display/display";

export default function SoftwareHardwarePage() {
    const softwareHardwareProjects = [
  {
    name: "Custom Gauge Dashboard",
    description: "A configurable dashboard system with draggable gauges, custom styling, and saved layouts. The builder page lets you experiment with a web version directly in the browser.",
    image: "gauges.png",
    url: "https://github.com/joshorames",
    buttons: [
      {
        label: "Open Builder",
        onClick: () => {},
      },
    ],
  },
  {
    name: "RFID Home Assistant",
    description: " A home assistant that you can program RFID to do smart home tasks through Alexa using virtual doorbells. Also shows hardware config and other information on how to create.",
    image: "RFID.png",
    url: "https://github.com/joshorames",
    buttons: [
    ],
  },
];

return(
<Template>
 <div className="mx-auto max-w-[1400px] px-6 py-8">
            
                  <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                    Custom Hardware
                    <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
                      + Software
                    </span>
                  </h1>
                  <Display displayData={softwareHardwareProjects} />
                  </div>
</Template>
  );
}