import breakfastImage1 from '../src/images/breakFast-image1.webp';
import breakfastImage2 from '../src/images/breakFast-image2.webp';
import breakfastImage3 from '../src/images/breakFast-image3.webp';
import breakfastImage4 from '../src/images/breakFast-image4.webp';
import breakfastImage5 from '../src/images/breakFast-image5.webp';
import breakfastImage6 from '../src/images/breakFast-image6.webp';

import appetizersImage1 from '../src/images/appetizers-image1.webp';
import appetizersImage2 from '../src/images/appetizers-image2.webp';
import appetizersImage3 from '../src/images/appetizers-image3.webp';
import appetizersImage4 from '../src/images/appetizers-image4.webp';
import appetizersImage5 from '../src/images/appetizers-image5.webp';
import appetizersImage6 from '../src/images/appetizers-image6.webp';


import mainCourseImage1 from '../src/images/mainCourse-image1.jpg';
import mainCourseImage2 from '../src/images/mainCourse-image2.jpg';
import mainCourseImage3 from '../src/images/mainCourse-image3.jpg';
import mainCourseImage4 from '../src/images/mainCourse-image4.jpg';
import mainCourseImage5 from '../src/images/mainCourse-image5.jpg';
import mainCourseImage6 from '../src/images/mainCourse-image6.jpg';

import beveragesImage1 from '../src/images/beverages-image1.jpeg';
import beveragesImage2 from '../src/images/beverages-image2.jpeg';
import beveragesImage3 from '../src/images/beverages-image3.webp';
import beveragesImage4 from '../src/images/beverages-image4.webp';
import beveragesImage5 from '../src/images/beverages-image5.jpeg';
import beveragesImage6 from '../src/images/beverages-image6.jpeg';

import dessertsImage1 from '../src/images/desserts-image1.webp';
import dessertsImage2 from '../src/images/desserts-image2.webp';
import dessertsImage3 from '../src/images/desserts-image3.webp';
import dessertsImage4 from '../src/images/desserts-image4.webp';
import dessertsImage5 from '../src/images/desserts-image5.webp';
import dessertsImage6 from '../src/images/desserts-image6.webp';


const menuPage = () => {
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menuContainer");
    menuContainer.setAttribute('class','page');

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Our Menu...';

    const menuBox = document.createElement('div');
    menuBox.setAttribute('id','menuBox');

    const categories = [
        {
            title: 'Breakfast',
            items: [
                { src: breakfastImage1, name: "Chocolate Chip Pancakes - 10$" },
                { src: breakfastImage2, name: "Waffles - 10$" },
                { src: breakfastImage3, name: "Grilled Cheese Sandwich - 10$" },
                { src: breakfastImage4, name: "Fruit Salad - 10$" },
                { src: breakfastImage5, name: "Breakfast Burritos - 10$" },
                { src: breakfastImage6, name: "Cream Cheese Croissants - 10$" }
            ]
        },
        {
            title: 'Appetizers and Snacks',
            items: [
                { src: appetizersImage1, name: "Buffalo Chicken Pizza Rolls - 10$" },
                { src: appetizersImage2, name: "Eggrolls - 10$" },
                { src: appetizersImage3, name: "Spring Rolls - 10$" },
                { src: appetizersImage4, name: "Cheesy Garlic Bread - 10$" },
                { src: appetizersImage5, name: "Chicken Wings - 10$" },
                { src: appetizersImage6, name: "Grilled Chicken Marinade - 10$" }
            ]
        },
        {
            title: 'Main Courses',
            items: [
                { src: mainCourseImage1 , name: "Tuscan Chicken Mac and Cheese - 10$" },
                { src: mainCourseImage2 , name: "Kimchi Noodles - 10$" },
                { src: mainCourseImage3 , name: "Chicken Fried Rice - 10$" },
                { src: mainCourseImage4 , name: "Honey Garlic Meatballs - 10$" },
                { src: mainCourseImage5 , name: "Sweet and Sour Vegetables - 10$" },
                { src: mainCourseImage6 , name: "Paneer Kathi Roll - 10$" }
            ]
        },
        {
            title: 'Beverages',
            items: [
                { src: beveragesImage1 , name: "Coffee - 10$" },
                { src: beveragesImage2 , name: "Tea - 10$" },
                { src: beveragesImage3 , name: "Mojitos - 10$" },
                { src: beveragesImage4 , name: "Smoothies - 10$" },
                { src: beveragesImage5 , name: "Juices - 10$" },
                { src: beveragesImage6 , name: "Cocktails and Mocktails - 10$" }
            ]
        },
        {
            title: 'Desserts',
            items: [
                { src: dessertsImage1 , name: "Ice Creams - 10$" },
                { src: dessertsImage2 , name: "Cakes - 10$" },
                { src: dessertsImage3 , name: "Brownies - 10$" },
                { src: dessertsImage4 , name: "Kheer - 10$" },
                { src: dessertsImage5 , name: "Cookies - 10$" },
                { src: dessertsImage6 , name: "Puddings - 10$" }
            ]
        }
    ];

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.setAttribute('id', category.title.toLowerCase().replace(/\s+/g, ''));
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.title;
        
        const categoryItems = document.createElement('div');
        categoryItems.setAttribute('id', `${category.title.toLowerCase().replace(/\s+/g, '')}Items`);
        
        category.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.setAttribute('class', 'item');
            
            const itemImg = document.createElement('img');
            itemImg.src = item.src;
            
            const itemName = document.createElement('p');
            itemName.textContent = item.name;
            
            itemDiv.appendChild(itemImg);
            itemDiv.appendChild(itemName);
            
            categoryItems.appendChild(itemDiv);
        });
        
        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(categoryItems);
        
        menuBox.appendChild(categoryDiv);
    });

    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(menuBox);

    const content = document.getElementById("content");
    content.appendChild(menuContainer);
};

export default menuPage;
