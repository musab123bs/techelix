   // Icon Menu
        document.querySelectorAll('.icon-menu-item').forEach((item) => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.icon-menu-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;

        function initializeTheme() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            setTheme(savedTheme);
        }

        function setTheme(theme) {
            if (theme === 'light') {
                body.classList.add('light-mode');
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'dark');
            }
        }

        function toggleTheme() {
            const currentTheme = localStorage.getItem('theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        }

        themeToggle.addEventListener('click', toggleTheme);
        initializeTheme();

        // Toggle Personal Info Section
        function togglePersonalInfo(event) {
            const title = event.currentTarget;
            const content = title.nextElementSibling;
            title.classList.toggle('collapsed');
            content.classList.toggle('collapsed');
        }

        // Toggle Tags Section
        function toggleTags(event) {
            const title = event.currentTarget;
            const content = document.getElementById('tagsContent');
            title.classList.toggle('collapsed');
            content.style.display = title.classList.contains('collapsed') ? 'none' : 'flex';
        }

        // Tab Navigation
        document.querySelectorAll('.tab').forEach((tab) => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Table Controls
        document.querySelectorAll('.control-btn').forEach((btn) => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.control-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Print Button
        document.querySelector('.print-btn').addEventListener('click', function() {
            window.print();
        });

        // Pagination
        document.querySelectorAll('.pagination-btn').forEach((btn) => {
            btn.addEventListener('click', function() {
                if (this.textContent === 'Prev' || this.textContent === 'Next') {
                    return;
                }
                document.querySelectorAll('.pagination-btn.active').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Search
        document.querySelector('input[type="text"]').addEventListener('input', function(e) {
            console.log('Search:', e.target.value);
        });

//         if (window.location.hostname !== "localhost") {
//   document.body.innerHTML = "<h2 style='text-align:center;color:red;'>Unauthorized Copy Detected ⚠️</h2>";
// }
