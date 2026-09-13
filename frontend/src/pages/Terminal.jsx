import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile, experience, skills, projects, certifications } from '../data/resumeData';

const HELP_TEXT = `
Available commands:
  whoami          - Display profile information
  experience      - List work experience
  skills          - Show skill matrix
  projects        - List projects
  contact         - Show contact information
  certifications  - List certifications
  aws status      - Check AWS services status
  kubectl get pods - Show running services
  clear           - Clear terminal
  help            - Show this help message
`.trim();

const commandHandlers = {
  whoami: () => [
    { type: 'info', text: `Name:     ${profile.firstName}` },
    { type: 'info', text: `Role:     ${profile.title}` },
    { type: 'info', text: `Region:   ${profile.region}` },
    { type: 'info', text: `Status:   ● available` },
    { type: 'info', text: `XP:       ${profile.xp}/${profile.maxXp} (Level ${profile.level})` },
  ],
  experience: () => experience.map((j, i) => ({
    type: i === 0 ? 'success' : 'info',
    text: `[${j.state === 'running' ? '●' : '○'}] ${j.title} @ ${j.company} (${j.startDate} – ${j.endDate})`,
  })),
  skills: () => [
    ...Object.entries(skills).flatMap(([cat, items]) =>
      items.map(s => ({ type: 'info', text: `[${cat.padEnd(18)}] ${s.name.padEnd(20)} ${'█'.repeat(Math.round(s.level / 10))}${'░'.repeat(10 - Math.round(s.level / 10))} ${s.level}%` }))
    ),
  ],
  projects: () => projects.map(p => ({
    type: 'success',
    text: `📦 ${p.name.padEnd(35)} — ${p.displayName} (⭐ ${p.stars})`
  })),
  contact: () => [
    { type: 'info', text: `Name:     ${profile.name}` },
    { type: 'info', text: `Email:    ${profile.email}` },
    { type: 'info', text: `Phone:    ${profile.phone || '+91 9632080135'}` },
    { type: 'info', text: `GitHub:   ${profile.github}` },
    { type: 'info', text: `LinkedIn: ${profile.linkedin}` },
    { type: 'info', text: `Response: ${profile.response}` },
  ],
  certifications: () => certifications.map(c => ({
    type: 'success',
    text: `🏆 ${c.name} — ${c.issuer} [${c.date}]`
  })),
  'aws status': () => [
    { type: 'success', text: 'EC2       RUNNING ✅  (3 instances, ap-south-1)' },
    { type: 'success', text: 'EKS       RUNNING ✅  (cluster: prod-eks, 12 nodes)' },
    { type: 'success', text: 'RDS       RUNNING ✅  (db.t3.medium, Multi-AZ)' },
    { type: 'success', text: 'S3        ACTIVE  ✅  (4 buckets, versioning enabled)' },
    { type: 'info',    text: 'CloudWatch ACTIVE ✅  (23 alarms, 0 in ALARM state)' },
  ],
  'kubectl get pods': () => [
    { type: 'info', text: 'NAME                          READY   STATUS    RESTARTS   AGE' },
    { type: 'success', text: 'api-deployment-7d9f8b-xkp2n   1/1     Running   0          2d' },
    { type: 'success', text: 'worker-58c6d9-vmnqr           1/1     Running   0          2d' },
    { type: 'success', text: 'grafana-6f8b9c-jlr4x          1/1     Running   0          5d' },
    { type: 'success', text: 'prometheus-5d9b7f-kqz9p       1/1     Running   0          5d' },
    { type: 'success', text: 'argocd-server-84c5d-nwm8x     1/1     Running   0          7d' },
  ],
  help: () => HELP_TEXT.split('\n').map(l => ({ type: 'info', text: l })),
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { prompt: null, lines: [{ type: 'info', text: 'Interactive Terminal Portfolio' }, { type: 'info', text: "Type 'help' to see available commands" }] },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const handler = commandHandlers[trimmed];
    const lines = handler
      ? handler()
      : [{ type: 'error', text: `command not found: ${trimmed}. Try 'help'` }];

    setHistory(prev => [...prev, { prompt: cmd, lines }]);
    setCmdHistory(prev => [cmd, ...prev]);
    setHistoryIdx(-1);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(next);
      setInput(cmdHistory[next] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? '' : cmdHistory[next]);
    }
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">Terminal<span className="dot">.</span></h1>
        <div className="page-underline" />
        <p className="page-subtitle">Interactive CLI portfolio — type commands to explore my experience, skills, and projects.</p>
      </div>

      <motion.div
        className="terminal-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="terminal-titlebar">
          <div className="terminal-circles">
            <div className="terminal-circle red" />
            <div className="terminal-circle yellow" />
            <div className="terminal-circle green" />
          </div>
          <span className="terminal-title">TERMINAL</span>
        </div>

        <div className="terminal-banner">
          <p>Interactive Terminal Portfolio</p>
          <p>Type 'help' to see available commands</p>
        </div>

        <div className="terminal-body" ref={bodyRef} style={{ maxHeight: '420px', overflowY: 'auto' }}>
          {history.map((entry, i) => (
            <div key={i} className="terminal-output">
              {entry.prompt && (
                <div className="terminal-line">
                  <span className="terminal-prompt">{profile.firstName.toLowerCase()}@portfolio:~$</span>
                  <span className="terminal-cmd">{entry.prompt}</span>
                </div>
              )}
              {entry.lines.map((line, j) => (
                <div key={j} className={`terminal-line ${line.type}`}>
                  <span className="terminal-response">{line.text}</span>
                </div>
              ))}
            </div>
          ))}

          <div className="terminal-input-row">
            <span className="terminal-input-prompt">{profile.firstName.toLowerCase()}@portfolio:~$</span>
            <input
              ref={inputRef}
              className="terminal-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
