import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Paper, Button } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

export default function HexStrikePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      
      <Box sx={{ mb: 4 }}>
        <Chip label="AUTONOMOUS PENETRATION SUITE" size="small" sx={{ bg: '#FEF9E7', color: '#B8860B', border: '1px solid #F0E1A8', fontWeight: 700, mb: 1 }} />
        <Typography variant="h3" sx={{ mb: 1 }}>HexStrike Security Suite</Typography>
        <Typography variant="body1" color="text.secondary">Vulnerability assessment, CVE matrix, exploit payload builder, and port audit ledgers.</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, border: '1px solid #EAECF0' }}>
            <Typography variant="body2" color="text.secondary">CVE Telemetry Index</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#D92D20' }}>14 Critical</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, border: '1px solid #EAECF0' }}>
            <Typography variant="body2" color="text.secondary">Audited Ports</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#101828' }}>65,535</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, border: '1px solid #EAECF0' }}>
            <Typography variant="body2" color="text.secondary">Active Payload Lab</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#B8860B' }}>Ready</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, border: '1px solid #EAECF0' }}>
            <Typography variant="body2" color="text.secondary">Sanitization Status</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#12B76A' }}>Secured</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, mt: 4, bg: '#101828', color: '#FDD663', fontFamily: 'monospace' }}>
        <Typography variant="subtitle2" sx={{ color: '#81C995', mb: 1 }}>[HEXSTRIKE LIVE PENETRATION CONSOLE]</Typography>
        <div>$ hexstrike audit --target 127.0.0.1 --scan-depth extreme</div>
        <div style={{ color: '#81C995', marginTop: 8 }}>[+] Zero unauthenticated RPC endpoints detected.</div>
        <div style={{ color: '#81C995' }}>[+] Argon2id secret vault memory lock: VERIFIED SECURE.</div>
      </Paper>

    </Container>
  );
}
