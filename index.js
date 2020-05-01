class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Queues{
  constructor(value){
    this.head={
      value:value,
      next:null
    }
    this.tail=this.head;
    this.length=1;
  }
  enqueue(value){
    const node=new Node(value);
    this.tail.next=node;
    this.tail=node;
    this.length++
    return this;
  }
  dequeue(){
    if(!this.head){
      return null;
    }
    if(this.head === this.tail){
      this.tail=null;
    }
    this.head=this.head.next;
    this.length--;
    return this;
  }
}
const queue=new Queues(5);
queue.enqueue(10);
queue.enqueue(2);
queue.dequeue();
queue.dequeue();
queue.dequeue();