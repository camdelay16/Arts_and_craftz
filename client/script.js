document.addEventListener('DOMContentLoaded', () => {
    const paintDrawBtn = document.querySelector('#paint-draw')
    const sculptureBtn = document.querySelector('#sculpture')
    const textilesBtn = document.querySelector('#textiles')
    const paperBtn = document.querySelector('#paper')
    const jewelryBtn = document.querySelector('#jewelry')
    const homeDecorBtn = document.querySelector('#home-decor')
    const kidsBtn = document.querySelector('#kids')
    const witchcraftBtn = document.querySelector('#witchcraft')
    const resultsList = document.getElementById('#type-results-list')
    const resultsContainer = document.getElementById('#type-results')
    const detailsContainer = document.getElementById('craft-details')
    const closeDetailsButton = document.getElementById('close-craft-details')

    // Function to handle button clicks
    const filterResultsByCraftType = async (craftTypeId) => {
        resultsList.innerHTML = ''
        try {
            const response = await fetch('http://localhost:3001/crafts/')
            const crafts = await response.json()

            // Filter products by supplyType
            const filteredCrafts = crafts.filter(craft => craft.craftType_id === craftTypeId)
            resultsContainer.classList.remove('hidden')

            // Check if there are products to display
            if (filteredCrafts.length > 0) {
                filteredCrafts.forEach(craft => {
                    const resultItem = document.createElement('div')
                    resultItem.classList.add('result-item')
                    resultItem.innerHTML = `
                        <h6>${craft.craftName}</h6>
                        <img src="${craft.craftImg || ''}" alt="${craft.craftName}" />
                        <p>${craft.tagline}</p>
                        <button class="view-craft-btn" data-id="${craft._id}">Details</button>
                    `
                    resultsList.appendChild(resultItem)
                })
            } else {
                resultsList.innerHTML = '<p>No results found.</p>'
            }
        } catch (error) {
            console.error('Error fetching crafts:', error)
            resultsList.innerHTML = '<p>Error fetching results. Please try again.</p>'
        }
    }

    // Event listener for paint-draw btn
    paintDrawBtn.addEventListener('click', () => {
        filterResultsByCraftType('67159bf0c5f0b8a90eb3b0fb')
    })

    // Event listener for sculpture
    sculptureBtn.addEventListener('click', () => {
        filterResultsByCraftType('67159bf0c5f0b8a90eb3b0fc')
    })

    // Event listener for textiles btn
    textilesBtn.addEventListener('click', () => {
        filterResultsByCraftType('67159bf0c5f0b8a90eb3b0fd')
    })
    
    // Event listener for paper
    paperBtn.addEventListener('click', () => {
        filterResultsByCraftType('67159bf0c5f0b8a90eb3b0fe')
    })

    // Event listener for jewelry making
    jewelryBtn.addEventListener('click', () => {
        filterResultsByCraftType('67159bf0c5f0b8a90eb3b0ff')
    })
        
    // Event listener for home decor button
    homeDecorBtn.addEventListener('click', () => {
        filterResultsByCraftType('67159bf0c5f0b8a90eb3b100')
    })

    // Event listener for witchcrafts
    witchcraftBtn.addEventListener('click', () => {
        filterResultsByCraftType('67159bf0c5f0b8a90eb3b102')
    })
            
    // Event listener for kids button
    kidsBtn.addEventListener('click', () => {
        filterResultsByCraftType('67159bf0c5f0b8a90eb3b101')
    })

    // Event listener for craft details
    resultsList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('view-craft-btn')) {
            const craftId = e.target.dataset.id
            console.log('Details button clicked for craft ID:', craftId)

            // Fetch the craft details
            try {
                const response = await fetch(`http://localhost:3001/crafts/${craftId}`)
                const craft = await response.json()

                // Populate the details container with craft data
                document.getElementById('craftName').textContent = craft.craftName
                document.getElementById('difficulty').textContent = craft.difficulty
                document.getElementById('craftImg').src = craft.craftImg || ''
                
                //populating the details container with materials list with a loop
                const materialsList = document.getElementById('materials-list')
                materialsList.innerHTML = ""  // this clears out any text
                craft.materials.forEach(material => {     
                    const listItem = document.createElement('li')
                    listItem.textContent = `${material.amount} ${material.unit} ${material.item}`
                    materialsList.appendChild(listItem)
                })

                //populating the directions list
                const directionsList = document.getElementById('directions-list')
                directionsList.innerHTML = ""
                craft.directions.forEach(direction => {
                    const listItem = document.createElement('li')

                    //This sets the text for directions
                    const directionText = document.createElement('span')
                    directionText.textContent = `${direction.step} ${direction.direction}`
                    listItem.appendChild(directionText)

                    //This sets the image for the step (if there is one)
                    if (direction.stepImg) {
                        const img = document.createElement('img')
                        img.src = direction.stepImg
                        listItem.appendChild(img)
                    }
                    directionsList.appendChild(listItem)
                })

                //populating the review container with materials list with a loop
                const reviewsList = document.getElementById('reviews-list')
                reviewsList.innerHTML = "" 
                craft.craftReviews.forEach(craftReview => {     
                    const listItem = document.createElement('li')

                    //creating span for top text
                    const reviewerRatingText = document.createElement('span')
                    reviewerRatingText.textContent = `${craftReview.reviewer} - ${craftReview.rating}`

                    //created div for review text
                    const reviewText = document.createElement('div')
                    reviewText.textContent = craftReview.review

                    //combining text
                    listItem.appendChild(reviewerRatingText)
                    listItem.appendChild(reviewText)

                    reviewsList.appendChild(listItem)
                })

                // Hide the results and show details
                resultsContainer.classList.add('hidden')
                detailsContainer.classList.remove('hidden')
            } catch (error) {
                console.error('Error fetching product details:', error)
            }
        }
    })

    // Close details button
    closeDetailsButton.addEventListener('click', () => {
        detailsContainer.classList.add('hidden')
        //resultsContainer.classList.remove('hidden') 
    })
})