// Fetch the JSON data
fetch('./default-layout/pages.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched JSON data:', data); // Debugging log
        const navbar = document.getElementById('navbar');
        data.pages.forEach(page => {
            const link = document.createElement('a');
            link.href = page.link;
            link.textContent = page.title;
            navbar.appendChild(link);
            console.log('Created link:', link); // Debugging log
        });
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
