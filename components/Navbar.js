"use client";

export default function Navbar() {
  return (
    <header className="navbar sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
            🍕
          </div>
          <div>
            <h1 className="navbar-brand">Pizza Vibe</h1>
            <p className="text-gray-400 text-xs">PUBG x Yellow Fast Food</p>
          </div>
        </div>
        <nav className="flex gap-2">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}