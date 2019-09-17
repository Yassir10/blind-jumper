/*******************************************************
 * Inventory - An example of a discrete event simulation.
 * @copyright Copyright 2016 Gerd Wagner, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
********************************************************/
/*******************************************************
 Simulation Parameters
********************************************************/
sim.config.stepDuration = 500;
sim.scenario.simulationEndTime = 200;
sim.scenario.randomSeed = 5;  // optional
sim.config.createLog = true;
sim.config.visualize = true;

/*******************************************************
 Simulation Model
********************************************************/
sim.model.time = "discrete"; // implies using only discrete random variables
sim.model.v.alpha = {
  range:"PositiveInteger",
  initialValue: 0.5,
};

sim.model.v.i = {
  range:"NonNegativeInteger",
  initialValue: 0,

};
sim.model.objectTypes = ["Jumper", "Speaker","Barrier"];
sim.model.eventTypes = ["StartOver", "Tell", "Jump"];
/*******************************************************
 Define the initial state
 ********************************************************/
sim.scenario.initialState.objects = {
};

sim.scenario.initialState.events = [
  {typeName: "StartOver", occTime: 1, barrier: 3, jumper: 1},
  {typeName: "Tell", occTime: 2, speaker: 2, jumper: 1},
  {typeName: "Jump", occTime: 3, barrier: 3, jumper: 1, speaker: 2 }
];
sim.scenario.setupInitialState = function(){
  let jumper = new Jumper({id: 1, name:"jumper", shortLabel:"jumper", position: 1}),
  speaker = new Speaker({id: 2, name:"speaker", barrier:"3"}),
  barrier = new Barrier({id: 3, name:"barrier", shortLabel:"bar", length: 2});
  sim.addObject(jumper);
  sim.addObject(speaker);
  sim.addObject(barrier);
  jumper.learnMatrix = new LearningMatrix( jumper.learnMatrix);
  speaker.learnMatrix = new LearningMatrix( speaker.learnMatrix);
};

/*******************************************************
 Define Output Statistics Variables
 ********************************************************/
sim.model.statistics = {
};

/*******************************************************
 Define an observation UI
 ********************************************************/
sim.config.imgFolder = "media/images/";
sim.config.audioFolder = "media/sounds/";
sim.config.observationUI.type = "SVG";
sim.config.observationUI.canvas.width = 700;
sim.config.observationUI.canvas.height = 300;
sim.config.observationUI.canvas.style = "background-color:yellow";

sim.config.observationUI.fixedElements = {
  "ground": { 
      shapeName: "line",  
      shapeAttributes: {  
        x1: 10, y1: 260, 
        x2: 610, y2: 260
      },
      style:"stroke:grey; stroke-width:10"
  },
  "MatrixJumper":{
    shapeName: "rect",
    shapeAttributes:{
      x:90,
      y:22,
      width:120,
      height: 90
    },
    style: "fill:#efdd92; stroke-width:0"
  },
  "MatrixSpeaker":{
    shapeName: "rect",
    shapeAttributes:{
      x:510,
      y:22,
      width:120,
      height:90
    },
    style: "fill:#efdd92; stroke-width:0"
  }
};
sim.config.observationUI.objectViews = {
  "jumper": [
      { shapeName: "image",
      shapeAttributes: {
        id: "jumperView",
        file: sim.config.imgFolder + "blind-man.png",
        x: function (j) {
          return (70 + j.position * 50);
        },
        y: 142,   // left-upper corner (x,y)
        width: 154,
        height: 138,
        },
      },
    {
      shapeName: "text",
      shapeAttributes:{
        textContent: function(j){
          let jumpSuccessMatrix = j.learnMatrix[0], output = "";
          for(let i=0;i<jumpSuccessMatrix[0].length;i++){
            output += jumpSuccessMatrix[0][i]+" ";
          }
          return output;
          },
        style:"font-size:12px; text-anchor:middle; text-color",
        x:150,
        y:42,
        width:150,
        height:138
      }},
    {
      shapeName: "text",
      shapeAttributes: {
        textContent: function(j){
          let jumpSuccessMatrix = j.learnMatrix[0], output = "";
          for(let i=0;i<jumpSuccessMatrix[0].length;i++){
            output += jumpSuccessMatrix[1][i]+" ";
          }
          return output;
          },
        style: "font-size:12px; text-anchor:middle; text-color",
        x: 150,
        y: 62,
        width: 150,
        height: 138
      }
    },
    {
      shapeName: "text",
      shapeAttributes:{
        textContent: function(j){
          let jumpSuccessMatrix = j.learnMatrix[0], output = "";
          for(let i=0;i<jumpSuccessMatrix[0].length;i++){
            output += jumpSuccessMatrix[2][i]+" ";
          }
          return output;
          },
        style:"font-size:12px; text-anchor:middle; text-color",
        x:150,
        y:82,
        width:150,
        height:138
      }
      }],
  "barrier": [  
    { shapeName: "rect",  
      shapeAttributes: {  
        x: 200, y: 200,  // left-upper corner (x,y) 
        width: function (b) {return b.length * 50;},
        height: 50
      }
    }
  ],
  "speaker": [
      { shapeName: "image",
      shapeAttributes: { 
        file: sim.config.imgFolder + "cartoon-man-wearing-suit.png", 
        x: 500, y:129, width: 107, height: 131
      }
      }, {
      shapeName: "text",
      shapeAttributes: {
        textContent: function(s){
          let tellSuccessMatrix = s.learnMatrix[0], output = "";
          for(let i=0;i<tellSuccessMatrix[0].length;i++){
            output += tellSuccessMatrix[0][i]+" ";
          }
      return output;
      },
        style:"font-size:12px; text-anchor:middle; text-color",
        x:570,
        y:42,
        width:150,
        height:138
      }
      },
    {
      shapeName: "text",
      shapeAttributes: {
            textContent: function(s){
      let tellSuccessMatrix = s.learnMatrix[0], output = "";
      for(let i=0;i<tellSuccessMatrix[0].length;i++){
        output += tellSuccessMatrix[1][i]+" ";
      }
      return output;
      },
        style: "font-size:12px; text-anchor:middle; text-color",
        x: 570,
        y: 62,
        width: 150,
        height: 138
      }
      },
    {
    shapeName: "text",
    shapeAttributes:{
    textContent: function(s){
      let tellSuccessMatrix = s.learnMatrix[0], output = "";
      for(let i=0;i<tellSuccessMatrix[0].length;i++){
        output += tellSuccessMatrix[2][i]+" ";
      }
      return output;
      },
    style:"font-size:12px; text-anchor:middle; text-color",
        x:570,
        y:82,
        width:150,
        height:138
    }
    }
    ],
};

sim.model.statistics = {
  "jumpsNumber": {range:"NonNegativeInteger", label:"Nbr of jumps: ", computeOnlyAtEnd:false},
  "jumpSuccess": {range:"NonNegativeInteger", label:"Nbr of successful jumps: ", computeOnlyAtEnd:false},
  "jumpFailure": {range:"NonNegativeInteger", label:"Nbr of failed jumps: "},
  "successPercentage": {range:"NonNegativeDecimal", label:"Success percentage: ", unit:"%",
      expression: function(){
        if(sim.stat.jumpsNumber===0) return 0;
        return Math.floor((sim.stat.jumpSuccess/sim.stat.jumpsNumber)*100);
    }, showTimeSeries: true, computeOnlyAtEnd:false
  }
};