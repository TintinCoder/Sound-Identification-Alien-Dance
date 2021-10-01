/*
 The Teachable Machine AI Link -: https://teachablemachine.withgoogle.com/models/0jnux8wSi/model.json
*/
function startTakingSound() {
    // This is the startTakingSound function()
    navigator.mediaDevices.getUserMedia({audio: true});
}
// Defining the classifier
var classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0jnux8wSi/model.json', modelReady)
function modelReady() {
    // This is the modelReady function()
    classifier.classify(gotResult)
}
function gotResult(error, result) {
    // This is the gotResult Function()
    if (error) {
        console.error(error)
    }
    else {
        console.log(result);
        const number_r = Math.floor(Math.random() * 255) + 1;
        const number_g = Math.floor(Math.random() * 255) + 1;
        const number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById('whatHear').innerHTML = "I can hear-: " + result[0].label;
        document.getElementById('accuracy').innerHTML = "Accuracy-: " + (result[0].confidence * 100).toFixed(2) + " %";
        document.getElementById('whatHear').style.color = "rgb(" + number_r + "," + number_g + "," + number_b + ")";
        document.getElementById('accuracy').style.color = "rgb(" + number_r + "," + number_g + "," + number_b + ")";

        const img1 = document.getElementById('alien-1');
        const img2 = document.getElementById('alien-2');
        const img3 = document.getElementById('alien-3');
        const img4 = document.getElementById('alien-4');
        
        if (result[0].label === "Clap") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (result[0].label === "Banging Two Metallic Objects"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (result[0].label === "Metal Banging With Glass"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}