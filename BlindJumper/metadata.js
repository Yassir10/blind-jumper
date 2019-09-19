var sim = sim || {};
sim.model = sim.model || {};
sim.scenario = sim.scenario || {};
sim.config = sim.config || {};

var oes = oes || {};
oes.ui = oes.ui || {};
oes.ui.explanation = {};
oes.ui.i18n = {transDates:{}, changeDates:{}};

/*******************************************************
 Simulation Model
********************************************************/
sim.model.name = "TheBlindJumper-1";
sim.model.title = "The Blind Jumper: Emerging Semantics through Reinforcement Learning";
sim.model.systemNarrative = '<p>In this model on <em>multi-agent reinforcement learning</em> there is an agent ' +
    '(the "jumper") that is not able to see the size of the barrier over which he has to jump, and there is ' +
    'another agent (the "speaker") that is able to see the size of the barrier and tries to communicate the right '+
    'jump length to the jumper.	However, the jumper and the speaker do not speak the same language, so both agents '+
    'first have to learn which signal communicates which jump length. Both agents can perceive the success or ' +
    'failure of a jump (a jump fails if it is too short or too long), and then update their signal interpretation' +
    ' function accordingly.</p>';
sim.model.shortDescription = "<p>The model defines three classes: jumper, speaker and barrier and also three " +
    "events jump and tell and startOver, that also connect our classes. First the StartOver event occurs and " +
    "modifies the length of the barrier, then the speaker notices the change and in order to communicate this " +
    "information to the blind jumper, the speaker try to find the corresponding length symbol using his learning " +
    "matrix which is displayed above the speaker. This happens through the tell event that occur right after " +
    "StartOver. Then in the jump event the blind jumper try to map the length symbol to one of the barrier " +
    "lengths using the learning matrix and jumps the barrier. In both cases (success and failure) the jumper " +
    "and the speaker update their learning matrices according to whether it was a successful jump or not. The " +
    "model keep learning until the two learning matrices converge to a certain value. This means that the two " +
    "agents could find a language that can communicate the barrier length to each other.</p>";

sim.model.license = "CC BY-NC";
sim.model.creator = "Yassir Sellal";
sim.model.created = "2019-07-15";
sim.model.modified = "2019-09-19";

