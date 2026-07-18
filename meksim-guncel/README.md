# MekSim — Mekanik Montaj & Simülasyon

Tarayıcıda çalışan, kurulum gerektirmeyen 3B mekanik montaj ve kinematik simülasyon aracı.
Dişli, vida, diferansiyel vida, kramayer, somun, piston, hazne ve içten yanmalı motor bloğu gibi parçaları gerçek
mühendislik ölçüleriyle üret, montajla ve mekanizmanın çalışmasını simüle et.

## Ne yapar?

- **Parametrik parçalar** — modül, diş sayısı, çap, adım gibi gerçek ölçüleri gir; geometri kodla üretilir (evolvent dişli profili dahil).
- **Montaj** — parçaları sürükle, birbirine yakın bırakınca 🧲 otomatik kavraşır; SolidWorks tarzı ilişkiler (kavraşma, aynı mil, vida-somun, kramayer, eş merkez, teğet, mesafe, açı…).
- **Simülasyon** — bir parçaya motor bağla, mekanizma bağlantı grafiği üzerinden hareketi yayar; çevrim oranları, hızlar, tork ve debi analizi canlı hesaplanır.
- **Parça Tasarımı** — kendi profilini çiz (çizgi, dikdörtgen, daire, altıgen, delik; 1 mm ızgara + nokta yakalama + ölçü düzenleme), ekstrüzyon veya döndürme ile katıya çevir.
- **Motor görselleştirme** — 🏎 "1.4 L — 4 Silindir Motor" şablonu: krank mili, biyeller ve pistonlar gerçek krank-biyel kinematiğiyle canlı çalışır; silindir sayısı, çap ve strok parametrik.
- **Yardımcılar** — çarpışma kontrolü, çoğalt, dizi, mesafe ölç, patlatılmış görünüm, hazır şablonlar, JSON kaydet/aç, 🔗 link ile paylaşım, geri/ileri al (Ctrl+Z / Ctrl+Y), STL dışa aktarım, video ve görüntü alma.
- **PWA** — telefona/masaüstüne uygulama gibi kurulabilir, ilk açılıştan sonra çevrimdışı çalışır.

## Kullanım

Yayınlanan adrese gir, tarayıcıda açılır. Kurulum yok. Üstteki sekmelerden
**Parça Tasarımı** ile kendi parçanı çiz, **Montaj** ile birleştir, **Çalıştır** ile simüle et.

## Teknoloji

Tek `index.html` + yerel [Three.js](https://threejs.org). Statik site — herhangi bir statik hostta çalışır.
