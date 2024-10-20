var welcome2Q = {
    type: 'html-keyboard-response',
    stimulus: function() {
        html =  '<p style="font-size: 32pt;">Welcome to the study.<br>You will first respond to a series of questions about yourself.<br>This will be followed by a switching task.</p>';
        html += '<p style="font-size: 32pt;"><br><br>[PRESS SPACEBAR TO CONTINUE]</p>';
        return html
    },
    choices: ['space'], 

};


// ACQ Set
var ACQintro = {
  type: 'html-keyboard-response',
  stimulus: function() {
    html =  '<p style="font-size: 32pt;">You will now see a series of statements that describe different ways that people can feel about working and concentrating.<br>Please indicate how strongly each statement applies to you.</p>';
    html += '<p style="font-size: 32pt;"><br><br>[PRESS SPACEBAR TO CONTINUE]</p>';
    return html;
  },
  choices: ['space']
};

var ACQintro2 = {
  type: 'html-keyboard-response',
  stimulus: function() {
      html =  '<p style="font-size: 32pt;">If it applies:</p>';
      html += '<p style="font-size: 32pt;">Almost never - press 1,</p>';
      html += '<p style="font-size: 32pt;">Sometimes - press 2,</p>';
      html += '<p style="font-size: 32pt;">Often - press 3, and</p>';
      html += '<p style="font-size: 32pt;">Always - press 4.</p>';
      html += '<p style="font-size: 32pt;"><br><br>[PRESS SPACEBAR TO CONTINUE]</p>';
      return html
  },
  choices: ['space'], 

};



var ACQ_index = 0
var ACQ_questions = {
  type: 'html-keyboard-response',
  stimulus: function() {
    var html = '<p style="font-size: 32pt;">' + ACQ_questions_list[ACQ_index] + '</p>';
    return html;
  },
  prompt: function() {
    var html = '<p style="font-size: 32pt;"><br><br>Almost never - press 1,</p>';
    html += '<p style="font-size: 32pt;">Sometimes - press 2,</p>';
    html += '<p style="font-size: 32pt;">Often - press 3, and</p>';
    html += '<p style="font-size: 32pt;">Always - press 4.</p>';
    return html;
  },
  choices: ['1', '2', '3', '4'],
  on_finish: function(data) {
    data.key_press = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    data.is_data_trial = true;
    data.ACQ_n = ACQ_index + 1;
    if(ACQ_index < 4){
      data.ATTC_FOC = true;
    }
    else data.ATTC_SHIF = true;
    data.ACQ_n = ACQ_index + 1;
    ACQ_index++;
  }

};


// STAY Set
var STAYintro = {
  type: 'html-keyboard-response',
  stimulus: function() {
      html =  '<p style="font-size: 32pt;">You will now see a series of statements that people have used to describe themselves. Read each statement and indicate how you feel right now, that is, at this moment. There are no right or wrong answers.  Do not spend too much time on any one statement, but give the answer which seems to describe your present feelings best.</p>';
      html += '<p style="font-size: 32pt;"><br><br>[PRESS SPACEBAR TO CONTINUE]</p>';
      return html
  },
  choices: ['space'], 

};

var STAYintro2 = {
  type: 'html-keyboard-response',
  stimulus: function() {
      html =  '<p style="font-size: 32pt;">If it applies:</p>';
      html += '<p style="font-size: 32pt;"><br><br>Not at all - press 1,</p>';
      html += '<p style="font-size: 32pt;">Somewhat - press 2,</p>';
      html += '<p style="font-size: 32pt;">Moderately so - press 3, and</p>';
      html += '<p style="font-size: 32pt;">Very much so - press 4.</p>';
      html += '<p style="font-size: 32pt;"><br><br>[PRESS SPACEBAR TO CONTINUE]</p>';
      return html
  },
  choices: ['space'], 

};


var STAY_index = 0
var STAY_questions = {
  type: 'html-keyboard-response',
  stimulus: function() {
    var html = '<p style="font-size: 32pt;">' +STAY_questions_list[STAY_index] + '</p>';
    return html;
  },
  prompt: function() {
    var html = '<p style="font-size: 32pt;"><br><br>Not at all - press 1,</p>';
    html += '<p style="font-size: 32pt;">Somewhat - press 2,</p>';
    html += '<p style="font-size: 32pt;">Moderately so - press 3, and</p>';
    html += '<p style="font-size: 32pt;">Very much so - press 4.</p>';
    return html;
  },
  choices: ['1', '2', '3', '4'],
  on_finish: function(data) {
    data.is_data_trial = true;
    data.key_press = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    data.is_data = 1;
    data.STAY_n = STAY_index + 1;
    STAY_index++
  }

};


// TAIY Set
var TAIYintro = {
  type: 'html-keyboard-response',
  stimulus: function() {
      html =  '<p style="font-size: 32pt;">You will now see a series of statements that people have used to describe themselves. Read each statement and indicate how you generally feel. There are no right or wrong answers.  Do not spend too much time on any one statement, but give the answer which seems to describe how you generally feel.</p>';
      html += '<p style="font-size: 32pt;"><br><br>[PRESS SPACEBAR TO CONTINUE]</p>';
      return html
  },
  choices: ['space'], 

};

var TAIYintro2 = {
  type: 'html-keyboard-response',
  stimulus: function() {
      html =  '<p style="font-size: 32pt;">If it applies:</p>';
      html += '<p style="font-size: 32pt;"><br><br>Not at all - press 1,</p>';
      html += '<p style="font-size: 32pt;">Somewhat - press 2,</p>';
      html += '<p style="font-size: 32pt;">Moderately so - press 3, and</p>';
      html += '<p style="font-size: 32pt;">Very much so - press 4.</p>';
      html += '<p style="font-size: 32pt;"><br><br>[PRESS SPACEBAR TO CONTINUE]</p>';
      return html
  },
  choices: ['space'], 

};


var TAIY_index = 0
var TAIY_questions = {
  type: 'html-keyboard-response',
  stimulus: function() {
    var html = '<p style="font-size: 32pt;">' +TAIY_questions_list[TAIY_index] + '</p>';
    return html;
  },
  prompt: function() {
    var html = '<p style="font-size: 32pt;"><br><br>Not at all - press 1,</p>';
    html += '<p style="font-size: 32pt;">Somewhat - press 2,</p>';
    html += '<p style="font-size: 32pt;">Moderately so - press 3, and</p>';
    html += '<p style="font-size: 32pt;">Very much so - press 4.</p>';
    return html;
  },
  choices: ['1', '2', '3', '4'],
  on_finish: function(data) {
    data.key_press = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    data.is_data_trial = true;
    data.TAIY_n = TAIY_index + 1;
    TAIY_index++
  }

};


// TLX
var TLX_index = 0
var TLX_questions = {
  type: 'html-slider-response',
  stimulus: function() {
    var html = '<p style="font-size: 32pt;">' + TLX_questions_list[TLX_index] + '</p>';
    return html;
  },
  require_movement: true,
  labels: ['1', '100'],
  step: 10,
  slider_start: 50,
  min: 1,
  max: 100,
  response_ends_trial: true,
  on_finish: function(data) {
    data.key_press = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
    data.is_data_trial = true;
    data.TLX_n = TLX_index + 1;
    TLX_index++;
  }

};

