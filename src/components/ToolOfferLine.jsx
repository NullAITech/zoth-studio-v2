import React, { useState } from 'react';
import { Box, Chip, Button, Tooltip } from '@mui/material';

const mono = '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace';
const STRIPE_COFFEE_URL = 'https://buy.stripe.com/3cIfZg27PdKo2D64Ocfw40X';
const SOLANA_WALLET = 'GG2eQbVh8ut1BK6j1A2tz7pSySdLpD38BgyEhGcxdXoK';

/**
 * 100% Open-Access badge + "Buy Us a Coffee" (Stripe) + Solana Wallet Tip bar.
 */
export default function ToolOfferLine({ tool, isDark }) {
  const [copiedSol, setCopiedSol] = useState(false);

  const color = isDark ? '#F5E6AB' : '#8A6508';
  const wash = isDark ? 'rgba(61,255,168,0.12)' : '#ECFDF5';
  const border = isDark ? 'rgba(61,255,168,0.38)' : 'rgba(16,185,129,0.35)';

  const handleCopySolana = (e) => {
    e.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(SOLANA_WALLET);
      setCopiedSol(true);
      setTimeout(() => setCopiedSol(false), 2200);
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center', mt: 1.5 }}>
      <Chip
        label="✦ 100% Free & Open Access"
        size="small"
        sx={{
          fontFamily: mono,
          fontWeight: 800,
          letterSpacing: '0.04em',
          bgcolor: wash,
          color: isDark ? '#3dffa8' : '#047857',
          border: `1px solid ${border}`,
          height: 26,
        }}
      />
      <Button
        size="small"
        component="a"
        href={STRIPE_COFFEE_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontFamily: mono,
          fontWeight: 800,
          fontSize: '0.72rem',
          letterSpacing: '0.03em',
          bgcolor: isDark ? 'rgba(212,175,55,0.16)' : '#FEF3C7',
          color: isDark ? '#F5E6AB' : '#92400E',
          border: `1px solid ${isDark ? 'rgba(212,175,55,0.4)' : '#F59E0B'}`,
          textTransform: 'none',
          px: 1.2,
          py: 0.25,
          borderRadius: 1.5,
          '&:hover': {
            bgcolor: isDark ? 'rgba(212,175,55,0.28)' : '#FDE68A',
          },
        }}
      >
        ☕ Buy Us a Coffee (Stripe)
      </Button>
      <Tooltip title={`Click to copy Solana wallet: ${SOLANA_WALLET}`}>
        <Button
          size="small"
          onClick={handleCopySolana}
          href={`solana:${SOLANA_WALLET}`}
          sx={{
            fontFamily: mono,
            fontWeight: 800,
            fontSize: '0.72rem',
            letterSpacing: '0.03em',
            bgcolor: isDark ? 'rgba(20,241,149,0.12)' : '#ECFDF5',
            color: isDark ? '#14F195' : '#047857',
            border: `1px solid ${isDark ? 'rgba(20,241,149,0.38)' : '#10B981'}`,
            textTransform: 'none',
            px: 1.2,
            py: 0.25,
            borderRadius: 1.5,
            '&:hover': {
              bgcolor: isDark ? 'rgba(20,241,149,0.22)' : '#D1FAE5',
            },
          }}
        >
          {copiedSol ? '✓ Copied GG2e...dXoK!' : '◎ Solana Tip (GG2e...dXoK)'}
        </Button>
      </Tooltip>
      {tool?.liveUrl && !tool.liveUrl.includes('github.com') && (
        <Button
          size="small"
          href={tool.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: mono,
            fontWeight: 750,
            fontSize: '0.72rem',
            letterSpacing: '0.04em',
            color,
            textTransform: 'none',
            minWidth: 0,
            px: 0.8,
            py: 0.2,
          }}
        >
          Live app ↗
        </Button>
      )}
    </Box>
  );
}
