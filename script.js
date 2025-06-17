console.log('RedStone CT App loaded');

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('startButton');
  const display = document.getElementById('cooldownDisplay');

  let timer = null;
  let remaining = 0;

  button.addEventListener('click', () => {
    if (timer) clearInterval(timer); // 前のタイマーをリセット

    remaining = 30;
    display.textContent = `残り時間: ${remaining}秒`;

    timer = setInterval(() => {
      remaining--;
      display.textContent = `残り時間: ${remaining}秒`;

      if (remaining <= 0) {
        clearInterval(timer);
        display.textContent = "クールタイム終了！";
      }
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const playerContainer = document.getElementById('playerContainer');
  const playerCount = 8;
  const cooldownSeconds = 30;

  for (let i = 1; i <= playerCount; i++) {
    // プレイヤー用要素を作成
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');

    const name = document.createElement('h2');
    name.textContent = `プレイヤー${i}`;

    const button = document.createElement('button');
    button.textContent = 'クールタイム開始';

    const display = document.createElement('p');
    display.textContent = '残り時間: 0秒';

    // タイマー処理
    let timer = null;
    let remaining = 0;

    button.addEventListener('click', () => {
      if (timer) clearInterval(timer);

      remaining = cooldownSeconds;
      display.textContent = `残り時間: ${remaining}秒`;

      timer = setInterval(() => {
        remaining--;
        display.textContent = `残り時間: ${remaining}秒`;

        if (remaining <= 0) {
          clearInterval(timer);
          display.textContent = 'クールタイム終了！';
        }
      }, 1000);
    });

    // 要素を追加
    playerDiv.appendChild(name);
    playerDiv.appendChild(button);
    playerDiv.appendChild(display);
    playerContainer.appendChild(playerDiv);
  }
});
