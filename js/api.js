const loadDate = async (search) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    const data = await res.json()
    const phones = data.data
    displayData(phones)
}


const displayData = (phones) => {
    console.log(phones);
    const mainContainer = document.getElementById('card-container')
    mainContainer.textContent = ''
    phones.forEach(phone => {
        console.log(phone);
        const cardContainer = document.createElement('div')
        cardContainer.classList = `card  bg-gray-300 shadow-xl`
        cardContainer.innerHTML = `
  <figure><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>${phone.brand}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
        mainContainer.appendChild(cardContainer)

    })
}


const handleSearch = () => {
    const searchField = document.getElementById('search-input')
    const searchText = searchField.value;
    loadDate(searchText)
    searchField.value = ""

}


