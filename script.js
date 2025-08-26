document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    function playNote(note) {
        const keyElement = document.querySelector(`.key[data-note="${note}"]`);
        if (!keyElement) return;

        const audio = new Audio(`sounds/${note}.mp3`);
        audio.play();
        keyElement.classList.add('active');

        audio.addEventListener('ended', () => {
            keyElement.classList.remove('active');
        });
    }

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const note = key.dataset.note;
            playNote(note);
        });
    });

    // const typed = new Typed('#typed-strings', {
    //     // optional
    //     strings: [
    //         'Hello, world! ',
    //         'My name is Lily.',
    //         'a sophomore CS student.',
    //         'a wannabe techgirl.',
    //         'building for the modern web.',
    //         'fueled by matcha latte and Chopin.',
    //     ],
    //     typeSpeed: 50,
    //     backSpeed: 25,
    //     backDelay: 1500,
    //     startDelay: 500,
    //     loop: true,
    //     cursorChar: '|',
    // });

    var typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 10,
        backSpeed: 20,
        loop: true,
    });


    // var typed = new Typed("#typed-2", {
    //     stringsElement: "#typed-strings-2",
    //     typeSpeed: 40,
    //     backSpeed: 20,
    //     loop: true,
    // });

    // <p>Hello, world! ^500 My name is ^200  ^10000</p>
    //                     <p>Xin chào, ^500 mình ^200 tên là Lily. ^5000</p>
});
// theme switcher //
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // function to apply the saved theme on page load
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        // only need to set the class, the CSS will handle the icon
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
        }
    };

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    applyTheme();
});
