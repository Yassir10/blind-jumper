var zdogVis = {

  createShapeFromDefBox: function (shDef,obj) {
     var shAttribs = shDef.shapeAttributes;
     var el = null;
     var x = 0, y = 0, z = 0,
      width = 0, height = 0, depth = 0,
      color = "#cccccc", leftFace = "#cbcbcb", rightFace = "#cbcbcb",
      topFace = "#c0c0c0", bottomFace= "#c0c0c0",
      frontFace = "#c4c4c4", rearFace = "#c4c4c4",
      stroke = 1, fill = true;
     //shape attributes
     Object.keys(shAttribs).forEach(
       function(attrName){
         var val;
         if (typeof shAttribs[attrName] === "function") {
           val = shAttribs[attrName](obj);
         } else val = shAttribs[attrName];
         switch (attrName){
           case "x":
             x = val;
             break;
           case "y":
             y = val;
             break;
           case "z":
             z = val;
             break;
           case "width":
             width = val;
             break;
           case "height":
             height = val;
             break;
           case "depth":
             depth = val;
             break;
           case "color":
             color = val;
             break;
           case "frontFace":
             frontFace = val;
             break;
           case "rearFace":
             rearFace = val;
             break;
           case "topFace":
             backFace = val;
             break;
           case "bottomFace":
             bottomFace = val;
             break;
           case "leftFace":
             leftFace = val;
             break;
           case "rightFace":
             rightFace = val;
             break;
           case "stroke":
             stroke = val;
             break;
           case "fill":
             fill = val;
             break;
           default:
             break;
         }
       }
     )

     var box = new Zdog.Box(
       {
         width: width,
         depth: depth,
         height: height,
         color: color,
         translate: {x: x, y: y, z: z},
         stroke: stroke,
         fill: fill,
         frontFace: frontFace,
         rearFace: rearFace,
         topFace: topFace,
         bottomFace: bottomFace,
         leftFace: leftFace,
         rightFace: rightFace,
       }
     )
     return box;
   },
   //Create shape using attributes of the shape
   createShapeFromDefCylinder: function (shDef, obj) {
    //return an array of queue objects
    var shAttribs = shDef.shapeAttributes;
    var el = [];
    var x = 0, y = 0, z = 0,
     diameter = 0, length = 0,
     xRotation = 0, yRotation = 0, zRotation = 0,
     color = "darkblue",
     frontFace = "#c9c9c9", backface = "#c9c9c9",
     stroke = 1, fill = true;
    //shape attributes
    Object.keys(shAttribs).forEach(
      function(attrName){
        var val;
        if (typeof shAttribs[attrName] === "function") {
          val = shAttribs[attrName](obj);
        } else val = shAttribs[attrName];
        switch (attrName){
          case "x":
            x = val;
            break;
          case "y":
            y = val;
            break;
          case "z":
            z = val;
            break;
          case "xRotation":
            xRotation = val;
            break;
          case "yRotation":
            yRotation = val;
            break;
          case "zRotation":
            zRotation = val;
            break;
          case "diameter":
            diameter = val;
            break;
          case "length":
            length = val;
            break;
          case "color":
            color = val;
            break;
          case "frontFace":
            frontFace = val;
            break;
          case "backface":
            backface = val;
            break;
          case "stroke":
            stroke = val;
            break;
          case "fill":
            fill = val;
            break;
          default:
            break;
        }
      }
    );
    var cylinder = new Zdog.Cylinder(
      {
        diameter: diameter,
        length: length,
        translate: {x: x,y: y,z: z,},
        rotate: {x: xRotation,y: yRotation, z: zRotation,},
        stroke: stroke,
        color: color,
        fill: fill,
        frontFace: frontFace,
        backface: backface,
      }
    );
    return cylinder;
  },
  //Create shape using attributes of the shape
  createShapeFromDefCone: function (shDef, obj) {
   //return an array of queue objects
   var shAttribs = shDef.shapeAttributes;
   var el = [];
   var x = 0, y = 0, z = 0,
    diameter = 0, length = 0,
    xRotation = 0, yRotation = 0, zRotation = 0,
    color = "darkblue", backface = "#c9c9c9",
    stroke = 1, fill = true;
   //shape attributes
   Object.keys(shAttribs).forEach(
     function(attrName){
       var val;
       if (typeof shAttribs[attrName] === "function") {
         val = shAttribs[attrName](obj);
       } else val = shAttribs[attrName];
       switch (attrName){
         case "x":
           x = val;
           break;
         case "y":
           y = val;
           break;
         case "z":
           z = val;
           break;
         case "xRotation":
           xRotation = val;
           break;
         case "yRotation":
           yRotation = val;
           break;
         case "zRotation":
           zRotation = val;
           break;
         case "diameter":
           diameter = val;
           break;
         case "length":
           length = val;
           break;
         case "color":
           color = val;
           break;
         case "backface":
           backface = val;
           break;
         case "stroke":
           stroke = val;
           break;
         case "fill":
           fill = val;
           break;
         default:
           break;
       }
     }
   );
   var cone = new Zdog.Cone(
     {
       diameter: diameter,
       length: length,
       translate: {x: x,y:y, z: z,},
       rotate: {x: xRotation,y: yRotation, z: zRotation,},
       stroke: stroke,
       color: color,
       fill: fill,
       backface: backface,
     }
   );
   return cone;
 },
  ///////////////////////////////////////+
  createText: function (shDef, obj){
    //return an array of queue objects
    var shAttribs = shDef.shapeAttributes;
    var el = [];
    var x = 0, y = 0, z = 0,
     fontSize = 0, textContent = "",
     textAlign = "", textBaseline = "",
     color = "black", stroke = 1, fill = true;
    //shape attributes
    Object.keys(shAttribs).forEach(
      function(attrName){
        var val;
        if (typeof shAttribs[attrName] === "function") {
          val = shAttribs[attrName](obj);
        } else val = shAttribs[attrName];
        switch (attrName){
          case "x":
            x = val;
            break;
          case "y":
            y = val;
            break;
          case "z":
            z = val;
            break;
          case "fontSize":
            fontSize = val;
            break;
          case "textContent":
            textContent = val;
            break;
          case "textAlign":
            textAlign = val;
            break;
          case "textBaseline":
            textBaseline = val;
            break;
          case "color":
            color = val;
            break;
          case "stroke":
            stroke = val;
            break;
          case "fill":
            fill = val;
            break;
          default:
            break;
        }
      }
    );
    let font = new Zdog.Font({
       src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf',
    });

    var text = new Zdog.Text(
      {
        translate: {x: x, y: y, z: z},
        font: font,
        fontSize: fontSize,
        value: [textContent],
        textAlign: textAlign,
        textBaseline: textBaseline,
        color: color,
        stroke: stroke,
        fill: fill,
      }
    );
    return text;
  },
  ///////////////////////////////////////
  setup: function (containerEl) {
    window.Zfont.init(Zdog);
    var obsUI = sim.config.observationUI,
        fixedElems = obsUI.fixedElements,
        objViews = obsUI.objectViews;
    //add a canvas to the document
    var canvasWidth = obsUI.canvas.width || 600,
     canvasHeight = obsUI.canvas.height || 400,
     canvasSvgEl = svg.createSVG({id:"canvasZdog",
        width: canvasWidth, height: canvasHeight});
    var mainEl = document.querySelector("body > main");
    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttributeNS(null, "height", canvasHeight);
    svgElement.setAttributeNS(null, "width", canvasWidth);
    svgElement.setAttributeNS(null, "class", "canvasZdog");

    mainEl.appendChild(svgElement);

    var initialRotationX = -Math.PI / 6, initialRotationY = -Math.PI / 6; initialRotationZ = 0;
    if(obsUI.initialViewRotation.x) initialRotationX = obsUI.initialViewRotation.x;
    if(obsUI.initialViewRotation.y) initialRotationY = obsUI.initialViewRotation.y;
    if(obsUI.initialViewRotation.z) initialRotationZ = obsUI.initialViewRotation.z;


    //add zdog Anchors to contain fixed elements and object views
    zdogVis.illo = new Zdog.Illustration(
      {
        element: '.canvasZdog',
        dragRotate: true,
        rotate: {x: initialRotationX,y: initialRotationY, z: initialRotationZ},
      }
    );

    let dragStartRX, dragStartRY;
    let minSize = Math.min( canvasWidth, canvasHeight );


    new Zdog.Dragger({
      startElement: svgElement,
      onDragStart: function() {
        isSpinning = false;
        dragStartRX = zdogVis.illo.rotate.x;
        dragStartRY = zdogVis.illo.rotate.y;
        zdogVis.illo.updateRenderGraph();
      },
      onDragMove: function( pointer, moveX, moveY ) {
        zdogVis.illo.rotate.x = dragStartRX - ( moveY / minSize * Zdog.TAU );
        zdogVis.illo.rotate.y = dragStartRY - ( moveX / minSize * Zdog.TAU );
        zdogVis.illo.updateRenderGraph();
      },
    });

    zdogVis.fixedAnchor = new Zdog.Anchor(
      {
        addTo: zdogVis.illo,
      }
    );
    zdogVis.objAnchor = new Zdog.Anchor(
      {
        addTo: zdogVis.illo,
      }
    );
    //render fixed elements
    if(fixedElems){
      Object.keys(fixedElems).forEach(
        function(id){
          var el = null;
          fixedElem = fixedElems[id],   // objViews[obj.constructor.Name]
          fixedElemItems = Array.isArray( fixedElem) ? fixedElem : [fixedElem];  // eine Liste bilden
          fixedElemItems.forEach(
            function (itemDef){
              if(itemDef.shapeName && itemDef.shapeName == "box"){
                el = zdogVis.createShapeFromDefBox(itemDef);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cylinder"){
                el = zdogVis.createShapeFromDefCylinder(itemDef);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cone"){
                el = zdogVis.createShapeFromDefCone(itemDef);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "text"){
                el = zdogVis.createText(itemDef);
              }
              itemDef.element = el;
              zdogVis.fixedAnchor.addChild(el);

            }
          );
        }
      );
    }
    // render object views
    if(objViews){
      Object.keys(objViews).forEach(
        function(viewId){
          var el=null,
           obj = sim.namedObjects[viewId],  // when viewId = objName
           objView = objViews[viewId],   // objViews[obj.constructor.Name]
           objViewItems = Array.isArray( objView) ? objView : [objView];  // eine Liste bilden
          objViewItems.forEach(
            function (itemDef){
              if(itemDef.shapeName && itemDef.shapeName == "box"){
                el = zdogVis.createShapeFromDefBox(itemDef,obj);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cylinder"){
                el = zdogVis.createShapeFromDefCylinder(itemDef,obj);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cone"){
                el = zdogVis.createShapeFromDefCone(itemDef,obj);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "text"){
                el = zdogVis.createText(itemDef,obj);
              }
              itemDef.element = el;
              zdogVis.objAnchor.addChild(el);

            }
          );
        }
      );
    }
    zdogVis.illo.updateRenderGraph();
  },
  /////////////////
  visualizeStep: function () {

     // get the array as el -> if it needs to be bigger add elements else remove elements from the array
     var obsUI = sim.config.observationUI,
        objViews = obsUI.objectViews;
     // render object views
     if(objViews){
      Object.keys(objViews).forEach(
        function(viewId){
          var el=null,
           obj = sim.namedObjects[viewId],  // when viewId = objName
           objView = objViews[viewId],   // objViews[obj.constructor.Name]
           objViewItems = Array.isArray( objView) ? objView : [objView];  // eine Liste bilden
          objViewItems.forEach(
            function (itemDef){
              var oldElem = itemDef.element;
              //remove old elements of zdog
              zdogVis.objAnchor.removeChild(oldElem);

              if(itemDef.shapeName && itemDef.shapeName == "box"){
                el = zdogVis.createShapeFromDefBox(itemDef,obj);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cylinder"){
                el = zdogVis.createShapeFromDefCylinder(itemDef,obj);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cone"){
                el = zdogVis.createShapeFromDefCone(itemDef,obj);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "text"){
                el = zdogVis.createText(itemDef,obj);
              }
              itemDef.element = el;
              zdogVis.objAnchor.addChild(el);
            }
          );
        }
      );
     }
     zdogVis.illo.updateRenderGraph();
  },
  reset: function () {
     zdogVis.visualizeStep();//TODO replace with reset code
  },
};
