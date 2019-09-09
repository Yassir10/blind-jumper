var Barrier = new cLASS({
  Name: "Barrier",
  supertypeName: "oBJECT",
  properties: {
    "length": {range:"NonNegativeInteger", label:"length", shortLabel: "len"}

  },
  methods:{
    "change" : function(){
        this.length = rand.uniformInt(1, 3);
    }
  }

});
