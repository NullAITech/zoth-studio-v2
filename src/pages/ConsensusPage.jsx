import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Paper, Button } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';

export default function ConsensusPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      
      <Box sx={{ mb: 4 }}>
        <Chip label="SOCRATIC DEBATE ARENA" size="small" sx={{ bg: '#FEF9E7', color: '#B8860B', border: '1px solid #F0E1A8', fontWeight: 700, mb: 1 }} />
        <Typography variant="h3" sx={{ mb: 1 }}>Consensus Battle Arena</Typography>
        <Typography variant="body1" color="text.secondary">Tri-agent Socratic argument matrix, AST code diff inspection, and dialectic synthesis.</Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contender Agents */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Chip label="CONTENDER A" size="small" color="primary" sx={{ mb: 1 }} />
              <Typography variant="h6">Google Antigravity</Typography>
              <Typography variant="body2" color="text.secondary">Focus: Zero-telemetry precision, strict type safety, and optimal performance.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Chip label="CONTENDER B" size="small" color="secondary" sx={{ mb: 1 }} />
              <Typography variant="h6">xAI Grok Beta</Typography>
              <Typography variant="body2" color="text.secondary">Focus: Dialectic synthesis, deep architectural refactoring, and edge cases.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Chip label="CONTENDER C" size="small" sx={{ bg: '#E0F2FE', color: '#0369A1', mb: 1 }} />
              <Typography variant="h6">Nous Hermes 3</Typography>
              <Typography variant="body2" color="text.secondary">Focus: Autonomous tool invocation, schema validation, and execution safety.</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Live AST Diff Console */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, bg: '#101828', color: '#FDD663', fontFamily: 'monospace' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle2" sx={{ color: '#81C995' }}>[AST DIFF INSPECTOR & SOCRATIC VERDICT]</Typography>
              <Button size="small" variant="contained" color="primary" startIcon={<GavelIcon />}>Synthesize Consensus</Button>
            </Box>
            <div style={{ color: '#FFFFFF' }}>+ function calculateSwarmConsensus(nodes) &#123;</div>
            <div style={{ color: '#81C995', paddingLeft: 16 }}>return nodes.reduce((acc, n) =&gt; acc &amp;&amp; n.verified, true);</div>
            <div style={{ color: '#FFFFFF' }}>&#125;</div>
            <div style={{ color: '#9AA0A6', marginTop: 12 }}>✔ 3/3 Agents agreed on SHA-256 AST consensus seal.</div>
          </Paper>
        </Grid>
      </Grid>

    </Container>
  );
}
