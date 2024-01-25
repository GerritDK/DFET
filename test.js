addEventListener('load', (event) => {
    HideWorldEngine();
    HideTravel();
    HideDexMenu();
    HideTravellingscreen();
    HideEncounterScreen();
});

const MainMenu = document.getElementById("mainmenu")
const WorldEngine = document.getElementById("worldengine")
const DexMenu = document.getElementById("dexmenu")
const TravelMenu = document.getElementById("travelmenu")
const TravelScreen = document.getElementById("travellingscreen")
const encounterScreen = document.getElementById("encounterwarning")
const DexButton = document.getElementById("dexbutton")
const WorldButton = document.getElementById("worldbutton")
const TravelButton = document.getElementById("travelbutton")
const WorldButtonBack = document.getElementById("wetomain")
const DexButtonBack = document.getElementById("dextomain")
const TravelButtonBack = document.getElementById("traveltomain")
const TravelScreenOkay = document.getElementById("travellingscreenokay")
const encounterScreenOkay = document.getElementById("encounterokay")
const AddButton = document.getElementById("addtodex")
const UpdateText = document.getElementById("updatetext")


function HideWorldEngine() {
    if (WorldEngine.style.display === "none") {
      WorldEngine.style.display = "flex";} 
    else {
      WorldEngine.style.display = "none"; }
  }

function HideMainMenu() {
    if (MainMenu.style.display === "none") {
      MainMenu.style.display = "flex";} 
    else {
      MainMenu.style.display = "none"; }
    }

  function HideDexMenu() {
    if (DexMenu.style.display === "none") {
      DexMenu.style.display = "flex";} 
    else {
      DexMenu.style.display = "none"; }
    }
  
  function HideTravel() {
      if (TravelMenu.style.display === "none") {
        TravelMenu.style.display = "flex";} 
      else {
        TravelMenu.style.display = "none"; }
      } 

  function HideTravellingscreen() {
    if (TravelScreen.style.display === "none") {
      TravelScreen.style.display = "flex";} 
    else {
      TravelScreen.style.display = "none"; }
      }

  function HideEncounterScreen() {
    if (encounterScreen.style.display === "none") {
      encounterScreen.style.display = "flex";} 
    else {
      encounterScreen.style.display = "none"; }
      }
  
  
WorldButton.addEventListener("click", function(e) {
    HideWorldEngine();
    HideMainMenu();
    UpdateText.innerHTML = ""
})

const coldEnvironmentTraits = [
    'Thick fur',
    'Blubber layer',
    'Compact body',
    'Small extremities',
    'Camouflaged coat',
    'Large paws',
    'Sharp claws',
    'Insulating feathers',
    'Heat exchange',
    'Hibernation adaptation',
    'Layered insulation',
    'Seasonal camo',
    'Round eyes',
    'Tough foot pads',
    'Respiratory adaptation',
    'Migratory patterns',
    'Freeze tolerance',
    'Water repellent',
    'Strong antlers'
  ];

const warmEnvironmentTraits = [
    'Camouflaged skin',
    'Heat-resistant fur',
    'Sleek body',
    'Large ears',
    'Bright plumage',
    'Adapted hooves',
    'Webbed feet',
    'Cooling behavior',
    'Shedding coat',
    'Burrowing habit',
    'Lightweight frame',
    'Nocturnal activity',
    'Mimicry ability',
    'Long legs',
    'Heat dispersal',
    'Sweating mechanism',
    'Ectothermic regulation',
    'Water conservation',
    'Sand-colored fur',
    'Molted scales'
  ];

const mountainEnvironmentTraits = [
  'Surefooted hooves',
  'Thick fur',
  'Powerful limbs',
  'Altitude adaptation',
  'Climbing ability',
  'Agile body',
  'Camouflaged coat',
  'Insulating fur',
  'Long migratory',
  'Short tail',
  'Large lungs',
  'Strong beak',
  'Sharp claws',
  'Broad wings',
  'Wide paws',
  'Coiled tail',
  'Elevated roosts',
  'Fur-lined ears',
  'Rocky terrain',
  'Migratory routes'
 ];

const flatTerrainTraits = [
    'Sleek body',
    'Swift runners',
    'Camouflaged coat',
    'Long legs',
    'Low-profile ears',
    'Burrowing habit',
    'Ground-dwelling',
    'Fast sprinters',
    'Large eyes',
    'Hoofed grazers',
    'Herding behavior',
    'Short fur',
    'Mimicry ability',
    'Broad wings',
    'Slim body',
    'Efficient burrowers',
    'Adapted claws',
    'Migratory patterns',
    'Coordinated movement',
    'Cunning hunters'
  ];

const wetEnvironmentTraits = [
    'Streamlined body',
    'Gill respiration',
    'Webbed appendages',
    'Buoyant fur',
    'Aquatic adaptation',
    'Blubber layer',
    'Suction cup feet',
    'Bioluminescent glow',
    'Transparent skin',
    'Eel-like movement',
    'Filter-feeding',
    'Migratory swimmers',
    'Amphibious ability',
    'Wetland habitats',
    'Scale flexibility',
    'Underwater nests',
    'Camouflaged skin',
    'Paddle-shaped tail',
    'Schooling behavior',
    'Deep-sea dwellers'
  ];

const dryEnvironmentTraits = [
    'Desert camouflage',
    'Water storage',
    'Nocturnal activity',
    'Burrowing habit',
    'Sweat-free cooling',
    'Efficient thermoregulation',
    'Large ears',
    'Heat-resistant fur',
    'Camouflaged scales',
    'Sandy coloration',
    'Long limbs',
    'Drought-resistant',
    'Hibernation adaptation',
    'Specialized kidneys',
    'Shallow burrows',
    'Lightweight frame',
    'Thick, scaly skin',
    'Migratory routes',
    'Ectothermic regulation',
    'Reduced metabolic rate'
  ];

const abundantFoodEnvironmentTraits = [
    'Stocky physique',
    'Large body size',
    'Bright and varied colors',
    'Small ears for focus',
    'Short limbs for stability',
    'Robust and sturdy build',
    'Slow metabolism',
    'Specialized teeth for chewing',
    'Minimal fur or feathers',
    'Solid bones for strength',
    'Blunt claws for digging',
    'Plump and rounded shape',
    'Short beak for grazing',
    'Small eyes for day vision',
    'Non-retractable claws',
    'Vibrant fur or scales',
    'No storage adaptations',
    'Distinctive markings',
    'Thick fur for insulation',
    'Moderate-sized stomach'
  ];

const scarceFoodEnvironmentTraits = [
    'Lean physique',
    'Reduced body size',
    'Camouflaged colors',
    'Large ears for detection',
    'Long limbs for mobility',
    'Sleek and agile body',
    'Efficient metabolism',
    'Adapted teeth for varied diet',
    'Thick fur or feathers',
    'Hollow bones for lightness',
    'Sharp claws for hunting',
    'Streamlined shape',
    'Long beak for probing',
    'Large eyes for night vision',
    'Retractable claws',
    'Camouflaged fur or scales',
    'Storage pouches for food',
    'Mimicry patterns',
    'Sparse fur for heat dissipation',
    'Large stomach for storage'
  ];

  let lastImageData = '';

  TravelButton.addEventListener('click', function() {
      
      var temperatureValue = parseInt(document.getElementById('tempslider').value);
  
      var selectedTempTrait;
      if (temperatureValue < 0) {
          var randomColdIndex = Math.floor(Math.random() * coldEnvironmentTraits.length);
          selectedTempTrait = coldEnvironmentTraits[randomColdIndex];
      } else {
          var randomWarmIndex = Math.floor(Math.random() * warmEnvironmentTraits.length);
          selectedTempTrait = warmEnvironmentTraits[randomWarmIndex];
      }
      
      var reliefValue = parseInt(document.getElementById('reliefslider').value);
  
      var selectedReliefTrait;
      if (reliefValue < 50) {
          var randomFlatIndex = Math.floor(Math.random() * flatTerrainTraits.length);
          selectedReliefTrait = flatTerrainTraits[randomFlatIndex];
      } else {
          var randomMountainIndex = Math.floor(Math.random() * mountainEnvironmentTraits.length);
          selectedReliefTrait = mountainEnvironmentTraits[randomMountainIndex];
      }
  
      var waterValue = parseInt(document.getElementById('waterslider').value);
  
      var selectedWaterTrait;
      if (waterValue < 50) {
          var randomDryIndex = Math.floor(Math.random() * dryEnvironmentTraits.length);
          selectedWaterTrait = dryEnvironmentTraits[randomDryIndex];
      } else {
          var randomWetIndex = Math.floor(Math.random() * wetEnvironmentTraits.length);
          selectedWaterTrait = wetEnvironmentTraits[randomWetIndex];
      }
  
      var foodValue = parseInt(document.getElementById('foodslider').value);
  
      var selectedFoodTrait;
      if (foodValue < 50) {
          var randomScarceIndex = Math.floor(Math.random() * scarceFoodEnvironmentTraits.length);
          selectedFoodTrait = scarceFoodEnvironmentTraits[randomScarceIndex];
      } else {
          var randomAbundantIndex = Math.floor(Math.random() * abundantFoodEnvironmentTraits.length);
          selectedFoodTrait = abundantFoodEnvironmentTraits[randomAbundantIndex];
      }
  
      var usePrompt = 'very detailed illustration, (speculative biology), pixel art, creature design,'
      + selectedTempTrait+ (", ")+ selectedReliefTrait+ (", ")+ selectedWaterTrait+ (", ")+ selectedFoodTrait;
      console.log(usePrompt);
  
      const payload = {
        "prompt": usePrompt,
        "steps": 20,
    };
  
    fetch('http://127.0.0.1:7861/sdapi/v1/txt2img', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
      })
      .then(response => response.json())
      .then(data => {
          const imageData = 'data:image/png;base64,' + data.images[0];
          document.getElementById('resultImage').src = imageData;
          lastImageData = imageData; // Store the last generated image data
      });

      HideWorldEngine();
      HideTravellingscreen();
  });

WorldButtonBack.addEventListener("click", function(e) {
  console.log("bye");
  HideWorldEngine();
  HideMainMenu();
})

DexButton.addEventListener("click", function(e) {
  UpdateText.innerHTML = ""
  HideMainMenu();
  HideDexMenu();
})


DexButtonBack.addEventListener("click", function(e) {
  HideMainMenu();
  HideDexMenu();
})

TravelScreenOkay.addEventListener("click", function(e) {
  HideTravellingscreen();
  HideEncounterScreen();
})

encounterScreenOkay.addEventListener("click", function (e){
  HideEncounterScreen();
  const body = document.body;
    
    const combatMenu = document.createElement('div');
    combatMenu.id = 'combatmenu';
    body.appendChild(combatMenu);

    // Create combatmenu
    const timeContainer = document.createElement('div');
    timeContainer.id = 'timecontainer';
    timeContainer.innerHTML = `
      <h2>Survive:</h2>
      <h2 id="time-left">10</h2>
    `;
    combatMenu.appendChild(timeContainer);

    const Eyes = document.createElement('div');
    Eyes.className = 'grid';
    Eyes.innerHTML = `
      <img src="styles/images/eyes.svg">
    `;
    combatMenu.appendChild(Eyes);
  
    // Create grid
    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.innerHTML = `
      <div class="square" id="square1"><img src="styles/images/claw1.png"></div>
      <div class="square" id="square2"><img src="styles/images/bite.png"></div>
      <div class="square" id="square3"><img src="styles/images/claw2.png"></div>
    `;
    combatMenu.appendChild(grid);
  
    // Create health section
    const healthSection = document.createElement('div');
    healthSection.id= 'healthcontainer'
    healthSection.innerHTML = `
      <h2>Health</h2>
      <div id="score-bar" class="score-bar"></div>
    `;
    combatMenu.appendChild(healthSection);
  
    // Load the script
    const script = document.createElement('script');
    script.src = 'script.js';
    combatMenu.appendChild(script);

    const squares = document.querySelectorAll('.square');
    const timeLeft = document.querySelector('#time-left');
    const scoreBar = document.querySelector('#score-bar');

    let result = 3; // Starting score
    let hitposition;
    let currentTime = 14;
    let timerId = 0;
    let countDownTimerId = setInterval(countDown, 1000);

    function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('attack');
        });

        let randomSquare = squares[Math.floor(Math.random() * 3)];
        randomSquare.classList.add('attack');

        hitposition = randomSquare.id;
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' && squares[0].id === hitposition) {
            hitposition = null;
        } else if (e.code === 'Space' && squares[1].id === hitposition) {
            hitposition = null;
        } else if (e.key === 'ArrowLeft' && squares[2].id === hitposition) {
            hitposition = null;
        }
    });

    function moveMole() {
        timerId = setInterval(function() {
            randomSquare();
            setTimeout(() => {
                squares.forEach(square => {
                    square.classList.remove('attack');
                    if (hitposition) {
                        result--; // Decrement score if the mole wasn't clicked in time
                        updateScoreBar();
                        hitposition = null;
                    }
                });
            }, 500); // Second delay after displaying the mole
        }, 1500); // Adjusted interval to 1500 milliseconds (1.5 seconds)
    }

    function countDown() {
        currentTime--;
        timeLeft.textContent = currentTime;

        if (currentTime == 0 || result <= 0) {
            endGame();
        }
    }

    function updateScoreBar() {
        const percentage = (result / 3) * 100; // Calculate the percentage based on the maximum score
        scoreBar.style.width = percentage + '%';
    }

    function endGame() {
        clearInterval(countDownTimerId);
        clearInterval(timerId);

        // Check if the timer reached 0 or health reached 0
        if (currentTime === 0) {
            handleTimerEnd();
        } else if (result === 0) {
            handleHealthEnd();
        }

        // Remove combatMenu from the body
        body.removeChild(combatMenu);
    }

    function handleTimerEnd() {
        // Function to execute when the timer reaches 0
        console.log('Game Over - Timer reached 0');
        HideTravel();
        // Add any additional actions or calls as needed
    }

    function handleHealthEnd() {
        // Function to execute when the health bar reaches 0
        console.log('Game Over - Health reached 0');
        const dexMenuDiv = document.getElementById('discoveries');
        dexMenuDiv.innerHTML = "";
        UpdateText.innerHTML = "oops, you died"
        HideMainMenu();
        // Add any additional actions or calls as needed
    }

    moveMole();
})

AddButton.addEventListener('click', function (e) {
  // Check if there is a last generated image data
  if (lastImageData) {
      // Call appendImage with the last generated image data
      appendImage(lastImageData);
  }
});

function appendImage(src) {
  var img = document.createElement('img');
  img.src = src;
  document.getElementById('discoveries').appendChild(img);
}

TravelButtonBack.addEventListener("click", function(e) {
  
  UpdateText.innerHTML = "you've discovered a new creature!"
  HideMainMenu();
  HideTravel();
})