var Speaker = new cLASS({
  Name: "Speaker",
  supertypeName: "oBJECT",
  properties: {
    "barrier": {range: "Barrier"},
    "learnMatrix" : {range: Array, initialValue:[[0.33,0.33,0.33],
        [0.33,0.33,0.33], [0.33,0.33,0.33]]},
    "colSpeaker": {range: "NonNegativeInteger"},
    "rowSpaker": {range: "NonNegativeInteger"}
  },
});
