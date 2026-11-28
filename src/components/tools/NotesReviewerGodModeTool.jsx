import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Unstable_Grid2 as Grid,
  Stack,
  TextField,
  Tabs,
  Tab,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DifferenceIcon from '@mui/icons-material/Difference';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import DownloadIcon from '@mui/icons-material/Download';
import SovereignBand from '../sovereign/SovereignBand.jsx';
import { SovereignEyebrow } from '../sovereign/typography.jsx';

const mono = '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace';
const HYPE_RE = /\b(revolutionary|game-?changer|world-?class|blazingly|cutting-?edge|next-?gen|groundbreaking|disruptive|10x|100x|ultra-)\b/i;

const DEFAULT_NOTES = `# Fleet Sync — 2026-11-28

## Decisions
- Ship #060 and #061 audits before noon; keep OBS live throughout.
- Defer the live :8094 restart until Neal explicitly approves.

## Action items
- [x] Rebuild showcase data and deploy to Netlify
- [ ] Sync the nexus-3d audit fix to /opt and chroot copies
- [ ] Draft #062 workstation plan

## Links
- [Whiteboard audits](https://zoth-whiteboard-audits.netlify.app)
- [Studio route](/workstations/notes-reviewer)

\`\`\`bash
curl -s http://127.0.0.1:8799/health | jq .agy_health
\`\`\`
`;

const DEFAULT_REVISION = `# Fleet Sync — 2026-11-28 (revised)

## Decisions
- Ship #060, #061, and #062 audits before noon; keep OBS live throughout.
- Defer the live :8094 restart until Neal explicitly approves.

## Action items
- [x] Rebuild showcase data and deploy to Netlify
- [x] Sync the nexus-3d audit fix to /opt and chroot copies
- [ ] Draft #063 tool scope

## Links
- [Whiteboard audits](https://zoth-whiteboard-audits.netlify.app)

\`\`\`bash
curl -s http://127.0.0.1:8799/health | jq .agy_health
\`\`\`
`;

function extractHeadings(md) {
  return md
    .split('\n')
    .map((line) => (/^(#{1,6})\s+(.+?)\s*$/.exec(line) || null))
    .filter(Boolean)
    .map((m) => ({ level: m[1].length, text: m[2].trim() }));
}

function extractTasks(md) {
  return md
    .split('\n')
    .map((line) => (/^\s*[-*]\s+\[( |x|X)\]\s+(.+?)\s*$/.exec(line) || null))
    .filter(Boolean)
    .map((m) => ({ done: m[1].toLowerCase() === 'x', text: m[2].trim() }));
}

function extractLinks(md) {
  const out = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let m;
  while ((m = re.exec(md)) !== null) out.push({ text: m[1].trim(), url: m[2].trim() });
  return out;
}

function countFencedBlocks(md) {
  const fences = (md.match(/```/g) || []).length;
  return { fences, balanced: fences % 2 === 0, blocks: Math.floor(fences / 2) };
}

function reviewNotes(md) {
  const words = md.split(/\s+/).filter(Boolean).length;
  const headings = extractHeadings(md);
  const tasks = extractTasks(md);
  const links = extractLinks(md);
  const fenced = countFencedBlocks(md);
  const hype = md.match(new RegExp(HYPE_RE.source, 'gi')) || [];
  const hasNext = /(next|todo|follow-?up|action item)/i.test(md);
  const checks = [
    { id: 'title', label: headings.some((h) => h.level === 1) ? 'Has H1 title' : 'Missing H1 title', pass: headings.some((h) => h.level === 1) },
    { id: 'tasks', label: tasks.length > 0 ? `${tasks.length} action items (${tasks.filter((t) => t.done).length} done)` : 'No action items', pass: tasks.length > 0 },
    { id: 'links', label: links.length > 0 ? `${links.length} links, all well-formed` : 'No links found', pass: links.every((l) => /^(https?:\/\/|\/)/.test(l.url)) },
    { id: 'fenced', label: fenced.balanced ? `${fenced.blocks} fenced blocks, balanced` : 'Unbalanced code fences', pass: fenced.balanced },
    { id: 'hype', label: hype.length === 0 ? 'Zero hype adjectives' : `Hype found: ${[...new Set(hype.map((h) => h.toLowerCase()))].join(', ')}`, pass: hype.length === 0 },
    { id: 'next', label: hasNext ? 'Next steps referenced' : 'No next steps referenced', pass: hasNext },
    { id: 'length', label: words >= 30 ? `${words} words` : `Only ${words} words (thin)`, pass: words >= 30 },
  ];
  const score = Math.round((checks.filter((c) => c.pass).length / checks.length) * 100);
  return { words, headings, tasks, links, fenced, checks, score };
}

function diffLines(a, b) {
  const A = a.split('\n');
  const B = b.split('\n');
  const m = A.length;
  const n = B.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const rows = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (A[i] === B[j]) { rows.push({ type: 'same', text: A[i] }); i += 1; j += 1; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { rows.push({ type: 'del', text: A[i] }); i += 1; }
    else { rows.push({ type: 'add', text: B[j] }); j += 1; }
  }
  while (i < m) { rows.push({ type: 'del', text: A[i] }); i += 1; }
  while (j < n) { rows.push({ type: 'add', text: B[j] }); j += 1; }
  return rows;
}

export default function NotesReviewerGodModeTool() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [sourceMd, setSourceMd] = useState(DEFAULT_NOTES);
  const [revisionMd, setRevisionMd] = useState(DEFAULT_REVISION);
  const [leftTab, setLeftTab] = useState(0);
  const [rightTab, setRightTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const review = useMemo(() => reviewNotes(sourceMd), [sourceMd]);
  const diff = useMemo(() => diffLines(sourceMd, revisionMd), [sourceMd, revisionMd]);
  const added = diff.filter((r) => r.type === 'add').length;
  const removed = diff.filter((r) => r.type === 'del').length;

  const exportBundle = useMemo(() => JSON.stringify(
    {
      generator: 'Notes Reviewer v1.0.0',
      synthesisScore: review.score,
      words: review.words,
      outline: review.headings,
      actionItems: review.tasks,
      links: review.links,
      checks: review.checks.map((c) => ({ id: c.id, label: c.label, pass: c.pass })),
      consensusDiff: { addedLines: added, removedLines: removed },
    },
    null,
    2,
  ), [review, added, removed]);

  const handleCopy = () => {
    navigator.clipboard?.writeText(exportBundle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([exportBundle], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes-review.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const cardSx = {
    p: 2.5, borderRadius: 2.5, height: '100%',
    border: `1px solid ${theme.palette.divider}`,
    bgcolor: isDark ? '#08080C' : '#FFFFFF',
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Paper
        elevation={0}
        sx={{
          p: 2.2, borderRadius: 2.5,
          bgcolor: isDark ? 'rgba(212,175,55,0.09)' : '#FEF9E7',
          border: `1.5px solid ${isDark ? 'rgba(212,175,55,0.4)' : '#F5E6AB'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
          <Chip
            icon={<DescriptionIcon sx={{ color: '#08080B !important', fontSize: 16 }} />}
            label="✦ 100% FREE & OPEN ACCESS"
            size="small"
            sx={{ bgcolor: '#D4AF37', color: '#08080B', fontWeight: 900, fontFamily: mono }}
          />
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            Markdown Knowledge Extraction, Synthesis Review & Consensus Diffs — 100% client-side, zero egress
          </Typography>
        </Box>
        <Chip
          icon={<FactCheckIcon sx={{ fontSize: '15px !important', color: '#10B981 !important' }} />}
          label={`Synthesis Score: ${review.score}/100`}
          size="small"
          sx={{ bgcolor: 'rgba(16,185,129,0.15)', color: '#34D399', fontFamily: mono, fontWeight: 800 }}
        />
      </Paper>

      <SovereignEyebrow accent="#38BDF8" right="Observe">
        {'notes-reviewer'}
      </SovereignEyebrow>
      <SovereignBand
        seed={'notes-reviewer'}
        eyebrow={'Observe'}
        caption={'Notes Reviewer'}
        label={'Notes Reviewer — Zoth sovereign visualisation'}
      />

      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <Paper sx={cardSx}>
            <Tabs value={leftTab} onChange={(_, v) => setLeftTab(v)} sx={{ mb: 2, minHeight: 36 }}>
              <Tab label="Source Notes (A)" sx={{ fontSize: '0.76rem', fontWeight: 800, minHeight: 36 }} />
              <Tab label="Revision (B)" sx={{ fontSize: '0.76rem', fontWeight: 800, minHeight: 36 }} />
            </Tabs>
            <TextField
              fullWidth
              multiline
              rows={16}
              value={leftTab === 0 ? sourceMd : revisionMd}
              onChange={(e) => (leftTab === 0 ? setSourceMd(e.target.value) : setRevisionMd(e.target.value))}
              inputProps={{ 'aria-label': leftTab === 0 ? 'Source markdown notes' : 'Revision markdown notes', spellCheck: false }}
              sx={{ '& .MuiInputBase-input': { fontFamily: mono, fontSize: '0.8rem', lineHeight: 1.6 } }}
            />
            <Typography variant="caption" sx={{ fontFamily: mono, color: 'text.secondary', display: 'block', mt: 1 }}>
              {review.words} words · {review.headings.length} headings · {review.tasks.length} action items · {review.links.length} links
            </Typography>
          </Paper>
        </Grid>

        <Grid xs={12} md={6}>
          <Paper sx={{ ...cardSx, display: 'flex', flexDirection: 'column' }}>
            <Tabs value={rightTab} onChange={(_, v) => setRightTab(v)} sx={{ mb: 2, minHeight: 36 }}>
              <Tab label={`Extract (${review.headings.length + review.tasks.length + review.links.length})`} sx={{ fontSize: '0.76rem', fontWeight: 800, minHeight: 36 }} />
              <Tab label={`Review (${review.score})`} sx={{ fontSize: '0.76rem', fontWeight: 800, minHeight: 36 }} />
              <Tab label={`Diff (+${added}/-${removed})`} sx={{ fontSize: '0.76rem', fontWeight: 800, minHeight: 36 }} />
              <Tab label="JSON" sx={{ fontSize: '0.76rem', fontWeight: 800, minHeight: 36 }} />
            </Tabs>

            {rightTab === 0 && (
              <Stack spacing={1.5} sx={{ flexGrow: 1, maxHeight: 380, overflowY: 'auto', pr: 0.5 }}>
                <Typography variant="caption" sx={{ fontFamily: mono, fontWeight: 800, color: '#D4AF37' }}>OUTLINE</Typography>
                {review.headings.length === 0 && <Typography variant="body2">No headings found.</Typography>}
                {review.headings.map((h, idx) => (
                  <Typography key={idx} variant="body2" sx={{ pl: (h.level - 1) * 2, fontWeight: h.level <= 2 ? 800 : 400, fontSize: '0.84rem' }}>
                    {'#'.repeat(h.level)} {h.text}
                  </Typography>
                ))}
                <Typography variant="caption" sx={{ fontFamily: mono, fontWeight: 800, color: '#D4AF37', mt: 1 }}>ACTION ITEMS</Typography>
                {review.tasks.length === 0 && <Typography variant="body2">No check-box tasks found.</Typography>}
                {review.tasks.map((t, idx) => (
                  <Typography key={idx} variant="body2" sx={{ fontSize: '0.84rem' }}>
                    {t.done ? '✓' : '○'} {t.text}
                  </Typography>
                ))}
                <Typography variant="caption" sx={{ fontFamily: mono, fontWeight: 800, color: '#D4AF37', mt: 1 }}>LINKS</Typography>
                {review.links.length === 0 && <Typography variant="body2">No markdown links found.</Typography>}
                {review.links.map((l, idx) => (
                  <Typography key={idx} variant="body2" sx={{ fontSize: '0.84rem', wordBreak: 'break-all' }}>
                    {l.text} → {l.url}
                  </Typography>
                ))}
              </Stack>
            )}

            {rightTab === 1 && (
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                {review.checks.map((c) => (
                  <Chip
                    key={c.id}
                    label={`${c.pass ? '✓' : '⚠'} ${c.label}`}
                    size="small"
                    sx={{
                      justifyContent: 'flex-start', fontFamily: mono, fontSize: '0.7rem', fontWeight: 700,
                      bgcolor: c.pass ? 'rgba(16,185,129,0.14)' : 'rgba(245,158,11,0.15)',
                      color: c.pass ? '#34D399' : '#FBBF24',
                    }}
                  />
                ))}
              </Stack>
            )}

            {rightTab === 2 && (
              <Box
                component="pre"
                sx={{
                  m: 0, p: 2, borderRadius: 2, flexGrow: 1, maxHeight: 380, overflowY: 'auto',
                  bgcolor: isDark ? '#050508' : '#F8FAFC', fontFamily: mono, fontSize: '0.74rem',
                  whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                }}
              >
                {diff.map((r, idx) => (
                  <Box
                    key={idx}
                    component="span"
                    sx={{
                      display: 'block',
                      color: r.type === 'add' ? '#34D399' : r.type === 'del' ? '#F87171' : 'text.secondary',
                      bgcolor: r.type === 'add' ? 'rgba(16,185,129,0.08)' : r.type === 'del' ? 'rgba(239,68,68,0.08)' : 'transparent',
                    }}
                  >
                    {r.type === 'add' ? '+ ' : r.type === 'del' ? '− ' : '  '}{r.text}
                  </Box>
                ))}
              </Box>
            )}

            {rightTab === 3 && (
              <Box
                component="pre"
                sx={{
                  m: 0, p: 2, borderRadius: 2, flexGrow: 1, maxHeight: 380, overflowY: 'auto',
                  bgcolor: '#050508', color: '#F5E6AB', fontFamily: mono, fontSize: '0.73rem',
                }}
              >
                {exportBundle}
              </Box>
            )}

            <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
              <Button
                fullWidth
                variant="contained"
                startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
                onClick={handleCopy}
                sx={{ bgcolor: '#D4AF37', color: '#08080B', fontWeight: 800, fontFamily: mono, fontSize: '0.75rem' }}
              >
                {copied ? 'Copied Review Bundle!' : 'Copy Review Bundle'}
              </Button>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{ borderColor: '#D4AF37', color: '#D4AF37', fontWeight: 800, fontFamily: mono, fontSize: '0.75rem' }}
              >
                JSON
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
        <DifferenceIcon sx={{ fontSize: 16, color: '#D4AF37' }} />
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Paste fleet notes on the left — outline, action items, links, a 7-point synthesis review, and an A↔B consensus diff appear live. Nothing leaves your browser.
        </Typography>
      </Box>
    </Box>
  );
}
