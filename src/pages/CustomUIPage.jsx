import "../App.css";
import Template from "./template";
import Display from "../components/display/display";
export default function CustomUIPage() {
    const platformSpecificProjects = [
  {
    name: "GrowFlower Garmin Watch Face",
    description: "A watch face that grows a flower while you walk while also showing your current weather conditions.",
    image: "Grow.png",
    url: "https://github.com/joshorames",
    buttons: [
      {
        label: "View Garmin Profile",
        onClick: () => window.open("https://apps.garmin.com/developer/bcc96b21-7f38-4521-8a52-1b806ee92971/apps", "_blank"),
      },
       {
        label: "View Garmin Watch Face",
        onClick: () => window.open("https://apps.garmin.com/apps/edb3bfa8-42fa-4700-9e84-95cebfc0c19d", "_blank"),
      },
    ],
  }
];
return(
<Template>
 <div className="mx-auto max-w-[1400px] px-6 py-8">
            
                  <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                    Custom UI
                  </h1>
                  <Display displayData={platformSpecificProjects} />
                  </div>
</Template>
  );
}