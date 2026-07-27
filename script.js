/* ===========================
   PHATHU QUOTE STUDIO 2.0
   PART 1
=========================== */

// Elements
const imageInput = document.getElementById("imageInput");
const quoteInput = document.getElementById("quoteInput");
const signatureInput = document.getElementById("signatureInput");

const photo = document.getElementById("photo");
const quote = document.getElementById("quote");
const signature = document.getElementById("signature");

const createBtn = document.getElementById("createBtn");

// ===========================
// Upload Image
// ===========================

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        photo.src = e.target.result;

    };

    reader.readAsDataURL(file);

});

// ===========================
// Live Quote Update
// ===========================

quoteInput.addEventListener("input", function () {

    quote.textContent = this.value;

    fitQuote();

});

// ===========================
// Live Signature
// ===========================

signatureInput.addEventListener("input", function () {

    signature.textContent = this.value;

});

// ===========================
// Create Button
// ===========================

createBtn.addEventListener("click", function () {

    quote.textContent = quoteInput.value;

    signature.textContent = signatureInput.value;

    fitQuote();

});

// ===========================
// Auto Fit Quote
// ===========================

function fitQuote() {

    let size = 42;

    quote.style.fontSize = size + "px";

    while (
        quote.scrollHeight > quote.parentElement.clientHeight &&
        size > 18
    ) {

        size--;

        quote.style.fontSize = size + "px";

    }

      }
/* ===========================
   PART 2
   TEXT CONTROLS
=========================== */

const fontSelect = document.getElementById("fontSelect");
const fontSize = document.getElementById("fontSize");
const textColor = document.getElementById("textColor");
const overlayOpacity = document.getElementById("overlayOpacity");
const filterSelect = document.getElementById("filterSelect");
const overlay = document.getElementById("overlay");

// ===========================
// FONT
// ===========================

fontSelect.addEventListener("change", function(){

    quote.style.fontFamily = this.value;

});

// ===========================
// FONT SIZE
// ===========================

fontSize.addEventListener("input", function(){

    quote.style.fontSize = this.value + "px";

});

// ===========================
// TEXT COLOR
// ===========================

textColor.addEventListener("input", function(){

    quote.style.color = this.value;

});

// ===========================
// OVERLAY DARKNESS
// ===========================

overlayOpacity.addEventListener("input", function(){

    const value = this.value / 100;

    overlay.style.background =
    `rgba(0,0,0,${value})`;

});

// ===========================
// FILTERS
// ===========================

filterSelect.addEventListener("change", function(){

    switch(this.value){

        case "none":

            overlay.style.background =
            "rgba(0,0,0,0)";

        break;

        case "dark":

            overlay.style.background =
            "rgba(0,0,0,0.35)";

        break;

        case "gold":

            overlay.style.background =
            "rgba(180,120,0,0.30)";

        break;

        case "blue":

            overlay.style.background =
            "rgba(0,70,180,0.30)";

        break;

        case "green":

            overlay.style.background =
            "rgba(0,120,70,0.30)";

        break;

        case "purple":

            overlay.style.background =
            "rgba(120,0,180,0.30)";

        break;

    }

});
/* ===========================
   SAVE IMAGE
=========================== */

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", saveImage);

function saveImage() {

    html2canvas(document.getElementById("editor"), {

        scale: 3,
        useCORS: true,
        backgroundColor: null

    }).then(function (canvas) {

        const link = document.createElement("a");

        link.download = "Phathu_Quote_Studio.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

       }
