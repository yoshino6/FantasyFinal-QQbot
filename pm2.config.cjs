module.exports = {
  apps: [{
    name: 'fantasyfinal-qqbot',
    namespace: 'alemonx',
    cwd: __dirname,
    script: './index.js',
    interpreter: process.execPath,
    autorestart: true,
    min_uptime: '10s',
    max_restarts: 10,
    restart_delay: 3000,
    env: {
      NODE_ENV: 'production',
      FANTASYFINAL_CORE_URL: 'http://127.0.0.1:17200'
    }
  }]
};
