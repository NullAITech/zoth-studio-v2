import React, { useState } from 'react';
import {
  Box, Container, Typography, Button, Grid, Card, CardContent, CardActions,
  Chip, Paper, Tooltip, IconButton
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import HubIcon from '@mui/icons-material/Hub';
import { Link as RouterLink } from 'react-router-dom';

const toolList = [
  { name: 'zoth-consensus', desc: 'Socratic debate council, AST code diff inspection, and multi-agent synthesis.', tag: 'npx zoth pull consensus', path: '/consensus', icon: '⚖️' },
  { name: 'zoth-webgen', desc: 'Autonomous site foundry, component spec matrix, and dynamic export engine.', tag: 'npx zoth pull webgen', path: '/webgen', icon: '🌐' },
  { name: 'zoth-hexstrike', desc: 'Autonomous penetration testing suite, CVE telemetry ledger, and exploit lab.', tag: 'npx zoth pull hexstrike', path: '/hexstrike', icon: '🛡️' },
  { name: 'zoth-vos-sandbox', desc: 'In-browser WASM WebContainer virtual operating system and terminal runner.', tag: 'npx zoth pull vos-sandbox', path: '/zoth-os', icon: '💻' },
  { name: 'zoth-tool-nexus', desc: 'Centralized tool discovery registry, CLI stamp generator, and schema contracts.', tag: 'npx zoth pull tool-nexus', path: '/tools', icon: '🔌' },
  { name: 'zoth-swarm', desc: '21 Pantheon multi-agent swarm orchestrator and task dispatcher.', tag: 'npx zoth pull swarm', path: '/swarm', icon: '🐝' },
  { name: 'zoth-netrunner-memory', desc: 'Biomorphic STDP memory daemon, vector store, and temporal recall index.', tag: 'npx zoth pull memory', path: '/bridges', icon: '🧠' },
  { name: 'zoth-brand', desc: 'Hermetic vector seals, Golden Z emblems, design token specs, and asset vaults.', tag: 'npx zoth pull brand', path: '/tools', icon: '💎' },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npx zoth-studio init');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 10, textAlign: 'center', background: 'radial-gradient(circle at 50% 0%, #FFFDF0 0%, #FFFFFF 70%)' }}>
        <Container maxWidth="md">
          
          {/* ASCII Header Banner */}
          <Paper
            elevation={0}
            sx={{
              display: 'inline-block',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: { xs: '0.65rem', sm: '0.8rem' },
              fontWeight: 600,
              color: '#B8860B',
              bg: '#FFFDF0',
              border: '1px solid #F0E1A8',
              px: 2,
              py: 1,
              borderRadius: 2,
              mb: 3
            }}
          >
            [ ZOTH STUDIO v2  ::  SOVEREIGN LOCAL-FIRST AGENT OS ]
          </Paper>

          <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, color: '#101828', mb: 2 }}>
            Sovereign AI Workstations.<br />
            <Box component="span" sx={{ color: '#B8860B' }}>28 Decoupled Micro-Tools.</Box>
          </Typography>

          <Typography variant="h6" sx={{ color: '#475467', fontWeight: 400, mb: 4, lineHeight: 1.6 }}>
            Run 21 autonomous AI agents locally on your hardware. Connect via E2EE Signal Bridge, encrypt secrets with Argon2id vaults, and execute tools inside isolated <strong>Zoth OS</strong> virtual machines.
          </Typography>

          {/* CLI Copy Box */}
          <Paper
            elevation={0}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              bg: '#101828',
              color: '#FDD663',
              px: 3,
              py: 1.5,
              borderRadius: 3,
              fontFamily: '"JetBrains Mono", monospace',
              mb: 4,
              boxShadow: '0 4px 14px rgba(16, 24, 40, 0.15)'
            }}
          >
            <Typography variant="body1" sx={{ fontFamily: 'inherit', fontWeight: 600 }}>
              $ npx zoth-studio init
            </Typography>
            <Tooltip title={copied ? 'Copied!' : 'Copy command'}>
              <IconButton size="small" onClick={handleCopy} sx={{ color: '#FFFFFF', bg: 'rgba(255,255,255,0.1)' }}>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Paper>

          {/* Hero Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" color="primary" component={RouterLink} to="/swarm" size="large">
              Launch 21-Agent Swarm
            </Button>
            <Button variant="outlined" color="inherit" component={RouterLink} to="/tools" size="large" sx={{ borderColor: '#EAECF0', color: '#101828' }}>
              Browse 28 Micro-Tools
            </Button>
            <Button variant="outlined" color="inherit" component={RouterLink} to="/zoth-os" size="large" sx={{ borderColor: '#F0E1A8', color: '#B8860B' }}>
              Zoth OS VM Sandbox
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Architecture Pillars */}
      <Box sx={{ py: 8, borderTop: '1px solid #EAECF0', bg: '#F9FAFB' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', p: 1 }}>
                <CardContent>
                  <Box sx={{ width: 44, height: 44, borderRadius: 2, bg: '#FEF9E7', border: '1px solid #F0E1A8', color: '#B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <HubIcon />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>21 Pantheon Agent Swarm</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Coordinate multi-agent consensus, Socratic code debate, and parallel subagent execution locally on your silicon.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', p: 1 }}>
                <CardContent>
                  <Box sx={{ width: 44, height: 44, borderRadius: 2, bg: '#FEF9E7', border: '1px solid #F0E1A8', color: '#B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <SecurityIcon />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>Argon2id Secret Vault</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Zero-knowledge local secret storage, E2EE Signal Bridge IPC protocol, and biomorphic STDP memory index.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', p: 1 }}>
                <CardContent>
                  <Box sx={{ width: 44, height: 44, borderRadius: 2, bg: '#FEF9E7', border: '1px solid #F0E1A8', color: '#B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <TerminalIcon />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>Zoth OS VM Sandbox</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Isolated KVM/QEMU Linux virtual machine built specifically for AI agents to run terminal commands safely.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 28 Micro-Tools Grid */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 5, textAlign: 'center' }}>
            <Paper elevation={0} sx={{ display: 'inline-block', fontFamily: 'monospace', fontSize: '0.75rem', color: '#B8860B', bg: '#FEF9E7', border: '1px solid #F0E1A8', px: 2, py: 0.5, borderRadius: 9999, mb: 1 }}>
              DECOUPLED ECOSYSTEM
            </Paper>
            <Typography variant="h4" sx={{ mb: 1 }}>Featured Micro-Repositories</Typography>
            <Typography variant="body1" color="text.secondary">Each workstation operates as its own standalone repository for maximum modularity.</Typography>
          </Box>

          <Grid container spacing={3}>
            {toolList.map((tool) => (
              <Grid item xs={12} sm={6} md={3} key={tool.name}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <CardContent>
                    <Typography variant="h2" sx={{ fontSize: '1.8rem', mb: 1.5 }}>{tool.icon}</Typography>
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 1 }}>{tool.name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{tool.desc}</Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between', borderTop: '1px solid #EAECF0' }}>
                    <Chip label={tool.tag} size="small" sx={{ bg: '#FEF9E7', color: '#B8860B', fontSize: '0.7rem', fontWeight: 700 }} />
                    <Button size="small" component={RouterLink} to={tool.path} sx={{ color: '#B8860B', fontWeight: 700 }}>
                      Launch →
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
