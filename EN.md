# Hacker Recipes

Welcome to **Hacker Recipes**, the ultimate destination for quick and efficient recipes tailored for hackers, developers, and tech enthusiasts who need to fuel their coding sessions with minimal fuss.

## 🚀 Features

- **Dynamic Navigation**: The navigation bar is dynamically generated based on the `pages.json` file, ensuring easy access to all recipes.
- **Responsive Design**: The website is designed to be fully responsive, providing a seamless experience across all devices.
- **Quick Recipes**: Each recipe is designed to be prepared in under 30 minutes, perfect for those late-night coding marathons.
- **Minimalist Interface**: A clean and simple interface that focuses on delivering content without distractions.

## 🛠️ How It Works

1. **Dynamic Navigation**: The `script.js` file fetches the `pages.json` file and dynamically generates the navigation bar. Each recipe is loaded into the content area when clicked.
2. **Content Loading**: The content of each recipe is loaded into the main content area using an `<object>` tag, ensuring a smooth and fast user experience.
3. **Styling**: The `styles.css` file provides a sleek, dark-themed design that is easy on the eyes, perfect for late-night browsing.

## 📂 Project Structure

- `index.html`: The main entry point of the website, containing the structure of the page.
- `pages/`: A directory containing individual HTML files for each recipe.
- `pages.json`: A JSON file listing all the recipes and their corresponding URLs.
- `script.js`: A JavaScript file responsible for dynamically generating the navigation bar and loading content.
- `styles.css`: A CSS file providing the styling for the website.
- `favicon.ico`: The website's favicon.

## 🏁 Getting Started

To get started with Hacker Recipes, simply clone the repository and open `index.html` in your preferred web browser. The navigation bar will be generated dynamically, and you can start browsing through the recipes immediately.

Since this project uses JavaScript to dynamically load content, you will need to run a local server to view the website properly. You can use a simple server like `http-server` or any other server of your choice.

---

Enjoy your coding sessions with delicious and quick recipes from Hacker Recipes! 🍽️
