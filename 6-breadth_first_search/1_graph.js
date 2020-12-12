class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(...elements) {
    elements.forEach((e) => this.elements.push(e));
  }

  dequeue() {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  peek() {
    return !this.isEmpty() ? this.elements[0] : undefined;
  }

  length() {
    return this.elements.length;
  }
}

const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const personIsSeller = (name) => name.slice(-1) === "m";

const search = (name) => {
  let search_queue = new Queue();
  search_queue.enqueue(...graph[name]);
  searched = [];
  while (!search_queue.isEmpty()) {
    person = search_queue.dequeue();
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(person + " is a mango seller!");
        break;
      } else {
        search_queue.enqueue(...graph[person]);
        searched.push(person);
      }
    }
  }
  return false;
};

search("you");
