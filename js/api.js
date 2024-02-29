const loadData = async (searchText, isShow) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json()
  displayData(data.data, isShow)
}

const displayData = (phones, isShow) => {
  const divContainer = document.getElementById('card-container')
  divContainer.textContent = ''

  const showAllContainer = document.getElementById('show-all-container')
  if (phones.length > 6) {
    showAllContainer.classList.remove('hidden')
  }
  else {
    showAllContainer.classList.add('hidden')
  }

  phones = phones.slice(0, 6)

  phones.forEach((phone) => {
    // console.log(phone);

    const cardContainer = document.createElement('div')
    cardContainer.classList = `card w-96 bg-base-100 shadow-xl`
    cardContainer.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>${phone.brand}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
`
    divContainer.appendChild(cardContainer)
  })

}



const handleSearch = (isShow) => {
  const searchInput = document.getElementById('search-input');
  const searchText = searchInput.value;
  console.log(searchText);
  loadData(searchText, isShow)
}

const handleShowAll = () => {
  handleSearch(true)
}