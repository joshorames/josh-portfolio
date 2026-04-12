
import "../App.css";
import Display from "../components/display/display";
import Template from "./template";
export default function HomePage() {




  return (
  <Template>
          <div className="mx-auto max-w-[1400px] px-6 py-8">
            
                  <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                    From Concepts
                    <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-orange-300 bg-clip-text text-transparent">
                      To Real-World Hardware
                    </span>
                  </h1>
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                    Available for projects and opportunities
                  </div>
                        <div>to be added soon</div>
                  </div>
    </Template>
  );
}