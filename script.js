// クールタイム秒数（例：60秒）
const COOLDOWN_TIME = 60;

// プレイヤーの人数（最大8人）
const PLAYER_COUNT = 8;

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const playerContainer = document.getElementById("playerContainer");

  // ボタンが押されたらプレイヤー枠を生成
  startButton.addEventListener("click", () => {
    playerContainer.innerHTML = ""; // 既存の中身をリセット

    for (let i = 1; i <= PLAYER_COUNT; i++) {
      const box = document.createElement("div");
      box.className = "player-box";

      const title = document.createElement("h3");
      title.textContent = `プレイヤー${i}`;

      const button = document.createElement("button");
      button.textContent = "スキル使用";
      button.disabl
