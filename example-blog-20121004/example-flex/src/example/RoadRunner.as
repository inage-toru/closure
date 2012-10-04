package example {
import mx.controls.Alert;
public class RoadRunner extends Car { // (1) Extend class
	public function RoadRunner() { // (2) Constructor
		super(); // (3) Call super
	}
	override public function horn():void { // (4) Overriden method
		Alert.show("Beep! Beep!");
	}
}
}