var listLetters = 'qwertyuiopasdfghjklzxcvbnm';
var listNumbers = '1234567890';
var listChars = '!@#$%^&*()_+{}:<>?-=[];,./|';

function getRandomInt(max) {
  //return Math.floor(Math.random() * Math.floor(max));
  gg = Math.floor(Math.random() * Math.floor(max));
  return gg;
}

function generator(main,length) {
  sizeMain = main.length;
  kakaha = '';
  for (let i = 0; i < length; i++) {
    x = getRandomInt(sizeMain);
    kakaha += main[x];
  }
  //return kakaha;
  //alert(kakaha)
  document.getElementById('password').innerHTML = "Pass : "+kakaha;
}

function generate(){
  document.getElementById('ggButton').value = 'Regenerate';
  var length = document.getElementById('length').value;
  if (length =="") {
    alert("Please input the legth for pass")
  }
  var main = '';
  if (document.getElementById('letters').checked) {main += listLetters;};
  if (document.getElementById('numbers').checked) {main += listNumbers;};
  if (document.getElementById('chars').checked) {main += listChars;};
  fulled = document.getElementById('letters').checked + document.getElementById('numbers').checked + document.getElementById('chars').checked;
  //alert(fulled)
  if (fulled == 0){
    alert("Please choose min one");
  }else{
    generator(main,length)
  }

}
