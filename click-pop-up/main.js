function popupImage() {
    let popup = document.getElementById('js-popup');
    if(!popup) return;   //js-popupというidを取得したときにjs-black-bg、js-close-btn,js-show-popupという３つのidを取得
  
    let blackBg = document.getElementById('js-black-bg');
    let closeBtn = document.getElementById('js-close-btn');
    let showBtn = document.getElementById('js-show-popup');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show'); //toggleでcis-show classのaddとremoveを実施
      });
    }
  }
  popupImage();


const a = 3;

const b = 2;

console.log((a> 0 || b > 0 ));