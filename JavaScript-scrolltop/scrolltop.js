let target = document.getElementById('target');

target.onscroll = ()  => console.log(target.scrollTop);

let actionButton = document.getElementById('actionButton');
actionButton.onclick  = () => target.scrollTop  = 500;