function handleCustomerTypeChange() {
    const customerType = document.getElementById('loaiKhachHang').value;
    const soKetNoiGroup = document.getElementById('soKetNoiGroup');

    if (customerType === 'Doanh nghiệp') {
        soKetNoiGroup.style.display = 'block';
    } else {
        soKetNoiGroup.style.display = 'none';
    }
}

function tinhHoaDon() {
    const maKhachHang = document.getElementById('maKhachHang').value;
    const loaiKhachHang = document.getElementById('loaiKhachHang').value;
    const soKetNoi = Number(document.getElementById('soKetNoi').value) || 0;
    const soKenhCaoCap = Number(document.getElementById('soKenhCaoCap').value);

    let phiXuLy = 0;
    let phiDichVu = 0;
    let phiKenhCaoCap = 0;
    let tongTien = 0;

    if (loaiKhachHang === 'Nhà dân') {
        phiXuLy = 4.5;
        phiDichVu = 20.5;
        phiKenhCaoCap = soKenhCaoCap * 7.5;
    } else if (loaiKhachHang === 'Doanh nghiệp') {
        phiXuLy = 15;
        if (soKetNoi <= 10) {
            phiDichVu = 75;
        } else {
            phiDichVu = 75 + (soKetNoi - 10) * 5;
        }
        phiKenhCaoCap = soKenhCaoCap * 50;
    }

    tongTien = phiXuLy + phiDichVu + phiKenhCaoCap;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    document.getElementById('ketQua').innerHTML = `
        <div class="p-4 bg-green-100 rounded mt-4">
          <p><strong>Mã khách hàng:</strong> ${maKhachHang}</p>
          <p><strong>Loại khách hàng:</strong> ${loaiKhachHang}</p>
          <p><strong>Tổng tiền phải trả:</strong> ${formatter.format(tongTien)}</p>
        </div>
      `;
}