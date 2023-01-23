interface Shape {
  area() : number;
}

class Rectangle implements Shape {
  constructor(private _width: number, private _height: number) {}

  public area() : number {
    return this._height * this._width;
  }
}

class Square implements Shape {
  constructor(private _height: number) {}

  public area() : number {
    return Math.pow(this._height, 2);
  }
}