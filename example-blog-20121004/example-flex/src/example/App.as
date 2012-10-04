package example {
import flash.events.MouseEvent;
import mx.core.IMXMLObject;
import mx.events.FlexEvent;
public class App implements IMXMLObject {
	private var view:Main;
	public function initialized(document:Object, id:String):void {
		view = document as Main;
	}
	public function creationCompleteHandler(event:FlexEvent):void {
		view.myButton.addEventListener(
			MouseEvent.CLICK,
			myButton_clickHandler
		); // (1) Add event listener
	}
	protected function myButton_clickHandler(event:MouseEvent):void { // (2) Event handler
		var car:Car = new RoadRunner();
		car.gas();
		car.brake();
		car.horn();
	}
}
}