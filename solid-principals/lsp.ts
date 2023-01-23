class Rectangle {
  constructor(private _width: number, private _height: number) {}

  public area() : number {
    return this._height * this._width;
  }
}

class Square extends Rectangle {
  //OH NOOOOOOO
}

/*
* OH OH -- this assumes that the width and height are equal -- how do we get around this?
*/