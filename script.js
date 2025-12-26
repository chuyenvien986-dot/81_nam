// 1. Thông báo chào mừng khi vào trang
window.onload = function() {
    console.log("Website kỷ niệm 81 năm QĐND VN - Script by khangkhan99");
    alert("Chào mừng bạn đến với trang kỷ niệm 81 năm thành lập Quân đội Nhân dân Việt Nam!\nKịch bản: khangkhan99 | Bản quyền: VPAR");
};

// 2. Hiệu ứng các đoạn lịch sử hiện ra khi cuộn trang
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Áp dụng hiệu ứng cho các thẻ .event (mốc lịch sử)
document.querySelectorAll('.event').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// 3. Hiệu ứng đổi màu đèn LED ngẫu nhiên để thêm sinh động
const ledText = document.querySelector('.led-text');
setInterval(() => {
    const colors = ['#ff0000', '#ff3333', '#ffd700', '#ffffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Chỉ đổi màu nhẹ để vẫn giữ độ rực rỡ
    ledText.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px #ff0000`;
}, 2000);

// 4. Console log bản quyền bảo mật
console.log("%cThiết kế bởi khangkhan99 - VPAR", "color: yellow; background: red; font-size: 20px; font-weight: bold;");
                    
