function colorTransform() {
   const rootElement = document.documentElement;

   let check = true;
   let hslUserColor;
   let hslUserColor2, hslUserColor3;

   let userHexColor = document.querySelector("#userHexColor");
    
   if (userHexColor.value[0] == "#") {
      // nothing
   } else {
      userHexColor.value = "#" + String(userHexColor.value);
   }

   for (let i = 1; i < userHexColor.value.length; i++) {
      if ("0123456789abcdefABCDEF".includes(userHexColor.value[i])) {
         // nothing 
      } else {
         check = false;
      };
   }

   if ((check == true) && (userHexColor.value.length == 7) && ((userHexColor.value[0] == "#") || (userHexColor.value[0] == " "))) {
      userHexColor = chroma(userHexColor.value);
      hslUserColor = userHexColor.hsl();
   } else {
      alert("not a hex format");
   };

   if (String(hslUserColor[0]) == "NaN") {
      hslUserColor = [0, hslUserColor[1], hslUserColor[2], hslUserColor[3]];
   }
   hslUserColor[0] = Math.round(hslUserColor[0]);
   hslUserColor[1] = Math.round(hslUserColor[1] * 100) + "%";
   hslUserColor[2] = Math.round(hslUserColor[2] * 100) + "%";

   let plusMinus = 10;
   if ((Number(hslUserColor[2].slice(0,-1))) + 20 > 100) {
      plusMinus = -10;
   };

   hslUserColor2 = [hslUserColor[0], hslUserColor[1], hslUserColor[2], hslUserColor[3]]
   hslUserColor3 = [hslUserColor[0], hslUserColor[1], hslUserColor[2], hslUserColor[3]];
   hslUserColor2[2] = ((String(Number(hslUserColor2[2].slice(0, -1)) + plusMinus)) + "%");
   hslUserColor3[2] = ((String(Number(hslUserColor3[2].slice(0, -1)) + plusMinus + plusMinus)) + "%");

   // каким должен быть текст- светлым, темным

   let colorText1;
   if (Number((hslUserColor[2].slice(0, -1))) <= 40) {
      colorText1 = "hsl(0, 0%, 92%, 1)";
      rootElement.style.setProperty("--colorText1", colorText1)
   } else {
      colorText1 = "hsl(0, 0%, 10%, 1)";
      rootElement.style.setProperty("--colorText1", colorText1)
   };

   let colorText2;
   if (Number((hslUserColor2[2].slice(0, -1))) <= 40) {
      colorText2 = "hsl(0, 0%, 92%, 1)";
      rootElement.style.setProperty("--colorText2", colorText2)
   } else {
      colorText2 = "hsl(0, 0%, 10%, 1)";
      rootElement.style.setProperty("--colorText2", colorText2)
   };

   let colorText3;
   if (Number((hslUserColor3[2].slice(0, -1))) <= 40) {
      colorText3 = "hsl(0, 0%, 92%, 1)";
      rootElement.style.setProperty("--colorText3", colorText3)
   } else {
      colorText3 = "hsl(0, 0%, 10%, 1)";
      rootElement.style.setProperty("--colorText3", colorText3)
   };

   hslUserColor = "hsl(" + String(hslUserColor[0]) + ", " + (String(hslUserColor[1])) + ", " + (String(hslUserColor[2])) + ", " + String(hslUserColor[3]) + ")";

   if (hslUserColor2 == "too bright") {
      hslUserColor2 = hslUserColor;
      colorText2 = "hsl(0, 0%, 10%, 1)";
      rootElement.style.setProperty("--colorText2", colorText2)
   } else {
      hslUserColor2 = "hsl(" + String(hslUserColor2[0]) + ", " + (String(hslUserColor2[1])) + ", " + (String(hslUserColor2[2])) + ", " + String(hslUserColor2[3]) + ")";
   }

   if (hslUserColor3 == "too bright") {
      hslUserColor3 = hslUserColor2;
      colorText3 = "hsl(0, 0%, 10%, 1)";
      rootElement.style.setProperty("--colorText3", colorText3)
   } else {
      hslUserColor3 = "hsl(" + String(hslUserColor3[0]) + ", " + (String(hslUserColor3[1])) + ", " + (String(hslUserColor3[2])) + ", " + String(hslUserColor3[3]) + ")";
   }

   hslColorOutputText1.innerHTML = hslUserColor;
   hslColorOutputText2.innerHTML = hslUserColor2;
   hslColorOutputText3.innerHTML = hslUserColor3;

   const newColor1 = hslUserColor;
   const newColor2 = hslUserColor2;
   const newColor3 = hslUserColor3;
   const palletTextOpacity = 0;

   rootElement.style.setProperty("--firstVarColor", newColor1);
   rootElement.style.setProperty("--secondVarColor", newColor2);
   rootElement.style.setProperty("--thirdVarColor", newColor3);
   rootElement.style.setProperty("--palettText", palletTextOpacity);
};

// randomColor 

function randomColor() {
   /*
   let h = (String(Math.floor(Math.random() * 360)));
   let s = (String(Math.floor(Math.random() * 100))) + "%";
   let l = (String(Math.floor(Math.random() * 100))) + "%";
   let HSLOpacity = "1"
   let HSLRandomColor = "hsl(" + h + "," + s  + "," + l + "," + HSLOpacity + ")";
   alert(HSLRandomColor) */

   const alphabet = "0123456789ABCDEF";
   let randomHexColor = "#"; 
   for (let i = 0; i <= 5; i++) {
      let randomIndex = Math.floor(Math.random() * alphabet.length);
      let randomLetter = alphabet[randomIndex];
      randomHexColor = randomHexColor + String(randomLetter);
   }

   userHexColor.value = randomHexColor;
   colorTransform();
}
 