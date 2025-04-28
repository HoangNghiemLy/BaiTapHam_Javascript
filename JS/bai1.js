document.getElementById("kiemTra").onclick = function (e) {
    e.preventDefault();
    let diemChuan = document.getElementById("diemChuan").value * 1;
    let diem1 = document.getElementById("diem1").value * 1;
    let diem2 = document.getElementById("diem2").value * 1;
    let diem3 = document.getElementById("diem3").value * 1;
    let khuVuc = document.getElementById("khuVuc").value;
    let doiTuong = document.getElementById("doiTuong").value;

    //kiem tra diem thap hon 0 diem hoac 10 diem
    if (diemChuan > 30) {
        document.getElementById("ketQua").innerHTML = `Điểm chuẩn phải thấp hơn 30!!!`;
        return;
    }
    if (diem1 < 0 || diem1 > 10 || diem2 < 0 || diem2 > 10 || diem3 < 0 || diem3 > 10) {
        document.getElementById("ketQua").innerHTML = `Điểm từng môn phải lớn hơn 0 và nhỏ hơn 10!!!`;
        return;
    }

    //kiem tra neu co mon nao 0 diem??
    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        document.getElementById("ketQua").innerHTML = `RỚT vì có môn 0 điểm.`;
        return;
    }
    //điểm ưu tiên doi tuong
    let diemUTDoiTuong = 0;
    if (doiTuong === '1') diemUTDoiTuong = 2.5;
    else if (doiTuong === '2') diemUTDoiTuong = 1.5;
    else if (doiTuong === '3') diemUTDoiTuong = 1;
    //diem uu tien khu vuc
    let diemUTKhuVuc = 0;
    if (khuVuc === 'A') diemUTKhuVuc = 2;
    else if (khuVuc === 'B') diemUTKhuVuc = 1;
    else if (khuVuc === 'C') diemUTKhuVuc = 0.5;
    //tong diem
    let tongDiem = diem1 + diem2 + diem3 + diemUTDoiTuong + diemUTKhuVuc;
    //kiem tra dau hay rot
    if (tongDiem >= diemChuan) {
        document.getElementById("ketQua").innerHTML = `Chúc mừng bạn đã ĐẬU. Tổng điểm ${tongDiem}`;
    } else {
        document.getElementById("ketQua").innerHTML = `Bạn đã RỚT. Tổng điểm ${tongDiem}`;
    }
}