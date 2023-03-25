const dataArr = JSON.parse(sessionStorage.getItem("data")) || [];

const tableBody = document.getElementById("table-body");
dataArr.forEach(data => {
    const tr = document.createElement("tr");
    const tdNama = document.createElement("td");
    tdNama.appendChild(document.createTextNode(data.nama));
    const tdEmail = document.createElement("td");
    tdEmail.appendChild(document.createTextNode(data.email));
    const tdHobi = document.createElement("td");
    tdHobi.appendChild(document.createTextNode(data.hobi.join(", ")));
    const tdJkelamin = document.createElement("td");
    tdJkelamin.appendChild(document.createTextNode(data.jenisKelamin));
    const tdNegara = document.createElement("td");
    tdNegara.appendChild(document.createTextNode(data.negara));
    const tdAlamat = document.createElement("td");
    tdAlamat.appendChild(document.createTextNode(data.alamat));

    tr.appendChild(tdNama);
    tr.appendChild(tdEmail);
    tr.appendChild(tdHobi);
    tr.appendChild(tdJkelamin);
    tr.appendChild(tdNegara);
    tr.appendChild(tdAlamat);

    tableBody.appendChild(tr);
});

function back() {
    window.location.href = "Formulir.html";
}