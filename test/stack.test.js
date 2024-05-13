// npm init @vitejs/app select framework vanilla
// npm install jest -> looks for any file in project labelled .test.js
// to run code in file we need to implement jest runner 
// go to package json setup "test":"jest --watchAll --verbose" added watchall command for jest to  watches code in background and rerun the test in case changes , jest watches code in background
// install npm install @types/jest -> create a jsconfig.json with typeAcquistion include jest this provides intellisense built in jest to make your life easier / aslos padi wallaby pulgin 

// the callback function takes multiple test using it/test 


// write expect to make an expectation what our code should do 
//toBe is matcher checks actual value to expected value 

//jest has set of helper function for setup and test down 


class Stack{
  constructor(){
    this.top = -1
    this.items = {}
    this.del = 0 
  }

  get peek() {
     return this.items[this.top]
  }

  push(value){
    this.top+=1
    this.items[this.top] = value 
  }

  pop(){ 
    const top = this.items[this.top]
    delete this.items[this.top]
    this.top--;
    return top 
  }

}

describe("Creating a Stack", ()=>{

  let stack; 

  beforeEach(()=>{
    stack = new Stack();
  });

  it('is created empty', ()=>{
    expect(stack.top).toBe(-1)
    expect(stack.items).toEqual({})

  })

  it('can push to top', ()=>{
    stack.push('*')
    expect(stack.top).toBe(0)
    expect(stack.peek).toBe('*')

  })

  it('can pop off', ()=>{
    if (this.top === -1) {
      // Handle empty stack case
      return null;
    }
    stack.push('*')
    stack.push('&')
    const expectedPoppedValue = '&';
    const poppedValue = stack.pop();


    expect(expectedPoppedValue).toBe(poppedValue)
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('*');
    
  })
  
})