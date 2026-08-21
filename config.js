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
