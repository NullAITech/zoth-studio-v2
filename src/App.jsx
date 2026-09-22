import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SwarmPage from './pages/SwarmPage';
import BridgesPage from './pages/BridgesPage';
import ToolsPage from './pages/ToolsPage';
import ConsensusPage from './pages/ConsensusPage';
import WebGenPage from './pages/WebGenPage';
import HexStrikePage from './pages/HexStrikePage';
import ZothOSPage from './pages/ZothOSPage';
import MemoryPage from './pages/MemoryPage';
import DocsPage from './pages/DocsPage';

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/swarm" element={<SwarmPage />} />
          <Route path="/bridges" element={<BridgesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/memory" element={<MemoryPage />} />
          <Route path="/consensus" element={<ConsensusPage />} />
          <Route path="/webgen" element={<WebGenPage />} />
          <Route path="/hexstrike" element={<HexStrikePage />} />
          <Route path="/zoth-os" element={<ZothOSPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </Box>
      <Box component="footer" sx={{ py: 4, px: 2, borderTop: '1px solid #EAECF0', textAlign: 'center', color: '#667085', fontSize: '0.88rem' }}>
        Zoth Studio v2 — Sovereign AI Agent OS &amp; 28 Micro-Repo Ecosystem • NullAI Tech
      </Box>
    </Box>
  );
}
