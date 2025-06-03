/*function showInfo(food) {
    const foods = {
        apple: {
            nutrition: "Vitamins A, C, fiber",
            goodOrBad: "good",
            time: "Anytime",
            emoji: "🍎👍"
        },
        burger: {
            nutrition: "High fat, carbs",
            goodOrBad: "bad",
            time: "Occasionally only",
            emoji: "🍔👎"
        },
        milk: {
            nutrition: "Calcium, protein",
            goodOrBad: "good",
            time: "Morning or Night",
            emoji: "🥛👍"
        }
    };

    const info = foods[food];
    document.getElementById("info-box").innerHTML = `
        <h2>${food.toUpperCase()}</h2>
        <p><strong>Nutrition:</strong> ${info.nutrition}</p>
        <p><strong>Good or Bad:</strong> ${info.goodOrBad} ${info.emoji}</p>
        <p><strong>Best Time:</strong> ${info.time}</p>
    `;
}
*/
function showInfo(food) {
    const foods = {
        apple: { nutrition: "Vitamins, fiber", goodOrBad: "Good! 🍎", time: "Anytime" },
        banana: { nutrition: "Potassium, energy", goodOrBad: "Good! 🍌", time: "Morning snack" },
        carrot: { nutrition: "Vitamin A, fiber", goodOrBad: "Good! 🥕", time: "Lunch or dinner" },
        milk: { nutrition: "Calcium, protein", goodOrBad: "Good! 🥛", time: "Morning or bedtime" },
        rice: { nutrition: "Energy (carbs)", goodOrBad: "Good! 🍚", time: "Lunch/dinner" },
        cherry: { nutrition: "Vitamins, antioxidants", goodOrBad: "Good! 🍒", time: "Anytime" },
        brinjal: { nutrition: "Fiber, vitamins", goodOrBad: "Good! 🍆", time: "Lunch or dinner" },
        grapes: { nutrition: "Vitamins, antioxidants", goodOrBad: "Good! 🍇", time: "Morning or snack" },
        mango: { nutrition: "Vitamin C, energy", goodOrBad: "Good! 🥭", time: "Morning or lunch" },
        orange: { nutrition: "Vitamin C, hydration", goodOrBad: "Good! 🍊", time: "Morning or snack" },
        papaya: { nutrition: "Fiber, enzymes for digestion", goodOrBad: "Good! 🍈", time: "Morning or after meals" },
        pineapple: { nutrition: "Vitamin C, manganese", goodOrBad: "Good! 🍍", time: "After meals or snack" },
        pomegranate: { nutrition: "Iron, antioxidants", goodOrBad: "Good! ❤️", time: "Morning or snack" },

        watermelon: { nutrition: "Hydration, Vitamin C, antioxidants", goodOrBad: "Good! 🍉", time: "Summer daytime snack" },
        burger: { nutrition: "Fatty, oily", goodOrBad: "Bad! 🍔", time: "Rarely; avoid daily" },
        pizza: { nutrition: "High fat & salt", goodOrBad: "Bad! 🍕", time: "Once in a while only" },
        candy: { nutrition: "Only sugar, no benefits", goodOrBad: "Bad! 🍬", time: "Avoid too much!" },
        soda: { nutrition: "Sugar, chemicals", goodOrBad: "Bad! 🥤", time: "Not good anytime" },
        chips: { nutrition: "Salty, fried, no nutrition", goodOrBad: "Bad! 🍟", time: "Avoid daily snacks" },
        biscuit: { nutrition: "Processed carbs, sugar, fat", goodOrBad: "Bad! 🍪", time: "Rarely; not daily" },
        cookies: { nutrition: "High sugar, refined carbs", goodOrBad: "Bad! 🍪", time: "Treat only" },
        icecream: { nutrition: "Sugar, fats", goodOrBad: "Bad! 🍨", time: "Occasionally after meals" },
        maggi: { nutrition: "Refined flour, preservatives", goodOrBad: "Bad! 🍜", time: "Avoid frequent use" },
        samosa: { nutrition: "Deep-fried, oily", goodOrBad: "Bad! 🥟", time: "Very rarely; treat only" },
        donuts: { nutrition: "Sugar, refined flour, oil", goodOrBad: "Bad! 🍩", time: "Only on special occasions!" }
    };
    function showInfo1(foodName) {
        window.location.href = `show-info.html?food=${foodName}`;
    }
    

    const info = foods[food];
    document.getElementById("info-box").innerHTML = `
        <h1>${food.toUpperCase()}</h1>
        <h2><strong>Nutrition:</strong> ${info.nutrition}</h2>
        <h3><strong>This is:</strong> ${info.goodOrBad}</h3>
        <h4><strong>Best time to eat:</strong> ${info.time}</h4>
    `;
    function showInfo(food) {
        const imgElements = document.querySelectorAll('img');
        imgElements.forEach(img => img.classList.remove('clicked'));

        const foods = {
            // your food objects...
        };

        const info = foods[food];
        document.getElementById("info-box").innerHTML = `
            <h2>${food.toUpperCase()}</h2>
            <p><strong>Nutrition:</strong> ${info.nutrition}</p>
            <p><strong>This is:</strong> ${info.goodOrBad}</p>
            <p><strong>Best time to eat:</strong> ${info.time}</p>
        `;

        const clickedImg = document.querySelector(`img[onclick="showInfo('${food}')"]`);
        clickedImg.classList.add('clicked');
    }
    const infoBox = document.getElementById("info-box");
    infoBox.classList.remove("show");
    setTimeout(() => {
        infoBox.classList.add("show");
    }, 50);
    
    const animalTalk = document.querySelector('.animal-talk');
    animalTalk.innerText = `Hmm... ${food.toUpperCase()} is ${info.goodOrBad}!`;
    function showInfo(food) {
        const foods = {
            // your foods with nutrition, goodOrBad, time
        };

        const info = foods[food];
        document.getElementById("info-box").innerHTML = `
        <h2>${food.toUpperCase()}</h2>
        <p><strong>Nutrition:</strong> ${info.nutrition}</p>
        <p><strong>This is:</strong> ${info.goodOrBad}</p>
        <p><strong>Best time to eat:</strong> ${info.time}</p>
    `;
   
        // Make animal talk
        const speech = document.getElementById("animal-speech");
        speech.innerText = `Hmm... ${food} is ${info.goodOrBad} for you! ${info.goodOrBad === "Good" ? "✅" : "🚫"}`;
    }

}
