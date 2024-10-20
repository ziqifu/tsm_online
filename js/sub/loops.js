// ACQ Questions
var ACQ_todo = {
  timeline: [ACQ_questions],
  loop_function: function() {
    if (ACQ_index > 9) {
      return false;
    }
    return true;
  }
};


// STAY Questions
var STAY_todo = {
  timeline: [STAY_questions],
  loop_function: function() {
    if (STAY_index > 4) {
      return false;
    }
    return true;
  }
};

// TAIY Questions
var TAIY_todo = {
  timeline: [TAIY_questions],
  loop_function: function() {
    if (TAIY_index > 4) {
      return false;
    }
    return true;
  }
};

// TLX Questions
var TLX_todo = {
  timeline: [TLX_questions],
  loop_function: function() {
    if (TLX_index > 2) {
      return false;
    }
    return true;
  }
};

// general instruction slides
var general_instructions = {
  timeline: [general_inst_image],
  loop_function: function() {
    if (INSTIDX > 6) {
      return false;
    }
    return true;
  }
};


// first rule instruction slides
var first_rule_todo = {
  timeline: [first_rule],
   loop_function: function() {
     if (RULEIDX_1 > 3) {
       return false;
     }
     return true;
   }
};

// second rule instruction slides
var second_rule_todo = {
  timeline: [second_rule],
   loop_function: function() {
     if (RULEIDX_2 > 3) {
       return false;
     }
     return true;
   }
 };


// third rule instruction slides
var third_rule_todo = {
  timeline: [third_rule],
   loop_function: function() {
     if (RULEIDX_3 > 3) {
       return false;
     }
     return true;
   }
 };

// fourth rule instruction slides
 var fourth_rule_todo = {
  timeline: [fourth_rule],
   loop_function: function() {
     if (RULEIDX_4 > 3) {
       return false;
     }
     return true;
   }
 };

// actual practice blocks used in timeline (each repetion to test if acc >= .9)
// first practice trial
var first_rule_prac = {
  timeline: [practice_trial_1, save_data, feedback],
   loop_function: function() {
     if (RULETRIALIDX_1 > selected_rule_1.length - 1) {
       return false;
     }
     return true;
   }
 };


// second practice trial 
var second_rule_prac = {
  timeline: [practice_trial_2, save_data, feedback],
   loop_function: function() {
     if (RULETRIALIDX_2 > selected_rule_2.length - 1) {
       return false;
     }
     return true;
   }
 }; 


// third practice trial 
var third_rule_prac = {
  timeline: [practice_trial_3, save_data, feedback],
   loop_function: function() {
     if (RULETRIALIDX_3 > selected_rule_3.length - 1) {

       return false;
     }
     return true;
   }
 }; 
 

// fourth practice trial
var fourth_rule_prac = {
  timeline: [practice_trial_4, save_data, feedback],
   loop_function: function() {
     if (RULETRIALIDX_4 > selected_rule_4.length - 1) {
       return false;
     }
     return true;
   }
 }; 


// first practice block
 var first_practice_loop = {
  timeline: [first_rule_prac, next_practice_task_instr],
  loop_function: function(data) {
    prac_attempts_1++;
    if (prac_attempts_1 >= 4 || prac_acc >= .1) {
      return false; // End loop
    } else {
      RULETRIALIDX_1 = 0;
      prac_correct_count_1 = 0;
      return true; // Continue loop
    }
  }
};


// second practice block
var second_practice_loop = {
  timeline: [second_rule_prac, next_practice_task_instr],
  loop_function: function(data) {
    prac_attempts_2++;
    if (prac_attempts_2 >= 4 || prac_acc >= .9) {
      return false; // End loop
    } else {
      RULETRIALIDX_2 = 0;
      prac_correct_count_2 = 0;
      return true; // Continue loop
    }
  }
};


// third practice block
var third_practice_loop = {
  timeline: [third_rule_prac, next_practice_task_instr],
  loop_function: function(data) {
    prac_attempts_3++;
    if (prac_attempts_3 >= 4 || prac_acc >= .9) {
      return false; // End loop
    } else {
      RULETRIALIDX_3 = 0;
      prac_correct_count_3 = 0;
      return true; // Continue loop
    }
  }
};

// fourth practice block
var fourth_practice_loop = {
  timeline: [fourth_rule_prac, next_practice_task_instr],
  loop_function: function(data) {
    prac_attempts_4++;
    if (prac_attempts_4 >= 4 || prac_acc >= .9) {
      return false; // End loop
    } else {
      RULETRIALIDX_4 = 0;
      prac_correct_count_4 = 0;
      return true; // Continue loop
    }
  }
};

// run switch instruction slides
var switch_rule_todo = {
  timeline: [switch_rule],
   loop_function: function() {
     if (SWITCHSLIDEIDX > 1) {
      return false;
     }
     return true;
   }
 };


// switch practice trial
 var switch_block_prac = {
  timeline: [practice_trial_switch, save_data, feedback],
   loop_function: function() {
     if (SWITCHSLIDEIDX > switchPracticelist.length - 1) {
       return false;
     }
     return true;
   }
 };


// switch practice block
var switch_practice_loop = {
  timeline: [switch_block_prac, next_practice_task_instr],
  loop_function: function(data) {
    prac_attempts_switch++;
    if (prac_attempts_switch >= 4 || prac_acc >= .75) {
      return false; // End loop
    } else {
      SWITCHSLIDEIDX = 0;
      prac_correct_count_switch = 0;
      return true; // Continue loop
    }
  }
};


// Actual blocks
var actual_block_1 = {
  timeline: [actual_trial_1, save_data, feedback],
   loop_function: function() {
     if (ACTUALTRIALIDX_1 > actualBlockList1.length - 1) {
       return false;
     }
     return true;
   }
};



var actual_block_2 = {
  timeline: [actual_trial_2, save_data, feedback],
   loop_function: function() {
     if (ACTUALTRIALIDX_2 > actualBlockList2.length - 1) {
       return false;
     }
     return true;
   }
 };


var actual_block_3 = {
  timeline: [actual_trial_3, save_data, feedback],
   loop_function: function() {
     if (ACTUALTRIALIDX_3 > actualBlockList3.length - 1) {
       return false;
     }
     return true;
   }
 };


var actual_block_4 = {
  timeline: [actual_trial_4, save_data, feedback],
   loop_function: function() {
     if (ACTUALTRIALIDX_4 > actualBlockList4.length - 1) {
       return false;
     }
     return true;
   }
 };


// actual blocks + eob + tlx
var actual_all_1 = {
  timeline: [fixation, actual_block_1, eob, TLX_todo, block_transition_reminder, switch_rule_todo]
}

var actual_all_2 = {
  timeline: [fixation, actual_block_2, eob, TLX_todo, block_transition_reminder, switch_rule_todo]
}

var actual_all_3 = {
  timeline: [fixation, actual_block_3, eob, TLX_todo, block_transition_reminder, switch_rule_todo]
}

var actual_all_4 = {
  timeline: [fixation, actual_block_4, eob, TLX_todo, block_transition_reminder, switch_rule_todo]
}