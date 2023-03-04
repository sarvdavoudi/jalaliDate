document.getElementById("convertToJalali").addEventListener("click", function () {
  var output = "";
  try {
    var input = document.getElementById("gregorianInput").value;
    var m = moment(input);
    if (m.isValid()) {
      m.locale("fa");
      output = m.format("ddd") + " " + m.format("YYYY/MMMM/DD");
    } else {
      output = "it is not valid date";
    }
  } catch (e) {
    output = "input is not a date";
  }
  document.getElementById("jalaliOutput").innerText = output;
});




document.getElementById("convertToGregorian").addEventListener("click", function () {
  var output = "";
  try {
    var input = document.getElementById("jalaliInput").value;
    var m = moment.from(input, "fa", "YYYY/MM/DD");

    if (m.isValid()) {
      output = m.locale("en").format("YYYY/MM/DD");
    } else {
      output = "input is not a jalali date";
    }
  } catch (e) {
    output = "input is not a date";
  }
  document.getElementById("gregorianOutput").innerText = output;
});