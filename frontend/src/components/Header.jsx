import { profile } from '../data/resumeData';
import { useTheme } from '../context/ThemeContext';
import { AwsLogo } from './AwsIcons';
import {
  FiDownload, FiChevronDown, FiMail, FiFlag, FiSun, FiMoon
} from 'react-icons/fi';
import {
  FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub
} from 'react-icons/fa6';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const initials = profile.name
    ? profile.name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('')
    : 'JR';

  return (
    <header className="header-bar">
      <div className="console-window-card">
        {/* Top Window Chrome Bar */}
        <div className="console-chrome-bar">
          <div className="console-traffic-dots">
            <span className="traffic-dot dot-red" />
            <span className="traffic-dot dot-yellow" />
            <span className="traffic-dot dot-green" />
          </div>

          <div className="console-chrome-right">
            <span className="console-chrome-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <AwsLogo size={14} color="#FF9900" />
              <span>operator console</span>
            </span>
            <button 
              className="theme-toggle-pill"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              type="button"
            >
              {theme === 'dark' ? (
                <>
                  <FiSun size={11} className="theme-toggle-icon sun" />
                  <span>LIGHT</span>
                </>
              ) : (
                <>
                  <FiMoon size={11} className="theme-toggle-icon moon" />
                  <span>DARK</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Console Card Body: 3 Columns */}
        <div className="console-card-body">
          {/* Column 1: Profile */}
          <div className="console-col console-col-profile">
            <div className="console-avatar-ring">
              <div className="console-avatar-inner">
                {profile.avatarUrl ? (
                  <img src={profile.avatarUrl} alt={profile.name} />
                ) : (
                  <span>{initials}</span>
                )}
              </div>
            </div>
            <div className="console-profile-text">
              <h1 className="console-name">{profile.name}</h1>
              <div className="console-role">{profile.title}</div>
              <div className="console-handle">{profile.handle}</div>
            </div>
          </div>

          {/* Vertical Divider 1 */}
          <div className="console-col-divider" />

          {/* Column 2: System Status */}
          <div className="console-col console-col-status">
            <div className="status-panel-title">SYSTEM STATUS</div>
            <div className="status-panel-rows">
              <div className="status-mono-row">
                <span className="status-mono-key">status :</span>
                <span className="status-live-dot" />
                <span className="status-mono-available">available</span>
              </div>
              <div className="status-mono-row">
                <span className="status-mono-key">tz :</span>
                <span className="status-mono-val">{profile.timezone}</span>
              </div>
              <div className="status-mono-row">
                <span className="status-mono-key">response :</span>
                <span className="status-mono-val">{profile.response}</span>
              </div>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="console-col-divider" />

          {/* Column 3: Actions & Socials */}
          <div className="console-col console-col-actions">
            {/* Row 1: Download CV with split caret */}
            <div className="console-cv-row">
              <a href="#/resume" className="console-btn-download" title="Download CV">
                <FiDownload size={13} />
                <span>Download CV</span>
                <span className="console-btn-sep" />
                <FiChevronDown size={12} />
              </a>
            </div>

            {/* Row 2: Email */}
            <a href={`mailto:${profile.email}`} className="console-email-link" title={`Email ${profile.email}`}>
              <FiMail size={12} />
              <span>{profile.email}</span>
            </a>

            {/* Row 3: Social Icons */}
            <div className="console-socials-row">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="console-social-icon" title="Facebook">
                <FaFacebookF size={11} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="console-social-icon" title="X (Twitter)">
                <FaXTwitter size={11} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="console-social-icon" title="Instagram">
                <FaInstagram size={12} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="console-social-icon" title="LinkedIn">
                <FaLinkedinIn size={12} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="console-social-icon" title="GitHub">
                <FaGithub size={12} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="console-social-icon" title="Certifications / Portfolio">
                <FiFlag size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
