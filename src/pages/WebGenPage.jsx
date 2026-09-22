import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Button, Paper } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function WebGenPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      
      <Box sx={{ mb: 4 }}>
        <Chip label="AUTONOMOUS SITE FOUNDRY" size="small" sx={{ bg: '#FEF9E7', color: '#B8860B', border: '1px solid #F0E1A8', fontWeight: 700, mb: 1 }} />
        <Typography variant="h3" sx={{ mb: 1 }}>Autonomous WebGen Foundry</Typography>
        <Typography variant="body1" color="text.secondary">Multi-framework layout compiler, component spec matrix, and dynamic export engine.</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '2px dashed #EAECF0' }}>
            <AutoAwesomeIcon sx={{ fontSize: 48, color: '#D4AF37', mb: 2 }} />
            <Typography variant="h5" sx={{ mb: 1 }}>Interactive Layout Sandbox</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Select a component template or prompt to generate responsive HTML/React JSX code.</Typography>
            <Button variant="contained" color="primary">Generate Component Spec</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>Supported Framework Exporters</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Chip label="React + Vite + Tailwind" color="primary" />
                <Chip label="Astro Minimalist MPA" />
                <Chip label="Vue 3 Sovereign Component" />
                <Chip label="Pure HTML5 / Material-UI" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Container>
  );
}
