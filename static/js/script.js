document.getElementById('generateBtn').addEventListener('click', function () {
    const characterType = document.getElementById('characterType').value;
    let apiUrl = '';

    switch (characterType) {
        case 'waifu':
            apiUrl = 'https://api.waifu.pics/sfw/waifu';
            break;
        case 'neko':
            apiUrl = 'https://api.waifu.pics/sfw/neko';
            break;
        case 'shinobu':
            apiUrl = 'https://api.waifu.pics/sfw/shinobu';
            break;
        case 'cry':
            apiUrl = 'https://api.waifu.pics/sfw/cry';
            break;
        case 'nsfw':
            apiUrl = 'https://api.waifu.pics/nsfw/waifu'; 
            break;
        case 'happy':
            apiUrl = 'https://api.waifu.pics/sfw/happy'; 
            break;
        default:
            apiUrl = 'https://api.waifu.pics/sfw/waifu';
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.url) {
                document.getElementById('result').innerHTML = `<img src="${data.url}" alt="${characterType} image" />`;
            } else {
                document.getElementById('result').innerText = 'Error: Could not fetch character image!';
            }
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Error: Could not fetch character image!';
        });
});
// Toggle between Dark Mode and Pink Mode with changing icons
document.getElementById('themeToggleBtn').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('pink-mode');
    
    // Change toggle button icon
    const toggleButton = document.getElementById('themeToggleBtn');
    if (toggleButton.classList.contains('moon')) {
        toggleButton.classList.remove('moon');
        toggleButton.classList.add('sun');
        toggleButton.innerHTML = '🌞'; // Ikon matahari
    } else {
        toggleButton.classList.remove('sun');
        toggleButton.classList.add('moon');
        toggleButton.innerHTML = '🌛'; // Ikon bulan
    }
});
