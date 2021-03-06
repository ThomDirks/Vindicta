#include "defineCommon.inc"

params["_objectFrom","_objectTo"];

pr _array = _objectFrom call jn_fnc_arsenal_cargoToArray;

if(_objectFrom in allPlayers || isPlayer _objectFrom) exitWith {
	diag_log format["PLAYERINVBUG: cargoToArsenal _this:%1", _this];
	pr _msg = format["%1 just avoided the inventory clear bug, please send your .rpt to the developers so we can fix it!", name _objectFrom];
	[_msg] remoteExecCall ["hint", 0, false];
};

//clear cargo
clearMagazineCargoGlobal _objectFrom;
clearItemCargoGlobal _objectFrom;
clearweaponCargoGlobal _objectFrom;
clearbackpackCargoGlobal _objectFrom;

OOP_INFO_1("Adding array of items: %1", _array);

[_objectTo,_array] remoteExec ["jn_fnc_arsenal_arrayToArsenal",2];