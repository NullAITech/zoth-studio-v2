import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Paper, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import RouterIcon from '@mui/icons-material/Router';

export default function BridgesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      
      <Box sx={{ mb: 4 }}>
        <Chip label="SOVEREIGN BRIDGES & IPC" size="small" sx={{ bg: '#FEF9E7', color: '#B8860B', border: '1px solid #F0E1A8', fontWeight: 700, mb: 1 }} />
        <Typography variant="h3" sx={{ mb: 1 }}>Signal Bridge &amp; Encrypted IPC</Typography>
        <Typography variant="body1" color="text.secondary">Zero-knowledge local bus communication, Simplex P2P channels, and Argon2id secret vault.</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 40, height: 40, borderRadius: 2, bg: '#FEF9E7', color: '#B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <RouterIcon />
                </Box>
                <Typography variant="h5">Signal Bridge Websocket Bus</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                High-throughput local event stream connecting subagents, web visualizers, and backend RPC daemons over loopback.
              </Typography>

              <Paper sx={{ p: 2, bg: '#101828', color: '#81C995', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                <div>ws://127.0.0.1:8788/v1/signal-stream</div>
                <div style={{ color: '#FDD663', marginTop: 8 }}>[CONNECTED] 21 Peers listening on local bus</div>
              </Paper>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 40, height: 40, borderRadius: 2, bg: '#FEF9E7', color: '#B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LockIcon />
                </Box>
                <Typography variant="h5">Argon2id Hardware Vault</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Keyed passphrase derivation, encrypted API token keychain, and zero cloud telemetry secret storage.
              </Typography>

              <Paper sx={{ p: 2, bg: '#101828', color: '#FDD663', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                <div>[VAULT SECURE] Argon2id Key derivation t=3, m=65536</div>
                <div style={{ color: '#81C995', marginTop: 8 }}>✔ Zero plain-text credentials in memory</div>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container>
  );
}
