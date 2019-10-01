var zdogVis = {

  createShapeFromDefBox: function (shDef,obj) {
     var shAttribs = shDef.shapeAttributes;
     var el = null;
     var x = 0, y = 0, z = 0,
      width = 0, height = 0, depth = 0,
      color = "brown", stroke = 1, fill = true;
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
     color = "darkblue", stroke = 1, fill = true;
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
    color = "darkblue", stroke = 1, fill = true;
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
     color = "darkblue", stroke = 1, fill = true;
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
    // define SVG canvas
    /*sim.visualEl = dom.createElement("div",{id:"visCanvas", classValues:"uiBlock"});
    if (obsUI.canvas.style) sim.visualEl.style = obsUI.canvasStyle;
    sim.visualEl.appendChild( canvasSvgEl);
    mainEl.appendChild( sim.visualEl);*/

    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttributeNS(null, "height", canvasHeight);
    svgElement.setAttributeNS(null, "width", canvasWidth);
    svgElement.setAttributeNS(null, "class", "canvasZdog");

    mainEl.appendChild(svgElement);

    //add zdog Anchors to contain fixed elements and object views
    zdogVis.illo = new Zdog.Illustration(
      {
        element: '.canvasZdog',
        dragRotate: true,
      }
    );
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
  animate: async function () {
    zdogVis.illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
  },
};

zdogVis.animate();
