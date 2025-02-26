document.addEventListener('DOMContentLoaded', () => {
    // Load the pages.json file
    fetch('pages.json')
        .then(response => response.json())
        .then(pages => {
            const navbar = document.querySelector('.navbar');
            const ul = document.createElement('ul');

            // Create list items for each page
            pages.forEach(page => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = page.url;
                a.textContent = page.name;
                a.addEventListener('click', (event) => {
                    event.preventDefault();
                    // Load the selected page content
                    document.getElementById('content').innerHTML = `<object type="text/html" data="${page.url}" ></object>`;
                });
                li.appendChild(a);
                ul.appendChild(li);
            });

            // Add the list to the navigation bar
            navbar.appendChild(ul);
        })
        .catch(error => console.error('Error loading pages.json file:', error));
});
