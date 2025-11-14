document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    // Barcha navigatsiya havolalari
    const navLinks = document.querySelectorAll('#main-nav a'); 

    // --- MODAL ELEMENTLARINI ANIQLASH ---

    // Telegram
    const starsModal = document.getElementById("starsModal");
    const openStarsBtn = document.getElementById("open-stars-modal");
    const closeStarsBtn = document.querySelector(".stars-close-btn"); 
    
    const premiumModal = document.getElementById("premiumModal");
    const openPremiumBtn = document.getElementById("open-premium-modal");
    const closePremiumBtn = document.querySelector(".premium-close-btn"); 

    const virtualNumbersModal = document.getElementById("virtualNumbersModal");
    const openVirtualNumbersBtn = document.getElementById("open-virtual-numbers-modal");
    const closeVirtualNumbersBtn = document.querySelector(".virtual-numbers-close-btn"); 

    // O'yinlar
    const standoffModal = document.getElementById("standoffModal");
    const openStandoffBtn = document.getElementById("open-standoff-modal");
    const closeStandoffBtn = document.querySelector(".standoff-close-btn"); 

    const pubgModal = document.getElementById("pubgModal");
    const openPubgBtn = document.getElementById("open-pubg-modal");
    const closePubgBtn = document.querySelector(".pubg-close-btn"); 

    const mobileLegendsModal = document.getElementById("mobileLegendsModal");
    const openMobileLegendsBtn = document.getElementById("open-mobile-legends-modal");
    const closeMobileLegendsBtn = document.querySelector(".mlbb-close-btn"); 

    const brawlStarsModal = document.getElementById("brawlStarsModal");
    const openBrawlBtn = document.getElementById("open-brawl-modal");
    const closeBrawlBtn = document.querySelector(".brawl-close-btn"); 
    
    const freefireModal = document.getElementById("freefireModal");
    const openFreefireBtn = document.getElementById("open-freefire-modal");
    const closeFreefireBtn = document.querySelector(".freefire-close-btn");

    // Kripto
    const toncoinModal = document.getElementById("toncoinModal");
    const openToncoinBtn = document.getElementById("open-toncoin-modal");
    const closeToncoinBtn = document.querySelector(".toncoin-close-btn"); 

    const usdtModal = document.getElementById("usdtModal");
    const openUsdtBtn = document.getElementById("open-usdt-modal");
    const closeUsdtBtn = document.querySelector(".usdt-close-btn"); 
    
    // 1. HAMBURGER MENYUSI VA SKROLLING FUNKSIYALARI
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Navigatsiya havolalarini bosganda silliq aylantirish
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Agar mobil menyu ochiq bo'lsa, yopish
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                // Ikonani o'zgartirish
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }

            // Scroll-margin-top tufayli bu to'g'ri ishlashi kerak
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. BARCHA MODALLARNI BOSHQARISH

    // Yordamchi funksiya: Modalni ochish va yopish logikasini osonlashtiradi
    function setupModal(openBtn, closeBtn, modal) {
        if (openBtn) {
            openBtn.addEventListener('click', () => {
                modal.style.display = "flex"; // Modalni markazga joylashtirish uchun "flex"
                document.body.style.overflow = "hidden"; // Orqa fonni skroll qilishni o'chirish
            });
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = "none";
                document.body.style.overflow = "auto"; // Orqa fon skrollini yoqish
            });
        }
    }

    // Har bir Modalni sozlash
    setupModal(openStarsBtn, closeStarsBtn, starsModal);
    setupModal(openPremiumBtn, closePremiumBtn, premiumModal);
    setupModal(openVirtualNumbersBtn, closeVirtualNumbersBtn, virtualNumbersModal); 
    setupModal(openStandoffBtn, closeStandoffBtn, standoffModal);
    setupModal(openPubgBtn, closePubgBtn, pubgModal);
    setupModal(openMobileLegendsBtn, closeMobileLegendsBtn, mobileLegendsModal);
    setupModal(openBrawlBtn, closeBrawlBtn, brawlStarsModal);
    setupModal(openFreefireBtn, closeFreefireBtn, freefireModal); 
    setupModal(openToncoinBtn, closeToncoinBtn, toncoinModal);
    setupModal(openUsdtBtn, closeUsdtBtn, usdtModal);

    // Modal tashqarisini bosganda yopish (Barcha modallar uchun)
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
            document.body.style.overflow = "auto"; 
        }
    });
});