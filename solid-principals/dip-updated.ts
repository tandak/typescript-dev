interface DatabaseStorage {
    insert(record: any): void;
  }
  
  class MemoryStorage implements DatabaseStorage {
    private storage: any[];
  
    constructor() {
      this.storage = [];
    }
  
    public insert(record: any): void {
      this.storage.push(record);
    }
  }
  
  class PostService {
    private db: DatabaseStorage;
  
    constructor(db: DatabaseStorage) {
      this.db = db;
    }
  
    createPost(title: string) {
      this.db.insert(title);
    }
  }

  class FakeDatabase implements DatabaseStorage {
      insert(record: any) {
        return true
      }
  }

  describe('PostService', () => {
    it('test the sum function', () => {
      const mockDatabase = new FakeDatabase();
      const i = new PostService(mockDatabase);
      expect(i.sum(1, 2)).toStrictEqual(3);
    });
  })


