var Jumper = new cLASS({
  Name: "Jumper",
  supertypeName: "oBJECT",
  properties: {
    //"step": {range:"NonNegativeInteger", label:"step", shortLabel: "step"}
    "code": {range: "String"},
    "jumpLength": {range: "PositiveInteger", initialValue:1}
  },
  methods: {
    "jump": function () {
    }
  }

});
