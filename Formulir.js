const simpanData = () => {
    const inputNama = document.getElementById("nama").value.trim();
    const inputEmail = document.getElementById("email").value.trim();
    const inputHobi = Array.from(document.querySelectorAll('input[name="hobi[]"]:checked')).map(el => el.value);
    const inputJkelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const inputNegara = document.getElementById("negara").value;
    const inputAlamat = document.getElementById("alamat").value.trim();

    if (inputNama === "" || inputEmail === "" || inputHobi.length === 0 || inputJkelamin === "" || inputNegara === "" || inputAlamat === "") {
        alert("Harap isi semua field!");
        return;
    }

    const data = {
        nama: inputNama,
        email: inputEmail,
        hobi: inputHobi,
        jenisKelamin: inputJkelamin,
        negara: inputNegara,
        alamat: inputAlamat
    };

    const dataArr = JSON.parse(sessionStorage.getItem("data")) || [];
    dataArr.push(data);
    sessionStorage.setItem("data", JSON.stringify(dataArr));

    alert("Data berhasil disimpan!");

    window.location.href = 'RiwayatForm.html';
};
