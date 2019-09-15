let StartOver = new cLASS({
  Name: "StartOver",
  supertypeName: "eVENT",
  shortLabel: "StartOver",
  properties: {
    "barrier": { range: "Barrier" },
    "jumper": {range: "Jumper"},
  },
  methods: {
    "onEvent": function () {
      this.barrier.length = rand.uniformInt( 1, 3);
      this.jumper.position = 1;  // reset the jumper position
      return [];
    }
  }
});

StartOver.recurrence = function () {
  return 3;
};
