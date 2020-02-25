function Calculate() {
    var basic = document.getElementById("basic").value;
    var da = document.getElementById("da").value;
    var hra = document.getElementById("basic").value;

    var gross = parseInt(basic + da + hra);
    var net = gross * .9;
    document.getElementById("demo").innerHTML = gross;
    document.getElementById("demo2").innerHTML = net;
    var bodyElem = document.querySelector('body');
    bodyElem.appendChild(gross);
}