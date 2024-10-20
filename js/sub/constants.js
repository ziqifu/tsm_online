//var PROL_ID = jsPsych.data.getURLVariable('PROLIFIC_PID');
//var CTBL = _.sample([0,1,2,3]); 
jsPsych.data.addProperties({
  subject: Math.random().toString(36).slice(2), 
  date: Date(),
  //prol_id: PROL_ID,
  //ctbl: CTBL
});

// Calculate display ratio based on Instr1.png and use it for all image stimuli
var IMG_REF = new Image();
IMG_REF.src = `static/images/instructions/Instr1.png`;
const INST_RATIO = IMG_REF.width / IMG_REF.height;
const INST_HEIGHT = window.innerHeight;
const INST_WIDTH = INST_RATIO * INST_HEIGHT;

var STIM_REF = new Image();
STIM_REF.src = `static/images/stim/Shapes/Hex.png`;
const STIM_RATIO = STIM_REF.width / STIM_REF.height;
const STIM_HEIGHT = window.innerHeight;
const STIM_WIDTH = STIM_RATIO * STIM_HEIGHT;


const ACQ_questions_list = [
  "It’s very easy for me to concentrate on a difficult task when there are noises around.",
  "When I need to concentrate and solve a problem, I do not have trouble focusing my attention.",
  "When I am working hard on something, I do not get distracted by events around me.",
  "I do not have a hard time concentrating when I’m excited about something.",
  "I can quickly switch from one task to another. ",
  "It is easy for me to coordinate my attention between the listening and writing required when taking notes during lectures.",
  "After being interrupted or distracted, I can easily shift my attention back to what I was doing before.",
  "It is easy for me to alternate between two different tasks.",
  "I can become interested in a new topic very quickly when I need to. ",
  "When a distracting thought comes to mind, it is easy for me to shift my attention away from it."
];

const STAY_questions_list = [
  "I feel upset",
  "I feel frightened",
  "I feel nervous",
  "I am jittery",
  "I feel confused"
]

const TAIY_questions_list = [
  "I feel that difficulties are piling up so that I cannot overcome them",
  "I worry too much over something that really doesn't matter",
  "Some unimportant thought runs through my mind and bothers me",
  "I take disappointments so keenly that I can't put them out of my mind",
  "I get in a state of tension or turmoil as I think about my recent concerns and interests"
]

const TLX_questions_list = [
  "How mentally demanding was the last block of trials?",
  "On the last block of trials, how hard did you have to work to accomplish your level of performance?",
  "During the last block of trials, how insecure, discouraged, irritated, stressed, and annoyed were you?"
]

function MakeInstr(image_name) {
  /**
 * Generates HTML for choice trials, which are two decks side-by-side with a key to press beneath. 
 * @param filepattern    shape to display
 * @param file_idx   index to local number stimuli in task_name
  **/
  let html = `
    <div style="text-align: center;">
      <img src="${image_name}" style="width: ${INST_WIDTH}px; height: ${INST_HEIGHT}px;" />
    </div>
  `;
  return html; 
};

function MakeStim(Shape, trial_idx, task_trial_list) {
  /**
 * Generates HTML for choice trials, which are two decks side-by-side with a key to press beneath. 
 * @param Shape    shape to display
 * @param trial_idx   index to local number stimuli in task_name
 * @param task_trial_list  trial list to traverse
 * @param height      height of the stimuli
 * @param width      width of the stimuli
 * @param scale      scaling factor
 * @return {[Array||String]}       HTML elements for each component
 */
  // select shape by XXX_images
  let shapeSrc;
  if (Shape == "Cir") {
    shapeSrc = `<img src="static/images/stim/Shapes/Cir.png" width="400px" height="400px">`;
  } else if (Shape == "Hex") {
    shapeSrc = `<img src="static/images/stim/Shapes/Hex.png" width="400px" height="400px">`;
  } else if (Shape == "Sem") {
    shapeSrc = `<img src="static/images/stim/Shapes/Sem.png" width="400px" height="400px">`;
  } else {
    shapeSrc = `<img src="static/images/stim/Shapes/Squ.png" width="400px" height="400px">`;
  }
  let imageSrc = task_trial_list[trial_idx].images;
  if (!imageSrc.endsWith('.png')) {
  imageSrc += '.png';
  }
  let numberSrc = `<img src="static/images/stim/${imageSrc}" width="50%" height="47%">`;

  let html = `
    <div id="container">
      <div id="main_image">${shapeSrc}</div>
      <div id="overlay_image">${numberSrc}</div>
    </div>
  `;
  return html; 

};



