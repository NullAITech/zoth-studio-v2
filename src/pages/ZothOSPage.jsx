import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Button, Paper } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import DownloadIcon from '@mui/icons-material/Download';

export default function ZothOSPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      
      <Box sx={{ mb: 4 }}>
        <Chip label="SOVEREIGN AGENT OS" size="small" sx={{ bg: '#FEF9E7', color: '#B8860B', border: '1px solid #F0E1A8', fontWeight: 700, mb: 1 }} />
        <Typography variant="h3" sx={{ mb: 1 }}>Zoth OS &amp; Virtual Machine Sandbox</Typography>
        <Typography variant="body1" color="text.secondary">Dedicated bootable Linux image and QEMU/KVM agent environment built for sovereign AI execution.</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 2 }}>Zoth OS Hypervisor Specs</Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Give your AI agents their own isolated Linux machine. Runs directly off a bootable USB drive or inside lightweight KVM/QEMU hypervisors.
              </Typography>

              <ul>
                <li>Dedicated virtual filesystem (VFS) with zero host disk mutation.</li>
                <li>Local encrypted SQLite memory daemon &amp; IPC peer bus.</li>
                <li>Unconstrained terminal execution for autonomous agents.</li>
                <li>Pre-configured Ollama, Nous Hermes, and Antigravity connectors.</li>
              </ul>

              <Button variant="contained" color="primary" startIcon={<DownloadIcon />} sx={{ mt: 2 }}>
                Download Zoth OS ISO (.iso)
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, bg: '#101828', color: '#81C995', fontFamily: 'monospace', height: '100%', boxSizing: 'border-box' }}>
            <Typography variant="subtitle2" sx={{ color: '#9AA0A6', mb: 2 }}># QEMU / KVM Quick Launch Command</Typography>
            <div>$ qemu-system-x86_64 -enable-kvm \</div>
            <div style={{ paddingLeft: 16 }}>-m 4096 -smp 4 \</div>
            <div style={{ paddingLeft: 16 }}>-hda zoth-agent-os.qcow2 \</div>
            <div style={{ paddingLeft: 16 }}>-net user,hostfwd=tcp::8788-:8788 \</div>
            <div style={{ paddingLeft: 16 }}>-display nographic</div>
            
            <div style={{ color: '#FDD663', marginTop: 24 }}>
              [ZOTH OS BOOT COMPLETE]<br />
              Sovereign Agent Daemon listening on 127.0.0.1:8788
            </div>
          </Paper>
        </Grid>
      </Grid>

    </Container>
  );
}
