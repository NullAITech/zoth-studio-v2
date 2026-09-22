import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Chip, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const allTools = [
  { name: 'zoth-consensus', cat: 'Swarm & Reasoning', desc: 'Socratic debate council and AST diff inspection.', pull: 'npx zoth pull consensus' },
  { name: 'zoth-webgen', cat: 'Autonomous Web', desc: 'Site foundry, component matrix, and framework exporter.', pull: 'npx zoth pull webgen' },
  { name: 'zoth-hexstrike', cat: 'Security & Recon', desc: 'Autonomous penetration suite and CVE lab.', pull: 'npx zoth pull hexstrike' },
  { name: 'zoth-tool-nexus', cat: 'Core Platform', desc: 'Central tool registry and schema contracts.', pull: 'npx zoth pull tool-nexus' },
  { name: 'zoth-brand', cat: 'Design & Tokens', desc: 'Hermetic seals, Golden Z emblems, and token specs.', pull: 'npx zoth pull brand' },
  { name: 'zoth-swarm', cat: 'Swarm & Reasoning', desc: '21 Pantheon agent orchestrator and task bus.', pull: 'npx zoth pull swarm' },
  { name: 'zoth-vos-sandbox', cat: 'WASM & Compute', desc: 'In-browser WASM WebContainer OS.', pull: 'npx zoth pull vos-sandbox' },
  { name: 'zoth-netrunner-memory', cat: 'Core Platform', desc: 'Biomorphic STDP memory vector store.', pull: 'npx zoth pull memory' },
];

export default function ToolsPage() {
  const [search, setSearch] = useState('');

  const filtered = allTools.filter(t => t.name.includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      
      <Box sx={{ mb: 4 }}>
        <Chip label="28 MICRO-REPOSITORIES" size="small" sx={{ bg: '#FEF9E7', color: '#B8860B', border: '1px solid #F0E1A8', fontWeight: 700, mb: 1 }} />
        <Typography variant="h3" sx={{ mb: 1 }}>Tool Nexus Catalog</Typography>
        <Typography variant="body1" color="text.secondary">Discover, pull, and execute standalone sovereign tools across your local agent workspace.</Typography>
      </Box>

      <TextField
        fullWidth
        placeholder="Search 28 micro-tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#B8860B' }} />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={3}>
        {filtered.map((tool) => (
          <Grid item xs={12} sm={6} md={4} key={tool.name}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent>
                <Chip label={tool.cat} size="small" sx={{ bg: '#F9FAFB', color: '#475467', mb: 1.5 }} />
                <Typography variant="h6" sx={{ color: '#101828', mb: 1 }}>{tool.name}</Typography>
                <Typography variant="body2" color="text.secondary">{tool.desc}</Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between', borderTop: '1px solid #EAECF0' }}>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#B8860B', fontWeight: 700 }}>
                  {tool.pull}
                </Typography>
                <Button size="small" variant="contained" color="primary">Pull</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
