const now = new Date();
const tanggal = now.getDate();
const tahun = now.getFullYear().toString().replace("20", "");
const bulan =
  now.getMonth() < 9
    ? "0" + (now.getMonth() + 1).toString()
    : (now.getMonth() + 1).toString();
const minggu =
  tanggal <= 7 ? "10" : tanggal <= 15 ? "20" : tanggal <= 23 ? "30" : "40";
const periode = tahun + bulan + minggu;

const plus = ["06", "07", "08", "09", "10", "11"];
const target = document.querySelectorAll("table")[2].insertRow();
plus.forEach((plu) => {
  const item = document.createElement("th");
  item.innerHTML = "PSM " + plu;
  item.className = periode + " " + periode + plu;
  item.onclick = function () {
    getData(periode + plu);
  };
  target.appendChild(item);
});

const td = document.querySelectorAll("td");
td[2].innerHTML = "J599";
td[5].innerHTML = "SAT KOMARUDIN 2";
td[8].innerHTML = "JZ01 - Branch Cileungsi 2";
td[11].innerHTML = "9";

function getData(index) {
  const head = document.getElementsByClassName(periode);
  for (x = 0; x < head.length; x++) {
    head[x].style.backgroundColor = "";
  }
  document.getElementsByClassName(index)[0].style.backgroundColor = "red";
  $.ajax({
    type: "GET",
    url: "/pdmstore/public/file/cashier/now/" + index + "_J599.csv",
    dataType: "text",
    success: function (data) {
      processData(data, "cashier", "now");
    },
  });

  $.ajax({
    type: "GET",
    url: "/pdmstore/public/file/plu/now/" + index + "_J599.csv",
    dataType: "text",
    success: function (data) {
      processData(data, "plu", "now");
    },
  });
}

function processData(allText, jenis, status) {
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split("|");
  var lines = [];
  var excp = [];
  var compare = "";

  if (status == "now") {
    compare = "J599";
  } else {
    compare = "J599";
  }

  if (jenis == "cashier") {
    excp = [0, 13];
  } else {
    excp = [0, 1, 2, 3, 4, 5, 8];
  }

  for (var i = 0; i < allTextLines.length; i++) {
    if (i > 0) {
      var data = allTextLines[i].split("|");
      var code = data[0].replace(/['"]+/g, "");

      if (data.length == headers.length) {
        if (jenis == "cashier" && data[14].length > 0)
          code = data[14].replace(/['"]+/g, "");

        if (i == 2) {
          if (jenis == "plu") {
            if (
              data[4].replace(/['"]+/g, "").length > 0 &&
              data[5].replace(/['"]+/g, "").length > 0
            ) {
              $("a." + data[4].replace(/['"]+/g, "")).html(
                data[5].replace(/['"]+/g, "")
              );
            }
          }
        }

        if (code == compare) {
          var tarr = [];

          for (var j = 0; j < headers.length; j++) {
            if (excp.indexOf(j) == -1) {
              var value = data[j].replace(/['"]+/g, "");

              if (jenis == "cashier") {
                if (j == 8) value += " %";
              }

              tarr.push(value);
            }
          }

          if (tarr.length > 0) {
            lines.push(tarr);
          }

          if (jenis == "plu") {
            if (data[3].replace(/['"]+/g, "").length > 0) {
              $("#personel").html(data[3].replace(/['"]+/g, ""));
            }

            if (data[8].replace(/['"]+/g, "").length > 0) {
              $("#progress").html(
                "<b>" + data[8].replace(/['"]+/g, "") + "</b>"
              );
            }

            if (data[9].replace(/['"]+/g, "").length > 0) {
              $("td#target").html(data[9].replace(/['"]+/g, ""));
            }
          }
        }
      }
    }
  }

  if (jenis == "cashier") {
    $("#cashierData").DataTable({
      data: lines,
      columns: [
        { title: "NIK" },
        { title: "Nama" },
        { title: "Kode Jabatan" },
        { title: "Jabatan" },
        { title: "Avg Sales Qty" },
        { title: "Target Min" },
        { title: "Actual" },
        { title: "Percentage" },
        { title: "Rangking Umum" },
        { title: "Rangking Cabang" },
        { title: "Rangking Regional" },
        { title: "Rangking Nasional" },
      ],
      bPaginate: false,
      bInfo: false,
      paging: false,
      processing: true,
      bDestroy: true,
      columnDefs: [
        { orderable: true, className: "center", targets: [0, 2] },
        {
          orderable: true,
          className: "right",
          targets: [4, 5, 6, 7, 8, 9, 10, 11],
        },
        {
          targets: 8,
          createdCell: function (td, cellData, rowData, row, col) {
            if (rowData[13] == 1) {
              $(td).append(' <i class="fa fa-trophy"/>').css("color", "green");
            }
          },
        },
        {
          targets: 9,
          createdCell: function (td, cellData, rowData, row, col) {
            if (rowData[14] == 1) {
              $(td).append(' <i class="fa fa-trophy"/>').css("color", "green");
            }
          },
        },
        {
          targets: 10,
          createdCell: function (td, cellData, rowData, row, col) {
            if (rowData[15] == 1) {
              $(td).append(' <i class="fa fa-trophy"/>').css("color", "green");
            }
          },
        },
        {
          targets: 11,
          createdCell: function (td, cellData, rowData, row, col) {
            if (rowData[16] == 1) {
              $(td).append(' <i class="fa fa-trophy"/>').css("color", "green");
            }
          },
        },
      ],
    });

    $('<div style="width: 100%; height: 250px; overflow: auto"></div>')
      .append($("#cashierData"))
      .insertAfter($("#cashierData_wrapper div").first());
  } else {
    $("#pluData").DataTable({
      data: lines,
      columns: [{ title: "ID PLU" }, { title: "Deskripsi" }],
      bPaginate: false,
      bInfo: false,
      paging: false,
      processing: true,
      bDestroy: true,
      columnDefs: [{ orderable: true, className: "center", targets: 0 }],
    });

    $('<div style="width: 100%; height: 250px; overflow: auto"></div>')
      .append($("#pluData"))
      .insertAfter($("#pluData_wrapper div").first());
  }
}
