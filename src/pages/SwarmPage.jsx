import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const agents = [
  { id: 'AZOTH', role: 'Archon Orchestrator', model: 'Google Antigravity / Pro', status: 'ACTIVE', tasks: 42 },
  { id: 'HERMES', role: 'Subagent Dispatcher', model: 'Nous Hermes 3 (Local)', status: 'ACTIVE', tasks: 18 },
  { id: 'GROK', role: 'Dialectic Synthesizer', model: 'xAI Grok Beta', status: 'STANDBY', tasks: 12 },
  { id: 'OLLAMA', role: 'Local WASM/GGUF Runner', model: 'Ollama Llama 3 8B', status: 'ACTIVE', tasks: 29 },
  { id: 'HEXSTRIKE', role: 'Penetration Auditor', model: 'CyberSec Specialist', status: 'IDLE', tasks: 8 },
  { id: 'WEBGEN', role: 'Autonomous Layout Engine', model: 'Vite/React Builder', status: 'ACTIVE', tasks: 35 },
];

export default function SwarmPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      
      <Box sx={{ mb: 4 }}>
        <Chip label="SWARM CONTROL PLANE" size="small" sx={{ bg: '#FEF9E7', color: '#B8860B', border: '1px solid #F0E1A8', fontWeight: 700, mb: 1 }} />
        <Typography variant="h3" sx={{ mb: 1 }}>21 Pantheon Agent Swarm</Typography>
        <Typography variant="body1" color="text.secondary">Monitor and dispatch multi-agent consensus, IPC task channels, and parallel subagent workers.</Typography>
      </Box>

      {/* Status Grid */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, border: '1px solid #EAECF0' }}>
            <Typography variant="body2" color="text.secondary">Total Swarm Agents</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#101828' }}>21 Active</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, border: '1px solid #EAECF0' }}>
            <Typography variant="body2" color="text.secondary">Completed Swarm Work Orders</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#B8860B' }}>1,428 Tasks</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, border: '1px solid #EAECF0' }}>
            <Typography variant="body2" color="text.secondary">IPC Bus Latency</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#12B76A' }}>0.42 ms</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Swarm Table */}
      <Paper sx={{ border: '1px solid #EAECF0', overflow: 'hidden' }}>
        <Table>
          <TableHead sx={{ bg: '#F9FAFB' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Agent ID</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Swarm Role</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Model Engine</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Work Orders</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agents.map((agent) => (
              <TableRow key={agent.id} hover>
                <TableCell sx={{ fontWeight: 700, color: '#B8860B' }}>{agent.id}</TableCell>
                <TableCell>{agent.role}</TableCell>
                <TableCell>{agent.model}</TableCell>
                <TableCell>
                  <Chip
                    label={agent.status}
                    size="small"
                    color={agent.status === 'ACTIVE' ? 'success' : 'default'}
                    variant={agent.status === 'ACTIVE' ? 'filled' : 'outlined'}
                  />
                </TableCell>
                <TableCell>{agent.tasks}</TableCell>
                <TableCell>
                  <Button size="small" variant="outlined" color="primary" startIcon={<PlayArrowIcon />}>
                    Dispatch
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

    </Container>
  );
}
