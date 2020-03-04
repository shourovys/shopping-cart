document.getElementById("iphonePlus").addEventListener("click", function() {
    const IphoneBuyNum = document.getElementById("iphoneBuyNum").innerText;
    const iphoneNumber = parseFloat(IphoneBuyNum);

    document.getElementById("iphoneBuyNum").value++;

    const IphonePrice = document.getElementById("iphonePrice").innerText;
    const iphonePriceNum = parseFloat(IphonePrice);

    document.getElementById("iphonePrice").innerText = iphonePriceNum + 1219;


    const TotalCheckouta = document.getElementById("TotalCheckout").innerText;
    const TotalCheckoutNum = parseFloat(TotalCheckouta);

    document.getElementById("TotalCheckout").innerText = TotalCheckoutNum + 1219;
});