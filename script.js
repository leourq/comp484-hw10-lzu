$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);

    // new Splash button for Magikarp
    $('.splash-button').click(clickedSplashButton);
  
  })
  
    // add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Magikarp", weight:20, happiness:50};
  
    function clickedTreatButton() {
      // increase pet happiness
      pet_info.happiness += 5;

      // increase pet weight
      // HW10: Fixed incorrect weight calculation
      pet_info.weight += 2;

      checkAndUpdatePetInfoInHtml();

      showPetMessage("Magikarp enjoyed the treat!");

      // HW10: Log Info
    console.info("Magikarp received a treat!");
    console.log("Current weight:", pet_info.weight);
    console.log("Current happiness:", pet_info.happiness);

    }
    
    function clickedPlayButton() {
      // increase pet happiness
      pet_info.happiness += 5;

      // decrease pet weight
      pet_info.weight -= 1;

      checkAndUpdatePetInfoInHtml();

      showPetMessage("Magikarp is having fun!");

      // HW10: Log Table
      console.table(pet_info);
    }
    
    function clickedExerciseButton() {
      // decrease pet happiness
      pet_info.happiness -= 3;

      // decrease pet weight
      pet_info.weight -= 2;

      checkAndUpdatePetInfoInHtml();

      showPetMessage("Magikarp is tired from exercising!");

      // HW10: Log Warning
      if (pet_info.happiness <= 40) {
      console.warn("Warning: Magikarp's happiness is getting low!");
      }

    }

    // new action button: Magikarp uses Splash
    function clickedSplashButton() {
      // increase happiness
      // would have kept it the same for the lore, but instructions said to increase/decrease for each button, so I increased happiness by 1.
      pet_info.happiness += 1;
      

      checkAndUpdatePetInfoInHtml();

      showPetMessage("Magikarp used Splash! But nothing happened...");

      // HW10: Log Group
      console.group("Magikarp Splash Action");
      console.log("Name:", pet_info.name);
      console.log("Weight:", pet_info.weight);
      console.log("Happiness:", pet_info.happiness);
      console.groupEnd();

      // HW10: Log Custom
      console.log("%cMagikarp used Splash!", "color: orange; font-size: 18px; font-weight: bold;");

      // HW10: Browser Performance Violation
      var startTime = Date.now();

      while (Date.now() - startTime < 300) {
        // intentionally delay execution for 300 milliseconds
      }

      // Present: animate() method
      // animate() gradually changes the CSS properties of an element
      // this creates a jumping animation when splash is clicked
      // the first animate moves Magikarp upward by changing it to -40px
      // the second animate returns the Magikarp to its original spot
      // the 300 means each animation takes 300 milliseconds to complete
      
      $('.pet-image')
        .stop(true, true)
        .animate({ marginTop: '-40px' }, 300)
        .animate({ marginTop: '0px' }, 300);
    }

    // displays a message after each button click
    function showPetMessage(message) {
      // hide the previous message and update its text
      $('.pet-message').hide();
      $('.pet-message').text(message);

      // Present: fadeIn() method
      // fadeIn() shows an element with a fading in effect, instead of   instantly appearing
      // the 500 means the message appears over 500 milliseconds
      
      $('.pet-message').fadeIn(500);
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // add conditional so if weight is lower than one
      if (pet_info.weight < 1) {
        pet_info.weight = 1;

        // HW10: Log Error
      console.error("Error: Magikarp cannot weigh less than 1 pound!");
      }

      // prevent happiness from going below zero
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }
    }
    
    // updates HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

    // HW10: 404 Network Error
    var missingImage = new Image();
    missingImage.src = "images/missing-magikarp.png";

    // HW10: TypeError
    var missingPokemon;
    console.log(missingPokemon.name);