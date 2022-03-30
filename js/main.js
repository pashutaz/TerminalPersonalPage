/** Navigation terminals handling */
(() => {
    const navItems = document.getElementsByClassName('nav-item');

    // console.log(navItems);

    for (const element of navItems) {
        element.addEventListener('click', () => {
            const content = document.getElementById(element.getAttribute('content'));
            console.log(content);

            if (!content) return false;

            new WinBox(`pashutaz@resume:${element.innerText}`, {
                // background: '#22bb22',
                width: 800,
                height: 400,
                // top: 50,
                x: "center",
                y: "center",
                onfocus: function () {
                    this.setBackground('#0a960a');
                },
                onblur: function () {
                    this.setBackground("#999");
                },
                mount: content
                    .cloneNode(true)
            });
        })
    }
})();

/** Last login date */
(() => {
    const lastLoginElem = document.getElementById('last-login');

    if (lastLoginElem) {
        const lastLoginDate = new Date();
        lastLoginDate.setMinutes(Math.max(lastLoginDate.getMinutes() - 15, 0))
        lastLoginElem.innerHTML = 'Last login: ' + lastLoginDate.toUTCString();
    }
})();