class MemoryStorage{
    private storage: any[];
  
    constructor() {
      this.storage = [];
    }
  
    public insert(record: any): void {
      this.storage.push(record);
    }

    public get(id: number): string{
      return this.storage.pop();
    }
  }
  
class PostService {
  // Imagine this will always connect to a database
    private db = new MemoryStorage();
  
    createPost(title: string) {
      this.db.insert(title);
    }

    sum(a:number, b: number):number {
      return a * b;
    }
  }

describe('PostService', () => {
  it('test the sum function', () => {
    const instance = new PostService();
    expect(instance.sum(1, 2)).toStrictEqual(3);
  });
})

const insertIntoDatabase = async (database: Storage, data: any) => {
  // Establish database connection and returns a database
  const database: Storage = database
  const value: number | undefined = complexCalculation();
  if (value) {
    doSomeOtherThings();
    await database.insert(data);
  }
  return;
};

describe('insertIntoDatabase', () => {
  it('smoke test', async() => {
    const databaseSpy = jest.spyOn(database, 'insert');

    await insertIntoDatabase(database, {foo: 'bar'});

    expect(databaseSpy).toHaveBeenCalledTimes(1);
  })

}
