function Submission() {
    var name = ['Ajay', 'Akshay', 'Anusha', 'Haren']
    var scores = ['55', '67', '26', '28']
    scores.sort();
    var name = document.getElementById("name").value;
    var scores = document.getElementById("score").value;
    var submit = document.getElementById('Submit');
    for (var i = 0; i < name.length; i++) {
        var elem1 = document.createElement('body')
        elem1.textContent = name[i]
        for (var j = 0; j < scores.length; j++) {
            var elem2 = document.createElement('body')
            elem2.textContent = scores[i]
        }
    }
    name.appendChild(elem1)
    scores.appendChild(elem2)
}