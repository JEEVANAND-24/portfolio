import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { navItems } from '../data/resumeData';
import {
  FiUser, FiLayers, FiFileText, FiActivity, FiSend, FiTerminal, FiSun, FiMoon
} from 'react-icons/fi';

const icons = {
  person:   <FiUser size={15} />,
  grid:     <FiLayers size={15} />,
  document: <FiFileText size={15} />,
  chart:    <FiActivity size={15} />,
  mail:     <FiSend size={15} />,
  terminal: <FiTerminal size={15} />,
};

export default function Sidebar() {
  const location = useLocation();
  const { theme, toggleTheme, accent, setAccent } = useTheme();

  return (
    <aside className="sidebar">
      {/* Cool & Calm Eye-Comfort Accent Switchers */}
      <div className="sidebar-colors" title="Select Eye-Comfort Accent Tone">
        <button
          type="button"
          className={`color-dot dot-blue ${accent === 'blue' ? 'active' : ''}`}
          style={{ background: '#38bdf8' }}
          onClick={() => setAccent('blue')}
          title="Glacier Blue (Cool & Calm)"
          aria-label="Set Glacier Blue Accent"
        />
        <button
          type="button"
          className={`color-dot dot-teal ${accent === 'teal' ? 'active' : ''}`}
          style={{ background: '#2dd4bf' }}
          onClick={() => setAccent('teal')}
          title="Calm Teal (Oceanic & Relaxing)"
          aria-label="Set Calm Teal Accent"
        />
        <button
          type="button"
          className={`color-dot dot-sage ${accent === 'sage' ? 'active' : ''}`}
          style={{ background: '#34d399' }}
          onClick={() => setAccent('sage')}
          title="Soft Sage (Natural & Low Fatigue)"
          aria-label="Set Soft Sage Accent"
        />
        <button
          type="button"
          className={`color-dot dot-lavender ${accent === 'lavender' || accent === 'purple' ? 'active' : ''}`}
          style={{ background: '#818cf8' }}
          onClick={() => setAccent('lavender')}
          title="Serene Lavender (Twilight & Eye-Comfort)"
          aria-label="Set Serene Lavender Accent"
        />
      </div>

      {/* Nav links */}
      <nav className="sidebar-section">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `nav-item${isActive || (item.path === '/about' && location.pathname === '/') ? ' active' : ''}`
            }
          >
            <span className="nav-icon">{icons[item.icon]}</span>
            <span>{item.label}</span>
            <span className="nav-dot" />
          </NavLink>
        ))}
      </nav>

      {/* Theme toggle & bottom dots */}
      <div style={{ marginTop: 'auto' }}>
        <div style={{ padding: '0 16px 10px 16px' }}>
          <button 
            className="sidebar-theme-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <>
                <FiSun size={13} style={{ color: '#f59e0b' }} />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FiMoon size={13} style={{ color: '#3b82f6' }} />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        <div className="sidebar-dots">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="sidebar-dot" />
          ))}
        </div>
      </div>
    </aside>
  );
}
