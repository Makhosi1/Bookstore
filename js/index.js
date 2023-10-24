const book = {
    title: 'Hi',
    author: 'How',
    price:'£3',
    description:'Hyue sjnbs jaiow jid ',
    image: src='',


    newBook:function(){
    //let addBook = document.querySelector(".#addNewBook"),
    return this.title + "my new array" + this.author;
}
};
//console.log(newBook);
console.log(document.body.parentNode);

function listAllDom(){
    const children = document.body.childNodes

    for (i=0; i<children.length; i++){
    console.log(children[i]);
    }
}

//console.log(listAllDom);

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      console.log(this.firstName + " " + this.lastName);
    }
  };

  //console.log(fullName);

  document.getElementById("#addNewBook").innerHTML = "Hello Macoco";