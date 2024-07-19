
const aboutPage = () => {
    const aboutContainer = document.createElement('div');
    aboutContainer.setAttribute('id','aboutContainer');
    aboutContainer.setAttribute('class','page');

    const aboutHeader = document.createElement('h1');
    aboutHeader.textContent = "About US...";

    const aboutSection = document.createElement("div");
    aboutSection.setAttribute('id','aboutSection');

    const aboutContent = `
        <section>
            <div id="story">
              <h3>Our Story</h3>
              <p>Welcome to The Flavorful Fork , where passion meets flavor! Founded in 2001, our journey began with a simple vision: to create a dining experience that feels like home, yet offers a culinary adventure that excites your taste buds.We are proud to serve our community with dishes that are crafted with love, fresh ingredients, and a dash of creativity.</p>
            </div>

            <div id="cuisine">
                <h3>Our Cuisine</h3>
                <p>At The Flavorful Fork , we believe that food is more than just sustenance it's a celebration of life, culture, and tradition. Our menu features a diverse array of dishes, from timeless classics to innovative creations. Each dish is meticulously prepared by our talented chefs, ensuring that every bite is a delightful experience.</p>
            </div>

            <div id="team">
                <h3>Our Team</h3>
                <p>Our team at The Flavorful Fork is a close-knit family of passionate individuals who share a common goal: to provide exceptional service and unforgettable dining experiences. From our skilled chefs to our friendly waitstaff, each member of our team is dedicated to making your visit memorable.</p>
            </div>
            
            <div id="join">
                <h3>Join Us</h3>
                <p>We invite you to join us and experience the magic of our cuisine and hospitality. Whether you're a regular guest or visiting for the first time, we look forward to welcoming you with open arms and serving you a meal that you'll remember. Thank you for choosing The Flavorful Fork, and we hope to see you soon!</p>
            </div>

        </section>
    `; 

    aboutSection.innerHTML = aboutContent;

    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutSection);

    const content = document.getElementById("content");
    content.appendChild(aboutContainer);
}

export default aboutPage;