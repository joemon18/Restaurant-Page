function createBookingForm() {

    const createInputField = (labelText, inputType, inputName, isRequired = true) => {
        const label = document.createElement('label');
        label.textContent = labelText;
        
        const input = document.createElement('input');
        input.setAttribute('type', inputType);
        input.setAttribute('name', inputName);
        if (isRequired) input.setAttribute('required', 'required');
  
        const container = document.createElement('div');
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
  
        return container;
    };
  
    const form = document.createElement('form');
    form.setAttribute('id', 'booking-form');
  
    form.appendChild(createInputField('Name:', 'text', 'name'));
    form.appendChild(createInputField('Phone No:', 'text', 'phoneNo'));
    form.appendChild(createInputField('Number of Guests:', 'number', 'guests'));
    form.appendChild(createInputField('Date:', 'date', 'date'));
    form.appendChild(createInputField('Preferred Time:', 'text', 'time'));
  
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Book Table';
    submitButton.setAttribute('id', 'confirm');
  
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.setAttribute('id', 'cancel');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.backgroundColor = "red";
    cancelButton.addEventListener('click', () => form.reset());
  
    const btnContainer = document.createElement('div');
    btnContainer.style.display = "flex";
    btnContainer.style.justifyContent = "space-between";
    btnContainer.style.marginTop = "20px";
    btnContainer.appendChild(submitButton);
    btnContainer.appendChild(cancelButton);
  
    form.appendChild(btnContainer);
  
    const homeContainer = document.getElementById("homeContainer");
    homeContainer.appendChild(form);
  
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const guests = formData.get('guests');
        const time = formData.get('time');
  
        console.log(`Booking confirmed for ${name}, ${guests} guests, at ${time}.`);
        alert(`Booking confirmed for ${name}, ${guests} guests, at ${time}.`);
  
        form.reset();
        window.location.reload();
    });
  }
  
  export default createBookingForm;
  