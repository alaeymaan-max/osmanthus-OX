// Fail script.js

// Microsoft Clarity Tracking
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "gz4n2970uq");

// LinkedIn Insight Tag
_linkedin_partner_id = "8924817";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);

(function(l) {
    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[]}
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
})(window.lintrk);

// Contoh Fungsi Toggle Menu Mobile (Logik asas)
document.querySelector('.Nav__top-bar-mobile-menu button')?.addEventListener('click', function() {
    const menu = document.querySelector('.Nav__menu-mobile');
    if(menu) {
        menu.classList.toggle('opacity-100');
        menu.classList.toggle('pointer-events-auto');
    }
});
