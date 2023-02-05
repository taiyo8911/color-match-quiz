// カウントダウン
let count = 3;
function countDown() {
    const intervalId = setInterval(() => {
        if (count < 0) {
            clearInterval(intervalId);
            displayQ();
            y++;
            document.getElementById("score").innerHTML = `正解：${x}    不正解：${y}`;
            count = 3;
            countDown();
        } else {
            document.getElementById("countDown").innerHTML = `残り${count}秒`;
            count--;
        }
    }, 1000);
}


// 正解数と不正解数のカウント
let x = 0;
let y = 0;

const colorData = {
    黄: "yellow",
    緑: "green",
    青: "blue",
    赤: "red",
    白: "white",
    黒: "black"
};

// バリューからキーを取得する関数
function getKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}


// 画面表示（問題と選択肢）
function displayQ() {
    // 問題を表示する
    // キーを取得
    const colorNames = Object.keys(colorData);
    // バリューを取得
    const colorCodes = Object.values(colorData);
    // 乱数を生成
    let randomIndex = Math.floor(Math.random() * colorNames.length);
    // ランダムなキー（文字）を取得
    const colorName = colorNames[randomIndex];
    // 乱数を生成
    randomIndex = Math.floor(Math.random() * colorCodes.length);
    // ランダムなバリュー（文字の色）を取得
    const colorCode = colorCodes[randomIndex];
    // 問題を表示する
    document.getElementById("question").innerHTML = colorName;
    document.getElementById("question").style.color = colorCode;


    // 選択肢の表示
    // 子要素をすべて削除する
    const choices = document.getElementById("choices");
    while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
    }

    // 配列colorNamesから要素colorName（文字）以外の要素を抽出する
    const otherColorNames = colorNames.filter(x => x !== colorName);
    for (let i = 0; i < 4; i++) {
        const colorKey = getKeyByValue(colorData, colorCode);
        const button = document.createElement("button");
        if (i === 0) {
            button.innerHTML = colorKey;
            // 乱数を生成
            randomIndex = Math.floor(Math.random() * colorCodes.length);
            // ランダムなバリュー（文字の色）を取得
            const randColor = colorCodes[randomIndex];
            button.style.color = randColor;
        } else if (i === 1) {
            button.innerHTML = colorName;
            // 乱数を生成
            randomIndex = Math.floor(Math.random() * colorCodes.length);
            // ランダムなバリュー（文字の色）を取得
            const randColor = colorCodes[randomIndex];
            button.style.color = randColor;
        } else if (i === 2) {
            button.innerHTML = otherColorNames[Math.floor(Math.random() * (colorNames.length - 1))];
            // 乱数を生成
            randomIndex = Math.floor(Math.random() * colorCodes.length);
            // ランダムなバリュー（文字の色）を取得
            const randColor = colorCodes[randomIndex];
            button.style.color = randColor;
        } else if (i === 3) {
            button.innerHTML = otherColorNames[Math.floor(Math.random() * (colorNames.length - 1))];
            // 乱数を生成
            randomIndex = Math.floor(Math.random() * colorCodes.length);
            // ランダムなバリュー（文字の色）を取得
            const randColor = colorCodes[randomIndex];
            button.style.color = randColor;
        }

        button.onclick = function () {
            // 判定
            if (button.innerHTML === colorKey) {
                // 正解数にインクリメント
                x++;
                //
                count = 3;
            } else {
                // 不正解数にインクリメント
                y++;
            }
            document.getElementById("score").innerHTML = `正解：${x}    不正解：${y}`;
            // 問題を表示
            displayQ();

        };
        choices.appendChild(button);
    }

    // 選択肢を並び替える
    // 要素を配列として取得
    const elements = [...choices.children];
    // 要素をランダムに並び替え
    elements.sort(() => Math.random() - 0.5);
    // 要素を追加
    elements.forEach(element => choices.appendChild(element));

}

countDown();
displayQ();