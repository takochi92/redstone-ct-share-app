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
