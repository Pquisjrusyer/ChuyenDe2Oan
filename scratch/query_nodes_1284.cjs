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

post(initMsg, null, (err, res, sid) => {
  if (err) return console.error('Init error:', err);
  console.log('Init success! SID:', sid);

  const callMsg = {
    jsonrpc: '2.0',
    id: 2,
    method: 'tools/call',
    params: {
      name: 'get_design_context',
      arguments: {
        nodeId: '1284:79484'
      }
    }
  };

  post(callMsg, sid, (err2, res2) => {
    if (err2) return console.error('Call error:', err2);
    fs.writeFileSync('f:/PROJECT-SOFTWARE/OanNe/scratch/node_1284_79484.json', JSON.stringify(res2, null, 2));
    console.log('Saved scratch/node_1284_79484.json!');
  });
});
