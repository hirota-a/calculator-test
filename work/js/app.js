//HTMLを構成するDOMが形成された瞬間に発動する
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');//id属性がdisplayの要素を取得
  // クラス名がnumber, operator, clear, equalsのボタンを全て取得
  const buttons = document.querySelectorAll('.number, .operator, .clear, .equals');

  //アニメーションさせたい複数の要素buttonsをforEachで一つづつbuttonに取り出してそれぞれ処理
  buttons.forEach(button => {
    // クリックイベントを追加
    button.addEventListener('click', () => {
      const number = button.getAttribute('data-number');// data属性から値を取得　数字
      const operator = button.getAttribute('data-operator');// data属性から値を取得　+-*/
      const clear = button.getAttribute('data-clear');// data属性から値を取得　C
      const equal = button.getAttribute('data-equals'); // data属性から値を取得　＝

      // 取得した値を表示エリアに追加 
      if (number) {
        display.value += number;// 数字が存在すれば、表示エリアに追加
      } else if (operator) {
        display.value += operator;// 演算子が存在すれば、表示エリアに追加
      } else if (clear) {
        display.value = '';// data-clearクリックすると表示エリアをクリア
      } else if (equal) {
        try {
          //"use strict"; 厳格モード
          // Functionコンストラクタを使って、入力された数式(' + display.value + ')を実際に計算して返して（return）、その計算結果を表示
          display.value = Function('"use strict"; return (' + display.value + ')')();
        } catch (e) {
          display.value = 'エラー';// 数式が正しくない場合は表示エリアにエラーと表示
        }
      }
    });
  });
});

