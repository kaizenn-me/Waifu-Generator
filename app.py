from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

# Example of character data (waifu, neko, shinobu, etc.)
waifu_data = {
    "waifu": ["Waifu 1", "Waifu 2", "Waifu 3"],
    "neko": ["Neko 1", "Neko 2", "Neko 3"],
    "shinobu": ["Shinobu 1", "Shinobu 2", "Shinobu 3"],
    "cry": ["Cry 1", "Cry 2", "Cry 3"]
}

# Route for main page (index.html)
@app.route('/')
def index():
    return render_template('index.html')

# Route for API that generates characters
@app.route('/generate', methods=['GET'])
def generate():
    character_type = request.args.get('type', 'waifu')  # Default is 'waifu'
    if character_type in waifu_data:
        result = random.choice(waifu_data[character_type])
        return jsonify({"character": result})
    return jsonify({"error": "Invalid character type"}), 400

if __name__ == "__main__":
    app.run(debug=True)
