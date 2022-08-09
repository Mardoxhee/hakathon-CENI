const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/ussd", (req, res) => {
  // Read the variables sent via POST from our API
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = "";

  if (text == "") {
    // This is the first request. Note how we start the response with CON
    response = `CON choisir la langue
        1. Lingala
        2. Swahili
        3. Kikongo
        4. Tshiluba
        5. Français
        6. Anglais`;
  } else if (text == "1") {
    // Business logic for first level response
    response = `CON Olingi oyeba nini
        1. Mayebisi ya CENI
        2. Ndako ya maponomi
        3. Mukolo ya maponomi
        4. Zonga sima`;
  } else if (text == "1*1") {
    // Business logic for first level response
    // This is a terminal request. Note how we start the response with END
    response = `CON olingi oyeba 
        1. Mikebo ya maponami
        2. Ba sango ya CENI`;
  } else if (text == "1*1*1") {
    // This is a second level response where the user selected 1 in the first instance

    // This is a terminal request. Note how we start the response with END
    response = `CON mibeko ya maponami 
        1. Dispositions generales
        2. Missions et attributions
        3. Composition et statut des membres
        4. suivant`;
  } else if (text == "1*1*1*1") {
    response = `END vous allez recevoir un sms avec tous les details`;
  }

  // Send the response back to the API
  res.set("Content-Type: text/plain");
  res.send(response);
});
module.exports = app;
