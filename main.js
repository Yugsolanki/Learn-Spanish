var word = ['', "como", "I", "su", "que", "él", "era", "para", "en", "son", "con", "ellos", "ser", "en", "uno", "tener", "este", "desde", "por", "caliente", "palabra", "pero", "qué", "algunos", "es", "lo", "usted", "o", "tenido", "la", "de", "a", "y", "un", "en", "nos", "lata", "fuera", "otros", "eran", "que", "hacer", "su", "tiempo", "si", "lo hará", "cómo", "dicho", "un", "cada", "decir"];

var trans = ['', "as", "I", "his", "that", "he", "was", "for", "on", "are", "with", "they", "be", "at", "one", "have", "this", "from", "by", "hot", "word", "but", "what", "some", "is", "it", "you", "or", "had", "the", "of", "to", "and", "a", "in", "we", "can", "out", "other", "were", "which", "do", "their", "time", "if", "will", "how", "said", "an", "each", "tell"];



var count = 0;
var wordCount;

var outOff = word.length - 1;

var wordNode = document.getElementById('word');
var transNode = document.getElementById('trans');
var welcome = document.getElementById('welcome');

var countNode = document.getElementById('count');

var next = document.getElementById('next');
var prev = document.getElementById('prev'); 

next.addEventListener('click', function (e) {
  count=count+1;
  
  if (count<word.length) {
    wordCount = count;
  }
  
  
  if (wordCount<word.length) {
    countNode.innerText = wordCount+'/'+outOff;
    welcome.remove();
    wordNode.innerText = word[wordCount];
    transNode.innerText = trans[wordCount];
  }
  
})

prev.addEventListener('click', function (e) {
  count = count - 1;
  
  if (count < word.length) {
    wordCount = count;
  }
  
  if (wordCount>0) {
    countNode.innerText = wordCount+'/'+outOff;
    welcome.remove();
    wordNode.innerText = word[wordCount];
    transNode.innerText = trans[wordCount];
  } else {
    count=0;
  }
  
})



function say(m) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.name = "Google Español";
  msg.voiceURI = "Google Español";
  msg.volume = .4;
  msg.rate = .8;
  msg.pitch = 0.7;
  msg.text = word[wordCount];
  //Change a your language code
  msg.lang = 'es-ES'; // es = Spanish, de = germam
  speechSynthesis.speak(msg);
}

