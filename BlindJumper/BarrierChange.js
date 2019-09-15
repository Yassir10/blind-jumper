let BarrierChange = new cLASS({
  Name: "BarrierChange",
  supertypeName: "eVENT",
  shortLabel: "barChng",
  properties: {
    "barrier": { range: "Barrier" },
    "jumper": {range: "Jumper"},
  },
  methods: {
    "onEvent": function () {
      this.jumper.reset();
      this.barrier.change();
      return [];
    }
  }
});

BarrierChange.recurrence = function () {
  return 3;
};
