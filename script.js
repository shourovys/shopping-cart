document.getElementById("iphonePlus").addEventListener("click", function(){

    const IphoneBuyNum = document.getElementById("iphoneBuyNum").innerText;
    const iphoneNumber= parseFloat(IphoneBuyNum);

    document.getElementById("iphoneBuyNum").innerText=9;

})

document.getElementById("iphonePlus").addEventListener("click", function(){
    const IphoneBuyNum = document.getElementById("iphoneBuyNum").innerText;
    const iphoneNumber= parseFloat(IphoneBuyNum);

    document.getElementById("iphoneBuyNum").innerText=iphoneNumber+1;
  });


