import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile, skills, activityFeed } from '../data/resumeData';
import { NavLink } from 'react-router-dom';
import { FiRefreshCw } from 'react-icons/fi';
import {
  AwsIamIcon,
  AwsEc2Icon,
  AwsS3Icon,
  AwsSecurityIcon,
  AwsCloudWatchIcon,
  AwsRoute53Icon,
  AwsEksIcon,
  TerraformIcon,
  AwsEventBridgeIcon,
  AwsLogo,
} from '../components/AwsIcons';

const activityServiceIcons = {
  terraform: <TerraformIcon size={20} />,
  eks: <AwsEksIcon size={20} />,
  cloudwatch: <AwsCloudWatchIcon size={20} />,
  waf: <AwsSecurityIcon size={20} />,
  eventbridge: <AwsEventBridgeIcon size={20} />,
  iam: <AwsIamIcon size={20} />,
};

const serviceCards = [
  {
    id: 'about',
    icon: <AwsIamIcon size={38} />,
    tag: 'IDENTITY',
    badgeCls: 'tag-purple',
    label: 'Security & Identity',
    name: 'IAM',
    sub: 'Operator Profile',
    stat1: '2 yrs',
    stat2: 'Cloud Eng',
    path: '/about',
  },
  {
    id: 'exp',
    icon: <AwsEc2Icon size={38} />,
    tag: 'COMPUTE',
    badgeCls: 'tag-orange',
    label: 'Compute Capacity',
    name: 'EC2',
    sub: 'Experience & Roles',
    stat1: '2 roles',
    stat2: 'TCS Banking',
    path: '/resume',
  },
  {
    id: 'proj',
    icon: <AwsS3Icon size={38} />,
    tag: 'STORAGE',
    badgeCls: 'tag-green',
    label: 'Scalable Storage',
    name: 'S3',
    sub: 'Cloud Projects',
    stat1: '3 projects',
    stat2: 'EKS & IaC',
    path: '/portfolio',
  },
  {
    id: 'certs',
    icon: <AwsSecurityIcon size={38} />,
    tag: 'SECURITY',
    badgeCls: 'tag-purple',
    label: 'Compliance & Shield',
    name: 'IAM Policies',
    sub: 'Certifications',
    stat1: '6 certs',
    stat2: 'AWS + Azure',
    path: '/resume',
  },
  {
    id: 'skills',
    icon: <AwsCloudWatchIcon size={38} />,
    tag: 'METRICS',
    badgeCls: 'tag-pink',
    label: 'Observability',
    name: 'CloudWatch',
    sub: 'Skills & Telemetry',
    stat1: '6 domains',
    stat2: 'AWS + Linux',
    path: '/skills',
  },
  {
    id: 'contact',
    icon: <AwsRoute53Icon size={38} />,
    tag: 'DNS ROUTE',
    badgeCls: 'tag-blue',
    label: 'Global Networking',
    name: 'Route 53',
    sub: 'Contact Endpoints',
    stat1: '<24h',
    stat2: 'Response',
    path: '/contact',
  },
];

function XPBar({ pct }) {
  return (
    <div className="xp-container">
      <div className="xp-label">
        <span>XP</span>
        <span>{profile.xp.toLocaleString()} / {profile.maxXp.toLocaleString()}</span>
      </div>
      <div className="xp-track">
        <motion.div
          className="xp-fill"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        />
      </div>
    </div>
  );
}

export default function Dashboard() {
  const xpPct = Math.round((profile.xp / profile.maxXp) * 100);
  const [activities, setActivities] = useState(activityFeed);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getRelativeTime = (dateString) => {
    if (!dateString) return 'Live';
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const fetchGithubActivity = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('https://api.github.com/users/JEEVANAND-24/events/public?per_page=6');
      if (!res.ok) {
        setIsRefreshing(false);
        return;
      }
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const liveFeed = data.slice(0, 6).map((evt) => {
          let service = 'terraform';
          let eventText = `GitHub Event: ${evt.type} on ${evt.repo.name.replace('JEEVANAND-24/', '')}`;

          if (evt.type === 'PushEvent') {
            service = 'terraform';
            const commitMsg = evt.payload?.commits?.[0]?.message || 'Pushed new commit update';
            eventText = `Git Push: ${commitMsg} in ${evt.repo.name.replace('JEEVANAND-24/', '')}`;
          } else if (evt.type === 'CreateEvent') {
            service = 'eks';
            eventText = `Created ${evt.payload?.ref_type || 'repository'}: ${evt.repo.name.replace('JEEVANAND-24/', '')}`;
          } else if (evt.type === 'WatchEvent') {
            service = 'cloudwatch';
            eventText = `Starred repository: ${evt.repo.name.replace('JEEVANAND-24/', '')}`;
          } else if (evt.type === 'IssueCommentEvent' || evt.type === 'IssuesEvent') {
            service = 'eventbridge';
            eventText = `Issue activity in ${evt.repo.name.replace('JEEVANAND-24/', '')}`;
          }
          return {
            time: getRelativeTime(evt.created_at),
            service,
            event: eventText,
          };
        });
        setActivities(liveFeed);
      }
    } catch (_) {
      // Fall back gracefully to static activityFeed
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchGithubActivity();
  }, []);

  return (
    <div className="fade-in">
      {/* Welcome row */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '28px', flexWrap: 'wrap' }}>
        {/* Player card */}
        <motion.div
          className="player-card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          style={{ flex: '1', minWidth: '260px' }}
        >
          <div className="player-level">
            <div className="level-circle">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="player-avatar-img"
                  decoding="async"
                  loading="eager"
                />
              ) : (
                "Lv"
              )}
              <span className="level-badge">Lv {profile.level}</span>
            </div>
            <div>
              <div className="player-name">{profile.firstName}</div>
              <div className="player-title">{profile.title}</div>
            </div>
          </div>
          <div className="xp-row">
            <span>Level {profile.level} Cloud Engineer</span>
            <span>{xpPct}%</span>
          </div>
          <div className="player-xp-track">
            <motion.div
              className="player-xp-fill"
              initial={{ width: 0 }}
              animate={{ width: `${xpPct}%` }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            />
          </div>
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-val">2 yrs</div>
              <div className="stat-key">AWS Exp</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">6</div>
              <div className="stat-key">Certs</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">3</div>
              <div className="stat-key">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">99.9%</div>
              <div className="stat-key">SLA Uptime</div>
            </div>
          </div>
        </motion.div>

        {/* Activity feed */}
        <motion.div
          className="activity-feed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, delay: 0.03 }}
          style={{ flex: '2', minWidth: '300px' }}
        >
          <div className="activity-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Recent Activity — CloudTrail Telemetry</span>
            <button
              type="button"
              onClick={fetchGithubActivity}
              disabled={isRefreshing}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '11px',
                fontFamily: 'JetBrains Mono, monospace',
              }}
              title="Refresh CloudTrail Live Events"
            >
              <FiRefreshCw size={12} style={{ animation: isRefreshing ? 'spin 1s linear infinite' : 'none' }} />
              <span>{isRefreshing ? 'Syncing...' : 'Refresh'}</span>
            </button>
          </div>
          {activities.map((item, i) => (
            <div className="activity-item" key={i}>
              <span className="activity-time">{item.time}</span>
              <span className="activity-icon-badge">
                {activityServiceIcons[item.service] || <AwsLogo size={18} />}
              </span>
              <span className="activity-event">{item.event}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Service cards grid */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', marginBottom: '14px', textTransform: 'uppercase' }}>
          Services — Console Home
        </div>
        <div className="dashboard-grid">
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: i * 0.02 }}
            >
              <NavLink to={card.path} className="service-card">
                <div className="service-card-head">
                  <div className="service-aws-icon">{card.icon}</div>
                  <div className={`service-tag-pill ${card.badgeCls}`}>{card.tag}</div>
                </div>
                <div style={{ marginBottom: '4px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{card.label}</span>
                </div>
                <div className="service-name">{card.name}</div>
                <div className="service-sub">{card.sub}</div>
                <div className="service-stats">
                  <span><span className="service-stat-val">{card.stat1}</span></span>
                  <span>·</span>
                  <span><span className="service-stat-val">{card.stat2}</span></span>
                </div>
                <XPBar pct={72 + i * 4 > 99 ? 95 : 72 + i * 3} />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

