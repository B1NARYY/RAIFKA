document.addEventListener('DOMContentLoaded', () => {
    const feed = document.querySelector('[data-feed]');
    const reels = Array.from(document.querySelectorAll('[data-reel]'));
    const scrollUpButtons = document.querySelectorAll('[data-scroll-up]');
    const scrollDownButtons = document.querySelectorAll('[data-scroll-down]');
    const langToggle = document.querySelector('[data-lang-toggle]');
    const navLinks = Array.from(document.querySelectorAll('[data-section-link]'));
    const posterImage = document.querySelector('[data-poster-image]');
    const posterEdition = document.querySelector('[data-poster-edition]');

    const translations = {
        en: {
            nav_fyp: 'For You',
            nav_about: 'About Us',
            nav_motivation: 'Our Motivation',
            nav_faq: 'FAQ',
            hero_eyebrow: 'Participant project',
            hero_title: 'We made our own Gen Z campaign space',
            hero_lead: 'A dark, high-contrast showcase for our skills, videos, and team story. Use the For You feed to present clips and scroll through our project.',
            hero_support: 'We built this page to feel like a real campaign product, not a banking brochure.',
            hero_cta_primary: 'Watch the feed',
            hero_cta_secondary: 'See FAQ',
            hero_fact_1: 'Built for short-form video storytelling',
            hero_fact_2: 'Designed for mobile-first scrolling',
            hero_fact_3: 'English by default, Czech on demand',
            poster_label: 'Campaign poster',
            poster_alt: 'Campaign poster, English version',
            fyp_label: 'For You',
            reel_1_title: 'A strong hook, a clean frame, and a clear message',
            reel_1_text: 'This slot is ready for your first campaign clip, teaser, or intro video.',
            reel_2_title: 'Fast edits, sharp typography, and a social-native vibe',
            reel_2_text: 'Use this reel for a behind-the-scenes shot or a quick product reveal.',
            reel_3_title: 'Clean motion, bold contrast, and a memorable punchline',
            reel_3_text: 'Perfect for a smart punchy message that feels more like TikTok than banking.',
            reel_4_title: 'A polished clip space for our team’s strongest skills',
            reel_4_text: 'Swap in your finished video later and keep the same layout intact.',
            reel_5_title: 'Designed to loop, scroll, and keep people watching',
            reel_5_text: 'The feed is made for short attention spans and strong visual rhythm.',
            reel_6_title: 'Your strongest clip goes here at the end of the loop',
            reel_6_text: 'When it finishes, the feed wraps around so the experience never feels stuck.',
            like: 'Like',
            share: 'Share',
            comment: 'Comment',
            about_eyebrow: 'About us',
            about_title: 'We are the participant team behind this concept',
            team_role_1: 'Developer and UI builder',
            team_role_2: 'Creative lead and content direction',
            team_role_3: 'Strategy, outreach, and presentation',
            motivation_eyebrow: 'Our motivation',
            motivation_title: 'Why we built it this way',
            motivation_text_1: 'We wanted to show Raiffeisenbank in a format that feels native to our generation: fast, visual, direct, and easy to scroll through.',
            motivation_text_2: 'Instead of a corporate banking look, we focused on a dark, energetic style with neon yellow accents, strong typography, and a feed that can hold our videos, skills, and story.',
            motivation_text_3: 'The goal is simple: make the project feel ambitious, modern, and believable as a participant pitch.',
            motivation_text_4: 'Every screen is intentionally short and dense so judges can understand the idea fast and still remember the brand feeling after the scroll.',
            about_copy: 'We combine design, development, and presentation so the project looks polished from the first screen to the last.',
            about_copy_2: 'Each person brings a different strength, which helps us build something that feels complete instead of one-dimensional.',
            team_note_1: 'Turns ideas into code and interactive layout.',
            team_note_2: 'Shapes the tone, visuals, and content flow.',
            team_note_3: 'Keeps the message clear and focused for the jury.',
            team_meta_1: '20 years old • Software Engineering and Technology, FEL',
            team_meta_2: '20 years old • Sociology, Contemporary Society Studies, FSV',
            team_meta_3: '20 years old • Sociology, Contemporary Society Studies, FSV',
            faq_eyebrow: 'FAQ',
            faq_title: 'Quick answers about the project',
            faq_copy: 'A clean replacement that keeps the four-screen structure useful and focused.',
            faq_q1: 'What is this project?',
            faq_a1: 'It is our participant presentation for Next Gen Lab, built to show skills, ideas, video content, and a strong Gen Z visual direction.',
            faq_q2: 'What should viewers notice first?',
            faq_a2: 'The black and yellow visual system, the reel-style feed, and the fact that the page is designed to feel young, bold, and modern.',
            faq_q3: 'What can you replace here later?',
            faq_a3: 'You can turn this screen into process notes, video credits, a mini case study, or a behind-the-scenes section about how you made the site.',
            faq_q4: 'How is the reel supposed to work?',
            faq_a4: 'Each reel should fit inside the video area, with its own internal scroll or snap behavior, instead of dragging the whole page around.'
        },
        cs: {
            nav_fyp: 'Pro vás',
            nav_about: 'O nás',
            nav_motivation: 'Naše motivace',
            nav_faq: 'FAQ',
            hero_eyebrow: 'Projekt účastníků',
            hero_title: 'Vytvořili jsme vlastní Gen Z prostor pro kampaň',
            hero_lead: 'Tmavá, kontrastní prezentace našich dovedností, videí a příběhu týmu. Sekce Pro vás slouží pro ukázky videí a plynulé procházení projektu.',
            hero_support: 'Chtěli jsme, aby stránka působila jako skutečný kampanový produkt, ne jako bankovní brožura.',
            hero_cta_primary: 'Přehrát feed',
            hero_cta_secondary: 'Zobrazit FAQ',
            hero_fact_1: 'Vytvořeno pro krátká videa',
            hero_fact_2: 'Navrženo pro mobile-first scrollování',
            hero_fact_3: 'Výchozí jazyk angličtina, čeština na přepnutí',
            poster_label: 'Kampanový plakát',
            poster_alt: 'Kampanový plakát, česká verze',
            fyp_label: 'Pro vás',
            reel_1_title: 'Silný hook, čistý rám a jasné sdělení',
            reel_1_text: 'Tento slot je připravený pro první video kampaně, teaser nebo úvodní clip.',
            reel_2_title: 'Rychlý střih, výrazná typografie a vibe sociálních sítí',
            reel_2_text: 'Sem se hodí záběr ze zákulisí nebo krátké odhalení produktu.',
            reel_3_title: 'Čistý pohyb, silný kontrast a zapamatovatelný punchline',
            reel_3_text: 'Ideální pro chytré a úderné sdělení, které působí víc jako TikTok než banka.',
            reel_4_title: 'Vyladěný prostor pro naše nejsilnější schopnosti',
            reel_4_text: 'Později sem vložíte finální video a layout zůstane stejný.',
            reel_5_title: 'Navrženo tak, aby se smyčkovalo a drželo pozornost',
            reel_5_text: 'Feed je postavený pro krátkou pozornost a silný vizuální rytmus.',
            reel_6_title: 'Vaše nejsilnější video patří na konec smyčky',
            reel_6_text: 'Jakmile doběhne, feed se vrátí zpět a zážitek nepůsobí zaseknutě.',
            like: 'Líbí se mi',
            share: 'Sdílet',
            comment: 'Komentovat',
            about_eyebrow: 'O nás',
            about_title: 'Jsme tým účastníků, který tento koncept vytvořil',
            team_role_1: 'Vývojář a tvůrce UI',
            team_role_2: 'Kreativní vedení a obsahová směrnice',
            team_role_3: 'Strategie, komunikace a prezentace',
            motivation_eyebrow: 'Naše motivace',
            motivation_title: 'Proč jsme to postavili takto',
            motivation_text_1: 'Chtěli jsme ukázat Raiffeisenbank ve formátu, který je pro naši generaci přirozený: rychlý, vizuální, přímý a snadno projížděný.',
            motivation_text_2: 'Místo korporátní bankovní estetiky jsme zvolili tmavý, energický styl s neonově žlutými akcenty, silnou typografií a feedem pro naše videa, dovednosti i příběh.',
            motivation_text_3: 'Cíl je jednoduchý: aby projekt působil ambiciózně, moderně a uvěřitelně jako účastnický pitch.',
            motivation_text_4: 'Každá obrazovka je záměrně krátká a hustá, aby porotci pochopili nápad rychle a zároveň si po scrollu zapamatovali pocit značky.',
            about_copy: 'Kombinujeme design, vývoj a prezentaci, aby projekt působil uhlazeně od první obrazovky až po poslední.',
            about_copy_2: 'Každý z nás přináší jinou silnou stránku, díky které působí celek kompletně a ne jednorozměrně.',
            team_note_1: 'Mění nápady v kód a interaktivní rozhraní.',
            team_note_2: 'Utváří tón, vizuály a tok obsahu.',
            team_note_3: 'Drží sdělení jasné a zaměřené na porotu.',
            team_meta_1: '20 let • Softwarové inženýrství a technologie FEL',
            team_meta_2: '20 let • Sociologie Studia Současných společnosti FSV',
            team_meta_3: '20 let • Sociologie Studia Současných společnosti FSV',
            faq_eyebrow: 'FAQ',
            faq_title: 'Rychlé odpovědi o projektu',
            faq_copy: 'Čistá náhrada, která udržuje čtyřobrazovkovou strukturu užitečnou a soustředěnou.',
            faq_q1: 'Co je to za projekt?',
            faq_a1: 'Je to naše účastnická prezentace pro Next Gen Lab, postavená na dovednostech, nápadech, videích a výrazném Gen Z vizuálu.',
            faq_q2: 'Čeho si má divák všimnout jako prvního?',
            faq_a2: 'Černožlutého vizuálu, reelového feedu a toho, že stránka působí mladě, výrazně a moderně.',
            faq_q3: 'Co sem lze později dát místo toho?',
            faq_a3: 'Můžete z toho udělat proces, video credits, mini case study nebo behind-the-scenes sekci o tvorbě webu.',
            faq_q4: 'Jak má fungovat reel?',
            faq_a4: 'Každý reel má být uvnitř video oblasti a má se posouvat jen v ní, ne tahat celý web.'
        }
    };

    let currentLang = 'en';
    let activeIndex = 0;
    let loopTimer = null;

    const updateActiveReel = (index) => {
        activeIndex = (index + reels.length) % reels.length;
        reels.forEach((reel, reelIndex) => {
            reel.classList.toggle('is-active', reelIndex === activeIndex);
        });
    };

    const updateActiveNav = (sectionId) => {
        navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('data-section-link') === sectionId);
        });
    };

    const scrollToReel = (index, behavior = 'smooth') => {
        const nextIndex = (index + reels.length) % reels.length;
        feed.scrollTo({
            top: reels[nextIndex].offsetTop,
            behavior
        });
        updateActiveReel(nextIndex);
    };

    const getClosestReelIndex = () => {
        const feedRect = feed.getBoundingClientRect();
        let closestIndex = 0;
        let closestDistance = Infinity;

        reels.forEach((reel, index) => {
            const distance = Math.abs(reel.getBoundingClientRect().top - feedRect.top);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        return closestIndex;
    };

    const getVisibleSectionId = () => {
        const sections = ['fyp', 'motivation', 'about', 'faq']
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        let bestId = 'fyp';
        let bestDistance = Infinity;

        sections.forEach((section) => {
            const distance = Math.abs(section.getBoundingClientRect().top - 96);
            if (distance < bestDistance) {
                bestDistance = distance;
                bestId = section.id;
            }
        });

        return bestId;
    };

    const applyLanguage = (lang) => {
        const dictionary = translations[lang];
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach((node) => {
            const key = node.getAttribute('data-i18n');
            if (dictionary[key]) {
                node.textContent = dictionary[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
            const key = node.getAttribute('data-i18n-placeholder');
            if (dictionary[key]) {
                node.setAttribute('placeholder', dictionary[key]);
            }
        });

        if (posterImage) {
            posterImage.src = lang === 'en' ? '../poster/poster_en.jpg' : '../poster/poster_cz.png';
            posterImage.alt = dictionary.poster_alt;
        }

        if (posterEdition) {
            posterEdition.textContent = lang === 'en' ? 'EN' : 'CZ';
        }

        langToggle.setAttribute('aria-pressed', String(lang === 'cs'));
        langToggle.textContent = lang === 'en' ? 'EN / CZ' : 'CZ / EN';
    };

    const startLoop = () => {
        stopLoop();
        loopTimer = window.setInterval(() => {
            scrollToReel(activeIndex + 1);
        }, 6500);
    };

    const stopLoop = () => {
        if (loopTimer) {
            window.clearInterval(loopTimer);
            loopTimer = null;
        }
    };

    const restartLoop = () => {
        startLoop();
    };

    scrollUpButtons.forEach((button) => {
        button.addEventListener('click', () => {
            scrollToReel(activeIndex - 1);
            restartLoop();
        });
    });

    scrollDownButtons.forEach((button) => {
        button.addEventListener('click', () => {
            scrollToReel(activeIndex + 1);
            restartLoop();
        });
    });

    feed.addEventListener('wheel', (event) => {
        if (Math.abs(event.deltaY) < 4) {
            return;
        }

        event.preventDefault();
        const direction = event.deltaY > 0 ? 1 : -1;
        scrollToReel(activeIndex + direction);
        restartLoop();
    }, { passive: false });

    feed.addEventListener('touchstart', (event) => {
        feed.dataset.touchStart = String(event.touches[0].clientY);
    }, { passive: true });

    feed.addEventListener('touchend', (event) => {
        const touchStart = Number(feed.dataset.touchStart || 0);
        const touchEnd = event.changedTouches[0].clientY;
        const delta = touchStart - touchEnd;

        if (Math.abs(delta) > 40) {
            scrollToReel(activeIndex + (delta > 0 ? 1 : -1));
            restartLoop();
        }
    }, { passive: true });

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'cs' : 'en';
        applyLanguage(currentLang);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = reels.indexOf(entry.target);
                if (index !== -1) {
                    updateActiveReel(index);
                }
            }
        });
    }, {
        root: feed,
        threshold: 0.65
    });

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                updateActiveNav(entry.target.id);
            }
        });
    }, {
        root: null,
        threshold: 0.45
    });

    ['fyp', 'motivation', 'about', 'faq']
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .forEach((section) => sectionObserver.observe(section));

    reels.forEach((reel, index) => {
        observer.observe(reel);
        reel.addEventListener('click', () => {
            updateActiveReel(index);
            restartLoop();
        });
    });

    document.querySelectorAll('.site-nav a, .cta').forEach((link) => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                updateActiveReel(getClosestReelIndex());
                updateActiveNav(getVisibleSectionId());
            }, 50);
        });
    });

    applyLanguage(currentLang);
    feed.scrollTop = 0;
    updateActiveReel(getClosestReelIndex());
    updateActiveNav(getVisibleSectionId());
    startLoop();
});
