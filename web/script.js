document.addEventListener('DOMContentLoaded', () => {
    const feed = document.querySelector('[data-feed]');
    const reels = Array.from(document.querySelectorAll('[data-reel]'));
    const scrollUpButtons = document.querySelectorAll('[data-scroll-up]');
    const scrollDownButtons = document.querySelectorAll('[data-scroll-down]');
    const langToggle = document.querySelector('[data-lang-toggle]');
    const navLinks = Array.from(document.querySelectorAll('[data-section-link]'));
    const posterImage = document.querySelector('[data-poster-image]');
    const posterEdition = document.querySelector('[data-poster-edition]');
    const reelVideos = Array.from(document.querySelectorAll('[data-reel-video]'));
    const sharedSoundButtons = Array.from(document.querySelectorAll('[data-video-sound-toggle]'));
    const reelPauseIndicators = Array.from(document.querySelectorAll('[data-video-pause-indicator]'));

    const reelVideoSources = {
        en: ['../videos/en_1.mp4', '../videos/en_2.mp4', '../videos/en_3.mp4'],
        cs: ['../videos/cz_1.mp4', '../videos/cz_2.mp4', '../videos/cz_3.mp4']
    };

    const translations = {
        en: {
            nav_poster: 'Poster',
            nav_fyp: 'For You',
            nav_about: 'About Us',
            nav_motivation: 'Our Motivation',
            nav_faq: 'FAQ',
            hero_eyebrow: 'Participant project',
            hero_title: 'A campaign you will scroll through',
            hero_lead: 'We want to show Raiffeisenbank and investing in a format that comes naturally to our generation.',
            hero_support: 'A vertical feed, three videos, one poster.',
            hero_support_2: 'A campaign about speed cannot look like a thirty-slide presentation.',
            hero_video_link: 'Here is the link to the videos: <a href="https://drive.google.com/drive/folders/16_bUZxL-lYcpmbXheQ-ifJzAqJT4kXAi?usp=sharing" target="_blank" rel="noopener noreferrer">Google Drive folder</a>.',
            hero_note: 'Videos are available in both English and Czech.',
            hero_cta_primary: 'Watch the feed',
            hero_cta_secondary: 'See FAQ',
            hero_fact_1: 'Short-form, like everything else we watch',
            hero_fact_2: 'Built for your thumb, not a mouse',
            hero_fact_3: 'Czech first, English one tap away',
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
            about_title: 'We are the team who created this concept',
            team_role_1: 'Technical insight and execution',
            team_role_2: 'Creative direction and business insight',
            team_role_3: 'Communication and presentation strategy',
            motivation_eyebrow: 'Our motivation',
            motivation_title: 'Our motivation',
            motivation_text_1: 'We built the team to cover the whole process, from understanding the target group to delivering the solution. The brief is about Gen Z, so we have two sociologists on the team.',
            motivation_text_2: '<strong>Matěj Šach</strong> studies entrepreneurship alongside sociology through the Finnish Tiimiakatemia concept, which keeps the business side and work organisation under control.',
            motivation_text_3: '<strong>Bojan Ignjatović</strong> is responsible for the communication strategy and for making sure the final message is clear, sharp, and easy for Gen Z to understand.',
            motivation_text_4: '<strong>Matěj Holý</strong> handles the technical implementation. His knowledge of algorithms proved useful both when writing the code and when choosing the communication strategy.',
            motivation_text_5: 'Three fields, one team. The combination of sociological insight, business framing, and technical execution lets us move from insight to a real campaign without outsourcing any of it.',
            about_copy: 'We combine design, development, and presentation so the project feels polished from the first screen to the last.',
            about_copy_2: 'Each of us brings a different strength, which makes the whole feel complete rather than one-dimensional.',
            team_note_1: 'Brings algorithm knowledge, technical delivery, and online distribution of the solution.',
            team_note_2: 'Shapes approaches and coordinates their delivery.',
            team_note_3: 'Keeps the tone of the message clear, accessible, and distinctive.',
            team_meta_1: '20 years old • Software Engineering and Technology, CTU FEL',
            team_meta_2: '20 years old • Sociology and Social Policy, FSV UK / Innovative Entrepreneurship (Tiimi Akatemia), PEF CZU',
            team_meta_3: '20 years old • Sociology and Contemporary Society Studies, FSV UK / Czech-German Studies, FSV UK',
            faq_eyebrow: 'FAQ',
            faq_title: 'QUICK ANSWERS',
            faq_copy: 'Short questions, short answers. It is what we are used to.',
            faq_q1: 'So what are you actually saying?',
            faq_a1: 'That spending takes three seconds and investing takes half an hour. That is not a question of responsibility, but of one decision.',
            faq_q2: 'How fast should investing be?',
            faq_a2: 'Faster than you can scroll this page. Two hundred crowns, two taps, done.',
            faq_q3: 'What if I change my mind?',
            faq_a3: 'You sell. Getting out takes as long as getting in — a few taps. Investing does not have to mean signing up for ten years (though as a strategy, it can).',
            faq_q4: 'What about Gen Alpha? They are twelve.',
            faq_a4: 'We do not need anything from them today. We want them to grow up with investing as part of normal life — like paying by card or ordering food in an app.',
            faq_q5: 'Why did we do this?',
            faq_a5: 'Because we are three people who do not want to wait until after school for our first real experience. We want to see how far we can get in two days this September.'
        },
        cs: {
            nav_poster: 'Plakát',
            nav_fyp: 'Pro vás',
            nav_about: 'O nás',
            nav_motivation: 'Naše motivace',
            nav_faq: 'FAQ',
            hero_eyebrow: 'Projekt účastníků',
            hero_title: 'Kampaň, kterou doscrolluješ',
            hero_lead: 'Chceme ukázat Raiffeisenbank a investování ve formátu, který je pro naši generaci přirozený.',
            hero_support: 'Vertikální feed, tři videa, jeden plakát.',
            hero_support_2: 'Kampaň o rychlosti nemůže vypadat jako prezentace na třicet slidů.',
            hero_video_link: 'Zde je odkaz na videa: <a href="https://drive.google.com/drive/folders/16_bUZxL-lYcpmbXheQ-ifJzAqJT4kXAi?usp=sharing" target="_blank" rel="noopener noreferrer">Google Drive složka</a>.',
            hero_note: 'Videa jsou dostupná v angličtině i češtině.',
            hero_cta_primary: 'Přehrát feed',
            hero_cta_secondary: 'Zobrazit FAQ',
            hero_fact_1: 'Krátký formát, jako všechno, co sledujeme',
            hero_fact_2: 'Postaveno pro palec, ne pro myš',
            hero_fact_3: 'Čeština, angličtina na přepnutí',
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
            team_role_1: 'Technický vhled a exekuce',
            team_role_2: 'Kreativní vedení a biznisový vhled',
            team_role_3: 'Strategie komunikace a prezentace',
            motivation_eyebrow: 'Naše motivace',
            motivation_title: 'Naše motivace',
            motivation_text_1: 'Tým jsme sestavili tak, abychom pokryli celý proces od pochopení cílové skupiny až po doručení řešení. Zadání je o zoomerech, tak máme v týmu dva sociology.',
            motivation_text_2: '<strong>Matěj Šach</strong> k sociologii studuje podnikání podle finského konceptu Tiimiakatemia, čímž drží byznysovou stránku a organizaci práce.',
            motivation_text_3: '<strong>Bojan Ignjatović</strong> má na starost komunikační strategii a to, díky čemuž je výsledné sdělení jasné, úderné a pro zoomery srozumitelné.',
            motivation_text_4: '<strong>Matěj Holý</strong> zajišťuje technickou realizaci. Jeho znalost algoritmů přišla vhod při psaní kódu i výběru komunikační strategie.',
            motivation_text_5: 'Tři obory, jeden tým. Kombinace sociologického vhledu, byznysového uchopení a technické exekuce nám umožňuje jít od insightu k reálné kampani bez outsourcingu čehokoliv.',
            about_copy: 'Kombinujeme design, vývoj a prezentaci, aby projekt působil uhlazeně od první obrazovky až po poslední.',
            about_copy_2: 'Každý z nás přináší jinou silnou stránku, díky které působí celek kompletně a ne jednorozměrně.',
            team_note_1: 'Přináší znalost algoritmů, technické provedení řešení a jeho distribuci online.',
            team_note_2: 'Navrhuje přístupy a koordinuje jejich provedení.',
            team_note_3: 'Drží tón sdělení jasný, uchopitelný a osobitý.',
            team_meta_1: '20 let • Softwarové inženýrství a technologie, FEL ČVUT',
            team_meta_2: '20 let • Sociologie a sociální politika, FSV UK / Inovativní podnikání (Tiimi Akatemia), PEF ČZU',
            team_meta_3: '20 let • Sociologie a studia současných společnosti FSV UK / Česko-německá studia, FSV UK',
            faq_eyebrow: 'FAQ',
            faq_title: 'RYCHLÉ ODPOVĚDI',
            faq_copy: 'Krátké otázky, krátké odpovědi. Na to jsme jako zoomeři zvyklí.',
            faq_q1: 'Co tím vlastně chcete říct?',
            faq_a1: 'Že utratit trvá tři vteřiny a investovat půl hodiny. To není otázka zodpovědnosti, ale jednoho rozhodnutí.',
            faq_q2: 'Jak rychlé má investování být?',
            faq_a2: 'Rychlejší než doscrolluješ tuhle stránku. Dvě stovky, dva tapy, hotovo.',
            faq_q3: 'A když si to rozmyslím?',
            faq_a3: 'Tak to prodáš. Vystoupit trvá stejně dlouho jako nastoupit, pár tapů. Investovat nemusí znamenat upsat se na deset let (z investiční strategie ale může).',
            faq_q4: 'A Gen Alpha? Těm je dvanáct.',
            faq_a4: 'Dnes od nich nic nechceme. Chceme, aby vyrostli s tím, že investování patří k normálnímu životu — stejně jako platit kartou nebo objednávat jídlo v appce.',
            faq_q5: 'Proč jsme do toho šli?',
            faq_a5: 'Protože jsme tři lidi, které nebaví čekat na první „reálnou zkušenost“ až po škole. Chceme zjistit, kam až to dotáhneme za dva dny v září.'
        }
    };

    let currentLang = 'cs';
    let activeIndex = 0;
    let soundEnabled = false;

    const safePlay = (video, muted = true) => {
        video.muted = muted;
        video.playsInline = true;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }
    };

    const syncReelVideos = () => {
        reelVideos.forEach((video, index) => {
            if (index === activeIndex) {
                if (video.src) {
                    safePlay(video, !soundEnabled);
                }
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    const syncVideoChrome = () => {
        sharedSoundButtons.forEach((button) => {
            button.setAttribute('aria-label', soundEnabled ? 'Mute all videos' : 'Unmute all videos');
            button.setAttribute('aria-pressed', String(soundEnabled));
            button.classList.toggle('is-muted', !soundEnabled);
        });

        reelVideos.forEach((video, index) => {
            const pauseIndicator = reelPauseIndicators[index];
            const isActive = index === activeIndex;
            const isPaused = video.paused;

            if (pauseIndicator) {
                pauseIndicator.hidden = !isPaused || !isActive;
            }

            video.closest('.reel-media')?.classList.toggle('is-paused', isPaused && isActive);
            video.closest('.reel-media')?.classList.toggle('is-muted', !soundEnabled && isActive);
        });
    };

    const applySoundState = (enabled) => {
        soundEnabled = enabled;

        reelVideos.forEach((video) => {
            video.muted = !soundEnabled;
            if (video === reelVideos[activeIndex] && !video.paused) {
                safePlay(video, !soundEnabled);
            }
        });

        syncVideoChrome();
    };

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
        syncReelVideos();
        syncVideoChrome();
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
        const sections = ['poster', 'fyp', 'motivation', 'about', 'faq']
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

    const htmlTranslationKeys = new Set(['hero_video_link', 'motivation_text_2', 'motivation_text_3', 'motivation_text_4']);

    const applyLanguage = (lang) => {
        const dictionary = translations[lang];
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach((node) => {
            const key = node.getAttribute('data-i18n');
            if (dictionary[key]) {
                if (htmlTranslationKeys.has(key)) {
                    node.innerHTML = dictionary[key];
                } else {
                    node.textContent = dictionary[key];
                }
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

        reelVideos.forEach((video, index) => {
            const source = reelVideoSources[lang][index];
            if (video.getAttribute('src') !== source) {
                video.pause();
                video.src = source;
                video.load();
            }
            video.muted = !soundEnabled;
            video.loop = false;
        });

        syncReelVideos();
        syncVideoChrome();

        langToggle.setAttribute('aria-pressed', String(lang === 'cs'));
        langToggle.textContent = lang === 'en' ? 'EN / CZ' : 'CZ / EN';
    };

    const advanceToNextReel = () => {
        scrollToReel(activeIndex + 1);
    };

    const pauseVideoOnClick = (event) => {
        event.stopPropagation();
        const video = event.currentTarget;
        if (video.paused) {
            safePlay(video, !soundEnabled);
        } else {
            video.pause();
        }
        syncVideoChrome();
    };

    const toggleSharedSound = (event) => {
        event.stopPropagation();
        applySoundState(!soundEnabled);
    };

    scrollUpButtons.forEach((button) => {
        button.addEventListener('click', () => {
            scrollToReel(activeIndex - 1);
        });
    });

    scrollDownButtons.forEach((button) => {
        button.addEventListener('click', () => {
            scrollToReel(activeIndex + 1);
        });
    });

    feed.addEventListener('wheel', (event) => {
        if (Math.abs(event.deltaY) < 4) {
            return;
        }

        event.preventDefault();
        const direction = event.deltaY > 0 ? 1 : -1;
        scrollToReel(activeIndex + direction);
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
                    syncReelVideos();
                    syncVideoChrome();
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

    ['poster', 'fyp', 'motivation', 'about', 'faq']
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .forEach((section) => sectionObserver.observe(section));

    reels.forEach((reel, index) => {
        observer.observe(reel);
        reel.addEventListener('click', () => {
            updateActiveReel(index);
            syncReelVideos();
        });
    });

    reelVideos.forEach((video) => {
        video.addEventListener('click', pauseVideoOnClick);
        video.addEventListener('ended', () => {
            if (reels.indexOf(video.closest('[data-reel]')) === activeIndex) {
                advanceToNextReel();
            }
        });
    });

    sharedSoundButtons.forEach((button) => {
        button.addEventListener('click', toggleSharedSound);
    });

    document.querySelectorAll('.site-nav a, .cta').forEach((link) => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                updateActiveReel(getClosestReelIndex());
                updateActiveNav(getVisibleSectionId());
                syncReelVideos();
            }, 50);
        });
    });

    applyLanguage(currentLang);
    applySoundState(false);
    feed.scrollTop = 0;
    updateActiveReel(getClosestReelIndex());
    syncReelVideos();
    syncVideoChrome();
    updateActiveNav(getVisibleSectionId());
});
