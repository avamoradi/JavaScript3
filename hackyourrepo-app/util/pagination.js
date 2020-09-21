function pagination(listItem){
  const paginationElement = document.getElementById('pagination');
  let currentPage = 1;
  let rows = 5;
  
  // show contributors 
  function displayList (items, wrapper, rowsPerPage, page){
    wrapper.innerHTML = "";
    page--;
    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItem = items.slice(start , end);
    for (let i = 0; i < paginatedItem.length; i++){
      let item = paginatedItem[i];
      let itemElement = document.createElement('div');
      itemElement.className = "flex";
      itemElement.innerHTML += 
      `<img src= ${item.avatar_url} class="person-img"></img>
      <a href ="https://github.com/${item.login}">${item.login}</a>
      <div class="fork-no">${item.contributions}</div>`
      wrapper.appendChild(itemElement)
    }
  }
  // make buttons
  function setupPagination(items, wrapper, rowsPerPage){
    wrapper.innerHTML = "";
    let pageCount = Math.ceil(items.length / rowsPerPage);
    for (let i = 1; i< pageCount + 1 ; i++){
      let btn = paginationButton(i); // add as much as button which we need
      wrapper.appendChild(btn);
    }
  }
  
  function paginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    if (currentPage == page) 
      button.classList.add('active');
    
    button.addEventListener('click', () => {
      currentPage = page;
      displayList(listItem, mrightDiv, rows, currentPage);
      let currentButton = document.querySelector('.pagenumbers button.active');
      currentButton.classList.remove('active');
      button.classList.add('active');
    })
    return button;
  }

  displayList(listItem,mrightDiv, rows, currentPage);
  setupPagination(listItem, paginationElement, rows)

}