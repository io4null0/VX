// script.js
document.addEventListener('keydown', () => {
  const hackingScreen = document.getElementById('hacking-screen');
  
  // ランダムなコード行を生成
  const codeLines = [
    "let accessGranted = true;",
    "fetch('/admin/data');",
    "const token = generateToken();",
    "if (accessLevel > 5) {",
    "system.initialize();",
    "while (attempt < maxAttempts) {",
    "processData(inputData);",
    "encryptionKey = generateKey();",
    "database.connect('root');",
    "console.log('Accessing system...');"
  ];
  
  // ランダムにコードを選択
  const randomLine = codeLines[Math.floor(Math.random() * codeLines.length)];
  
  // 新しいコード行の要素を作成
  const codeLineElement = document.createElement('div');
  codeLineElement.classList.add('code-line');
  codeLineElement.textContent = randomLine;
  
  // 画面に追加
  hackingScreen.appendChild(codeLineElement);
  
  // スクロールを最下部に
  hackingScreen.scrollTop = hackingScreen.scrollHeight;
  
  // 画面が一定の行数を超えたら最初の行を削除
  if (hackingScreen.childElementCount > 50) {
    hackingScreen.removeChild(hackingScreen.firstChild);
  }
});
