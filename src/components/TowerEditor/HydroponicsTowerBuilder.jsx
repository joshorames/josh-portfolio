import { useMemo, useState } from "react";

export default function HydroponicsTowerBuilder() {
  const [layers, setLayers] = useState(5);
  const spacing = 10;

  const sitesPerLayer = 5

  const totalSites = useMemo(() => layers * sitesPerLayer, [layers, sitesPerLayer]);

  const totalHeight = useMemo(() => {
    const topCapHeight = 4;
    const baseHeight = 12;
    const stackHeight = layers > 1 ? (layers - 1) * spacing : 0;
    return baseHeight + stackHeight + topCapHeight;
  }, [layers, spacing]);

  const levels = Array.from({ length: layers }, (_, i) => i);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.7fr_1fr]">
      <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
          Hydroponics tower builder
        </p>
    
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Choose the number of layers and sites per layer. The preview will show the
          estimated tower height and total grow sites automatically.
        </p>

        <div className="mt-6 grid gap-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Layers</label>
            <input
              type="number"
              min="1"
              max="5"
              value={layers}
              onChange={(e) => setLayers(Math.max(1, Number(e.target.value)))}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            />
          </div>

        
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <p className="text-sm text-slate-400">Estimated height</p>
            <p className="mt-2 text-3xl font-black text-white">{totalHeight}"</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <p className="text-sm text-slate-400">Total grow sites</p>
            <p className="mt-2 text-3xl font-black text-white">{totalSites}</p>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">
          Live preview
        </p>
   

        <div className="mt-6 flex min-h-[560px] items-end justify-center rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,1))] p-6">
          <div className="relative flex h-[480px] w-[320px] items-end justify-center">
                 <div
                  className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center"
                  style={{ bottom: `${80+85*layers}px` }}
                >
                  <div className="relative h-12 w-56">
                   
                        <img
                        src="toplid.png"
                
                          style={{
                        
                            transform: `translateX(-1.5%) rotate(180deg) scale(2)`,
                          }}
                        />
                  
                  </div>
                </div>
            <div
                  className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center"
                  style={{ bottom: `${80+85*layers-30}px` }}
                >
                  <div className="relative h-12 w-56">
                   
                        <img
                        src="top.png"
                
                          style={{
                        
                            transform: `translateX(-2%)`,
                          }}
                        />
                  
                  </div>
                </div>
                 <div
                  className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center"
                  style={{ bottom: `30px` }}
                >
                  <div className="relative h-12 w-56">
                   
                        <img
                        src="lid.png"
                
                          style={{
                        
                            transform: `translateX(5%)`,
                          }}
                        />
                  
                  </div>
                </div>

            {levels.map((level, i) => {
              const y =80+85*i;

              return (
                <div
                  key={level}
                  className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center"
                  style={{ bottom: `${y}px` }}
                >
                  <div className="relative h-12 w-56">
                   
                        <img
                        src="hydrobody.png"
                
                          style={{
                        
                            transform: `translateY(0%)`,
                          }}
                        />
                  
                  </div>
                </div>
              );
            })}

            
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Layers</p>
            <p className="mt-2 text-2xl font-bold text-white">{layers}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Sites per layer</p>
            <p className="mt-2 text-2xl font-bold text-white">{sitesPerLayer}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Estimated total height</p>
            <p className="mt-2 text-2xl font-bold text-white">{totalHeight}"</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Total grow sites</p>
            <p className="mt-2 text-2xl font-bold text-white">{totalSites}</p>
          </div>
        </div>
      </section>
    </div>
  );
}