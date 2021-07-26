(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[224],{2568:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var s=i(21294);class n{constructor(e){this.component_ready_promise=new Promise((e=>this._component_ready_resolve_fn=e)),this.optional=!1,e&&(this.sid=e.sid,this.graderactive=e.graderactive,this.showfeedback=!0,e.timed&&(this.isTimed=!0),e.enforceDeadline&&(this.deadline=e.deadline),$(e.orig).data("optional")?this.optional=!0:this.optional=!1,e.selector_id&&(this.selector_id=e.selector_id),void 0!==e.assessmentTaken?this.assessmentTaken=e.assessmentTaken:this.assessmentTaken=!0,void 0!==e.timedWrapper?this.timedWrapper=e.timedWrapper:location.href.indexOf("doAssignment")>=0?this.timedWrapper=$("h1#assignment_name").text():this.timedWrapper=null,$(e.orig).data("question_label")&&(this.question_label=$(e.orig).data("question_label"))),this.jsonHeaders=new Headers({"Content-type":"application/json; charset=utf-8",Accept:"application/json"})}async logBookEvent(e){if(this.graderactive)return;let t;if(e.course=eBookConfig.course,e.clientLoginStatus=eBookConfig.isLoggedIn,e.timezoneoffset=(new Date).getTimezoneOffset()/60,this.percent&&(e.percent=this.percent),eBookConfig.useRunestoneServices&&eBookConfig.logLevel>0){let i=new Request(eBookConfig.ajaxURL+"hsblog",{method:"POST",headers:this.jsonHeaders,body:JSON.stringify(e)});try{let e=await fetch(i);if(!e.ok)throw new Error("Failed to save the log entry");t=e.json()}catch(e){this.isTimed&&alert(`Error: Your action was not saved! The error was ${e}`),console.log(`Error: ${e}`)}}return this.isTimed&&!eBookConfig.debug||console.log("logging event "+JSON.stringify(e)),"function"==typeof s.j.updateProgress&&"edit"!=e.act&&0==this.optional&&s.j.updateProgress(e.div_id),t}async logRunEvent(e){let t="done";if(!this.graderactive){if(e.course=eBookConfig.course,e.clientLoginStatus=eBookConfig.isLoggedIn,e.timezoneoffset=(new Date).getTimezoneOffset()/60,(this.forceSave||"to_save"in e==0)&&(e.save_code="True"),eBookConfig.useRunestoneServices&&eBookConfig.logLevel>0){let i=new Request(eBookConfig.ajaxURL+"runlog.json",{method:"POST",headers:this.jsonHeaders,body:JSON.stringify(e)}),s=await fetch(i);if(!s.ok)throw new Error("Failed to log the run");t=await s.json()}return this.isTimed&&!eBookConfig.debug||console.log("running "+JSON.stringify(e)),"function"==typeof s.j.updateProgress&&0==this.optional&&s.j.updateProgress(e.div_id),t}}async checkServer(e,t=!1){let i=this;if(this.checkServerComplete=new Promise((function(e,t){i.csresolver=e})),this.useRunestoneServices||this.graderactive){let t={};if(t.div_id=this.divid,t.course=eBookConfig.course,t.event=e,this.graderactive&&this.deadline&&(t.deadline=this.deadline,t.rawdeadline=this.rawdeadline,t.tzoff=this.tzoff),this.sid&&(t.sid=this.sid),!eBookConfig.practice_mode&&this.assessmentTaken){let e=new Request(eBookConfig.ajaxURL+"getAssessResults",{method:"POST",body:JSON.stringify(t),headers:this.jsonHeaders});try{let i=await fetch(e);t=await i.json(),this.repopulateFromStorage(t),this.csresolver("server")}catch(e){try{this.checkLocalStorage()}catch(e){console.log(e)}}}else this.loadData({}),this.csresolver("not taken")}else this.checkLocalStorage(),this.csresolver("local");t&&this.indicate_component_ready()}indicate_component_ready(){this.containerDiv.classList.add("runestone-component-ready"),this._component_ready_resolve_fn()}loadData(e){return null}repopulateFromStorage(e){null!==e&&this.shouldUseServer(e)?(this.restoreAnswers(e),this.setLocalStorage(e)):this.checkLocalStorage()}shouldUseServer(e){if("T"===e.correct||0===localStorage.length||!0===this.graderactive||this.isTimed)return!0;let t,i=localStorage.getItem(this.localStorageKey());if(null===i)return!0;try{t=JSON.parse(i)}catch(e){return console.log(e.message),localStorage.removeItem(this.localStorageKey()),!0}if(e.answer==t.answer)return!0;let s=new Date(t.timestamp);return new Date(e.timestamp)>=s}localStorageKey(){return eBookConfig.email+":"+eBookConfig.course+":"+this.divid+"-given"}addCaption(e){if(!this.isTimed){var t=document.createElement("p");this.question_label?(this.caption=`Activity: ${this.question_label} ${this.caption}  <span class="runestone_caption_divid">(${this.divid})</span>`,$(t).html(this.caption),$(t).addClass(`${e}_caption`)):($(t).html(this.caption+" ("+this.divid+")"),$(t).addClass(`${e}_caption`),$(t).addClass(`${e}_caption_text`)),this.capDiv=t,this.containerDiv.appendChild(t)}}hasUserActivity(){return this.isAnswered}checkCurrentAnswer(){console.log("Each component should provide an implementation of checkCurrentAnswer")}async logCurrentAnswer(){console.log("Each component should provide an implementation of logCurrentAnswer")}renderFeedback(){console.log("Each component should provide an implementation of renderFeedback")}disableInteraction(){console.log("Each component should provide an implementation of disableInteraction")}}window.RunestoneBase=n},6224:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ShowEval:()=>o});var s=i(2568),n=[];class o extends s.Z{constructor(e){super(e),this.divid=e.orig.id,this.containerDiv=e.orig,this.containerDiv.classList.add("showEval");let t=[];for(let i of e.raw)t.push(i.replace(/\\/g,""));this.steps=t.slice(),this.currentStep=0,this.createTrace=$(e.orig).data("tracemode"),this.rb=new s.Z(e),this.currentStepDiv=$("<div>").addClass("currentStepDiv"),$(this.containerDiv).append(this.currentStepDiv),this.currentStepDiv.append($("<span>").addClass("pre")),this.currentStepDiv.append($("<span>").addClass("eval")),this.currentStepDiv.append($("<span>").addClass("post")),this.currentStepDiv.append($("<div>").addClass("anno")),this.setNextButton(`#${this.divid}_nextStep`),this.setResetButton(`#${this.divid}_reset`);for(var i=0;i<this.steps.length;i++){var n=this.steps[i];let e,t;n.includes("##")?(e=n.indexOf("##"),t=n.substring(e+2,n.length)):(e=n.length,t=!1),this.steps[i]=[n.substring(0,n.indexOf("{{")),n.substring(n.indexOf("{{")+2,n.indexOf("}}{{")),n.substring(n.indexOf("}}{{")+4,n.indexOf("}}",n.indexOf("}}{{")+4)),n.substring(n.indexOf("}}",n.indexOf("}}{{")+4)+2,e)],this.steps[i].push(t)}this.reset(),this.caption="ShowEval",this.addCaption("runestone"),this.indicate_component_ready()}setNextButton(e){var t=this;$(e).click((function(){t.evaluateStep(e)}))}setResetButton(e){var t=this;$(e).click((function(){t.reset(0)}))}reset(){$(this.containerDiv).find(".previousStep").remove(),this.setStep(0),this.rb.logBookEvent({event:"showeval",act:"reset",div_id:this.containerDiv.id})}setStep(e){this.currentStep=e;let t=this.getWidth(this.steps[this.currentStep][1]);this.steps[e][4]?(this.currentStepDiv.children(".anno").html(this.steps[e][4]),this.currentStepDiv.children(".anno").show()):this.currentStepDiv.children(".anno").hide(),this.currentStepDiv.children(".eval").width(t),this.currentStepDiv.children(".pre").html(this.steps[e][0]),this.currentStepDiv.children(".eval").html(this.steps[e][1]),this.currentStepDiv.children(".post").html(this.steps[e][3])}getWidth(e){var t=$("<div>").addClass("showEval evalCont").hide().html(e);$("body").append(t);var i=t.width()+1;return t.remove(),i}createPreviousStepDiv(e){this.currentStepDiv.before($("<div>").addClass("previousStep").html(this.steps[e][0]+this.steps[e][1]+this.steps[e][3]))}evaluateStep(e,t){if(this.currentStepDiv.children(".anno").hide(),$(e).attr("disabled",!0),void 0===t&&(t=this.currentStep),this.currentStep>=this.steps.length)return void $(e).attr("disabled",!1);var i=0;this.createTrace&&(this.createPreviousStepDiv(t),this.currentStepDiv.hide(),i=200);let s=this.getWidth(this.steps[t][2]);var n=this.currentStepDiv.children(".eval"),o=this;n.css("color","red"),this.currentStepDiv.fadeTo(i,1,(function(){window.setTimeout((function(){n.fadeTo(400,0,(function(){n.animate({width:s,duration:400},(function(){n.html(o.steps[t][2]),n.fadeTo(400,1,(function(){window.setTimeout((function(){n.css("color","#333"),o.currentStep+=1,o.currentStep<o.steps.length&&o.setStep(o.currentStep),$(e).attr("disabled",!1)}),600)}))}))}))}),600)})),this.rb.logBookEvent({event:"showeval",act:"next",div_id:this.containerDiv.id})}}$(document).bind("runestone:login-complete",(function(){$("[data-component=showeval]").each((function(e){var t={orig:this,useRunestoneServices:eBookConfig.useRunestoneServices};t.raw=window.raw_steps[this.id],0==$(this).closest("[data-component=timedAssessment]").length&&(n[this.id]=new o(t))}))})),void 0===window.component_factory&&(window.component_factory={}),window.component_factory.showeval=function(e){return new o(e)}}}]);
//# sourceMappingURL=224.bundle.js.map?v=89da9371f0e6ac8aec71