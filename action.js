function ortu() {
var anak = document.getElementById("isi").value
if (anak == "") {
	alert("Please enter the name of the child\nTolong masukan nama salah satu orang dari GEN 28th PYB")
}else if (anak == "GERALDI") {
	alert("Haha, Bocahnya INGIN!")
	papa = document.getElementById("dad").innerHTML = "INGIN!";
	mama = document.getElementById("mom").innerHTML = "INGIN!";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "NAEL") {
	papa = document.getElementById("dad").innerHTML = "Unknown/Another Error";
	mama = document.getElementById("mom").innerHTML = "Deni Rivanti";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "ENOS") {
	papa = document.getElementById("dad").innerHTML = "James Karosekali";
	mama = document.getElementById("mom").innerHTML = "Erwina";
} else if (anak == "FIEN") {
	papa = document.getElementById("dad").innerHTML = "Hendrik";
	mama = document.getElementById("mom").innerHTML = "Defrin Sangraja";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "NEVAN") {
	papa = document.getElementById("dad").innerHTML = "Dapot Mangisi Siagian";
	mama = document.getElementById("mom").innerHTML = "Shinta";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "FAREL") {
	papa = document.getElementById("dad").innerHTML = "Matheus Hutauruk";
	mama = document.getElementById("mom").innerHTML = "Indrawati Purnamasari";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "CELLA") {
	papa = document.getElementById("dad").innerHTML = "Ujang Wijaya";
	mama = document.getElementById("mom").innerHTML = "Unknown/Another Error";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "FITRAH") {
	papa = document.getElementById("dad").innerHTML = "Djarot Eko Suseno";
	mama = document.getElementById("mom").innerHTML = "Ayu";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "WILLY") {
	papa = document.getElementById("dad").innerHTML = "Sunardi";
	mama = document.getElementById("mom").innerHTML = "Unknown/Another Error";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "DAVID") {
	papa = document.getElementById("dad").innerHTML = "Marantika Revando Darmanik";
	mama = document.getElementById("mom").innerHTML = "Maria";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "KARIN") {
	papa = document.getElementById("dad").innerHTML = "Unknown/Another Error";
	mama = document.getElementById("mom").innerHTML = "Ika Sartika";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "BERTA") {
	papa = document.getElementById("dad").innerHTML = "Robertus Sutowo";
	mama = document.getElementById("mom").innerHTML = "Maria";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "AGNES") {
	papa = document.getElementById("dad").innerHTML = "Unknown/Another Error";
	mama = document.getElementById("mom").innerHTML = "Elinda";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "ELIA") {
	papa = document.getElementById("dad").innerHTML = "Sahat Sihombing";
	mama = document.getElementById("mom").innerHTML = "Yoana";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "ALDO") {
	papa = document.getElementById("dad").innerHTML = "Melky";
	mama = document.getElementById("mom").innerHTML = "Sri Rummigati";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "cmd.Credits") {
	alert("CREDITS:\nDEVELOPER : GERALDI/NAME\nOriginal Java Application:Efran Nathanael\nPembantu Nama-Nama:\n-Nael\n-Tyo\n-Gita\nDAN\nYang suka ngatain.")
} else if (anak == "LIO") {
	papa = document.getElementById("dad").innerHTML = "Awan mangatas";
	mama = document.getElementById("mom").innerHTML = "Trisna/Inung";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "KINANTI") {
	papa = document.getElementById("dad").innerHTML = "Hari";
	mama = document.getElementById("mom").innerHTML = "Siska Becik";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "KEVIN E") {
	papa = document.getElementById("dad").innerHTML = "";
	mama = document.getElementById("mom").innerHTML = "";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "GRACIA") {
	papa = document.getElementById("dad").innerHTML = "Unknown/Another Error";
	mama = document.getElementById("mom").innerHTML = "Vera Ngapiet";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "JULIUS") {
	papa = document.getElementById("dad").innerHTML = "Deddy";
	mama = document.getElementById("mom").innerHTML = "Pupuh";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "cmd.TestName") {
	var nama = prompt("Siapa nama anaknya:")
	var x = prompt("Siapa nama ayahnya:")
	var y = prompt("Siapa nama mamanya:")
	papa = document.getElementById("dad").innerHTML = x;
	mama = document.getElementById("mom").innerHTML = y;
	kdname = document.getElementById("an").innerHTML = nama
	document.getElementById("isi").value = nama
} else if (anak == "NATHAN") {
	papa = document.getElementById("dad").innerHTML = "Herman";
	mama = document.getElementById("mom").innerHTML = "Fanny Tesalonika";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "NAGITA") {
	papa = document.getElementById("dad").innerHTML = "Unknown/Another Error";
	mama = document.getElementById("mom").innerHTML = "Vivi Ferawati";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "TYO") {
	papa = document.getElementById("dad").innerHTML = "Gunawan";
	mama = document.getElementById("mom").innerHTML = "Sri Hartuti";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "AREL") {
	papa = document.getElementById("dad").innerHTML = "Unknown/Another Error";
	mama = document.getElementById("mom").innerHTML = "Nani";
	kdname = document.getElementById("an").innerHTML = anak
} else if (anak == "cmd.Help") {
	alert("Command List :\n-Cmd.Credits : Gunanya untuk melihat Kredit\n-Cmd.TestName : Gunanya untuk mengetest nama anak dan ortu\n-Cmd.Help : Gunanya untuk melihat macam-macam command")
} else {
	alert("Error 404\nNAME_NOT_FOUND_OR_UNKNOWN_STRING\nIf you get this error make sure you:\n-Use (C)apital letter for the name\n-Check your typing before you press SUBMIT\n-Make sure you are not an idiot\n\n(c) 2016-2018 GSoft Corp")
}
}
function hapus() {
	if (document.getElementById("isi").value == "") {
		alert("The Textbox is already cleared!\nTextbox-nya udah di hapus semuanya!")
	} else {
	document.getElementById("isi").value = ""
	papa = document.getElementById("dad").innerHTML = "NAME"
	mama = document.getElementById("mom").innerHTML = "NAME"
	kdname = document.getElementById("an").innerHTML = "NAME"
}
}
