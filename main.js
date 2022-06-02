// BAI 1: TÍNH TIỀN LƯƠNG //
/**
 * + Đầu vào:
 * - Lương một ngày: 100000
 * - Số ngày làm
 * - Tiền lương = 0
 * + Xử lý:
 * - Gán biến Lương một ngày là 100000
 * - Gán biến cho số ngày làm là 20 ngày
 * - Tạo biến Tiền lương 
 * - Dùng công thức tính lương: Tiền lương = Lương một ngày * Số ngày làm
 * - In biến ra console
 * + Đầu ra:
 * - Tiền lương
 */
var LuongMotNgay = 100000;
var SoNgayLam = 20;
var TienLuong = 0;
TienLuong = LuongMotNgay * SoNgayLam;
console.log("Tiền Lương là :" + TienLuong);

// BAI 2: TÍNH TRUNG BÌNH //
/**
 * + Đầu vào:
 * - Năm số
 * - Giá trị Trung bình
 * + Xử lý:
 * - Gán biến cho lần lượt 5 số
 * - Công thức tính tổng 5 số rồi lấy tổng chia cho 5
 * - In biến ra console
 * + Đầu ra:
 * - Giá trị Trung bình
 */
var SoThuNhat = 2;
var SoThuHai = 4;
var SoThuBa = 6;
var SoThuTu = 8;
var SoThuNam = 10;
var GiaTriTrungBinh = 0;
GiaTriTrungBinh = (SoThuNhat + SoThuHai + SoThuBa + SoThuTu + SoThuNam) / 5;
console.log("Giá trị Trung bình: " + GiaTriTrungBinh);

// BAI 3: QUY ĐỔI TIỀN //
/**
 * + Đầu vào:
 * - Giá USD: 23500 VND
 * - Số tiền USD nhập vào: 5
 * + Xử lý:
 * - Gán biến Giá USD
 * - Gán biến cho Số tiền USD là 5
 * - Gán biến cho Giá tiền VND
 * - Công thức: Giá tiền VND = Số tiền USD * Giá USD
 * - In biến ra console
 * + Đầu ra:
 * - Giá tiền VND
 */
var GiaUSD = 23500;
var SoTienUSD = 5;
var GiaTienVND = SoTienUSD * GiaUSD;
console.log("Giá tiền VND sau quy đổi: " + GiaTienVND);

// BAI 4: TÍNH CHU VI, DIỆN TÍCH HCN //
/**
 * + Đầu vào:
 * - Chiều dài
 * - Chiều rộng
 * + Xử lý:
 * - Gán biến cho Chiều dài là 9
 * - Gán biến cho Chiều rộng là 7
 * - Gán biến cho Chu vi
 * - Gán biến cho Diện tích
 * - Công thức Chu vi = (Chiều dài + Chiều rộng) * 2;
 * - Công thức Diện tích = Chiều dài * Chiều rộng
 * - In biến ra console
 * + Đầu ra:
 * - Chu vi
 * - Diện tích
 */
var ChieuDai = 9;
var ChieuRong = 7;
var ChuVi = (ChieuDai + ChieuRong) * 2;
var DienTich = ChieuDai * ChieuRong;
console.log("Chu vi: " + ChuVi);
console.log("Diện Tích: " + DienTich);

// BAI 5: TÍNH TỔNG 2 KÝ SỐ //
/**
 * + Đầu vào:
 * - Số có 2 chữ số: n = 23
 * + Xử lý:
 * - Tách lấy hàng chục: n / 10 
 * - Tách lấy hàng đơn vị: n % 10
 * - Tính tổng = Hàng chục + Hàng đơn vị
 * - In biến ra console
 * + Đầu ra:
 * - Tổng 2 ký số
 */
var n = 23;
var HangChuc = Math.floor(n / 10);
var HangTram = Math.floor(n % 10);
var Tong2KySo = HangChuc + HangTram;
console.log("Tổng 2 Ký Số là: " + Tong2KySo);