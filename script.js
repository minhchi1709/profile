function onClick(type, icon) {
    const ele = document.getElementById(type);
    console.log(ele.classList);
    if (ele.classList.contains('visible')) {
        ele.classList.remove('visible');
        icon.style.transform = 'rotate(0deg)';
    } else {
        ele.classList.add('visible');
        icon.style.transform = 'rotate(180deg)';
    }
}

function handleNavigation(type, navlink) {
    document.querySelectorAll('.nav-link').forEach(navlink => {
            navlink.classList.remove('active');
        }
    );
    if (type !== 'home') {
        navlink.classList.add('active');
    }

    document.querySelectorAll('.col').forEach(div => {
        if (div.id !== 'type') {
            div.style.display = 'none';
        }
    })
    document.getElementById(type).style.display = 'block';
}