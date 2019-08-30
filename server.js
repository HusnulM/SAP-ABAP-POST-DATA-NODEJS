const express    = require('express');
const bodyParser = require('body-parser');
// const mysql      = require('mysql');
var firebase     = require("firebase");
const app        = express();


const config = {
	apiKey: "AIzaSyA71hPWUdEqgymNFTHg462yFJ_bWDAkHcA",
	authDomain: "exam-aff8f.firebaseapp.com",
	databaseURL: "https://exam-aff8f.firebaseio.com",
	projectId: "exam-aff8f",
	storageBucket: "",
	messagingSenderId: "133123398372"
  };
firebase.initializeApp(config);

var fdatabase = firebase.database();
var ref = fdatabase.ref("/sap");

app.use(bodyParser.json());
app.listen(4000, () => console.log('Server berjalan di port 4000'));
// app.use(express.static('public'));

//Route untuk menangkap data dari SAP
app.post('/sap', (request, response) => {
	let sapdata = request.body;

	ref.set({
		sapdata
	})

	console.log(sapdata);
	response.json('Success');
})
