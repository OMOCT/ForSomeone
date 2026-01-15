import { useEffect, useRef } from "react";
import cat1 from "./assets/cat1.jpg"
import cat2 from "./assets/cat2.jpg"
import cat3 from "./assets/cat3.jpg"
import cat4 from "./assets/cat4.jpg"
import cat5 from "./assets/cat5.jpg"
import cat6 from "./assets/cat6.jpg"
import cat7 from "./assets/cat7.jpg"

import './App.css'

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Smooth scroll with mouse wheel
    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollBy({
        top: e.deltaY > 0 ? window.innerHeight : -window.innerHeight,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  const items = ["I wanted to say this for a long time...", "I don't know how you would react to this...",
    "But today i think i should tell you this...", "I don't know what your reaction will be...", "I wanted to say...",
    "रत्त ब्याहुँ तुमर सिकोड़ लगान हरी द्वी रत्ते द्वी ब्याहुँ", "शुभ रात्रि"];
  const imgs = [cat1, cat2, cat3, cat4, cat5, cat6, cat7];

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
      }}
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <section
          key={i}
          style={{
            height: "100vh",
            display: "flex",
            paddingLeft: "2vh",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
            textShadow: "2px 2px 5px black",
            fontWeight: "bold",
            color: "white",
            background: `url(${imgs[i]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scrollSnapAlign: "start",
          }}
        >
          {items[i]}
        </section>
      ))
      }
    </div >
  );
}

export default App
