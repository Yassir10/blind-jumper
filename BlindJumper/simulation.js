/*******************************************************
 * Inventory - An example of a discrete event simulation.
 * @copyright Copyright 2016 Gerd Wagner, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
********************************************************/
/*******************************************************
 Simulation Parameters
********************************************************/
sim.scenario.simulationEndTime = 50;
//sim.scenario.randomSeed = 5;  // optional
sim.config.createLog = true;

/*******************************************************
 Simulation Model
********************************************************/
sim.model.time = "discrete"; // implies using only discrete random variables

sim.model.objectTypes = ["Jumper", "Speaker","Barrier", "Matrix3_4"];
sim.model.eventTypes = ["Tell", "BarrierChange", "Jump"];

//sim.model.v.jumpLength = "A";
sim.model.v.alpha=0.2;
/*******************************************************
 Define the initial state
 ********************************************************/
sim.scenario.initialState.objects = {
  "1": {typeName: "Jumper", name:"James", shortLabel:"james"},
  "2": {typeName: "Speaker", name:"Pedro", shortLabel:"pedro", barrier:"3"},
  "3": {typeName: "Barrier", name:"barrier", shortLabel:"bar", length:2},
  "4" : {typeName: "Matrix3_4", name:"matrix3_4", shortLabel:"mtrx", A1:0.25, A2:0.25, A3:0.25, A4:0.25,
  B1:0.25, B2:0.25, B3:0.25, B4:0.25, C1:0.25, C2:0.25, C3:0.25, C4:0.25}
};

sim.scenario.initialState.events = [
  {typeName: "BarrierChange", occTime: 1, barrier: "3"},
  {typeName: "Tell", occTime: 1, barrier: "3", speaker: "2", jumper: "1"},
  {typeName: "Jump", occTime: 1, barrier: "3", jumper:"1", jumpSuccessProbMat:"4" }
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
sim.config.observationUI.canvas.width = 600;
sim.config.observationUI.canvas.height = 300;
sim.config.observationUI.fixedElements = {
  "speaker": {
    shapeName: "image",
    shapeAttributes: { x: 350, y: 200, width: 50, height: 30},
    style: "fill:brown; stroke-width:0"
  }
};
sim.config.observationUI.objectViews = {
  "serviceDesk1": [  // a view of the queue
    { shapeName: "rect",  // a rectangle defined by
      shapeAttributes: {  // left-upper corner (x,y) as well as width and height
        x: function (sd) {return Math.max( 0, 330 - sd.queueLength * 20);},
        width: function (sd) {return Math.min( 300, sd.queueLength * 20);},
        y: 150, height: 80
      },
      style:"fill:yellow; stroke-width:0"
    },
    { shapeName: "text",
      shapeAttributes: {x: 325, y: 250,
          textContent: function (sd) {return sd.queueLength;}},
      style:"font-size:14px; text-anchor:middle"
    }
  ]
};
