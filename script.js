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
