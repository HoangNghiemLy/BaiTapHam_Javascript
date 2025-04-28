document.getElementById("tinhTienDien").onclick = function (e) {
    let ten = document.getElementById("ten").value.trim();
    let soKW = document.getElementById("soKw").value * 1;
    //kiem tra soKW co lon hon 0??? kiểm tra tên và ko được rỗng
    if (!ten || isNaN(soKW) || soKW < 0) {
        document.getElementById("ketQua").innerHTML = `Vui lòng nhập đúng thông tin. Số KW không được rỗng và phải lớn hơn 0!!!`;
        return;
    }
    //tính tiền
    let tien = 0;
    let soKWConLai = soKW;

    if (soKWConLai > 0) {
        let soKWBac = Math.min(soKWConLai, 50);
        tien += soKWBac * 500;
        soKWConLai -= soKWBac;
    }
    if (soKWConLai > 0) {
        let soKWBac = Math.min(soKWConLai, 50);
        tien += soKWBac * 650;
        soKWConLai -= soKWBac;
    }
    if (soKWConLai > 0) {
        let soKWBac = Math.min(soKWConLai, 100);
        tien += soKWBac * 850;
        soKWConLai -= soKWBac;
    }
    if (soKWConLai > 0) {
        let soKWBac = Math.min(soKWConLai, 150);
        tien += soKWBac * 1100;
        soKWConLai -= soKWBac;
    }
    if (soKWConLai > 0) {
        tien += soKWConLai * 1300;
    }
    document.getElementById("ketQua").innerHTML = `
        Tên khách hàng: <strong>${ten}</strong> <br>
        Số KW tiêu thụ: <strong>${soKW}</strong> <br>
        Tiền điện: <strong>${tien.toLocaleString()} VND</strong>
    `;

}