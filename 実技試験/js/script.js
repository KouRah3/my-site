/**
 * 掲示板プログラム
 */

(function(){
  /// 関数 ////////////////////////////////////////////////////////////
  /**
   * メッセージを一覧表示する
   */
  function showMessageList() {
    //（１）メッセージ取得プログラムを追加する
  
  }

  /**
   * メッセージを投稿する
   */
  function sendMessage() {
    // それぞれのデータをオブジェクトにまとめる
    const sendData = {
      'name' : elName.value,
      'message' : elMessage.value
    };
    // （２）POST用のオブジェクト生成を作成
    const opt = {

    };
    
    fetch('https://www.jz.jec.ac.jp/aw_sspg/stub/public/api/short_message', opt)
    .then(res => {
      dlgMessage.innerHTML = '<p>' + ((res.status == 201) ? '投稿しました' : '投稿に失敗しました') + '</p>';
      return res.json();
    })
    .then(data => {

        if (data.status == 'OK') {
          dlgDetail.innerHTML = '';
          showMessageList();

        } else {
          dlgDetail.innerHTML = '<dl>';
          Object.keys(data.errors).forEach(key => {
            const elm = data.errors[key];
            dlgDetail.innerHTML += `<dt>${key}</dt>`;
            dlgDetail.innerHTML += `<dd>${elm.join(',')}</dd>`;
          });
          dlgMessage.innerHTML += '</dl>';
        }
        // dlgMessage.textContent = JSON.stringify(data);
        dlgResult.classList.add('active');
    });
  }


  /// メイン //////////////////////////////////////////////////////////
  // HTMLからデータ取得
  const elMessageList = document.querySelector('#msg_list');    // メッセージ一覧
  const elName = document.querySelector('#name');               // 名前のinput要素
  const elMessage = document.querySelector('#message');         // メッセージのinput要素
  const btnSend = document.querySelector('#btn_send');          // 送信ボタンを取得
  const dlgResult = document.querySelector('#dlg');             // 結果表示用のダイアログ
  const dlgMessage = document.querySelector('#dlg_message');    // メッセージ表示エリア
  const dlgDetail = document.querySelector('#dlg_detail');      // 詳細メッセージ表示エリア
  const dlgButtonClose = document.querySelector('#dlg_btn_close');      // ダイアログ閉じるボタン

  // 投稿ボタンの処理
  btnSend.addEventListener('click', sendMessage);
  // 閉じるボタンの処理
  dlgButtonClose.addEventListener('click', () => {
    dlgResult.classList.remove('active');
  });
  // メッセージを一覧表示
  showMessageList();
})();