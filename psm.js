//TAMBAH RUANG UNTUK TABEL
const dataTabel = document.createElement('div');
dataTabel.id = 'dataTabel';
document.getElementsByTagName("br")[1].insertAdjacentElement('afterend', dataTabel)

// TAMBAH TOMBOL SHOW
const button = document.querySelector('div[style="clear: both; text-align: left; margin-right: 130px;"]');
const show = document.createElement('button');
show.type = 'button';
show.className = 'menuButton';
show.textContent = 'Show';
button.appendChild(show);
show.addEventListener('click', showData)

// TAMBAH BRANCH
const branch = document.querySelector('select[name="branch"]');
const cls = document.createElement('option');
cls.textContent = "CILEUNGSI2";
cls.value = "JZ01";
branch.appendChild(cls);

//VARIABEL UNTUK FETCH



function showData() {
    const periode = document.getElementById('r-periode').value;//tanggalbulantahun
    const psm = document.getElementById('s-pdm').value;//id psm 
    const cabang = branch.value;
    const status = document.querySelector('select[name="fstatus"]').value;

    fetch(`https://intranet.sat.co.id/pdm/public/report/download/act/ach-cash/v_id/${psm}/v_kdbranch/${cabang}/v_tipe//v_periode/${periode}/v_karyawan//v_store//v_status/${status}`)
        .then(response => response.text())
        .then(csv => {
            document.querySelector('#dataTabel').innerHTML = csv;
            setheader();
        })
    console.log('berhasil');

}
function setheader() {

    const headers = document.querySelectorAll('table')[1].querySelectorAll('th');

    for (let i = 8; i < headers.length; i++) {
        headers[i].addEventListener('click', function () {
            doSort(i - 3);
        });
    }
}

function doSort(col) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelectorAll("table")[1];
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 2; i < (rows.length - 2); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[col];
            y = rows[i + 1].getElementsByTagName("td")[col];

            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
