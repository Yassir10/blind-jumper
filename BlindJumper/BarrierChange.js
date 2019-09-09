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

//BarrierChange.priority = 2;

BarrierChange.recurrence = function () {
  return 3;  // better: exponential( 0.5)
};
