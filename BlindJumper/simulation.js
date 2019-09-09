/*******************************************************
 * Inventory - An example of a discrete event simulation.
 * @copyright Copyright 2016 Gerd Wagner, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
********************************************************/
/*******************************************************
 Simulation Parameters
********************************************************/

sim.scenario.simulationEndTime = 200;
sim.scenario.randomSeed = 5;  // optional
sim.config.createLog = true;
sim.config.visualize = true;

/*******************************************************
 Simulation Model
********************************************************/
sim.model.time = "discrete"; // implies using only discrete random variables
sim.model.v.alpha = 0.5;
sim.model.objectTypes = ["Jumper", "Speaker","Barrier"];
sim.model.eventTypes = ["Tell", "BarrierChange", "Jump"];

//sim.model.v.alpha=0.2;
/*******************************************************
 Define the initial state
 ********************************************************/
sim.scenario.initialState.objects = {
  "1": {typeName: "Jumper", name:"jumper", shortLabel:"jumper", position:1},
  "2": {typeName: "Speaker", name:"speaker", barrier:"3"},
  "3": {typeName: "Barrier", name:"barrier", shortLabel:"bar", length:2},
};

sim.scenario.initialState.events = [
  {typeName: "BarrierChange", occTime: 1, barrier: "3"},
  {typeName: "Tell", occTime: 2, speaker: "2", jumper: "1"},
  {typeName: "Jump", occTime: 3, barrier: "3", jumper:"1", speaker:"2" }
];


/*******************************************************
 Define Output Statistics Variables
 ********************************************************/
sim.model.statistics = {
};

/*******************************************************
 Define an observation UI
 ********************************************************/
sim.config.imgFolder = "media/img/";
sim.config.observationUI.type = "SVG";
sim.config.observationUI.canvas.width = 700;
sim.config.observationUI.canvas.height = 300;
//sim.config.observationUI.canvas.style = "background-color:yellow";

sim.config.observationUI.fixedElements = {
  "ground": { 
      shapeName: "line",  
      shapeAttributes: {  
        x1: 10, y1: 260, 
        x2: 610, y2: 260
      },
      style:"stroke:grey; stroke-width:10"
  }    
};
sim.config.observationUI.objectViews = {
  "jumper": { 
      shapeName: "image",  
      shapeAttributes: {
        id: "jumperView",
        file: sim.config.imgFolder + "blind-man.png",
        x: 10, y: 112,   // left-upper corner (x,y)
        width: 154, height: 138
      }
  },
  "barrier": [  
    { shapeName: "rect",  
      shapeAttributes: {  
        x: 200, y: 200,  // left-upper corner (x,y) 
        width: function (b) {return b.length * 50;},
        height: 50
      }
    }
  ],
  "speaker": {
      shapeName: "image",
      shapeAttributes: { 
        file: sim.config.imgFolder + "cartoon-man-wearing-suit.png", 
        x: 500, y:119, width: 107, height: 131
      }
  }
};
sim.config.observationUI.eventAppearances = {
  /* TODO: support temporary visibility of DOM elements
  "Tell": {
    //sound: {duration: 1000, source:"12/300/80 14/200/90"},
    view: {  // an event view is a web animation of a DOM element
      shapeName: "text",
      shapeAttributes: {x: 500, y: 100,
          textContent: function (e) {return e.lengthSymbol;}},
      style:"font-size:14px; text-anchor:middle",
      keyframes: [{color:'black'}, {color:'white'}],
      duration: 1000,  // ms
    }
  },
 */
  "Jump": {
    view: {  // an event view is a web animation of a DOM element
      domElem: function () {return document.getElementById("jumperView");},  // the visualization container element
      keyframes: [{x:100}, {x: function (e) {return e.jumpLength;}}],
      duration: 1000  // ms
    }
    }
};
