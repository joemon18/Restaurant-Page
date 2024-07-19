import logoImage from '../src/images/main-img.avif';

const homePage = () => {

const homeContainer = document.createElement("div");
homeContainer.setAttribute("id","homeContainer");
homeContainer.setAttribute('class','page');
homeContainer.style.backgroundImage = `url(${logoImage})` ;

const info = document.createElement("div");
info.setAttribute("id","info");

const heading = document.createElement('h1');
heading.textContent = "Fast Food Restaurant...";

const para = document.createElement('p');
para.textContent = 'Our appetizers set the stage, our entrees steal the show, and our desserts are the grand finale.';


info.appendChild(heading);
info.appendChild(para);


const slogan = document.createElement('div');
slogan.setAttribute('id','slogan');

const sloganHeading = document.createElement('h1');
const preserve = document.createElement('pre');
preserve.textContent = 'EAT     DRINK    VISIT';

sloganHeading.appendChild(preserve);
slogan.appendChild(sloganHeading);

const timings = document.createElement('div');
timings.setAttribute("id",'timings');

const timingsHeading = document.createElement('h3');
timingsHeading.textContent = 'Our Timings';

const timingsPara1 = document.createElement('p');
timingsPara1.textContent = 'Monday to Friday : 8:00 AM to 11:00 PM';

const timingsPara2 = document.createElement('p');
timingsPara2.textContent = 'Saturday & Sunday : 10:00 AM to 11:00 PM';

timings.appendChild(timingsHeading);
timings.appendChild(timingsPara1);
timings.appendChild(timingsPara2);


homeContainer.appendChild(info);
homeContainer.appendChild(slogan);
homeContainer.appendChild(timings);

const content = document.getElementById("content");
content.appendChild(homeContainer);
}

export default  homePage;