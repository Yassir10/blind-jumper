var zdogVis = {
  NS: "http://www.w3.org/2000/svg",

  createShapeFromDefBox: function (shDef,obj) {
     var shAttribs = shDef.shapeAttributes;
     var el = null;
     var x = 0, y = 0, z = 0,
      width = 0, height = 0, depth = 0,
      color = "#cccccc", leftFace = "", rightFace = "",
      topFace = "", bottomFace= "",
      frontFace = "", rearFace = "",
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
     if(frontFace == "" && color.startsWith("#")) frontFace = color.slice(0, -1) + "9";
     else frontFace = color;
     if(rearFace == "" && color.startsWith("#")) rearFace = color.slice(0,-1) + "9";
     else rearFace = color;
     if(topFace == "" && color.startsWith("#")) topFace = color.slice(0,-1) + "e";
     else topFace = color;
     if(bottomFace == "" && color.startsWith("#")) bottomFace = color.slice(0,-1) + "e";
     else bottomFace = color;
     if(leftFace == "" && color.startsWith("#")) leftFace = color.slice(0,-1) + "0";
     else leftFace = color;
     if(rightFace == "" && color.startsWith("#")) rightFace = color.slice(0,-1) + "0";
     else rightFace = color;



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

 createText: function ( shDef, obj) {

    var shAttribs = shDef.shapeAttributes;
    var el = null;
    var x = 0, y = 0,
     width = 0, height = 0, textContent = "", style = "";
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
          case "width":
            width = val;
            break;
          case "height":
            height = val;
            break;
          case "textContent":
            textContent = val;
            break;
          case "style":
            style = val;
            break;
          default:
            break;
        }
      }
    );
    var el = document.createElementNS( zdogVis.NS,"text");
    el.textContent = textContent;
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    if (style) el.style = style;  // el.setAttribute("style", style);
    return el;
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

    var svgElement = document.createElementNS(zdogVis.NS, "svg");
    svgElement.setAttributeNS(null, "height", canvasHeight);
    svgElement.setAttributeNS(null, "width", canvasWidth);

    var zdogSvgElement = document.createElementNS(zdogVis.NS, "svg");
    zdogSvgElement.setAttributeNS(null, "height", canvasHeight);
    zdogSvgElement.setAttributeNS(null, "width", canvasWidth);
    zdogSvgElement.setAttributeNS(null, "class", "canvasZdog");

    svgElement.appendChild(zdogSvgElement);
    mainEl.appendChild(svgElement);

    var initialRotationX = -Math.PI / 6, initialRotationY = -Math.PI / 6; initialRotationZ = 0;
    if(obsUI.initialViewRotation){
      if(obsUI.initialViewRotation.x) initialRotationX = obsUI.initialViewRotation.x;
      if(obsUI.initialViewRotation.y) initialRotationY = obsUI.initialViewRotation.y;
      if(obsUI.initialViewRotation.z) initialRotationZ = obsUI.initialViewRotation.z;
    }



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
                zdogVis.fixedAnchor.addChild(el);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cylinder"){
                el = zdogVis.createShapeFromDefCylinder(itemDef);
                zdogVis.fixedAnchor.addChild(el);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cone"){
                el = zdogVis.createShapeFromDefCone(itemDef);
                zdogVis.fixedAnchor.addChild(el);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "text"){
                el = zdogVis.createText(itemDef);
                if(itemDef.style){
                  el.setAttributeNS(null,"style",itemDef.style);
                }
                svgElement.appendChild(el);

              }
              itemDef.element = el;


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
                zdogVis.objAnchor.addChild(el);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cylinder"){
                el = zdogVis.createShapeFromDefCylinder(itemDef,obj);
                zdogVis.objAnchor.addChild(el);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cone"){
                el = zdogVis.createShapeFromDefCone(itemDef,obj);
                zdogVis.objAnchor.addChild(el);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "text"){
                el = zdogVis.createText(itemDef,obj);
                if(itemDef.style){
                  el.setAttributeNS(null,"style",itemDef.style);
                }
                svgElement.appendChild(el);
              }
              itemDef.element = el;



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
          var textContent = "";
          objViewItems.forEach(
            function (itemDef){
              var oldElem = itemDef.element;
              zdogVis.objAnchor.removeChild(oldElem);

              if(itemDef.shapeName && itemDef.shapeName == "box"){

                el = zdogVis.createShapeFromDefBox(itemDef,obj);
                zdogVis.objAnchor.addChild(el);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cylinder"){
                el = zdogVis.createShapeFromDefCylinder(itemDef,obj);
                zdogVis.objAnchor.addChild(el);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "cone"){
                el = zdogVis.createShapeFromDefCone(itemDef,obj);
                zdogVis.objAnchor.addChild(el);
              }
              else if(itemDef.shapeName && itemDef.shapeName == "text"){
                if (typeof itemDef.shapeAttributes["textContent"] === "function") {

                  textContent = itemDef.shapeAttributes["textContent"](obj);
                } else textContent = itemDef.shapeAttributes["textContent"];
                oldElem.textContent = textContent;
                el = oldElem;
                
              }
              itemDef.element = el;

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
