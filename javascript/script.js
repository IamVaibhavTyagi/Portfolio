window.onload = function () {
    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.selector', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 'screenWidth/2', 'screenWidth'],
            ]
        }
    }
    )



    const words = ["\u{1F601} Hello!", "\u{1F9B8} I am Vaibhav Tyagi ", "\u{1F4BB} A Software developer", "\u{1F393} Alumni of UT Dallas", "\u{1F4D7} MS in Computer Science"]; // Array of different words
    let currentWordIndex = 0;

    function typeNextWord() {
        const typewriterElement = document.getElementById("typewriter");
        typewriterElement.textContent = "";

        const currentWord = words[currentWordIndex];
        let charIndex = 0;

        function typeChar() {
            if (charIndex < currentWord.length) {
                typewriterElement.textContent += currentWord.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 10); // Delay between each character (adjust as needed)
            } else {
                setTimeout(eraseWord, 1100); // Delay before erasing the word (adjust as needed)
            }
        }

        function eraseWord() {
            if (typewriterElement.textContent.length > 0) {
                typewriterElement.textContent = typewriterElement.textContent.slice(
                    0,
                    -1
                );
                setTimeout(eraseWord, 20); // Delay between each character erasure (adjust as needed)
            } else {
                currentWordIndex = (currentWordIndex + 1) % words.length;
                setTimeout(typeNextWord, 10); // Delay before typing the next word (adjust as needed)
            }
        }

        typeChar();
    }

    typeNextWord();


    // Get all anchor tags on the page
    const links = document.querySelectorAll('a');

    // Add click event listener to each anchor tag
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target element to scroll to
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    const sendEmailButton = document.getElementById('sendEmailButton');

    sendEmailButton.addEventListener('click', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = 'Hi Vaibhav!';
        const body = 'Message: ' + message + '\n\nName: ' + name + '\nEmail: ' + email;

        const mailtoUrl = `mailto:vaibhavtyagi0808@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    });

}






