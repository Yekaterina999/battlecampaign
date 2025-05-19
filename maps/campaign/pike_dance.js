Trigger.prototype.tutorialGoals = [
	{
		"instructions": markForTranslation("Select all of your archers, and right click on an enemy skirmisher. You will see the skirmisher die instantly. "),
		"OnPlayerCommand": function(msg)
		{
			if (msg.cmd.type == "attack" && msg.cmd.target)
				this.NextGoal();
		}
	},
	{
		"instructions": markForTranslation("Now hold down shift key and right click on all enemy skimrishers"),
		"OnPlayerCommand": function(msg)
		{
			if (msg.cmd.type == "attack" && msg.cmd.target)
				this.NextGoal();
		}
	},

	{
		"instructions": markForTranslation("Do the same for those slingers. Ignore the swordman."),
		"OnPlayerCommand": function(msg)
		{
			if (msg.cmd.type == "attack" && TriggerHelper.EntityMatchesClassList(msg.cmd.target, "Ranged"))
				this.NextGoal();
		}
	},
	{
		"instructions": markForTranslation("Finally, kill the melee after all ranged enemies have been defeated.")

	}
	]
{
	let cmpTrigger = Engine.QueryInterface(SYSTEM_ENTITY, IID_Trigger);
	cmpTrigger.playerID = 1;
	cmpTrigger.enemyID = 2;
	cmpTrigger.RegisterTrigger("OnInitGame", "InitTutorial", { "enabled": true });
}
