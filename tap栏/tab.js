class Tap{
  constructor(def){
    let option={
      item:'.item',
      content:'.content',
      mouseover:'mouseover',
      active:'active',
      show:'show',
      times:'times'
    }
    Object.assign(option,def);
    Object.assign(this,option);
    this.items=document.querySelectorAll(this.item);
    this.content=document.querySelectorAll(this.content);
    this.zhuce();
  }
  zhuce(){
    this.items.forEach((e,i)=>{
      e.addEventListener(this.mouseover,(e=>{
        this.qiehuan1(e.target);
        this.qiehuan2(i);
      }))
    })
  }

  qiehuan1(target){
    this.items.forEach(e=>{
      e.classList.remove(this.active)
    })
    target.classList.add(this.active)
  }

  qiehuan2(i){
    this.content.forEach(e=>{
      e.classList.remove(this.show)
    })
    this.content[i].classList.add(this.show)
  }
}