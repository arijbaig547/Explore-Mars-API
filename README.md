🌌 NASA Mars Rover Gallery

This project is a web app that fetches and displays real images from Mars, captured by NASA's Curiosity rover.
It uses the official NASA Mars Rover Photos API to dynamically load and showcase rover images.

🚀 Features

🔭 Fetches real-time Mars rover photos from NASA’s API

📸 Displays multiple images in a responsive gallery layout

🎨 Clean UI with Bootstrap & Flexbox

🌙 Dark theme gallery section

🛰 API integration with Sol (Mars day) + Camera filter support

🛠 Tech Stack

HTML5

CSS3 / Bootstrap

JavaScript (Fetch API)

NASA Mars Rover Photos API

📂 Project Structure
├── index.html        # Main webpage
├── style.css         # Custom styling (if any)
├── script.js         # API fetch + DOM manipulation
└── README.md         # Project documentation

⚡ How It Works

User opens the Gallery section

Website sends request to NASA API:

https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=YOUR_API_KEY


API responds with JSON data of photos

JavaScript dynamically adds <img> elements inside the gallery container

📸 Demo Screenshot

(Add a screenshot of your gallery here)

🔧 Setup & Usage

Clone the repository

git clone https://github.com/your-username/mars-rover-gallery.git


Open index.html in your browser

Replace apiKey in script.js with your own NASA API key (get it from NASA API
)

🌟 Future Improvements

Camera selection dropdown

Sol (Mars day) input from user

Loading spinner while fetching images

Image modal / fullscreen view

📜 License

This project is open-source and available under the MIT License.
