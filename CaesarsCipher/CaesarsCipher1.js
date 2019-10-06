function rot13(str) {
  var ROT13 = {"N":"A", "O":"B", "P":"C", "Q":"D", "R":"E", "S":"F", "T":"G", "U":"H", "V":"I", "W":"J", "X":"K", "Y":"L", "Z":"M", "A":"N", "B":"O", "C":"P", "D":"Q", "E":"R", "F":"S", "G":"T", "H":"U", "I":"V", "J":"W", "K":"X", "L":"Y", "M":"Z"};
  var arr = str.split("");
  var regex = /[A-Z]/;
  for (var i = 0; i < arr.length; i++){
    if (regex.test(arr[i])) {
      arr[i] = ROT13[arr[i]];
    }
  }
  return arr.join("");
}