// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('DOM加载完成');
    console.log('mobileMenuToggle:', mobileMenuToggle);
    console.log('navMenu:', navMenu);
    
    if (mobileMenuToggle && navMenu) {
        console.log('元素找到，添加事件监听器');
        mobileMenuToggle.addEventListener('click', function(e) {
            console.log('汉堡菜单被点击');
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            console.log('菜单状态:', navMenu.classList.contains('active'));
        });
        
        // 添加触摸事件支持
        mobileMenuToggle.addEventListener('touchstart', function(e) {
            console.log('汉堡菜单被触摸');
            e.preventDefault();
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            console.log('菜单状态:', navMenu.classList.contains('active'));
        });
    } else {
        console.log('元素未找到');
    }
    
    // 点击导航链接后关闭移动端菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
    
    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 懒加载功能
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('.lazy-image');
        this.options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };
        this.init();
    }
    
    init() {
        // 检查是否支持 Intersection Observer
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.options);
            this.images.forEach(img => this.observer.observe(img));
        } else {
            // 降级处理：直接加载所有图片
            this.loadAllImages();
        }
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.loadImage(entry.target);
                this.observer.unobserve(entry.target);
            }
        });
    }
    
    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;
        
        // 创建新图片对象进行预加载
        const newImg = new Image();
        newImg.onload = () => {
            img.src = src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
        };
        newImg.onerror = () => {
            // 图片加载失败时显示占位符
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YWFhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWbvueJh+WKoOi9veWksei0pTwvdGV4dD48L3N2Zz4=';
            img.alt = '图片加载失败';
            img.classList.add('loaded');
        };
        newImg.src = src;
    }
    
    loadAllImages() {
        this.images.forEach(img => this.loadImage(img));
    }
}

// 图片加载错误处理
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img:not(.lazy-image)');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // 图片加载失败时显示占位符
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YWFhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWbvueJh+WKoOi9veWksei0pTwvdGV4dD48L3N2Zz4=';
            this.alt = '图片加载失败';
        });
    });
});

// 页面加载完成后的初始化
window.addEventListener('load', function() {
    // 添加页面加载完成的类名，用于CSS动画
    document.body.classList.add('loaded');
    
    // 初始化懒加载
    new LazyLoader();
    
    // 检查图片是否都已加载
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', function() {
                loadedImages++;
                if (loadedImages === images.length) {
                    // 所有图片加载完成
                    console.log('所有图片加载完成');
                }
            });
        }
    });
    
    // 性能监控
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        console.log('DOM内容加载时间:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
    }
});

// 预加载关键资源
function preloadCriticalResources() {
    // 预加载关键图片
    const criticalImages = [
        'images/logo.png',
        'images/hero-bg.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// 页面可见性API - 当页面不可见时暂停非关键操作
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面不可见时暂停非关键操作
        console.log('页面不可见，暂停非关键操作');
    } else {
        // 页面可见时恢复操作
        console.log('页面可见，恢复操作');
    }
});

// 网络状态检测
if ('navigator' in window && 'connection' in navigator) {
    const connection = navigator.connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        // 慢速网络，使用更激进的懒加载
        console.log('检测到慢速网络，启用激进懒加载');
    }
} 