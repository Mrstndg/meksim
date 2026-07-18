/* MekSim bu adresten gdntsrm.com/meksim adresine taşındı.
   Bu servis çalışanı, eskiden kurulmuş olanların yerini alıp kendini siler:
   önbellekleri temizler, kaydı kaldırır ve açık sekmeleri yeni adrese yollar. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
  })());
});
