document.addEventListener('DOMContentLoaded', () => {
    const paintDrawBtn = document.querySelector('#paint-draw')
    const sculptureBtn = document.querySelector('#sculpture')
    const textilesBtn = document.querySelector('#textiles')
    const paperBtn = document.querySelector('#paper')
    const jewelryBtn = document.querySelector('#jewelry')
    const homeDecorBtn = document.querySelector('#home-decor')
    const kidsBtn = document.querySelector('#kids')
    const witchcraftBtn = document.querySelector('#witchcraft')
    const allCraftsBtn = document.querySelector('#allcraft')
    const premiumBtn = document.querySelector('#premium')
    const addYourOwnBtn = document.querySelector('#addcraft')
    const resultsList = document.getElementById('type-results-list')
    const resultsContainer = document.getElementById('type-results')
    const detailsContainer = document.getElementById('craft-details')
    const craftItemDetails = document.getElementById('craft-item-details')
    const closeDetailsButton = document.getElementById('close-craft-details')
    const leftBtn = document.getElementById('left-btn')
    const rightBtn = document.getElementById('right-btn')
    const searchBtn = document.querySelector(`#search-btn`)
    const search = document.querySelector(`#search`)
    const addReviewBtn = document.querySelector('#add-review-btn')
    const addReviewInput = document.getElementById('add-review-input')
    const cancelPost = document.getElementById('cancel-post')
    const postReview = document.getElementById('post-review')
    const reviewContainer = document.getElementById('review-container')



    //search feature
    searchBtn.addEventListener(`click`, async () => {
        await searchCrafts()
    })
    search.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') { searchCrafts() }
    })

    function clearSearch() {
        search.value = "";
    }

    //Search Crafts not working as intended will come back to fix

    async function searchCrafts(searchText) {
        resultsList.innerHTML = ''
        detailsContainer.style.display = 'none'
        try {

            let searchText = search.value
            console.log(searchText)
            const url = `http://localhost:5500/crafts/name/${searchText}`;
            let response = await fetch(url)
            console.log(response)
            const crafts = await response.json()

            const filteredCrafts = crafts.filter(craft => craft.craftName.toLowerCase().includes(searchText.toLowerCase())) //inclusive of lowercase
            resultsContainer.classList.remove('hidden')

            if (filteredCrafts.length > 0) {
                filteredCrafts.forEach(craft => {
                    const resultItem = document.createElement('div')
                    resultItem.classList.add('result-item')
                    resultItem.style.display = 'grid'
                    resultItem.innerHTML = `
                        <div id='resultBackground'>
                        <div id='resultNameContainer'><h6 id='resultName'>${craft.craftName}</h6></div>
                        <div id='resultImgContainer'><img class='resultImg' src="${craft.craftImg || ''}" alt="${craft.craftName} " /></div>
                        <p id='tagline'>${craft.tagline}</p>
                        <div id='resultBtnContainer'><button class="view-craft-btn" data-id="${craft._id}">Details</button></div>
                        </div>
                    `
                    resultsList.appendChild(resultItem)
                })
            } else {
                resultsList.innerHTML = '<p>No results found.</p>'
            }
            clearSearch()
        } catch {
            console.error('Error fetching crafts:', error);
            resultsList.innerHTML = '<p>No results found.</p>'
        }
    }

    //carousel 
    const typeBtn = document.querySelectorAll('.type-btn')
    const totalBtns = typeBtn.length
    const visibleBtns = 4.5
    let btnIndex = 0

    function showTypeBtn() {
        if (btnIndex < 0) {
            btnIndex = totalBtns - visibleBtns  //loop to end
        } else if (btnIndex > totalBtns - visibleBtns) {
            btnIndex = 0 //loop to start
        }

        const offset = -btnIndex * (100 / visibleBtns)
        document.querySelector('#carousel').style.transform = `translateX(${offset}%)`
    }

    function moveTypeBtn(direction) {
        btnIndex += direction; //adjusts based on direction clicked

        if (btnIndex < 0) {
            btnIndex = totalBtns - visibleBtns
        } else if (btnIndex > totalBtns - visibleBtns) {
            btnIndex = 0
        }

        showTypeBtn()
    }

    leftBtn.addEventListener('click', () => moveTypeBtn(-1))
    rightBtn.addEventListener('click', () => moveTypeBtn(1))


    // Function to handle button clicks
    const filterResultsByCraftType = async (craftTypeId) => {
        resultsList.innerHTML = ''
        detailsContainer.style.display = 'none'
        try {
            const response = await fetch('http://localhost:5500/crafts/')
            const crafts = await response.json()

            // Filter crafts by supplyType
            const filteredCrafts = crafts.filter(craft => craft.craftType_id === craftTypeId)
            resultsContainer.classList.remove('hidden')

            // Check if there are crafts to display
            if (filteredCrafts.length > 0) {
                filteredCrafts.forEach(craft => {
                    const resultItem = document.createElement('div')
                    resultItem.classList.add('result-item')
                    resultItem.style.display = 'grid'
                    resultItem.innerHTML = `
                        <div id='resultBackground'>
                        <div id='resultNameContainer'><h6 id='resultName'>${craft.craftName}</h6></div>
                        <div id='resultImgContainer'><img class='resultImg' src="${craft.craftImg || ''}" alt="${craft.craftName} " /></div>
                        <p id='tagline'>${craft.tagline}</p>
                        <div id='result-difficulty'>Difficulty: ${craft.difficulty}</div>
                        <div id='resultBtnContainer'><button class="view-craft-btn" data-id="${craft._id}">Details</button></div>
                        </div>
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

    const filterResultsForKids = async () => {
        resultsList.innerHTML = ''
        detailsContainer.style.display = 'none'
        try {
            const response = await fetch('http://localhost:5500/crafts')
            const crafts = await response.json()

            // Filter crafts by 
            const filteredCrafts = crafts.filter(craft => craft.forKids === true)
            resultsContainer.classList.remove('hidden')

            // Check if there are crafts to display
            if (filteredCrafts.length > 0) {
                filteredCrafts.forEach(craft => {
                    const resultItem = document.createElement('div')
                    resultItem.classList.add('result-item')
                    resultItem.style.display = 'grid'
                    resultItem.innerHTML = `
                        <div id='resultBackground'>
                        <div id='resultNameContainer'><h6 id='resultName'>${craft.craftName}</h6></div>
                        <div id='resultImgContainer'><img class='resultImg' src="${craft.craftImg || ''}" alt="${craft.craftName} " /></div>
                        <p id='tagline'>${craft.tagline}</p>
                        <div id='result-difficulty'>Difficulty: ${craft.difficulty}</div>
                        <div id='resultBtnContainer'><button class="view-craft-btn" data-id="${craft._id}">Details</button></div>
                        </div>
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

    const filterResultsForPremium = async () => {
        resultsList.innerHTML = ''
        detailsContainer.style.display = 'none'
        try {
            const response = await fetch('http://localhost:5500/crafts')
            const crafts = await response.json()

            // Filter crafts by 
            const filteredCrafts = crafts.filter(craft => craft.premiumMembership === true)
            resultsContainer.classList.remove('hidden')

            // Check if there are crafts to display
            if (filteredCrafts.length > 0) {
                filteredCrafts.forEach(craft => {
                    const resultItem = document.createElement('div')
                    resultItem.classList.add('result-item')
                    resultItem.style.display = 'grid'
                    resultItem.innerHTML = `
                        <div id='resultBackground'>
                        <div id='resultNameContainer'><h6 id='resultName'>${craft.craftName}</h6></div>
                        <div id='resultImgContainer'><img class='resultImg' src="${craft.craftImg || ''}" alt="${craft.craftName} " /></div>
                        <p id='tagline'>${craft.tagline}</p>
                        <div id='result-difficulty'>Difficulty: ${craft.difficulty}</div>
                        <div id='resultBtnContainer'><button class="view-craft-btn" data-id="${craft._id}">Details</button></div>
                        </div>
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

    const getAllCrafts = async () => {
        resultsList.innerHTML = ''
        detailsContainer.style.display = 'none'
        try {
            const response = await fetch('http://localhost:5500/crafts')
            const crafts = await response.json()

            // Filter crafts by 
            const filteredCrafts = crafts
            resultsContainer.classList.remove('hidden')

            // Check if there are crafts to display
            if (filteredCrafts.length > 0) {
                filteredCrafts.forEach(craft => {
                    const resultItem = document.createElement('div')
                    resultItem.classList.add('result-item')
                    resultItem.style.display = 'grid'
                    resultItem.innerHTML = `
                        <div id='resultBackground'>
                        <div id='resultNameContainer'><h6 id='resultName'>${craft.craftName}</h6></div>
                        <div id='resultImgContainer'><img class='resultImg' src="${craft.craftImg || ''}" alt="${craft.craftName} " /></div>
                        <p id='tagline'>${craft.tagline}</p>
                        <div id='result-difficulty'>Difficulty: ${craft.difficulty}</div>
                        <div id='resultBtnContainer'><button class="view-craft-btn" data-id="${craft._id}">Details</button></div>
                        </div>
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
        filterResultsForKids()
    })

    // Event listener for premium button
    premiumBtn.addEventListener('click', () => {
        filterResultsForPremium()
    })

    // Event listener for all crafts button
    allCraftsBtn.addEventListener('click', () => {
        getAllCrafts()
    })

    // Event listener for add crafts button
    // addYourOwnBtn.addEventListener('click', () => {
    // })

    // Event listener for craft details
    resultsList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('view-craft-btn')) {
            const craftId = e.target.dataset.id
            console.log('Details button clicked for craft ID:', craftId)

            // Fetch the craft details
            try {
                const response = await fetch(`http://localhost:5500/crafts/${craftId}`)
                const craft = await response.json()

                // Populate the details container with craft data
                detailsContainer.style.display = 'grid'
                document.getElementById('craftName').textContent = craft.craftName
                document.getElementById('difficulty').textContent = `Difficulty: ${craft.difficulty}`
                document.getElementById('description').textContent = craft.description
                document.getElementById('craftImg').src = craft.craftImg || ''
                document.getElementById('craft-id').textContent = craft._id

                //populating the details container with materials list with a loop
                const materialsList = document.getElementById('materials-list')
                materialsList.innerHTML = ""  // this clears out any text
                craft.materials.forEach(material => {
                    const listItem = document.createElement('li')
                    listItem.classList.add('details-section-background')

                    const materialsText = document.createElement('div')
                    materialsText.classList.add('material-text')

                    materialsText.textContent = `${material.amount} ${material.unit} - ${material.item}`

                    listItem.appendChild(materialsText)
                    materialsList.appendChild(listItem)
                })

                //populating the directions list
                const directionsList = document.getElementById('directions-list')
                directionsList.innerHTML = ""
                craft.directions.forEach(direction => {
                    const listItem = document.createElement('li')
                    listItem.classList.add('details-section-background')

                    //This sets the text for directions
                    const directionText = document.createElement('div')
                    directionText.classList.add('direction-text')
                    directionText.textContent = `${direction.step} - ${direction.direction}`
                    listItem.appendChild(directionText)

                    //This sets the image for the step (if there is one)
                    if (direction.stepImg) {
                        const img = document.createElement('img')
                        img.classList.add('step-img')
                        img.src = direction.stepImg
                        listItem.appendChild(img)
                    }
                    directionsList.appendChild(listItem)
                })

                //populating the review container with review list with a loop
                const reviewsList = document.getElementById('reviews-list')
                reviewsList.innerHTML = ""
                craft.craftReviews.forEach(craftReview => {
                    const listItem = document.createElement('li')
                    listItem.classList.add('details-section-background')

                    //creating stars for review
                    let starRating = ''
                    if (craftReview.rating === 1) { starRating = `⭐` }
                    else if (craftReview.rating === 2) { starRating = `⭐⭐` }
                    else if (craftReview.rating === 3) { starRating = `⭐⭐⭐` }
                    else if (craftReview.rating === 4) { starRating = `⭐⭐⭐⭐` }
                    else if (craftReview.rating === 5) { starRating = `⭐⭐⭐⭐⭐` }

                    //creating div for top text
                    const reviewerRatingText = document.createElement('div')
                    reviewerRatingText.classList.add('review-text')
                    reviewerRatingText.textContent = `${craftReview.reviewer} - ${starRating}`

                    //created div for review text
                    const reviewText = document.createElement('div')
                    reviewText.classList.add('review-text')
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
                console.error('Error fetching craft details:', error)
            }
        }
    })

    const getUpdatedReviews = async (craftId) => {
        try {
            const response = await axios.get(`http://localhost:5500/crafts/${craftId}/reviews`)
            const reviewsList = document.getElementById('reviews-list')
            reviewsList.innerHTML = ""

            response.data.forEach(review => {
                const listItem = document.createElement('li')
                let starRating = ``

                if (review.rating === 1) { starRating = `⭐` }
                else if (review.rating === 2) { starRating = `⭐⭐` }
                else if (review.rating === 3) { starRating = `⭐⭐⭐` }
                else if (review.rating === 4) { starRating = `⭐⭐⭐⭐` }
                else if (review.rating === 5) { starRating = `⭐⭐⭐⭐⭐` }

                const reviewerRatingText = document.createElement('div')
                reviewerRatingText.textContent = `${review.reviewer} - ${starRating}`

                const reviewText = document.createElement('div')
                reviewText.textContent = review.review

                listItem.appendChild(reviewerRatingText)
                listItem.appendChild(reviewText)

                reviewsList.appendChild(listItem)
            })
        } catch (error) {
            console.error('error getting updated reviews', error)
        }
    }

    postReview.addEventListener('click', async () => {
        const craftId = document.getElementById('craft-id').textContent
        const reviewerName = document.getElementById('reviewer-name').value
        const reviewRating = document.getElementById('reviewer-rating').value
        const reviewText = document.getElementById('reviewer-review').value

        if (!reviewerName || !reviewRating || !reviewText) {
            alert('HEY! Please fill in all fields.')
            return
        }

        const reviewInfo = {
            reviewer: reviewerName,
            rating: reviewRating,
            review: reviewText
        }

        try {
            const response = await axios.post(`http://localhost:5500/crafts/${craftId}/reviews`, reviewInfo)
            console.log("Added Review", response.data)

            document.getElementById('reviewer-name').value = ''
            document.getElementById('reviewer-rating').value = ''
            document.getElementById('reviewer-review').value = ''

            addReviewInput.classList.add('hidden')
            closeDetailsButton.classList.remove('hidden')
            reviewContainer.classList.remove('hidden')

            getUpdatedReviews(craftId)

        } catch (error) {
            console.error('error adding review', error)
            alert('Could not add review. Please try again.')
        }
    })

    addReviewBtn.addEventListener('click', () => {
        addReviewInput.classList.remove('hidden')
        closeDetailsButton.classList.add('hidden')
        reviewContainer.classList.add('hidden')
    })

    cancelPost.addEventListener('click', () => {
        addReviewInput.classList.add('hidden')
        closeDetailsButton.classList.remove('hidden')
        reviewContainer.classList.remove('hidden')
    })

    // Close details button
    closeDetailsButton.addEventListener('click', () => {
        detailsContainer.classList.add('hidden')
        resultsContainer.classList.remove('hidden')
        detailsContainer.style.display = 'none'
        document.body.scrollTop = document.documentElement.scrollTop = 0; //used to go to top of page on close
    })
})