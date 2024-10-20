// Miscelaneous 
jsPsych.data.addProperties({
  subject: Math.random().toString(36).slice(2), 
  date: Date.now()
});


var fs = {
 type: 'fullscreen', 
 fullscreen_mode: true,
 on_finish: function(){
   // set up task appearence
   document.body.style.background = "black";
   document.body.style.color = 'white'   
 }
};

// number image names
const numberFilenames = [
  'Eightfour.png', 'Eightnine.png', 'Eightseven.png', 'Eighttwo.png',
  'Foureight.png', 'Fourone.png', 'Foursix.png', 'Fourthree.png',
  'Nineeight.png', 'Nineone.png', 'Ninesix.png', 'Ninethree.png',
  'Onefour.png', 'Onenine.png', 'Oneseven.png', 'Onethree.png',
  'Onetwo.png', 'Seveneight.png', 'Sevenone.png', 'Sevensix.png',
  'Seventhree.png', 'Sixfour.png', 'Sixnine.png', 'Sixseven.png',
  'Sixtwo.png', 'Threefour.png', 'Threenine.png', 'Threeseven.png',
  'Threetwo.png', 'Twoeight.png', 'Twoone.png', 'Twosix.png', 'Twothree.png'
];

// shape image names
const shapeFilenames = [
  'Cir.png', 'Hex.png', 'Sem.png', 'Squ.png'
];


// Rule instruction slides
const rule_instrs = [
    'Instr1.png', 'MagSSquL3.png',
    'Instr2.png', 'MagSSquS1.png',
    'Instr3.png', 'MagSSquS2.png',
    'Instr4.png', 'MagSSquS3.png',
    'Instr5.png',
    'Instr6.png', 'ParLCirE1.png',
    'InstrEndofBlock.png', 'ParLCirE2.png',
    'InstrGoodjobActualtask.png', 'ParLCirE3.png',
    'InstrGoodjobNextSwitchPrac.png', 'ParLCirO1.png',
    'InstrGoodjobNexttask.png', 'ParLCirO2.png',
    'InstrNextSwitchtask.png', 'ParLCirO3.png',
    'InstrNextSwitchtask2.png', 'ParLHexE1.png',
    'InstrNexttask.png', 'ParLHexE2.png',
    'InstrPracagain.png', 'ParLHexE3.png',
    'ParLHexO1.png',
    'MagLCirL1.png', 'ParLHexO2.png',
    'MagLCirL2.png', 'ParLHexO3.png',
    'MagLCirL3.png', 'ParLSemE1.png',
    'MagLCirS1.png', 'ParLSemE2.png',
    'MagLCirS2.png', 'ParLSemE3.png',
    'MagLCirS3.png', 'ParLSemO1.png',
    'MagLHexL1.png', 'ParLSemO2.png',
    'MagLHexL2.png', 'ParLSemO3.png',
    'MagLHexL3.png', 'ParLSquE1.png',
    'MagLHexS1.png', 'ParLSquE2.png',
    'MagLHexS2.png', 'ParLSquE3.png',
    'MagLHexS3.png', 'ParLSquO1.png',
    'MagLSemL1.png', 'ParLSquO2.png',
    'MagLSemL2.png', 'ParLSquO3.png',
    'MagLSemL3.png', 
    'MagLSemS1.png', 'ParSCirE1.png',
    'MagLSemS2.png', 'ParSCirE2.png',
    'MagLSemS3.png', 'ParSCirE3.png',
    'MagLSquL1.png', 'ParSCirO1.png',
    'MagLSquL2.png', 'ParSCirO2.png',
    'MagLSquL3.png', 'ParSCirO3.png',
    'MagLSquS1.png', 'ParSHexE1.png',
    'MagLSquS2.png', 'ParSHexE2.png',
    'MagLSquS3.png', 'ParSHexE3.png',
    'ParSHexO1.png',
    'MagSCirL1.png', 'ParSHexO2.png',
    'MagSCirL2.png', 'ParSHexO3.png',
    'MagSCirL3.png', 'ParSSemE1.png',
    'MagSCirS1.png', 'ParSSemE2.png',
    'MagSCirS2.png', 'ParSSemE3.png',
    'MagSCirS3.png', 'ParSSemO1.png',
    'MagSHexL1.png', 'ParSSemO2.png',
    'MagSHexL2.png', 'ParSSemO3.png',
    'MagSHexL3.png', 'ParSSquE1.png',
    'MagSHexS1.png', 'ParSSquE2.png',
    'MagSHexS2.png', 'ParSSquE3.png',
    'MagSHexS3.png', 'ParSSquO1.png',
    'MagSSemL1.png', 'ParSSquO2.png',
    'MagSSemL2.png', 'ParSSquO3.png',
    'MagSSemL3.png', 
    'MagSSemS1.png', 'TLXpriming.png',
    'MagSSemS2.png', 
    'MagSSemS3.png', 
    'MagSSquL1.png', 
    'MagSSquL2.png'
];

// Switch slides
const switch_instrs = [
  'HexParSOCirParLO.png','SquMagSSSemMagLS.png',
  'HexParSECirParLE.png','SquMagSLSemMagLL.png',
  'SemParSOSquParLO.png','CirMagSSHexMagLS.png',
  'SemParSESquParLE.png','CirMagSLHexMagLL.png',
  'SquParSOHexParLO.png','SemMagSSCirMagLS.png',
  'SquParSEHexParLE.png','SemMagSLCirMagLL.png',
  'CirParSOSemParLO.png','HexMagSSSquMagLS.png',
  'CirParSESemParLE.png','HexMagSLSquMagLL.png'
]

// Preload images
let img_preload = []; 

// preload shape images
for(let m=0; m<shapeFilenames.length; m++) {
  img_preload.push(`static/images/stim/Shapes/${shapeFilenames[m]}`);
} 

// preload number images
 for(let m=0; m<numberFilenames.length; m++) {
   img_preload.push(`static/images/stim/${numberFilenames[m]}`);
 }

// preload general instructions & rule instruction slides
 for(let m=0; m<rule_instrs.length; m++) {
  img_preload.push(`static/images/instructions/${rule_instrs[m]}`);
}

// preload switch instruction slides
for(let m=0; m<switch_instrs.length; m++) {
  img_preload.push(`static/images/instructions/Switch/${switch_instrs[m]}`);
}


// Official timeline
/*timeline = [fs, welcome2Q, ACQintro, ACQintro2, ACQ_todo, STAYintro, STAYintro2,
  STAY_todo, TAIYintro, TAIYintro2, TAIY_todo, general_instructions, first_rule_todo, fixation, first_practice_loop, second_rule_todo, fixation,
  second_practice_loop, third_rule_todo, fixation, third_practice_loop, fourth_rule_todo, fixation, fourth_practice_loop, tlx_priming, 
  fixation, switch_practice_loop, tlx_priming, block_transition_reminder, switch_rule_todo, fixation, 
  actual_all_1,
  actual_all_2, actual_all_3, actual_all_4, end_screen];
*/

// Define the timeline with the conditional check
var timeline = [
  fs, fourth_rule_todo, fixation, fourth_practice_loop, 
  switch_rule_todo, fixation, switch_practice_loop,
  check_low_acc,
  {
    timeline: [actual_all_1, actual_all_2, actual_all_3, actual_all_4, debrief],
    conditional_function: function() {
      // Repeat the condition to ensure correct branching
      if (prac_acc < 0.75 && prac_attempts >= 5) {
        return false; // Skip this part if conditions are met
      } else {
        return true; // Continue with this part if conditions are not met
      }
    }
  },
  end_screen
];

//timeline = [fs, first_practice_loop];
  
save_to_db = function() {
 $.ajax({
   type: "POST",
   url: "/save_data",
   data: jsPsych.data.get().json(),
   contentType: "application/json",
   dataType: 'json',
   success: function(result) {
     if(result) {
       console.log(result);
     }
   }
 })
};
//img_preload = [];

// Run and preload images
jsPsych.init({
   timeline: timeline,
   show_preload_progress_bar: true,
   
   preload_images: img_preload,
   on_finish: function() {
     /*Promise.all([save_to_db()]).then(() => {
       save_to_db(); 
       //window.open('https://app.prolific.co/submissions/complete?cc=XXXXXXX', '_blank');
     }).catch(() => {
       // resubmit
       save_to_db();
       //window.open('https://app.prolific.co/submissions/complete?cc=XXXXXXX', '_blank');
     })
     */
    jsPsych.data.get().localSave('csv', 'tsm_local.csv'); // only for piloting

   }
});
