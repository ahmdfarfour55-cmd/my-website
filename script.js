// Galeri Albümleri ve Tüm Görsel Listeleri (A, B, C, D, E ve 0, 1, 2, 3, 4)
const projectsData = {
    landscape: {
        title: { tr: "Modern Konut & Peyzaj Projesi", en: "Modern Residential & Landscape Project", ar: "مشروع مجمع سكني ولاندسكيب حديث" },
        desc: { tr: "Dış cephe ve peyzaj açılarının tamamı", en: "Full exterior and landscape views", ar: "جميع زوايا المبنى والمساحات الخضراء" },
        images: ["A.jpeg", "B.jpeg", "C.jpeg", "D.jpeg", "E.jpeg"]
    },
    salon: {
        title: { tr: "Lüks Salon Tasarım Projesi", en: "Luxury Living Room Design", ar: "مشروع تصميم صالون فاخر" },
        desc: { tr: "İç mekan 3D render görselleri", en: "Interior 3D render views", ar: "لقطات الإظهار الداخلي للصالون" },
        images: ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"]
    },
    villa: {
        title: { tr: "Lüks Villa & Havuz Projesi", en: "Luxury Villa & Pool Design", ar: "مشروع فيلا مع مسبح" },
        desc: { tr: "Dış mekan ve gece aydınlatma görselleri", en: "Exterior and night lighting renders", ar: "لقطات التصميم الخارجي والإضاءة الليلية" },
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
        ]
    }
};

const translations = {
    tr: {
        page_title: "FAR4 Architecture Group | Mimari Tasarım, 3D Render & VR 360°",
        nav_home: "Anasayfa", nav_about: "Hakkımızda", nav_services: "Hizmetlerimiz", nav_gallery: "Portfolio", nav_vr: "VR 360° Tur", nav_contact: "İletişim",
        btn_whatsapp: "WhatsApp", hero_subtitle: "İç Mekan, Peyzaj & 3D Görselleştirme Studio", hero_title: "Fikirlerinizi Gerçekçi 3D & VR Tasarımlara Dönüştürüyoruz",
        hero_desc: "FAR 4 Architecture Group güvencesiyle konsept tasarımlar, iç mekan, peyzaj ve 360° Sanal Tur VR çözümleri.",
        btn_explore: "Projelerimizi İnceleyin", btn_vr_hero: "360° VR Turu Deneyimleyin", process_title: "Proje Sürecimiz",
        step1_title: "Konsept & Analiz", step1_desc: "Müşteri talepleri ve mekan ihtiyaçlarının belirlenmesi.",
        step2_title: "3D Modelleme", step2_desc: "Mimari ve iç mekanın üç boyutlu ortamda kurgulanması.",
        step3_title: "Render & VR Tur", step3_desc: "Fotogerçekçi detaylar ve interaktif 360° VR deneyimi.",
        step4_title: "Proje Teslimi", step4_desc: "Uygulamaya hazır yüksek çözünürlüklü sunum görselleri.",
        about_title: "Hakkımızda", about_p1: "FAR 4 Architecture Group olarak, peyzaj mimarisi, iç mekan tasarımı ve 3D görselleştirme alanlarında estetik ile işlevselliği bir araya getiriyoruz.",
        about_p2: "Projelerinizi daha uygulama aşamasına geçmeden yüksek kaliteli 3D renderlar ve 360 VR turlar ile görselleştiriyoruz.",
        services_title: "Hizmetlerimiz", serv_1_title: "İç Mekan & Mobilya Tasarımı", serv_1_desc: "Lüks oturma alanları ve konsept tasarımlar.",
        serv_2_title: "3D Fotogerçekçi Render", serv_2_desc: "Işık ve dokuları birebir yansıtan 3D görseller.",
        serv_3_title: "Peyzaj & Dış Mekan Düzenleme", serv_3_desc: "Bahçe, park ve villa çevresi peyzaj projeleri.",
        serv_4_title: "VR 360° Interaktif Sanal Tur", serv_4_desc: "Mekan içinde özgürce dolaşmanızı sağlayan VR turlar.",
        gallery_title: "Proje & Render Portfolyomuz", album_landscape_title: "Modern Konut & Peyzaj Projesi", album_landscape_sub: "Dış Cephe ve Peyzaj", album_landscape_count: "5 Görsel",
        album_salon_title: "Lüks Salon Tasarım Projesi", album_salon_sub: "İç Mekan Konsepti", album_salon_count: "5 Görsel", album_villa_title: "Lüks Villa & Havuz Projesi", album_villa_sub: "Gündüz ve Gece Görünümleri",
        vr_subtitle: "İnteraktif Sanal Tur Deneyimi", vr_title: "360° VR Sanal Proje Gezintisi", vr_desc: "Projelerimizin içerisinde 360 derece özgürce gezinebilir, tüm açıları inceleyebilirsiniz.",
        vr_instructions: "Görüntüyü çevirmek için farenizi basılı tutarak sürükleyin veya parmağınızı kaydırın.", vr_fullscreen: "Tam Ekran Aç",
        contact_card_title: "Projelerinizi Birlikte Hayata Geçirelim", contact_card_desc: "Hayalinizdeki mimari, iç mekan ve peyzaj projeleriniz için bize ulaşın.", footer_rights: "Tüm hakları saklıdır."
    },
    en: {
        page_title: "FAR 4 Architecture Group | Architecture, Interior & 3D VR Tour",
        nav_home: "Home", nav_about: "About Us", nav_services: "Services", nav_gallery: "Portfolio", nav_vr: "VR 360° Tour", nav_contact: "Contact",
        btn_whatsapp: "WhatsApp", hero_subtitle: "Interior, Landscape & 3D Visualization Studio", hero_title: "We Turn Your Ideas Into Realistic 3D & VR Designs",
        hero_desc: "Photorealistic 3D rendering and 360° VR Virtual Tour solutions for architectural projects.",
        btn_explore: "Explore Our Projects", btn_vr_hero: "Experience 360° VR Tour", process_title: "Our Project Process",
        step1_title: "Concept & Analysis", step1_desc: "Determining client demands and spatial needs.",
        step2_title: "3D Modeling", step2_desc: "Building architecture and interiors in a 3D environment.",
        step3_title: "Render & VR Tour", step3_desc: "High-quality visualization and interactive 360° VR tours.",
        step4_title: "Project Delivery", step4_desc: "High-resolution presentation visuals ready for execution.",
        about_title: "About Us", about_p1: "At FAR 4 Architecture Group, we combine aesthetics and functionality in landscape architecture and 3D visualization.",
        about_p2: "We visualize your projects with high-quality 3D renders and VR tours before implementation.",
        services_title: "Our Services", serv_1_title: "Interior & Furniture Design", serv_1_desc: "Luxury living areas and custom interior concepts.",
        serv_2_title: "3D Photorealistic Rendering", serv_2_desc: "High-resolution 3D visuals reflecting lighting and texture.",
        serv_3_title: "Landscape & Exterior Design", serv_3_desc: "Modern landscape architecture for gardens and villa surroundings.",
        serv_4_title: "VR 360° Interactive Virtual Tour", serv_4_desc: "360-degree panoramic virtual tours allowing free navigation.",
        gallery_title: "Project & Render Portfolio", album_landscape_title: "Modern Residential & Landscape Project", album_landscape_sub: "Exterior & Landscape Angles (A, B, C, D, E)", album_landscape_count: "5 Images",
        album_salon_title: "Luxury Living Room Project", album_salon_sub: "Interior Concept (0, 1, 2, 3, 4)", album_salon_count: "5 Images", album_villa_title: "Luxury Villa & Pool Project", album_villa_sub: "Day and Night Renders",
        vr_subtitle: "Interactive Virtual Tour Experience", vr_title: "360° VR Virtual Project Tour", vr_desc: "Freely navigate through our 360-degree architectural projects and inspect every detail.",
        vr_instructions: "Drag with your mouse or swipe on screen to rotate the view.", vr_fullscreen: "Open Fullscreen",
        contact_card_title: "Let's Bring Your Projects to Life", contact_card_desc: "Contact us for your dream architectural, interior, and landscape projects.", footer_rights: "All rights reserved."
    },
    ar: {
        page_title: "FAR 4 Architecture Group | التصميم المعماري، 3D Render والجولات الافتراضية",
        nav_home: "الرئيسية", nav_about: "من نحن", nav_services: "خدماتنا", nav_gallery: "معرض الأعمال", nav_vr: "جولة VR 360°", nav_contact: "تواصل معنا",
        btn_whatsapp: "واتساب", hero_subtitle: "استوديو التصميم الداخلي، اللاندسكيب والإظهار المعماري 3D", hero_title: "نحول أفكارك إلى تصاميم 3D وجولات افتراضية VR",
        hero_desc: "حلول الإظهار المعماري 3D والجولات الافتراضية 360° VR للتصاميم الداخلية والمشاريع المعمارية.",
        btn_explore: "استعرض مشاريعنا", btn_vr_hero: "تجربة جولة 360° VR", process_title: "خطوات العمل على مشروعك",
        step1_title: "التحليل والفكرة", step1_desc: "تحديد متطلبات العميل واحتياجات المساحات المعمارية.",
        step2_title: "النمذجة ثلاثية الأبعاد", step2_desc: "بناء وتجسيد المخططات والكتل في بيئة 3D.",
        step3_title: "الإظهار وجولة VR", step3_desc: "إضافة المواد والإضاءة الواقعية وتجهيز جولة تفاعلية 360°.",
        step4_title: "تسليم المشروع", step4_desc: "تقديم صور وعروض عالية الجودة جاهزة للتنفيذ.",
        about_title: "من نحن", about_p1: "في FAR 4 Architecture Group نجمع بين الجمالية والوظيفية في مجالات الهندسة المعمارية والتصميم الداخلي.",
        about_p2: "نقوم بتجسيد مشاريعك قبل البدء بالتنفيذ من خلال لقطات 3D Render وجولات 360 VR تفاعلية.",
        services_title: "خدماتنا", serv_1_title: "التصميم الداخلي والأثاث", serv_1_desc: "تصاميم فاخرة ومريحة لغرف المعيشة.",
        serv_2_title: "إظهار معماري واقعي 3D", serv_2_desc: "صور وإظهار ثلاثي الأبعاد يعكس الإضاءة والخامات بدقة.",
        serv_3_title: "تنسيق الحدائق واللاندسكيب", serv_3_desc: "مشاريع هندسة حدائق عصرية للفيلا والمساحات الخارجية.",
        serv_4_title: "جولات افتراضية تفاعلية VR 360°", serv_4_desc: "إمكانية التجول الحر بزاية 360 درجة داخل المكان.",
        gallery_title: "معرض المشاريع والإظهار المعماري", album_landscape_title: "مشروع مجمع سكني ولاندسكيب حديث", album_landscape_sub: "زوايا المبنى والمساحات الخضراء (A, B, C, D, E)", album_landscape_count: "5 صور",
        album_salon_title: "مشروع تصميم صالون فاخر", album_salon_sub: "التصميم الداخلي (0, 1, 2, 3, 4)", album_salon_count: "5 صور", album_villa_title: "مشروع فيلا فاخرة مع مسبح", album_villa_sub: "لقطات نهارية وليلية",
        vr_subtitle: "تجربة الجولة الافتراضية التفاعلية", vr_title: "جولة 360° VR في المشروع", vr_desc: "يمكنك التجول بحرية وبزاوية 360 درجة داخل المشاريع واستكشاف التفاصيل المعمارية.",
        vr_instructions: "اسحب بواسطة الماوس أو إصبعك على الشاشة لتدوير الرؤية بكافة الاتجاهات.", vr_fullscreen: "افتح بالشاشة الكاملة",
        contact_card_title: "لنبدأ العمل على مشروعك اليوم", contact_card_desc: "تواصل معنا للحصول على تصميم خاص يتناسب مع رؤيتك للمساحات المعمارية.", footer_rights: "جميع الحقوق محفوظة."
    }
};

let currentLang = 'tr';

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        if (menuIcon) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    const active = document.getElementById('page-' + pageId);
    if (active) active.classList.remove('hidden');
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu(); // Sayfa değiştiğinde mobil menüyü otomatik kapat
}

function handleHashNavigation() {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById('page-' + hash)) {
        showPage(hash);
    } else {
        showPage('home');
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    const body = document.getElementById('main-body');
    if (lang === 'ar') {
        body.setAttribute('dir', 'rtl');
        body.classList.add('rtl');
    } else {
        body.setAttribute('dir', 'ltr');
        body.classList.remove('rtl');
    }

    if (translations[lang] && translations[lang].page_title) {
        document.title = translations[lang].page_title;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    ['tr', 'en', 'ar'].forEach(l => {
        const btn = document.getElementById('btn-' + l);
        if (btn) {
            if (l === lang) {
                btn.classList.remove('opacity-60');
                btn.classList.add('opacity-100', 'font-bold');
            } else {
                btn.classList.add('opacity-60');
                btn.classList.remove('opacity-100', 'font-bold');
            }
        }
    });
}

function openAlbum(albumKey) {
    const album = projectsData[albumKey];
    if (!album) return;

    document.getElementById('modal-album-title').innerText = album.title[currentLang] || album.title['tr'];
    document.getElementById('modal-album-desc').innerText = album.desc[currentLang] || album.desc['tr'];

    const modalGrid = document.getElementById('modal-album-grid');
    if (modalGrid) {
        modalGrid.innerHTML = '';
        album.images.forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.alt = "FAR 4 Architecture Render";
            imgElement.className = 'w-full h-48 sm:h-52 object-cover rounded-xl cursor-pointer hover:opacity-90 transition border border-slate-100 shadow-sm hover:scale-[1.02]';
            imgElement.onclick = () => openSingleModal(img);
            modalGrid.appendChild(imgElement);
        });
    }

    document.getElementById('album-modal').classList.remove('hidden');
}

function closeAlbumModal() {
    document.getElementById('album-modal').classList.add('hidden');
}

function openSingleModal(imgSrc) {
    document.getElementById('single-modal-img').src = imgSrc;
    document.getElementById('single-modal').classList.remove('hidden');
}

function closeSingleModal() {
    document.getElementById('single-modal').classList.add('hidden');
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeSingleModal();
        closeAlbumModal();
    }
});

window.addEventListener('hashchange', handleHashNavigation);

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('tr');
    handleHashNavigation();
});