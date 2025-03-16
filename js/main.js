document.addEventListener('DOMContentLoaded', function () {
    // 平滑滚动
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }

    // 滚动时导航栏效果
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // 截图悬停效果
    const heroScreenshot = document.querySelector('.hero-image .screenshot');
    if (heroScreenshot) {
        heroScreenshot.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
        });

        heroScreenshot.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    }

    // 下载按钮点击事件
    const downloadButtons = document.querySelectorAll('.download-btn');

    for (const button of downloadButtons) {
        button.addEventListener('click', function (e) {
            const platform = this.getAttribute('data-platform');

            // 这里可以添加下载统计或其他逻辑
            console.log(`Download clicked for ${platform}`);

            // 如果不是直接下载链接，可以阻止默认行为
            // e.preventDefault();
        });
    }
}); 