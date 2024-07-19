const buttonsContainer = () => {
    if (document.getElementById('btnsContainer')) {
        return; 
    }

    const btnsContainer = document.createElement('div');
    btnsContainer.setAttribute('id', 'btnsContainer');
    btnsContainer.style.display = 'none';

    const hamburgerIcon = document.getElementById('hamburger');
    const buttons = document.getElementById('buttons');

    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const aboutBtn = document.getElementById('about');
    const bookingBtn = document.getElementById('bookTable');

    const closeBtn = document.createElement('div');
    closeBtn.setAttribute('id', 'closeBtn');
    closeBtn.innerHTML = '&#10006;';
    btnsContainer.insertBefore(closeBtn, btnsContainer.firstChild);

    const appendButtons = (targetContainer) => {
        targetContainer.appendChild(homeBtn);
        targetContainer.appendChild(menuBtn);
        targetContainer.appendChild(aboutBtn);
        targetContainer.appendChild(bookingBtn);
    };

    const handleResize = () => {
        if (window.innerWidth > 915) {
            btnsContainer.style.display = 'none';
            if (!buttons.contains(homeBtn)) {
                appendButtons(buttons);
                buttons.style.display = 'flex';
                hamburgerIcon.style.display = 'none';
            }
        } else {
            if (!btnsContainer.contains(homeBtn)) {
                buttons.style.display = 'none';
                appendButtons(btnsContainer);
                hamburgerIcon.style.display = 'block';
            }
        }
    };

    hamburgerIcon.addEventListener('click', () => {
        hamburgerIcon.style.display = 'none';
        btnsContainer.style.display = 'flex';
        adjustScrollPosition(btnsContainer);
    });

    window.addEventListener('resize', handleResize);

    closeBtn.addEventListener('click', () => {
        hamburgerIcon.style.display = 'block' ;
        btnsContainer.style.display = 'none';
    });

    const content = document.getElementById('content');
    if (!content.contains(btnsContainer)) {
        content.insertBefore(btnsContainer, content.firstChild);
    }

    handleResize();

    function adjustScrollPosition(container) {
        const yOffset = -80;
        const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

buttonsContainer();

export default buttonsContainer;
