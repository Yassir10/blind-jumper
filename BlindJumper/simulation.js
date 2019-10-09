/*******************************************************
 * Inventory - An example of a discrete event simulation.
 * @copyright Copyright 2016 Gerd Wagner, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
********************************************************/
/*******************************************************
 Simulation Parameters
********************************************************/
sim.config.stepDuration = 200;
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
  {typeName: "StartOver", occTime: 1, barrier: 3, jumper: 1, speaker: 2},
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
sim.config.observationUI.type = "Zdog";
sim.config.observationUI.canvas.width = 700;
sim.config.observationUI.canvas.height = 400;
sim.config.observationUI.canvas.style = "background-color:yellow";
sim.config.observationUI.initialViewRotation = {y: Zdog.TAU/8};

sim.config.observationUI.fixedElements = {
  /*"ground": {
      shapeName: "box",
      shapeAttributes: {
        x: 10, y: 110,
        width: 600, height: 1, depth: 10,
        color: "#808080", strokeWidth: 10,
      },

  },
  "MatrixJumper":{
    shapeName: "box",
    shapeAttributes:{
      x:-200,
      y:-50,
      z:-20,
      width:140,
      height: 75,
      fill: true,
      color: "#f2e8d5", strokeWidth: 0,
    },

  },*/
  /*"MatrixSpeaker":{
    shapeName: "box",
    shapeAttributes:{
      x:100,
      y:-50,
      z:-20,
      width:140,
      height:75,
      fill: true,
      color: "#f2e8d5", strokeWidth: 0,
    },
  },*/
    "rowAJumper":
        { shapeName: "text",
        shapeAttributes:{
          textContent: "A",
          x:129, y:42,
          width:150, height:138,
          style:"font-size:12px; text-anchor:middle;"
        }
      },
  "rowBJumper":
    { shapeName: "text",
        shapeAttributes:{
      textContent: "B",
      x:129, y:62,
      width:150, height:138,
      style:"font-size:12px; text-anchor:middle;"
    }
    },
  "rowCJumper":
    { shapeName: "text",
        shapeAttributes:{
      textContent: "C",
      x:129, y:82,
      width:150, height:138,
      style:"font-size:12px; text-anchor:middle;"
    }
    },
  "colsSpeaker":
    { shapeName: "text",
        shapeAttributes:{
      textContent: "1\xa0\xa0\xa0 | \xa0\xa0\xa0  2 \xa0\xa0|\xa0\xa0  3  \xa0\xa0\xa0|\xa0\xa0  4",
      x:210, y:17,
      width:150, height:138,
      style:"font-size:12px; text-anchor:middle;"
    }
    },
"colsJumper":
    { shapeName: "text",
    shapeAttributes:{
  textContent: "A\xa0\xa0\xa0 | \xa0\xa0\xa0  B \xa0\xa0|\xa0\xa0  C ",
  x:510, y:17,
  width:150, height:138,
  style:"font-size:12px; text-anchor:middle;"
}
},
  "row1Speaker":
     { shapeName: "text",
       shapeAttributes:{
       textContent: "1",
       x:450, y:42,
       width:150, height:138,
       style:"font-size:12px; text-anchor:middle;"
     }
     },
  "row2Speaker": { shapeName: "text",
    shapeAttributes:{
      textContent: "2",
      x:450, y:62,
      width:150, height:138,
      style:"font-size:12px; text-anchor:middle;"
    }
  },
  "row3Speaker":{ shapeName: "text",
      shapeAttributes:{
    textContent: "3",
    x:450, y:82,
    width:150, height:138,
    style:"font-size:12px; text-anchor:middle;"
  }
  },

};
sim.config.observationUI.objectViews = {
  "jumper": [
    {// body
      shapeName: "cylinder",
      shapeAttributes: {
        // middle (x,y)
        x: function (j) { return -145 + j.position * 40;},
        y:50, xRotation: Math.PI / 2,
        length: 55, diameter: 25,
      }
    },
    {//left arm
      shapeName: "cylinder",
      shapeAttributes:
      {
        // middle (x,y)
        x: function (j) { return -145 + j.position * 40;},
        y:45, z: 20,
        xRotation: Math.PI / 2,
        length: 45, diameter: 5,
      }
    },
    {
      shapeName: "cylinder",
      shapeAttributes:
      { //right arm
        // middle (x,y)
        x: function (j) { return -145 + j.position * 40;},
        y:45, z: -20,
        xRotation: Math.PI / 2,
        length: 45, diameter: 5,
      }
    },
    {
      shapeName: "cylinder",
      shapeAttributes:
      {//left leg
        // middle (x,y)
        x: function (j) { return -145 + j.position * 40;},
        y:90, z: 10,
        xRotation: Math.PI / 2,
        length: 40, diameter: 5,
      }
    },
    {
      shapeName: "cylinder",
      shapeAttributes:
      {//right leg
        // middle (x,y)
        x: function (j) {return -145 + j.position * 40;},
        y:90, z: -10,
        xRotation: Math.PI / 2,
        length: 40, diameter: 5,
      }
    },
    {// head
      shapeName: "cone",
      shapeAttributes:
      {
        // middle (x,y)
        x: function (j) { return -145 + j.position * 40;},
        y:15, xRotation: Math.PI / 2,
        length: 15, diameter: 20,
      }
    },
    { shapeName: "text",
      shapeAttributes:{
        textContent: function (j) {
          let jumpSuccessMatrix = j.learnMatrix[0],
		      output = jumpSuccessMatrix[0][0], i=0;
          for (i=1; i < jumpSuccessMatrix[0].length; i++){
            output += " | " + jumpSuccessMatrix[0][i];
          }
          return output;
        },
        x:210, y:42,
        width:150, height:138,
        style:"font-size:12px; text-anchor:middle;"
      }
	},
    { shapeName: "text",
      shapeAttributes: {
        textContent: function(j){
          let jumpSuccessMatrix = j.learnMatrix[0],
		      output = jumpSuccessMatrix[1][0], i=0;
          for (i=1; i < jumpSuccessMatrix[1].length; i++){
            output += " | " + jumpSuccessMatrix[1][i];
          }
          return output;
        },
        x: 210, y: 62,
        width: 150, height: 138,
        style:"font-size:12px; text-anchor:middle;"
      }
    },
    { shapeName: "text",
      shapeAttributes:{
        textContent: function(j){
          let jumpSuccessMatrix = j.learnMatrix[0],
		      output = jumpSuccessMatrix[2][0], i=0;
          for (i=1; i < jumpSuccessMatrix[2].length; i++){
            output += " | " + jumpSuccessMatrix[2][i];
          }
          return output;
        },
        x:210, y:82,
        width:150, height:138,
        style:"font-size:12px; text-anchor:middle;"
      }}],
  "barrier": [
    { shapeName: "box",
      shapeAttributes: {
        x: function(b) {return -90 + (b.length * 20) }, y: 80,  // left-upper corner (x,y)
        width: function (b) {return b.length * 40;},
        height: 50,
        depth: 100,
        fill:true,
        color: "#808080",
      }
    }
  ],
  "speaker": [
    { shapeName: "cone",
      shapeAttributes: {
        x: 190, y:100, length: 100, diameter: 30,
        xRotation: Math.PI / 2,
      }
    },
	{ shapeName: "text",
      shapeAttributes: {
        textContent: function (s) {
          var tellSuccessMatrix = s.learnMatrix[0],
		      output = tellSuccessMatrix[0][0], i=0;
          for (i=1; i < tellSuccessMatrix[0].length; i++){
            output += " | " + tellSuccessMatrix[0][i];
          }
          return output;
        },
        x:510, y:42, width:150, height:138,
        style:"font-size:12px; text-anchor:middle;"
      }
    },
    { shapeName: "text",
      shapeAttributes: {
        textContent: function (s) {
          var tellSuccessMatrix = s.learnMatrix[0],
		      output = tellSuccessMatrix[1][0], i=0;
          for (i=1; i < tellSuccessMatrix[1].length; i++){
            output += " | " + tellSuccessMatrix[1][i];
          }
          return output;
        },
        x: 510, y: 62, width: 150, height: 138,
        style:"font-size:12px; text-anchor:middle;"
      }
    },
    { shapeName: "text",
      shapeAttributes: {
        textContent: function (s) {
          var tellSuccessMatrix = s.learnMatrix[0],
		      output = tellSuccessMatrix[2][0], i=0;
          for (i=1; i < tellSuccessMatrix[2].length; i++){
            output += " | " + tellSuccessMatrix[2][i];
          }
          return output;
        },
        x:510, y:82, width:150, height:138,
        style:"font-size:12px; text-anchor:middle;"
      }
    },
  ],
};
/*sim.config.observationUI.fixedElements = {
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
      width:140,
      height: 70
    },
    style: "fill:#f2e8d5; stroke-width:0"
  },
  "MatrixSpeaker":{
    shapeName: "rect",
    shapeAttributes:{
      x:510,
      y:22,
      width:100,
      height:75
    },
    style: "fill:#f2e8d5; stroke-width:0"
  },
    "rowAJumper":
        { shapeName: "text",
        shapeAttributes:{
      textContent: "A",
          x:79, y:42,
          width:150, height:138,
          style:"font-size:12px; text-anchor:middle;"
    }
    },
  "rowBJumper":
    { shapeName: "text",
        shapeAttributes:{
      textContent: "B",
          x:79, y:62,
          width:150, height:138,
          style:"font-size:12px; text-anchor:middle;"
    }
    },
  "rowCJumper":
    { shapeName: "text",
        shapeAttributes:{
      textContent: "C",
          x:79, y:82,
          width:150, height:138,
          style:"font-size:12px; text-anchor:middle;"
    }
    },
  "colsSpeaker":
    { shapeName: "text",
        shapeAttributes:{
      textContent: "1\xa0\xa0\xa0 | \xa0\xa0\xa0  2 \xa0\xa0|\xa0\xa0  3  \xa0\xa0\xa0|\xa0\xa0  4",
          x:160, y:17,
          width:150, height:138,
          style:"font-size:12px; text-anchor:middle;"
    }
    },
"colsJumper":
    { shapeName: "text",
    shapeAttributes:{
  textContent: "A\xa0\xa0\xa0 | \xa0\xa0\xa0  B \xa0\xa0|\xa0\xa0  C ",
      x:560, y:17,
      width:150, height:138,
      style:"font-size:12px; text-anchor:middle;"
}
},
  "row1Speaker":
     { shapeName: "text",
       shapeAttributes:{
       textContent: "1",
       x:500, y:42,
       width:150, height:138,
       style:"font-size:12px; text-anchor:middle;"
     }
     },
  "row2Speaker": { shapeName: "text",
    shapeAttributes:{
      textContent: "2",
      x:500, y:62,
      width:150, height:138,
      style:"font-size:12px; text-anchor:middle;"
    }
  },
  "row3Speaker":{ shapeName: "text",
      shapeAttributes:{
    textContent: "3",
        x:500, y:82,
        width:150, height:138,
        style:"font-size:12px; text-anchor:middle;"
  }
  },

};
sim.config.observationUI.objectViews = {
  "jumper": [
      { shapeName: "image",
      shapeAttributes: {
        id: "jumperView",
        file: sim.config.imgFolder + "blind-man.png",
		// left-upper corner (x,y)
        x: function (j) { return 20 + j.position * 62;},
        y: 142, width: 154, height: 138,
      }
    },
    { shapeName: "text",
      shapeAttributes:{
        textContent: function (j) {
          let jumpSuccessMatrix = j.learnMatrix[0],
		      output = jumpSuccessMatrix[0][0], i=0;
          for (i=1; i < jumpSuccessMatrix[0].length; i++){
            output += " | " + jumpSuccessMatrix[0][i];
          }
          return output;
        },
        x:160, y:42,
        width:150, height:138,
        style:"font-size:12px; text-anchor:middle;"
      }
	},
    { shapeName: "text",
      shapeAttributes: {
        textContent: function(j){
          let jumpSuccessMatrix = j.learnMatrix[0],
		      output = jumpSuccessMatrix[1][0], i=0;
          for (i=1; i < jumpSuccessMatrix[1].length; i++){
            output += " | " + jumpSuccessMatrix[1][i];
          }
          return output;
        },
        x: 160, y: 62,
        width: 150, height: 138,
        style:"font-size:12px; text-anchor:middle;"
      }
    },
    { shapeName: "text",
      shapeAttributes:{
        textContent: function(j){
          let jumpSuccessMatrix = j.learnMatrix[0],
		      output = jumpSuccessMatrix[2][0], i=0;
          for (i=1; i < jumpSuccessMatrix[2].length; i++){
            output += " | " + jumpSuccessMatrix[2][i];
          }
          return output;
        },
        x:160, y:82,
        width:150, height:138,
        style:"font-size:12px; text-anchor:middle;"
      }}],
  "barrier": [
    { shapeName: "rect",
      shapeAttributes: {
        x: 200, y: 205,  // left-upper corner (x,y)
        width: function (b) {return b.length * 50;},
        height: 50,
        style:"fill:grey;"
      }
    }
  ],
  "speaker": [
    { shapeName: "image",
      shapeAttributes: {
        file: function (s) {
          if (s.colSpeaker===0) {
            return sim.config.imgFolder + "cartoon-man-wearing-suit.png"
          } else {
            return sim.config.imgFolder + "cartoon-man-wearing-suit_"+s.colSpeaker+".png";
          }
        },
        x: 500, y:132, width: 107, height: 131
      }
    },
	{ shapeName: "text",
      shapeAttributes: {
        textContent: function (s) {
          var tellSuccessMatrix = s.learnMatrix[0],
		      output = tellSuccessMatrix[0][0], i=0;
          for (i=1; i < tellSuccessMatrix[0].length; i++){
            output += " | " + tellSuccessMatrix[0][i];
          }
          return output;
        },
        x:560, y:42, width:150, height:138,
        style:"font-size:12px; text-anchor:middle;"
      }
    },
    { shapeName: "text",
      shapeAttributes: {
        textContent: function (s) {
          var tellSuccessMatrix = s.learnMatrix[0],
		      output = tellSuccessMatrix[1][0], i=0;
          for (i=1; i < tellSuccessMatrix[1].length; i++){
            output += " | " + tellSuccessMatrix[1][i];
          }
          return output;
        },
        x: 560, y: 62, width: 150, height: 138,
        style:"font-size:12px; text-anchor:middle;"
      }
    },
    { shapeName: "text",
      shapeAttributes: {
        textContent: function (s) {
          var tellSuccessMatrix = s.learnMatrix[0],
		      output = tellSuccessMatrix[2][0], i=0;
          for (i=1; i < tellSuccessMatrix[2].length; i++){
            output += " | " + tellSuccessMatrix[2][i];
          }
          return output;
        },
        x:560, y:82, width:150, height:138,
        style:"font-size:12px; text-anchor:middle;"
      }
    },
  ],
};*/

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
