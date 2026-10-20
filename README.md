# 🌸 Thiệp Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10

Trang web thiệp chúc mừng tương tác 20/10 với giao diện tinh tế, hiệu ứng phong thư 3D, hoa nở vector, mưa cánh hoa, pháo hoa tên người nhận và tạo link cá nhân hóa gửi tặng qua Zalo / Messenger.

---

## ✨ Các Tính Năng Nổi Bật

1. **Phong thư hoàng gia 3D & Con dấu sáp**: Chạm vào con dấu sáp vỡ ra, nắp thư mở 3D, thiệp trượt lên thanh thoát.
2. **Bó hoa nở theo tên**: Các loài hoa (Hoa Hồng Nhung, Tulip Pastel, Cúc Họa Mi, Hướng Dương) nở bung cánh với animation SVG vector mượt mà, có nút *"Tặng thêm hoa"* để đổi loại hoa.
3. **Hiệu ứng đánh chữ (Typewriter)**: Dòng chữ chúc mừng được gõ từng ký tự ấm áp theo phong cách máy đánh chữ cổ điển.
4. **Lời chúc theo vai trò**: Kho lời chúc chọn lọc ý nghĩa cho:
   - 🌹 Người yêu / Vợ
   - 👵 Mẹ kính yêu
   - 📚 Cô giáo
   - 💼 Nữ đồng nghiệp / Sếp
   - ✨ Bạn thân / Chị em
   - 😄 Bạn nam *(Troll vui galant nhắc tặng hoa)*
5. **Tạo link gửi tặng tức thì**: Tạo link tự động dạng `.../?ten=Lan&role=crush&hoa=tulip`. Người nhận chỉ cần bấm vào link là thiệp tự mở với tên và lời chúc dành riêng cho họ.
6. **Bầu trời pháo hoa & Tên người nhận trên trời**: Bắn pháo hoa rực rỡ và các hạt ánh sáng lấp lánh xếp thành tên người nhận.
7. **Lưu ảnh thiệp độ phân giải cao**: Nút *"Lưu ảnh thiệp"* chụp lại thiệp thành file ảnh PNG sắc nét để đăng Facebook / Instagram / Zalo Story.
8. **Nhạc nền lofi nhẹ nhàng**: Tích hợp cả Web Audio API Synthesizer êm dịu, không lo bị chặn bản quyền hay lỗi link MP3 ngoài.

---

## 🚀 Hướng Dẫn Đẩy Lên Vercel (2 Cách Siêu Nhanh)

### Cách 1: Dùng Vercel CLI (Nhanh nhất - 1 phút)
Mở terminal tại thư mục này và chạy:
```bash
npx vercel
```
- Làm theo các bước trên màn hình (Enter chọn mặc định).
- Sau vài giây, bạn sẽ nhận được đường link Vercel dạng `https://womendays-xxxx.vercel.app` để gửi tặng ngay!

### Cách 2: Đẩy lên GitHub rồi kết nối Vercel
1. Khởi tạo Git và đẩy lên GitHub:
```bash
git init
git add .
git commit -m "Thiệp 20/10 Chúc mừng Phụ nữ Việt Nam"
git branch -M main
git remote add origin <URL_REPO_GITHUB_CỦA_BẠN>
git push -u origin main
```
2. Truy cập [vercel.com](https://vercel.com) -> Chọn **Add New Project** -> Chọn repository vừa tạo -> Bấm **Deploy**.
3. Vercel tự động build và cấp link miễn phí.

---

## 💻 Xem Thử Trực Tiếp Trên Máy (Localhost)
Bạn có thể mở trực tiếp file `index.html` trên trình duyệt hoặc chạy dev server:
```bash
npx serve .
# hoặc
npx live-server
```
