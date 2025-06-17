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

    // タイマー表示（12秒用）
    const timer = document.createElement("span");
    timer.textContent = " 残り: 0秒";
    timer.id = `timer-${i}`;

    // クールタイム表示（300秒用）
    const cooldownTimer = document.createElement("span");
    cooldownTimer.textContent = "｜クールタイム残り: 0秒";
    cooldownTimer.id = `cooldown-${i}`;

    // イベント：ボタンクリックで12秒 → 300秒
    button.addEventListener("click", () => {
      let remaining = 12;
      timer.textContent = ` 残り: ${remaining}秒`;
      cooldownTimer.textContent = "｜クールタイム残り: -";

      const interval = setInterval(() => {
        remaining--;
        timer.textContent = ` 残り: ${remaining}秒`;

        if (remaining <= 0) {
          clearInterval(interval);
          timer.textContent = " 残り: 0秒";

          // ▼ クールタイム開始
          let cooldownRemaining = 300;
          cooldownTimer.textContent = `｜クールタイム残り: ${cooldownRemaining}秒`;

          const cooldownInterval = setInterval(() => {
            cooldownRemaining--;
            cooldownTimer.textContent = `｜クールタイム残り: ${cooldownRemaining}秒`;

            if (cooldownRemaining <= 0) {
              clearInterval(cooldownInterval);
              cooldownTimer.textContent = "｜クールタイム終了";
            }
          }, 1000);
        }
      }, 1000);
    });

    // DOMに追加
    playerDiv.appendChild(name);
    playerDiv.appendChild(button);
    playerDiv.appendChild(timer);
    playerDiv.appendChild(cooldownTimer);
    playerContainer.appendChild(playerDiv);
  }
});
