const http = require('http');
const fs = require('fs');

function parseSSE(text) {
  const lines = text.split('\n');
  let data = '';
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      data += line.slice(6);
    }
  }
  return data ? JSON.parse(data) : null;
}

function post(data, sessionId, callback) {
  const body = JSON.stringify(data);
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/event-stream',
    'Content-Length': Buffer.byteLength(body)
  };
  if (sessionId) {
    headers['Mcp-Session-Id'] = sessionId;
  }
  const req = http.request('http://127.0.0.1:3845/mcp', {
    method: 'POST',
    headers: headers
  }, (res) => {
    let raw = '';
    const sid = res.headers['mcp-session-id'] || sessionId;
    res.on('data', c => raw += c);
    res.on('end', () => {
      try {
        const json = parseSSE(raw) || JSON.parse(raw);
        callback(null, json, sid);
      } catch (e) {
        callback(e, raw, sid);
      }
    });
  });
  req.on('error', callback);
  req.write(body);
  req.end();
}

function callTool(sid, toolName, args, callback) {
  const msg = {
    jsonrpc: '2.0',
    id: Math.floor(Math.random() * 100000),
    method: 'tools/call',
    params: {
      name: toolName,
      arguments: args
    }
  };
  post(msg, sid, callback);
}

const initMsg = {
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'antigravity', version: '1.0.0' }
  }
};

post(initMsg, null, async (err, res, sid) => {
  if (err) return console.error('Init error:', err);
  console.log('Init success! SID:', sid);

  const sections = [
    { id: '1249:77950', name: 'sec1_hero' },
    { id: '1250:79066', name: 'sec2_cta_cards' },
    { id: '1250:79262', name: 'sec3_form' },
    { id: '1284:79446', name: 'sec4_third_party' }
  ];

  for (const s of sections) {
    await new Promise((resolve) => {
      console.log(`Fetching section: ${s.name} (${s.id})...`);
      callTool(sid, 'get_design_context', { nodeId: s.id }, (err2, res2) => {
        if (err2) {
          console.error(`Error for ${s.name}:`, err2);
        } else {
          fs.writeFileSync(`f:/PROJECT-SOFTWARE/OanNe/scratch/register_${s.name}.json`, JSON.stringify(res2, null, 2));
          console.log(`Saved scratch/register_${s.name}.json!`);
        }
        resolve();
      });
    });
  }

  console.log('All sections fetched successfully!');
});
