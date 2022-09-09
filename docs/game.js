// キャラクターをインスタンス化する
let friend1 = new Friend("ないとう", 999, 1281, 13, 20, 45); // 味方
let friend2 = new Friend("あかほり", 1, 16, 12, 3, 45); // 味方
let friend3 = new Friend("とりい", 3, 43, 11, 1, 45); // 味方
let friend4 = new Friend("やぎ(毒)", 4, 43, 11, 1, 45); // 味方
let enemy1 = new Troll("トロル", 270, 38, 20, "./image/troll.png"); // 敵
let enemy2 = new Dragon("ドラゴン", 380, 68, 6, "./image/dragon.png"); // 敵
let enemy3 = new Kitagawa("北川", 6000, 120, 1, "./image/kitagawa.png"); // 敵

// キャラクター配列をつくる
let characters = [];
characters.push(friend1); // 味方
characters.push(friend2); // 味方
characters.push(friend3); // 味方
characters.push(friend4); // 味方
characters.push(enemy1); // 敵
characters.push(enemy2); // 敵
characters.push(enemy3);

// ゲーム管理クラスをインスタンス化する
let gameManage = new GameManage();

// コマンドクラスをインスタンス化する
let command = new Command();

// コマンド選択の準備を整える
command.preparation();
