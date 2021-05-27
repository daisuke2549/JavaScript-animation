const fadeTargets = document.querySelectorAll(".animation-fade");

// オプション
// root : nullの場合はブラウザのビューポート
// rootMargin : 0とすると↑で指定したルート要素と交差した瞬間（1pxでも）発火。今回のように-50%とすると対象要素がルート要素であるブラウザのビューポートの半分のところで交差したら発火となる。ルート要素を基準としたオプション。
// threshold : 閾値（しきいち）。どのくらい交差したら発火するかを指定する。0とすれば交差した瞬間に発火。対象要素を基準としたオプション。
// rootMarginとthresholdで交差してから（可視範囲に入ってから）どの程度で発火するかを調整できるということ。
const fadeOption = {
  root: null,
  rootMargin: "-50% 0px",
  threshold: 0
};

// 対象となるターゲットが可視範囲に入ったらactiveというクラスを付与する関数
const targets = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};

// 可視範囲に入ったら実行する関数targetsとfadeOptionを引数にしてIntersectionObserverコンストラクターを呼び出し
const fadeObserver = new IntersectionObserver(targets, fadeOption);

// fadeTargetsのすべての要素を監視印象に登録
fadeTargets.forEach((target) => {
  fadeObserver.observe(target);
});
