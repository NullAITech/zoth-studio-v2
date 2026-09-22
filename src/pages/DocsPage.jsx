import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Paper, Divider } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function DocsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      
      <Box sx={{ mb: 4 }}>
        <Chip label="DOCUMENTATION & GUIDES" size="small" sx={{ bg: '#FEF9E7', color: '#B8860B', border: '1px solid #F0E1A8', fontWeight: 700, mb: 1 }} />
        <Typography variant="h3" sx={{ mb: 1 }}>Zoth Studio v2 Architecture Docs</Typography>
        <Typography variant="body1" color="text.secondary">Complete guides for local installation, 28 micro-repo decoupling, 21-agent swarms, and Zoth OS hypervisors.</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, border: '1px solid #EAECF0' }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#B8860B' }}>Table of Contents</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" sx={{ py: 0.5, fontWeight: 700, color: '#101828' }}>1. Sovereign Architecture Overview</Typography>
            <Typography variant="body2" sx={{ py: 0.5, color: '#475467' }}>2. Decoupled 28 Micro-Repo Guide</Typography>
            <Typography variant="body2" sx={{ py: 0.5, color: '#475467' }}>3. 21 Pantheon Agent Swarm Protocol</Typography>
            <Typography variant="body2" sx={{ py: 0.5, color: '#475467' }}>4. Signal Bridge &amp; Simplex E2EE</Typography>
            <Typography variant="body2" sx={{ py: 0.5, color: '#475467' }}>5. Argon2id Hardware Vault Specs</Typography>
            <Typography variant="body2" sx={{ py: 0.5, color: '#475467' }}>6. Zoth OS VM Setup &amp; USB Booting</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, border: '1px solid #EAECF0' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>1. Sovereign Architecture Overview</Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Zoth Studio v2 is a local-first, zero-cloud-telemetry AI agent platform designed for power users and developers. It decouples monolithic workstation web apps into 28 standalone repositories while providing a unified Material-UI Vite React orchestration interface.
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>Quick Install Command</Typography>
            <Paper sx={{ p: 2, bg: '#101828', color: '#FDD663', fontFamily: 'monospace' }}>
              $ npx zoth-studio init
            </Paper>

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>2. Decoupled 28 Micro-Repo Guide</Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Each tool (such as <code>zoth-consensus</code>, <code>zoth-webgen</code>, <code>zoth-hexstrike</code>, or <code>zoth-vos-sandbox</code>) can be pulled independently using <code>npx zoth pull &lt;tool-name&gt;</code> or cloned directly from GitHub.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

    </Container>
  );
}
