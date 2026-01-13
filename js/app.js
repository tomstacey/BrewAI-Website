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
        icon: '⚡',
        title: 'Automated Data Capture',
        description: 'Using open APIs to automatically collect and analyze your energy data'
    },
    {
        icon: '📊',
        title: 'Real-time Analysis',
        description: 'Monitor energy usage and carbon intensity with live insights - Ask AI exactly what you want to know in human language'
    },
    {
        icon: '🌱',
        title: 'Carbon Optimization',
        description: 'Plan production around grid carbon intensity to minimize footprint'
    },
    {
        icon: '💰',
        title: 'Cost Reduction',
        description: 'Optimize energy use and prepare for future carbon taxes'
    },
    {
        icon: '🔄',
        title: 'Track Interventions',
        description: 'Automated tracking of carbon reduction interventions using a simple "add change" feature'
    },
    {
        icon: '🔍',
        title: 'Audit-Level Data',
        description: 'Audit-level data collection and interrogation to track the impact of new technologies and green loans'
    }
],
            team: [
                {
                    name: 'Tom Stacey',
                    title: '',
                    photo: 'tom.jpg'
                },
                {
                    name: 'Mariia Kaliman',
                    title: '',
                    photo: 'mariia.jpg'
                },
                {
                    name: 'Dr Franziska Sohns',
                    title: '',
                    photo: 'franzi.jpg'
                },
                {
                    name: 'Dr Lewis Walsh',
                    title: '',
                    photo: 'lewis.jpg'
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