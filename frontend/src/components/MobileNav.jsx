import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiUser,
  FiLayers,
  FiFileText,
  FiActivity,
  FiSend,
  FiTerminal,
} from 'react-icons/fi';

const mobileNavItems = [
  { id: 'dashboard', label: 'Home', icon: <FiHome size={16} />, path: '/' },
  { id: 'about', label: 'About', icon: <FiUser size={16} />, path: '/about' },
  { id: 'portfolio', label: 'Projects', icon: <FiLayers size={16} />, path: '/portfolio' },
  { id: 'resume', label: 'Resume', icon: <FiFileText size={16} />, path: '/resume' },
  { id: 'skills', label: 'Skills', icon: <FiActivity size={16} />, path: '/skills' },
  { id: 'contact', label: 'Contact', icon: <FiSend size={16} />, path: '/contact' },
  { id: 'terminal', label: 'Terminal', icon: <FiTerminal size={16} />, path: '/terminal' },
];

export default function MobileNav() {
  return (
    <nav className="mobile-nav-bar" aria-label="Mobile Navigation">
      <div className="mobile-nav-scroll">
        {mobileNavItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `mobile-nav-item${isActive ? ' active' : ''}`
            }
          >
            <span className="mobile-nav-icon">{item.icon}</span>
            <span className="mobile-nav-label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
