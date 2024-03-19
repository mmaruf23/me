WScript.Echo("Masukan kode Kasir");
var input = WScript.StdIn.ReadLine();
var a = new Date();
var tahun = String(a.getFullYear());
var bulan = String(a.getMonth() + 1);
var hari = String(a.getDate());
if (String(a.getMonth() + 1).length < 2) {
    bulan = "0" + bulan;
}
var fso = new ActiveXObject("Scripting.FileSystemObject");
var file = fso.OpenTextFile(tahun + bulan + hari + "-" + input + ".csv", 1);
WScript.Echo("Masukan PLU yang ingin di cari");
var plu = WScript.StdIn.ReadLine() + "2";
var bon = {};
var currentLine = 1;
var code = ["5", "0", "2", "1", "7", "4", "9", "8", "3", "6"];
var finalBon = "";
while (!file.AtEndOfStream) {
    var line = file.ReadLine();
    columns = line.split(",");
    if (columns[0] == "Bon") {
        bon[currentLine] = columns[1];
    } else if (columns[1] == plu) {
        rawBon = bon[currentLine - 1 - parseInt(columns[0])].split("");
        jadiBon = "";
        for (var i = 0; i < rawBon.length; i++) {
            jadiBon += code[parseInt(rawBon[i])];
        }
        finalBon += jadiBon + "\n";
    }
    currentLine++;
}
WScript.Echo("BON : \n" + finalBon);
file.Close();
