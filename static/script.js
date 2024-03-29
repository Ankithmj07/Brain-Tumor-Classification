var loadFile = function(event) {
    var output = document.getElementById('output');
    var outputContainer=document.getElementById('output-container');
    output.src = URL.createObjectURL(event.target.files[0]);
    outputContainer.classList.add('output-img-container')
    output.classList.add('output-image')
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };

var DetectHTML=''

DetectHTML+='<div class="row">'
DetectHTML+='<h1 class="main-title">Predictions</h1>'
DetectHTML+='<div class="col-6 first-col">'
DetectHTML+='<div id="output-container" class="gallery output-img-container">'
DetectHTML+='<img id="my-output" class="output-image" src="/static/images/bg.jpg"/>'
DetectHTML+='</div>'
DetectHTML+='</div>'
DetectHTML+='<div class="col-6 second-col">'
DetectHTML+='<h1 class="tumor-title" id="tumor-name"></h1>'
DetectHTML+='</div>'
DetectHTML+='<div class="div-buttons">'
DetectHTML+='<a href="/" id="back-button" onclick="GoBack();" class="button button--flex button--small button-register">Back</a>'
DetectHTML+='</div>'
DetectHTML+='</div>'

function validateForm(){
    var image=document.getElementById('input-image').value;
    var imageFile=document.getElementById('input-image')
    var myimage=imageFile.files[0]

    if(image==''){
        document.getElementById('errMsgImage').innerHTML='Please Select an Image to Recognize'
        return false
    }
    else{
        document.getElementById('errMsgImage').innerHTML=''
    }

    var formData=new FormData();
    formData.append('image',myimage);

    document.getElementById('loader-container').style.display='block';


    var xhttpDetect=new XMLHttpRequest
    xhttpDetect.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById('loader-container').style.display='none';
            console.log(this.responseText)
            var JsonData=JSON.parse(this.responseText)
            console.log(JsonData)


            document.getElementById('anki').innerHTML=DetectHTML
            var reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('my-output').src = event.target.result;
            };
            reader.readAsDataURL(myimage);

            document.getElementById('tumor-name').innerHTML=JsonData
        }
    }
    xhttpDetect.open("POST","http://127.0.0.1:8081/Detect",true)
    xhttpDetect.send(formData)
}


