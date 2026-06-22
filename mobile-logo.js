// Smooth logo scroll behavior for mobile - Apple-style
function handleLogoScroll() {
    const logo = document.querySelector('.COOPER-BOWMAN-LOGO');
    const footer = document.querySelector('footer');
    const socialContainer = document.querySelector('.social-container');
    
    if (!logo || !footer || !socialContainer) return;
    
    // Get measurements
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const logoHeight = logo.offsetHeight;
    
    // Calculate when logo should start moving up
    // This is when the footer area starts entering the viewport
    const footerStart = documentHeight - windowHeight - 95;
    
    if (scrollY > footerStart) {
        // Calculate how much to push the logo up
        const scrollProgress = scrollY - footerStart;
        const maxPush = 160; // Maximum distance to push up
        const pushAmount = Math.min(scrollProgress, maxPush);
        
        // Apply smooth transform
        logo.style.position = 'fixed';
        logo.style.bottom = `${20 + pushAmount}px`;
        logo.style.transition = 'bottom 0.05s ease-out';
    } else {
        // Logo in normal fixed position
        logo.style.bottom = '20px';
        logo.style.transition = 'bottom 0.05s ease-out';
    }
}

// Only run on mobile screens
if (window.innerWidth <= 767) {
    window.addEventListener('scroll', handleLogoScroll);
    window.addEventListener('load', handleLogoScroll);
    window.addEventListener('resize', handleLogoScroll);
}