import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  let currentMouseX = 0;
  let currentMouseY = 0;
  useEffect(() => {
    if (containerRef.current && haloRef.current) {
      const container = containerRef.current;
      const halo = haloRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        currentMouseY = e.pageY;
        if (containerRef.current && haloRef.current) {
          const container = containerRef.current;
          const halo = haloRef.current;
          const containerRect = container.getBoundingClientRect();
          const containerX = containerRect.left + window.scrollX;
          const containerY = containerRect.top + window.scrollY;
          halo.style.top = (e.pageY - containerY - 20) + 'px';
          halo.style.left = (e.pageX - containerX - 20) + 'px';
        }
      };
      
      const handleScroll = () => {
        if (containerRef.current && haloRef.current) {
          const container = containerRef.current;
          const halo = haloRef.current;
          const containerRect = container.getBoundingClientRect();
          const containerY = containerRect.top + window.scrollY;
          halo.style.top = (currentMouseY - containerY - 20) + 'px';
        }
      };
      

      container.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <nav className="fixed w-full z-50 bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-lg">
      <div className="navbar">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      </nav>
      <div
        ref={containerRef}
        className="h-full flex flex-col justify-center items-center mt-16"
      >
        <div className="halo" ref={haloRef}></div>
        <div className="slide h-full flex items-center justify-center" style={{backgroundColor: "#282c34"}}>
          <h1 className="text-6xl font-bold text-purple-500">Slide 1</h1>
        </div>
        <div className="slide h-full flex items-center justify-center" style={{backgroundColor: "#2d3748"}}>
          <h1 className="text-6xl font-bold text-purple-500">Slide 2</h1>
        </div>
        <div className="slide h-full flex items-center justify-center" style={{backgroundColor: "#212529"}}>
          <h1 className="text-6xl font-bold text-purple-500">Slide 3</h1>
        </div>
      </div>
    </div>
  );
}

export default App;