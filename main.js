var speechRecognition=window.webkitSpeechRecognition;
var recognition= new speechRecognition();
function begin(){
    document.getElementById("box").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("box").innerHTML=content;
if(content=="take my selfie"){
    talk(); 
}
}
function talk(){
    var synth=window.speechSynthesis;
    var speak_data="taking your sefie in 5 seconds";
var utter_this= new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);
Webcam.attach("#camera");
setTimeout(function(){
    takeSelfie();
Savephoto();

},5000);

}
Webcam.set({
    width:360,
    height:250,
image_format:"jpeg",
jpeg_quality:90,
});
var cam=document.getElementById("camera");
function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="photo" src="'+data_uri+'">';

    });
}
function Savephoto(){
    anchor=document.getElementById("link");
    var img=document.getElementById("photo").src ;
    anchor.href=img;
    anchor.click();
}