// script.js
document.addEventListener('keydown', () => {
  const hackingScreen = document.getElementById('hacking-screen');

  // リアルなコード行の配列
  const codeLines = [
    "C:\\Users\\User> Initializing system diagnostics...",
    ">>> Connecting to database at 192.168.1.1...",
    ">>> User authentication successful for admin",
    ">>> Running sudo command: access_grant -all",
    ">>> Fetching encrypted data...",
    ">>> Decoding binary data stream...",
    ">>> Data packet received from 192.168.1.10",
    ">>> Executing command: chmod 777 /root/secure_data",
    ">>> systemctl restart networking.service",
    ">>> User 'root' granted superuser privileges",
    ">>> Loading critical kernel modules...",
    ">>> Starting memory dump...",
    ">>> Analyzing network traffic on port 443...",
    ">>> SSH connection established to remote server.",
    ">>> Running vulnerability scan...",
    ">>> [ALERT] Suspicious activity detected!",
    ">>> Writing logs to /var/log/syslog",
    ">>> Processing encrypted block data...",
    ">>> Decrypting session keys...",
    ">>> Attempting brute-force on port 22...",
    ">>> File transfer: 80% complete...",
    ">>> Injecting code into active process...",
    ">>> Closing all untrusted connections.",
    ">>> Success! Data extraction completed.",
  ];

  // ランダムにコード行を選択
  const randomLine = codeLines[Math.floor(Math.random() * codeLines.length)];

  // 新しいコード行の要素を作成
  const codeLineElement = document.createElement('div');
  codeLineElement.classList.add('code-line');
  codeLineElement.textContent = randomLine;

  // 画面に追加
  hackingScreen.appendChild(codeLineElement);

  // スクロールを最下部に
  hackingScreen.scrollTop = hackingScreen.scrollHeight;

  // 行数制限を追加して一定の行数を超えたら削除
  if (hackingScreen.childElementCount > 50) {
    hackingScreen.removeChild(hackingScreen.firstChild);
  }
});
