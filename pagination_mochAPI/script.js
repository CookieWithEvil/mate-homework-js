function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}

httpGet("https://5bf417c491c25b0013a3b9a2.mockapi.io/users")
  .then(
    function(response){
      let res = JSON.parse(response);
      let page = new Pagination(res);
      page.setPagesAmount(res.length);
      page.displayData();
      page.displayPages();
    },
    error => console.log(`Rejected: ${error}`)
  );


class Pagination {
  constructor(result){
    this.result = result;
    this.currPage = 1;
    this.pages;
    this.data;
  }
  addData(data){
    let tr = document.createElement("TR");
    let td0 = document.createElement("TD");
    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");
    let td3 = document.createElement("TD");
    let td4 = document.createElement("TD");
    td0.innerHTML = data.id;
    td1.innerHTML = data.name;
    td2.innerHTML = (data.description) ? data.description : "";
    td3.innerHTML = data.createdAt;
    td4.innerHTML = (data.email) ? data.email : "";
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    document.querySelector(".container .table tbody").appendChild(tr);
  }
  setData(){
    this.data = this.result.slice(10*(this.currPage-1), 10*this.currPage);
  }
  getData(){
    return this.data;
  }
  resetTable(){
    document.querySelector(".container .table tbody").innerHTML = "";
  }
  disableButton(){
    document.getElementsByClassName("page-item")[0].classList.remove("disabled");
    document.getElementsByClassName("page-item")[0].style.pointerEvents = "auto";
    document.querySelector(".page-item:last-child").style.pointerEvents = "auto";
    document.querySelector(".page-item:last-child").classList.remove("disabled");
    if(this.currPage - 1 === 0){
      document.getElementsByClassName("page-item")[0].style.pointerEvents = "none";
      document.getElementsByClassName("page-item")[0].classList.add("disabled");
    }else if(this.currPage === this.pages){
      document.querySelector(".page-item:last-child").style.pointerEvents = "none";
      document.querySelector(".page-item:last-child").classList.add("disabled");
    }
  }
  displayData(){
    this.setData();
    let data = this.getData();
    for (var i = 0; i < data.length; i++) {
        this.addData(data[i]);
      }
    this.disableButton();
  }
  setPagesAmount(dataLength){
    this.pages = Math.ceil(dataLength/10);
  }
  getPagesAmount(dataLength){
    return this.pages;
  }
  displayPages(){
    for (var i = 1; i < this.pages+1; i++) {
      let li = document.createElement("LI");
      li.className = "page-item";
      li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      document.querySelector(".container .pagination").appendChild(li);      
    }

    let li = document.createElement("LI");
    li.className = "page-item";
    li.innerHTML = `<a class="page-link" href="#">Next</a>`
    document.querySelector(".container .pagination").appendChild(li);

     document.querySelector(".container .pagination").addEventListener("click", function(event) {
        if(+event.target.innerHTML){
          this.currPage = +event.target.innerHTML;
        }else if(event.target.innerHTML === "Previous") --this.currPage;
        else if(event.target.innerHTML === "Next") ++this.currPage;
        this.resetTable();
        this.displayData();
      }.bind(this));
  }
}