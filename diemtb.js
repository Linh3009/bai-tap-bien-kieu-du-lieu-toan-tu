
Ly=prompt('Nhập điểm Lý:');
Hoa=prompt('Nhập điểm Hóa');
Sinh=prompt('Nhập điểm Sinh:');

let dLy=parseInt(Ly);
let dHoa=parseInt(Hoa);
let dSinh=parseInt(Sinh);

let Diemtong=dLy+dHoa+dSinh;
let Diemtb= Diemtong/3;
document.write('Điểm tổng=' +Diemtong);
document.write('<br>')
document.write('Điểm TB=' +Diemtb);
