const { createApp } = Vue;

createApp({
    data() {
        return {
            scrolled: false,
            mobileMenuOpen: false,
            currentYear: new Date().getFullYear(),
            screenshots: [
                'app-screenshot-1.png',
                'app-screenshot-2.png'
            ],
           features: [
    {
        icon: '🌿',
        title: 'Automated Carbon Tracking',
        description: 'Batch-linked Scope 1 & 2 insight from real-time energy data means less admin, fewer errors and clearer decisions.'
    },
    {
        icon: '🕒',
        title: 'Sustainable Production Timing',
        description: 'Forecast grid carbon intensity so you can shift flexible steps to cleaner hours (and often cheaper ones too).'
    },
    {
        icon: '🧪',
        title: 'Intervention Evaluation',
        description: 'Measure whether upgrades and process changes actually worked using academic analysis, not guesswork.'
    }
],
           team: [
    {
        name: 'Dr Franziska Sohns',
        role: 'Principal Investigator',
        photo: 'franzi.jpg',
        linkedin: 'https://www.linkedin.com/in/dr-franziska-sohns-9564509a/'
    },
    {
        name: 'Tom Stacey',
        role: 'Tech Lead',
        photo: 'tom.jpg',
        linkedin: 'https://www.linkedin.com/in/tom-stacey-20111789/',
        website: 'https://www.tomstacey.co.uk'
    },
    {
        name: 'Mariia Kaliman',
        role: 'Student Intern',
        photo: 'mariia.jpg',
        linkedin: 'https://www.linkedin.com/in/mariia-kaliman5/'
    }
]
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 50;
        },
        scrollToSection(sectionId) {
            this.mobileMenuOpen = false;
            const element = document.getElementById(sectionId);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
}).mount('#app');