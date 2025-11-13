document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('#main-nav a');

    // 1. HAMBURGER MENYUSI FUNKSIYASI
    menuToggle.addEventListener('click', () => {
        // 'open' klassini qo'shish/olib tashlash
        mainNav.classList.toggle('open');
        
        // Ikonkani o'zgartirish (uch chiziqdan X ga)
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // X ikonkasi
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 2. YUMSHOQ SKROLLING (SMOOTH SCROLL)
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Mobil menyuni yopish (agar ochiq bo'lsa)
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. SOTIB OLISH TUGMASI OGOHLANTIRISHI
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // A tagi ichida bo'lgani uchun brauzer Telegramga o'tib ketmasligi uchun
            event.preventDefault(); 
            
            const productName = event.target.closest('.product-card').querySelector('h3').textContent;

            alert(`${productName} mahsuloti uchun buyurtma berishga tayyormisiz? Siz hozir Telegram kanalimizga yo'naltirilasiz.`);

            const telegramChannelUrl = event.target.closest('a').href;
            window.open(telegramChannelUrl, '_blank');
        });
    });
});