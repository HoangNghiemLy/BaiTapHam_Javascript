document.getElementById("tinhThue").onclick = function (e) {
    e.preventDefault();
    let ten = document.getElementById("hoTen").value.trim();
    let tongThuNhap = document.getElementById("thuNhap").value * 1;
    let soNguoiPhuThuoc = document.getElementById("phuThuoc").value * 1;

    let thuNhapChiuThue = tongThuNhap - 4e6 - (soNguoiPhuThuoc * 1.6e6);

    let thueSuat = 0;
    if (thuNhapChiuThue <= 60e6) thueSuat = 5;
    else if (thuNhapChiuThue <= 120e6) thueSuat = 10;
    else if (thuNhapChiuThue <= 210e6) thueSuat = 15;
    else if (thuNhapChiuThue <= 384e6) thueSuat = 20;
    else if (thuNhapChiuThue <= 624e6) thueSuat = 25;
    else if (thuNhapChiuThue <= 960e6) thueSuat = 30;
    else thueSuat = 35;

    let thuePhaiDong = thuNhapChiuThue * thueSuat / 100;

    let formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    document.getElementById("ketQua").innerHTML = `
        Họ tên: ${ten} <br>
        Thu nhập chịu thuế: ${formatter.format(thuNhapChiuThue)} <br>
        Thuế suất: ${thueSuat}%<br>
        Thuế phải đóng: ${formatter.format(thuePhaiDong)}
    `;
}