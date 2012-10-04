package example {
public class Car {
	public function Car() {} // (1) Constructor
	public function horn():void { // (2) Abstract method
		throw new Error("unimplemented abstract method");
	}
	public function gas():void { // (3) Instance method
		trace("Speed up.");
	}
	public function brake():void { // (4) Instance method
		trace("Slow down.");
	}
}
}