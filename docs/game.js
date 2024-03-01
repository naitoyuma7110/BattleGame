// キャラクターをインスタンス化する

/* 
Friendクラス
--args--
  名前
  体力
  攻撃力
  素早さ
  薬草数
  薬草の回復力
*/

let friend1 = new Friend("いしづか", 240, 25, 13, 5, 100);
let friend2 = new Friend("ないとう", 1400, 120, 12, 18, 700);
let friend3 = new Friend("こさの(毒)", 5, 1, 1, 0, 0);
let enemy1 = new MyMelody(
	"マイメロディ",
	9999,
	999,
	20,
	"./image/list-mymelody.png"
); // 敵
let enemy2 = new Pompom(
	"ポムポムプリン",
	280,
	70,
	6,
	"./image/list-pompompurin.png"
); // 敵
let enemy3 = new Child("こども", 400, 100, 1, "./image/IMG_3517.jpg"); // 敵

// キャラクター配列をつくる
let characters = [];
characters.push(friend1);
characters.push(friend2);
characters.push(friend3);
characters.push(enemy1);
characters.push(enemy2);
characters.push(enemy3);

// ゲーム管理クラスをインスタンス化する
let gameManage = new GameManage();

// コマンドクラスをインスタンス化する
let command = new Command();

// コマンド選択の準備を整える
command.preparation();
