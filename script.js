document.addEventListener("DOMContentLoaded", () => {
  const playerContainer = document.getElementById("playerContainer");

  // プレイヤー8人分のタイマーを作成
  for (let i = 1; i <= 8; i++) {
    const playerDiv = document.createElement("div");
    playerDiv.className = "player";

    // プレイヤー名
    const name = document.createElement("span");
    name.textContent = `プレイヤー${i} `;

    // ボタン
    const button = document.createElement("button");
    button.textContent = "開始";
    button.dataset.index = i;

    // タイマー表示
    const timer = document.createElement("span");
    timer.textContent = " 残り: 0秒";
    timer.id = `timer-${i}`;

    // イベント：ボタンクリックで30秒タイマー開始
    button.addEventListener("click", () => {
      let remaining = 30;
      timer.textContent = ` 残り: ${remaining}秒`;

      const interval = setInterval(() => {
        remaining--;
        timer.textContent = ` 残り: ${remaining}秒`;

        if (remaining <= 0) {
          clearInterval(interval);
          timer.textContent = " 残り: 0秒";
        }
      }, 1000);
    });

    // まとめて追加
    playerDiv.appendChild(name);
    playerDiv.appendChild(button);
    playerDiv.appendChild(timer);
    playerContainer.appendChild(playerDiv);
  }
});
