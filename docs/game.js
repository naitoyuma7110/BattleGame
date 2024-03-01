// キャラクターをインスタンス化する

/* 
Friendクラス
--引数--
  名前
  体力
  攻撃力
  素早さ
  薬草数
  薬草の回復力
*/

let friend1 = new Friend("石塚", 240, 25, 13, 5, 400); // 味方
let friend2 = new Friend("内藤", 1400, 180, 12, 18, 1); // 味方
let friend3 = new Friend("小佐野(毒)", 4, 1, 1, 0, 0); // 味方
let enemy1 = new MyMelody(
	"マイメロディ",
	600,
	999,
	20,
	"./image/list-mymelody.png"
); // 敵
let enemy2 = new Pompom(
	"ポムポムプリン",
	480,
	70,
	6,
	"./image/list-pompompurin.png"
); // 敵
let enemy3 = new Child("かわいいこども", 999, 100, 1, "./image/IMG_3517.jpg"); // 敵

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
