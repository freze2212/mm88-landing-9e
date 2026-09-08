/**
 * ═══════════════════════════════════════════════
 *  CHỈNH LINK TẠI ĐÂY — áp dụng cho MỌI domain trên CF
 * ═══════════════════════════════════════════════
 */
window.SITE_CONFIG = {
    registerUrl: 'https://mm88e9e23qc.mm6577.com/register.html',
    videoUrl: 'https://blob.kcam.io/uploads/kjc/1121.mp4',
    siteName: 'MM88',

    /**
     * Chỉ dùng khi domain cụ thể cần link KHÁC link mặc định ở trên.
     * Domain mới add trên Cloudflare KHÔNG cần khai báo — tự dùng registerUrl.
     */
    domainOverrides: {
        // 'tenmienkhac.com': {
        //     registerUrl: 'https://link-rieng.com/register.html'
        // }
    },

    getRegisterUrl: function () {
        var host = (window.location.hostname || '').toLowerCase();
        var base = host.replace(/^www\./, '');

        if (this.domainOverrides[host] && this.domainOverrides[host].registerUrl) {
            return this.domainOverrides[host].registerUrl;
        }
        if (this.domainOverrides[base] && this.domainOverrides[base].registerUrl) {
            return this.domainOverrides[base].registerUrl;
        }

        return this.registerUrl;
    },

    getVideoUrl: function () {
        return this.videoUrl;
    },

    getSiteUrl: function () {
        return window.location.protocol + '//' + window.location.host;
    }
};


// Universal domains.json real-time synchronization
(function() {
  try {
    fetch('/domains.json')
      .then(function(r) { return r.json(); })
      .then(function(dj) {
        if (!dj) return;
        var h = (window.location.hostname || '').toLowerCase();
        var normH = h.replace(/^www\./, '');
        var entry = dj[h] || dj[normH] || dj['www.' + normH];
        if (entry) {
          var target = entry.main_url || entry.url || entry.link || (typeof entry === 'string' ? entry : '');
          if (target) {
            window.REDIRECT_URL = target;
            if (window.SITE_CONFIG) {
              window.SITE_CONFIG.defaultLink = target;
              window.SITE_CONFIG.registerUrl = target;
              if (window.SITE_CONFIG.linksByDomain) {
                window.SITE_CONFIG.linksByDomain[normH] = target;
                window.SITE_CONFIG.linksByDomain[h] = target;
              }
            }
            if (window.LINK_CONFIG) {
              window.LINK_CONFIG.default = target;
              if (window.LINK_CONFIG.domains) {
                window.LINK_CONFIG.domains[normH] = target;
                window.LINK_CONFIG.domains[h] = target;
              }
            }
            if (window.LP_CONFIG) {
              window.LP_CONFIG.gameUrl = target;
            }
            var links = document.querySelectorAll('a.redirect-link, a.btn-register, a.cta-btn');
            for (var i = 0; i < links.length; i++) {
              links[i].href = target;
            }
          }
        }
      })
      .catch(function() {});
  } catch(e) {}
})();
