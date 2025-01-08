
// fetching all 
const fetchAllPets = async () => {
  const url = 'https://openapi.programming-hero.com/api/peddy/pets';
  const res = await fetch(url);
  const data = await res.json();
  displayAllPets(data)
}
// fetching single specific pet details 
const FetchPetDetailsByID = async (petId) => {
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(url);
  const data = await res.json();
  showingSinglePetDetails(data.petData);
}

//for display all pets
const displayAllPets = ({ pets }) => {
  const cards = document.getElementById('cards');

  pets.forEach(pet => {
    // console.log(pet);
    const card = document.createElement('div');
    card.classList.add('p-5', 'border', 'border-solid', 'rounded-xl', 'border-[#13131319]')
    card.innerHTML = `
      <img src="${pet.image}" alt="" class="mb-6 rounded-xl w-full object-contain">
            <div class="space-y-1">
              <h6 class="text-xl font-bold text-[#131313]">${pet.pet_name}</h6>
              <p class="flex items-center gap-1">
                <img src="images/Frame.png" alt="">
                Breed: ${pet?.breed ? pet.breed : 'Not Found'}</p>
              <p><i class="fa-solid fa-calendar-days mr-1"></i>
                Birth: ${pet?.date_of_birth ? pet.date_of_birth.substring(0, 4) : 'Not Found'}</p>
              <p><i class="fa-solid fa-mercury mr-1"></i>
                Gender: ${pet?.gender ? pet.gender : 'Not Found'}</p>
              <p><i class="fa-solid fa-dollar-sign mr-1"></i>
                Price : ${pet?.price ? pet.price : 'Not Found'}$</p>
            </div>
            <div class="my-4"><hr></div>
            <div class="flex justify-between">
              <button class="py-2 px-2 sm:px-4 rounded-lg border border-solid border-[#0E7A8126]"><i class="fa-regular fa-thumbs-up"></i></button>
              <button class="btn rounded-lg border border-solid border-[#0E7A8126] py-2 px-2 sm:px-4 text-[#0E7A81] font-bold text-base sm:text-xl text-center">Adopt</button>
              <button class="btn rounded-lg border border-solid border-[#0E7A8126] text-[#0E7A81] font-bold text-base sm:text-xl py-2 px-2 sm:px-4 text-center" onclick="FetchPetDetailsByID('${pet.petId}')">Details</button>
            </div>
    `;

    cards.append(card);
  });
}

//for the display a single specific pet details
function showingSinglePetDetails(petData) {
  console.log(petData);
  const modalContent = document.getElementById('modalContent');

  modalContent.innerHTML = `
    <div class="p-1 sm:p-5 ">
      <img src=${petData?.image} alt="" class="mb-6 w-full h-full object-contain rounded-xl">
      <div class="space-y-1">
        <h6 class="text-xl font-bold text-[#131313]">${petData?.pet_name}</h6>
        <div class="sm:flex gap-5 sm:gap-11">
          <div>
            <p class="flex items-center gap-1">
              <img src="images/Frame.png" alt="">
              Breed: ${petData?.breed ? petData.breed : 'Not Found'}
            </p>
            <p><i class="fa-solid fa-mercury mr-1"></i>
              Gender: ${petData?.gender ? petData.gender : 'Not Found'}</p>
            <p><i class="fa-solid fa-mercury mr-1"></i>
              Vaccinated status: ${petData?.vaccinated_status ?
      petData?.vaccinated_status : 'Not Found'}
            </p>
          </div>
          <div>
            <p><i class="fa-solid fa-calendar-days mr-1"></i>
              Birth: ${petData?.date_of_birth ? petData.date_of_birth.substring(0, 4) : 'Not Found'}</p>
            <p><i class="fa-solid fa-dollar-sign mr-1"></i>
              Price : ${petData?.price ? petData.price : 'Not Found'}$</p>
          </div>
        </div>
      </div>
      <div class="my-4">
        <hr>
      </div>
      <div class="">
       <h3 class="text-[#131313] font-semibold mb-2">Details Information</h3>
       <p class="mb-4">${petData?.pet_details
      ? petData.pet_details
      : 'Not Found'}</p>
      </div>
    </div>
  `;

  document.getElementById('customModal').showModal();
}

fetchAllPets();