import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../App.css";

export default function Display({ displayData = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!displayData.length) {
    return (
      <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12">
        <p className="text-slate-300">No projects available.</p>
      </section>
    );
  }

  const currentProject = displayData[currentIndex];

  const goLeft = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? displayData.length - 1 : prev - 1
    );
  };

  const goRight = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === displayData.length - 1 ? 0 : prev + 1
    );
  };

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      scale: 0.98,
    }),
  };

  return (
    <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12">
      <div className="grid gap-10 lg:grid-cols-[80px_1fr_80px] lg:items-center">
        <button
          type="button"
          onClick={goLeft}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10"
        >
          ‹‹
        </button>

        <div className="overflow-hidden display-carosel">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-8"
            >
              <div className="flex flex-wrap gap-4">
                {(currentProject.buttons || []).map((button, index) => (
                  <div key={index} className="buttonarea">
                    <button
                      type="button"
                      onClick={button.onClick}
                      className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                    >
                      {button.label}
                    </button>
                  </div>
                ))}
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-slate-400">
                    Featured build {currentIndex + 1} / {displayData.length}
                  </p>

                  <div className="flex gap-2">
                    {displayData.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        }}
                        className={`h-2.5 rounded-full transition ${
                          index === currentIndex
                            ? "w-8 bg-cyan-300"
                            : "w-2.5 bg-white/25 hover:bg-white/40"
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-2xl font-bold text-white">
                  {currentProject.name}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {currentProject.description}
                </p>

                {currentProject.url && (
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-cyan-300 hover:text-cyan-200"
                  >
                    View project
                  </a>
                )}

                {currentProject.image && (
                  <div className="mt-4">
                    <img
                      width="500" 
                      height="600"
                      src={currentProject.image}
                      alt={currentProject.name}
                      className="w-full rounded-2xl object-cover max-h-[520px]"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={goRight}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10"
        >
          ››
        </button>
      </div>
    </section>
  );
}