function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-_44r6lle/model.json");

function modelReady(){
    classifier.classify(gotResults());
}

function gotResults(){
    console.log("got result");
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_count").innerHTML = 'Accuracy - '+ (results[0].count*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
  
      img = document.getElementById('alien1') 
      img1 = document.getElementById('alien2')
  
      if (results[0].label == "bark") {
        img.src = 'dog.jpg';
      }else{
        img.src = 'cat.jpg';
      }
    }
  }