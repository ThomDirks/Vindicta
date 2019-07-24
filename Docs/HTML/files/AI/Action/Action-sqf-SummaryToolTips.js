NDSummary.OnToolTipsLoaded("File:AI/Action/Action.sqf",{22:"<div class=\"NDToolTip TClass LSQF\"><div class=\"TTSummary\">Action represents something which an agent can do over some period of time.&nbsp; Action can be in many states, see ACTION_STATE.</div></div>",24:"<div class=\"NDToolTip TVariable LSQF\"><div class=\"TTSummary\">Holds a reference to AI object which owns this action</div></div>",25:"<div class=\"NDToolTip TVariable LSQF\"><div class=\"TTSummary\">State of this action. Can be one of ACTION_STATE</div></div>",26:"<div class=\"NDToolTip TVariable LSQF\"><div class=\"TTSummary\">holds a reference to timer which sends PROCESS messages to this Action, if it\'s autonomous</div></div>",29:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Creates this action.</div></div>",31:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Sets the goal to autonomous mode.&nbsp; Autonomous goals have a timer which generate a message to call the goal\'s process method.&nbsp; By default actions are processed in the process method of their AI (&lt;AI.process&gt;).</div></div>",32:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">See MessageReceiver.handleMessage.</div></div>",33:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Calls the Activate method of this action if it\'s inactive.</div></div>",34:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Calls the Activate method of this action if it\'s in failed state.</div></div>",35:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Logic to run when the goal is activated. You should set the action state inside.</div></div>",36:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Logic to run each update-step. Remember to set the state variable of the action here as well!</div></div>",37:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">logic to run when the goal is satisfied, or before it is deleted.</div></div>",38:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">an Action is atomic and cannot aggregate subactions yet we must implement this method to provide the uniform interface required for the action hierarchy.</div></div>",39:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">an Action is atomic and cannot aggregate subactions yet we must implement this method to provide the uniform interface required for the action hierarchy.</div></div>",40:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns the list of subactions (for debug purposes).</div></div>",41:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns this action. This function is here for common interface with ActionComposite.</div></div>",42:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns: true if action is in completed state, false otherwise</div></div>",43:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns: true if action is in active state, false otherwise</div></div>",44:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns: true if action is in inactive state, false otherwise</div></div>",45:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns: true if action is in failed state, false otherwise</div></div>",46:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns the cost of taking this action in current situation By default it returns the value of &quot;cost&quot; static variable You can redefine it for inherited action if the returned cost needs to depend on something</div></div>",47:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns preconditions of this action depending on parameters By default it tries to apply parameters to preconditions, if preconditions reference any parameters</div></div>",48:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Returns the precedence of this action.&nbsp; Actions executed first should have lower precedence.&nbsp; Precedence is only needed for actions that are used by planner.</div></div>",49:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Takes an array with parameters and returns value of parameter with given tag, or nil if such a parameter was not found.&nbsp; If the parameter is not found, it will diag_log an error message.</div></div>",50:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Override in your action to perform special handling of what happens when groups are added while your action is running.&nbsp; By default it doesn\'t do anything.</div></div>",51:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Override in your action to perform special handling of what happens when groups are removed while your action is running.&nbsp; By default it doesn\'t do anything.</div></div>",52:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Handles what happens when units get removed from their garrison, for instance when they gets destroyed, while this action is running.</div></div>",53:"<div class=\"NDToolTip TFunction LSQF\"><div class=\"TTSummary\">Handles what happens when units get added to a garrison while this action is running.</div></div>"});