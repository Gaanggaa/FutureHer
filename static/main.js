
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },   
});


// Fetch the JSON data and dynamically populate the content
fetch('scholarships.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('scholarships');

        // Loop through the scholarship data and create HTML structure
        data.forEach(scholarship => {
            const scholarshipBox = document.createElement('div');
            scholarshipBox.classList.add('scholarship-box');

            scholarshipBox.innerHTML = `
                <h2>${scholarship.name}</h2>
                <p>${scholarship.description}</p>
                <ul>
                    <li><strong>Eligibility:</strong> ${scholarship.eligibility}</li>
                    <li><strong>Deadline:</strong> ${scholarship.deadline}</li>
                    <li><strong>Official Page:</strong> <a href="${scholarship.link}" target="_blank">Visit Here</a></li>
                </ul>
            `;

            container.appendChild(scholarshipBox);
        });
    })
    .catch(error => console.error('Error fetching scholarship data:', error));



fetch('scholarships.json')
    .then(response => response.json())
    .then(data => {
      const scholarshipList = document.getElementById('scholarship-list');
  
      data.forEach(scholarship => {
        const listItem = document.createElement('li');
        const scholarshipLink = document.createElement('a');
        scholarshipLink.href = scholarship.link;
        scholarshipLink.target = '_blank';
        scholarshipLink.textContent = scholarship.name;
  
        listItem.appendChild(scholarshipLink);
        listItem.innerHTML += `
          <p>${scholarship.description}</p>
          <p>Eligibility: ${scholarship.eligibility}</p>
        `;
  
        scholarshipList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle the error gracefully, e.g., display an error message to the user
    });






    
    fetch('women_opportunities.json')
    .then(response => response.json())
    .then(data => {
      const opportunitiesList = document.getElementById('opportunities-list');
  
      data.forEach(opportunity => {
        const listItem = document.createElement('li');
        const opportunityLink = document.createElement('a');
        opportunityLink.href = opportunity.link;
        opportunityLink.target = '_blank';
        opportunityLink.textContent = opportunity.name;
  
        listItem.appendChild(opportunityLink);
        listItem.innerHTML += `
          <p>${opportunity.description}</p>
          <p>Eligibility: ${opportunity.eligibility}</p>
          <p>Type: ${opportunity.type}</p> 
        `;
  
        opportunitiesList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle the error gracefully, e.g., display an error message to the user
    });