import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Book, Home, ScrollText, Menu, X, Lightbulb, Contact, Play} from 'lucide-react';
import { useState } from 'react';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", icon: <Home size={20} />, text: "Home" },
    { path: "/opstart", icon: <Play size={20} />, text: "Kom i gang" },
    { path: "/wiki", icon: <Book size={20} />, text: "Wiki" },
    { path: "/guidelines", icon: <ScrollText size={20} />, text: "Regler og Guidelines" },
    { path: "/kontakt", icon: <Contact size={20} />, text: "Kontakt" },
    { path: "/projects", icon: <Lightbulb size={20} />, text: "Projektidéer" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b2c4c] via-[#1b2c4c] to-[#0d4566]">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-gradient-to-r from-[#136998] to-[#1b2c4c] text-white hover:shadow-lg hover:shadow-[#136998]/20 transition-all duration-300"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 
        bg-gradient-to-b from-[#1b2c4c] via-[#136998]/20 to-[#1b2c4c]
        text-white transform transition-transform duration-200 ease-in-out
        backdrop-blur-sm shadow-xl shadow-black/20
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 mb-8 bg-gradient-to-br from-[#136998] to-[#1b2c4c] p-3 rounded-lg backdrop-blur-sm">
            <div className="rounded-lg">
              <img src="/SMKID-Logo.png"></img>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">SMKID</h1>
              <p className="text-sm text-blue-200">Servere</p>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center space-x-3 p-3 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-[#1b2c4c] to-[#1b2c4c]/80 text-white shadow-lg shadow-black/20' 
                      : 'hover:bg-gradient-to-r hover:from-[#1b2c4c]/50 hover:to-transparent'}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`
        transition-all duration-200 ease-in-out
        lg:ml-64 min-h-screen
        p-6 lg:p-8
        backdrop-blur-sm
      `}>
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;