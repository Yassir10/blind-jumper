let BarrierChange = new cLASS({
  Name: "BarrierChange",
  supertypeName: "eVENT",
  shortLabel: "barChng",
  properties: {
    "barrier": { range: "Barrier" }
  },
  methods: {
    "onEvent": function () {
      this.barrier.change();
      return [];
    }
  }
});

BarrierChange.recurrence = function () {
  return 3;
};
