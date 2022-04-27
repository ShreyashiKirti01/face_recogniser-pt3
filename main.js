Webcam.set({
width:350,
height:300,
image_format:"jpg",
jpg_quality:100
});

Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML= "<img id='captured_img' src='"+data_uri+"'>";

});
}

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-0ePWoClj/model.json", modelLoaded);

function modelLoaded(){
console.log("Model is loaded");
}

function check(){
img = document.getElementById("captured_img");
classifier.classify(img, gotResults);
}

function gotResults(error, results){
if(error){
console.log("error");
}

else{
console.log("results");
document.getElementById("result_object_name").innerHTML= results[0].label;
document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(2);
}
}