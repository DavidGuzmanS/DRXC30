Content.makeFrontInterface(900, 500);

//Authorization
//AUTHORIZATION


include("Serials.js");

namespace Authorisation
{
    const var SerialInput = Content.getComponent("SerialInput");
    const var Description = Content.getComponent("Description");
    const var SerialStateLabel = Content.getComponent("SerialStateLabel");
    const var AuthorisationDialogue = Content.getComponent("AuthorisationDialogue");
    const var GlobalMute = Synth.getEffect("Global Mute");
    /** Checks if the serial input is valid and stores the result if successful. */
    inline function onSubmitButtonControl(component, value)
    {
        if(!value) // Just execute once
            return;
    
        local v = SerialInput.getValue();
        Console.print(v);
    
        // Checks if it's in the input
        if(serials.Data.contains(v))
        {
            Console.print("Serial number found");
            Description.set("text", "Valid serial number. Enjoy");
            local data = 
            {
                "Serial": v
            };
        
            // Stores the file to the hard drive. In HISE it will be the project folder
            // but in the compiled plugin it will use the parent directory to the 
            // user preset directory (which is usually the app data folder).
            Engine.dumpAsJSON(data, "../RegistrationInfo.js");
            
            setValidLicense(true);
        }
        else
        {
            Console.print("Invalid serial number");
            Description.set("text", "Invalid serial number. The number you supplied does not match");
            
            setValidLicense(false);
        }
    };

    Content.getComponent("SubmitButton").setControlCallback(onSubmitButtonControl);


    inline function setValidLicense(isValid)
    {
        // Do whatever you want to do here. I suggest a MIDI muter...
        GlobalMute.setBypassed( 0 - isValid);
            
        if(isValid)
        {
            // Change this to any other visual indication...
            SerialStateLabel.set("bgColour", Colours.greenyellow);
            AuthorisationDialogue.set("text", "Authorized!");
            AuthorisationDialogue.set("textColour", Colours.greenyellow);
        }
        else
        {
            SerialStateLabel.set("bgColour", Colours.red);
            AuthorisationDialogue.set("text", "Unauthorized");
            AuthorisationDialogue.set("textColour", Colours.red);
        }
    }

    inline function checkOnLoad()
    {
        // Clear the input
        SerialInput.set("text", "");
        
        // Load the serial from the stored file
        local pData = Engine.loadFromJSON("../RegistrationInfo.js");
        Console.print("Checking serial");
    
        if(pData)    
        {
            local v = pData.Serial;
            Console.print("Restored serial: " + v);
        
            if(serials.Data.contains(v))
            {
                setValidLicense(true);
                return;
            }
        }
    
        setValidLicense(false);
    }

    // Call this on startup
    checkOnLoad();

}



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
 