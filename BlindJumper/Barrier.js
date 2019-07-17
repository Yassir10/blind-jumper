var Barrier = new cLASS({
  Name: "Barrier",
  supertypeName: "oBJECT",
  properties: {
    "length": {range:"NonNegativeInteger", label:"length", shortLabel: "length"}

  },
  methods:{
    "change" : function(){
        this.length = rand.uniformInt(1, 3);
    }
  }

});
