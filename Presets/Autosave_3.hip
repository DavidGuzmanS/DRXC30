Processor 
Type SynthChain ID Master Chain Bypassed Gain 	      �?Balance 	        VoiceLimit 	      P@KillFadeTime 	      4@IconColour 0 packageName  BuildVersion �  EditorStates BodyShown 0 Visible 1 Solo 0 Folded 0  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 1 Solo 0 Folded 0  ChildProcessors  Processor Type ScriptProcessor ID Interface Bypassed Script �Content.makeFrontInterface(600, 500);

const var ScriptProcessor1 = Synth.getMidiProcessor("Script Processor1");
inline function onComboBox1Control(component, value)
{
	if (value == 1)
	    ScriptProcessor1.setBypassed(true);
    if (value == 2)
	    ScriptProcessor1.setBypassed(false);
};

Content.getComponent("ComboBox1").setControlCallback(onComboBox1Control);


//Grab References
const var NUM_TABS = 3;
const var kick = [];
const var snare = [];
const var buttons = [];

for (i = 0; i < NUM_TABS; i++)
{
    kick[i] = Synth.getModulator("KickVel"+(i+1));
    snare[i] = Synth.getModulator("SnareVel"+(i+1));
    buttons[i] = Content.getComponent("ScriptButton"+(i+1));
    buttons[i].setControlCallback(changeVel);
}

//Tab Button Callback function
inline function changeVel(component, value)
{
    if (value)
    {
        //get index of clicked button
        local idx = buttons.indexOf(component);
        
        //Hide all leds
        for (i = 0; i < kick.length; i++)
        {
            kick[i].setBypassed(true);
        }
          for (i = 0; i < snare.length; i++)
        {
            snare[i].setBypassed(true);
        }
     
        
        //Show Selected led
        kick[idx].setBypassed(false);
        snare[idx].setBypassed(false);
    }
}
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
  EditorStates BodyShown 1 Visible 1 Solo 0 contentShown 1 onInitOpen 1  ChildProcessors   Content  Control type ScriptComboBox id ComboBox1 value 	      �? Control type ScriptButton id ScriptButton1 value 	      �? Control type ScriptButton id ScriptButton2 value      Control type ScriptButton id ScriptButton3 value      UIData  ContentProperties DeviceType 	Desktop Component type ScriptComboBox id ComboBox1 x 	     �E@y 	     �I@max    items Map1
Map2  Component type ScriptButton id ScriptButton1 x 	     �K@y 	     `c@width d   height d   radioGroup 1  Component type ScriptButton id ScriptButton2 x �   y �   width d   height d   radioGroup 1  Component type ScriptButton id ScriptButton3 x 	     �p@y 	      c@width d   height d   radioGroup 1  Processor Type ScriptProcessor ID Script Processor1 Bypassed Script � const var map = Engine.createMidiList();

//Add another line for each note you want to remap
map.setValue(36, 60); //Input of 45 = output of 60
map.setValue(50, 72); //Input of 50 = output of 72function onNoteOn()
{
	    
	if (map.getValue(Message.getNoteNumber()) != -1)
    {
        
        Message.setNoteNumber(map.getValue(Message.getNoteNumber()));
    }
}
 function onNoteOff()
{
			if (map.getValue(Message.getNoteNumber()) != -1)
    {
        
        Message.setNoteNumber(map.getValue(Message.getNoteNumber()));
    }

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
  EditorStates BodyShown 1 Visible 1 Solo 0 contentShown 1 onInitOpen 0 onNoteOnOpen 0 onNoteOffOpen 1 onControllerOpen 0 onTimerOpen 0 onControlOpen 0 Folded 1  ChildProcessors   Content   UIData  ContentProperties DeviceType 	Desktop  Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type StreamingSampler ID Kick Bypassed Gain 	      �?Balance 	        VoiceLimit 	      p@KillFadeTime 	      4@IconColour 0 PreloadSize 	      �@BufferSize 	      �@VoiceAmount 	      p@SamplerRepeatMode 	      @RRGroupAmount 	      �?PitchTracking 	      �?OneShot 	      �?CrossfadeGroups 	        Purged 	        Reversed 	        NumChannels    UseStaticMatrix 	        Group0Table  Group1Table  Group2Table  Group3Table  Group4Table  Group5Table  Group6Table  Group7Table  EditorStates 	BodyShown 1 Visible 1 Solo 0 MapPanelShown 1 BigSampleMap 1 GainModulationShown 1 CrossfadeTableShown 0 SettingsShown 1 Folded 0  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 1 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 1 Solo 0 Folded 0  ChildProcessors  Processor 	Type SimpleEnvelope ID DefaultEnvelope1 Bypassed Monophonic 	        Retrigger 	      �?Intensity 	      �?Attack 	      @Release 	      $@LinearMode 	      �?EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Attack Time Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type 
Velocity ID 
KickVel1 Bypassed Intensity 	      �?UseTable 	      �?Inverted 	        DecibelMode 	        VelocityTableData  EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   Processor Type 
Velocity ID 
KickVel2 Bypassed Intensity 	      �?UseTable 	      �?Inverted 	        DecibelMode 	        VelocityTableData 536...............vOcUdF9nYlY8C...vO...f+....9C...vO EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   Processor Type 
Velocity ID 
KickVel3 Bypassed Intensity 	      �?UseTable 	      �?Inverted 	        DecibelMode 	        VelocityTableData 536...............vOE5OI+.u6t4C...vO...f+....9C...vO EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 1 Solo 0 Folded 0  ChildProcessors  Processor Type SimpleGain ID Simple Gain1 Bypassed Gain 	   ����?Delay 	        Width 	      Y@Balance 	        InvertPolarity 	        EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Gain Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID Delay Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID Width Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID Pan Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� Processor Type ModulatorChain ID Sample Start Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID Group Fade Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� channels  channelData enabled level 	        suffix   samplemap  sample Root $   LoKey $   HiKey $   LoVel     HiVel    RRGroup    FileName m/Volumes/LIBRARY/ACOUSTIC_DRUM_WORKSHOP/WRK_DRUM_HITS/KICKS/LIVE KICKS/18x14_KICK/WRK_18x14_Felt_Damp_1.wav Duplicate  Processor Type StreamingSampler ID Snare Top Bypassed Gain 	      �?Balance 	        VoiceLimit 	      p@KillFadeTime 	      4@IconColour 0 PreloadSize 	      �@BufferSize 	      �@VoiceAmount 	      p@SamplerRepeatMode 	      @RRGroupAmount 	      �?PitchTracking 	      �?OneShot 	      �?CrossfadeGroups 	        Purged 	        Reversed 	        NumChannels    UseStaticMatrix 	        Group0Table  Group1Table  Group2Table  Group3Table  Group4Table  Group5Table  Group6Table  Group7Table  EditorStates 	BodyShown 1 Visible 1 Solo 0 MapPanelShown 1 BigSampleMap 1 GainModulationShown 1 CrossfadeTableShown 0 SettingsShown 1 Folded 0  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 1 Solo 0 Folded 0  ChildProcessors  Processor 	Type SimpleEnvelope ID Simple Envelope1 Bypassed Monophonic 	        Retrigger 	      �?Intensity 	      �?Attack 	        Release 	      ,@LinearMode 	      �?EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Attack Time Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type 
Velocity ID SnareVel1 Bypassed Intensity 	      �?UseTable 	      �?Inverted 	        DecibelMode 	        VelocityTableData 536...............vOaX1A+HhHB7C...vO...f+....9i1fPuO EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   Processor Type 
Velocity ID SnareVel2 Bypassed Intensity 	      �?UseTable 	      �?Inverted 	        DecibelMode 	        VelocityTableData E48...............vO1Kfs9nYl47C...vOKOSL+DQDw8C...vO...f+....9C...vO EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   Processor Type 
Velocity ID SnareVel3 Bypassed Intensity 	      �?UseTable 	      �?Inverted 	        DecibelMode 	        VelocityTableData E48...............vOjVu.+vppp3C...vOJzeR+HQDQ6C...vO...f+....9C...vO EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0 Folded 0  ChildProcessors  Processor Type SimpleGain ID Simple Gain2 Bypassed Gain 	        Delay 	        Width 	      Y@Balance 	        InvertPolarity 	        EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Gain Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID Delay Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID Width Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID Pan Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� Processor Type ModulatorChain ID Sample Start Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   Processor Type ModulatorChain ID Group Fade Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0 Folded 1  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� channels  channelData enabled level 	        suffix   samplemap  sample Root &   LoKey &   HiKey &   LoVel     HiVel    RRGroup    FileName i/Volumes/LIBRARY/ACOUSTIC_DRUM_WORKSHOP/WRK_DRUM_HITS/SNARES/12x5_MAPLE_SNARE/WRK_12x5_MapleSnr_Med.wav Duplicate  RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� macro_controls  macro name 	Macro 1 value 0.0 midi_cc -1  macro name 	Macro 2 value 0.0 midi_cc -1  macro name 	Macro 3 value 0.0 midi_cc -1  macro name 	Macro 4 value 0.0 midi_cc -1  macro name 	Macro 5 value 0.0 midi_cc -1  macro name 	Macro 6 value 0.0 midi_cc -1  macro name 	Macro 7 value 0.0 midi_cc -1  macro name 	Macro 8 value 0.0 midi_cc -1  MidiAutomation   MPEData Enabled  