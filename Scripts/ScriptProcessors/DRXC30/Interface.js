Content.makeFrontInterface(900, 500);


Engine.loadAudioFilesIntoPool();
//IR Selector
const var MicIR1 = Synth.getAudioSampleProcessor("MicIR1");
inline function onIrselectorboxControl(component, value)
{
    if (value == 1)
	MicIR1.setFile("{PROJECT_FOLDER}57 NEVE.wav");
	if (value == 2)
	MicIR1.setFile("{PROJECT_FOLDER}7B NEVE.wav");
	if (value == 3)
	MicIR1.setFile("{PROJECT_FOLDER}U47 NEVE.wav");
	if (value == 4)
	MicIR1.setFile("{PROJECT_FOLDER}44 NEVE.wav");
	if (value == 5)
	MicIR1.setFile("{PROJECT_FOLDER}57 + U47 NEVE.wav");
	if (value == 6)
	MicIR1.setFile("{PROJECT_FOLDER}57 + 44 NEVE.wav");
	if (value == 7)
	MicIR1.setFile("{PROJECT_FOLDER}57 + 57 NEVE.wav");
	if (value == 8)
	MicIR1.setFile("{PROJECT_FOLDER}57 + 57 + 57 NEVE.wav");
	if (value == 9)
	MicIR1.setFile("{PROJECT_FOLDER}7B+U47 NEVE.wav");
	if (value == 10)
	MicIR1.setFile("{PROJECT_FOLDER}7B + 44 NEVE.wav");
	if (value == 11)
	MicIR1.setFile("{PROJECT_FOLDER}57 + 7B NEVE.wav");
	if (value == 12)
	MicIR1.setFile("{PROJECT_FOLDER}U47 + U47 NEVE.wav");
	if (value == 13)
	MicIR1.setFile("{PROJECT_FOLDER}44 + U47 NEVE.wav");
    if (value == 14)
	MicIR1.setFile("{PROJECT_FOLDER}57 UA.wav");
	if (value == 15)
	MicIR1.setFile("{PROJECT_FOLDER}7B UA.wav");
	if (value == 16)
	MicIR1.setFile("{PROJECT_FOLDER}U47 UA.wav");
	if (value == 17)
	MicIR1.setFile("{PROJECT_FOLDER}44 UA.wav");
	if (value == 18)
	MicIR1.setFile("{PROJECT_FOLDER}57 + U47 UA.wav");
	if (value == 19)
	MicIR1.setFile("{PROJECT_FOLDER}57 + 44 UA.wav");
	if (value == 20)
	MicIR1.setFile("{PROJECT_FOLDER}57 + 57 UA.wav");
	if (value == 21)
	MicIR1.setFile("{PROJECT_FOLDER}57 + 57 + 57 UA.wav");
	if (value == 22)
	MicIR1.setFile("{PROJECT_FOLDER}7B + U47 UA.wav");
	if (value == 23)
	MicIR1.setFile("{PROJECT_FOLDER}7B + 44 UA.wav");
	if (value == 24)
	MicIR1.setFile("{PROJECT_FOLDER}57 + 7B UA.wav");
	if (value == 25)
	MicIR1.setFile("{PROJECT_FOLDER}U47 + U47 UA.wav");
	if (value == 26)
	MicIR1.setFile("{PROJECT_FOLDER}44 + U47 UA.wav");
};

Content.getComponent("Irselectorbox").setControlCallback(onIrselectorboxControl);


//Delay Controls
const var Delay = Synth.getEffect("Delay");


inline function onDelayTimeknobControl(component, value)
{
	Delay.setAttribute(Delay.DelayTimeLeft, value);
	Delay.setAttribute(Delay.DelayTimeRight, value);
};

Content.getComponent("DelayTimeknob1").setControlCallback(onDelayTimeknobControl);


inline function onDelayTimeknob2Control(component, value)
{
	Delay.setAttribute(Delay.DelayTimeLeft, value);
	Delay.setAttribute(Delay.DelayTimeRight, value);
};

Content.getComponent("DelayTimeknob2").setControlCallback(onDelayTimeknob2Control);


inline function onDelayFeedknobControl(component, value)
{
	Delay.setAttribute(Delay.FeedbackLeft, value);
	Delay.setAttribute(Delay.FeedbackRight, value);
};

Content.getComponent("DelayFeedknob").setControlCallback(onDelayFeedknobControl);


//Delay Time Changer
const var Delaytimepanel1 = Content.getComponent("Delaytimepanel1");
const var Delaytimepanel2 = Content.getComponent("Delaytimepanel2");

inline function onDelaysyncbuttonControl(component, value)
{
    if (value == 0)
    {
    Delay.setAttribute(Delay.TempoSync, 1);
	Delaytimepanel1.showControl(false);
	Delaytimepanel2.showControl(true);
    }
     if (value == 1)
    {
    Delay.setAttribute(Delay.TempoSync, 0);
	Delaytimepanel1.showControl(true);
	Delaytimepanel2.showControl(false);
    }
};

Content.getComponent("Delaysyncbutton").setControlCallback(onDelaysyncbuttonControl);




//FX Rack Show
const var fxrackpanel = Content.getComponent("fxrackpanel");

inline function onFxrackbuttonControl(component, value)
{
		 if (value == 0)
    {
	fxrackpanel.showControl(false);
    }
     if (value == 1)
    {
	fxrackpanel.showControl(true);
    }
};

Content.getComponent("Fxrackbutton").setControlCallback(onFxrackbuttonControl);

inline function onLogobuttonControl(component, value)
{
		 if (value == 0)
    {
	Content.getComponent("Fxrackbutton").setValue(0);
	fxrackpanel.showControl(false);
    }
     if (value == 1)
    {
	Content.getComponent("Fxrackbutton").setValue(1);
	fxrackpanel.showControl(true);
    }
};

Content.getComponent("Logobutton").setControlCallback(onLogobuttonControl);


//Preset Panel
const var Presetpanel = Content.getComponent("Presetpanel");


inline function onPresetbuttonControl(component, value)
{
	 if (value == 0)
    {
	Presetpanel.showControl(false);
    }
     if (value == 1)
    {
	Presetpanel.showControl(true);
    }
};

Content.getComponent("Presetbutton").setControlCallback(onPresetbuttonControl);

//Auth Panel
const var LicensePanel = Content.getComponent("LicensePanel");

inline function onLicensebuttonControl(component, value)
{
	 if (value == 0)
    {
	LicensePanel.showControl(false);
    }
     if (value == 1)
    {
	LicensePanel.showControl(true);
    }
};

Content.getComponent("Licensebutton").setControlCallback(onLicensebuttonControl);

//Manual Info

inline function onManualbuttonControl(component, value)
{
	if (value)
	    Engine.openWebsite("https://drbrujosounds.com/wp-content/uploads/2021/07/DRXAC30-User-Manual.pdf");
};

Content.getComponent("Manualbutton").setControlCallback(onManualbuttonControl);

//Website Button

inline function onWebsitebuttonControl(component, value)
{
		if (value)
	    Engine.openWebsite("https://drbrujosounds.com");
};

Content.getComponent("Websitebutton").setControlCallback(onWebsitebuttonControl);

function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 
