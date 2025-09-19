import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Fitness = () => {
  const images = [
  { src: "https://pngimg.com/d/yogurt_PNG99064.png", width: 450, height: 380, blur: 6, depth: 0.6, bottom:"1%", left: "5%" },
  { src: "https://png.pngtree.com/png-clipart/20240927/original/pngtree-jar-of-cosmetic-white-cream-on-transparent-background-png-image_16109219.png", width: 450, height: 380, blur: 5, depth: 0.35, top: "5%", right: "5%" },
  { src: "https://freepngimg.com/save/22809-bread-clipart/1280x853", width: 450, height: 380, blur: 4, depth: 0.5, bottom: "0.5%", right: "5%" },
];


  const intensity = 1;

  const containerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function updateMouse(e) {
      const rect = container.getBoundingClientRect();
      let clientX, clientY;
      if (e.touches) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      mouse.current = {
        x: clientX / rect.width - 0.5,
        y: clientY / rect.height - 0.5,
      };
    }

    container.addEventListener("mousemove", updateMouse);
    container.addEventListener("touchmove", updateMouse, { passive: true });

    const elements = Array.from(container.querySelectorAll(".floating-blur"));
    const state = elements.map(() => ({ tx: 0, ty: 0 }));

    function animate() {
      const { x, y } = mouse.current;
      elements.forEach((el, i) => {
        const depth = parseFloat(el.dataset.depth) || 0.5;
        const targetX = -x * intensity * 100 * depth;
        const targetY = -y * intensity * 100 * depth;
        state[i].tx += (targetX - state[i].tx) * 0.1;
        state[i].ty += (targetY - state[i].ty) * 0.1;
        el.style.transform = `translate3d(${state[i].tx}px, ${state[i].ty}px, 0)`;
      });

      rafRef.current = requestAnimationFrame(animate); // 🔥 doimiy loop
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", updateMouse);
      container.removeEventListener("touchmove", updateMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-r from-green-200 via-blue-100 to-purple-200 overflow-hidden"
    >
      {/* Floating images */}
      {images.map((it, idx) => (
        <div
          key={idx}
          className="floating-blur pointer-events-none absolute rounded-2xl overflow-hidden"
          data-depth={it.depth}
          style={{
            top: it.top,
            left: it.left,
            right: it.right,
            bottom: it.bottom,
            width: it.width,
            height: it.height,
            filter: `blur(${it.blur}px)`,
            transform: "translate3d(0,0,0)",
            opacity: 0.9,
            willChange: "transform",
            zIndex: 1,
            backgroundImage: `url(${it.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white/20 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-green-500 text-center">
            🍽️ Tushlik paytini tanlang
          </h1>
          <div className="mt-9 flex justify-between gap-5">
              <NavLink to={'/ee'}>
                <button className="border-green-400 border bg-green-400 rounded-lg w-32">
                <p className="text-white text-xl p-1">Ertalab</p>
              </button>
              </NavLink>
            <NavLink to={"/et"}>
              <button className="border-green-400 border bg-green-400 rounded-lg w-32">
                <p className="text-white text-xl p-1">Tushki</p>
              </button>
            </NavLink>
            <NavLink to={"/ek"}>
              <button className="border-green-400 border bg-green-400 rounded-lg w-32">
                <p className="text-white text-xl p-1">Kechki</p>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
