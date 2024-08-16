const products = [
    {
        "title": "Exquisite Watches",
        "subtitle": "Gold Luxury, Choose Us",
        "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship.",
        "price": "$499.00",
        "image": "https://week2-l2-soln.vercel.app/images/watch1.png",
        "ambientColor": "#F5CBA7"
    },
    {
        "title": "Dainty Timepieces",
        "subtitle": "Silver Luxury, Choose Us",
        "description": "Explore the Best Timepieces for the Sophisticated and Modern Individual, Combining Style and Functionality in Every Detail.",
        "price": "$469.00",
        "image": "https://week2-l2-soln.vercel.app/images/watch2.png",
        "ambientColor": "#D5DBDB"
    },
    {
        "title": "Elegant Timepieces",
        "subtitle": "Choose Luxury, Choose Us",
        "description": "Indulge in the Finest Watch for Every Occasion and Elevate Your Style with Unmatched Elegance.",
        "price": "$529.00",
        "image": "https://week2-l2-soln.vercel.app/images/watch3.png",
        "ambientColor": "#A3E4D7"
    },
    {
        "title": "Refined Timepieces",
        "subtitle": "Elegance, choose Us",
        "description": "Explore the Latest Watches with a Perfect Blend of Style, Functionality, and Sophistication.",
        "price": "$599.00",
        "image": "https://week2-l2-soln.vercel.app/images/watch4.png",
        "ambientColor": "#FADBD8"
    }
];


// Function to generate HTML for each slide
function generateSlide(product) {
    return `
        <li class="splide__slide flex items-center">
            <div class="flex w-full md:w-1/2 p-8" style="background-color: ${product.ambientColor};">
                <div class="text-left  gap-3 flex flex-col justify-center w-full">
                    <h2 class="text-2xl md:text-5xl text-white font-bold text-amber-50">${product.title}</h2>
                    <p class="md:text-2xl font-bold text-5xl mt-2 text-black">${product.subtitle}</p>
                    <p class="mt-4 text-black">${product.description}</p>
                    <p class="mt-4 text-xl md:text-4xl text-white font-semibold text-amber-50">${product.price}</p>
                    <!-- Social media icons for each slide -->
                    <div class="flex space-x-8 mt-4">
                        <a href="https://facebook.com" target="_blank" class="social-icon facebook flex items-center justify-center w-8 h-8 rounded-full border border-white p-2"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" target="_blank" class="social-icon twitter"><i class="fab fa-twitter flex items-center justify-center w-8 h-8 rounded-full border border-white p-2"></i></a>
                        <a href="https://youtube.com" target="_blank" class="social-icon youtube"><i class="fab fa-youtube flex items-center justify-center w-8 h-8 rounded-full border border-white p-2"></i></a>
                    </div>
                </div>
            
                <div class="w-full md:w-1/2 flex justify-center">
                    <img src="${product.image}" alt="${product.title}" class="max-w-full h-auto product-image">
                </div>
            </div>
        </li>
    `;
}

// Function to update header background color based on the ambient color of the slide
function updateHeaderColor(color) {
    const headerNav = document.querySelector('.header-nav');
    if (headerNav) {
        headerNav.style.backgroundColor = color;
    }
}

// Function to update the content when the slide changes
function updateContent(index) {
    const product = products[index];
    const slide = document.querySelector('.splide__slide.is-active');

    if (slide) {
        const title = slide.querySelector('h2');
        const subtitle = slide.querySelector('p.font-bold');
        const description = slide.querySelector('p.mt-4:not(.text-xl)');
        const price = slide.querySelector('p.text-xl');

        title.textContent = product.title;
        subtitle.textContent = product.subtitle;
        description.textContent = product.description;
        price.textContent = product.price;

        updateHeaderColor(product.ambientColor);
    }
}

// Initialize Splide slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = new Splide('.splide', {
        type: 'fade',
        perPage: 1,
        autoplay: true,
        interval: 3000,
        pagination: false, 
        arrows: true,
        classes: {
            arrows: 'splide__arrows custom-arrows', // Add custom class for arrows
            arrow: 'splide__arrow custom-arrow', // Add custom class for each arrow
            prev: 'splide__arrow--prev custom-prev', // Add custom class for previous arrow
            next: 'splide__arrow--next custom-next', // Add custom class for next arrow
        }
    }).mount();

    // Listen for slide change event
    slider.on('active', function (slide) {
        updateContent(slide.index);
    });

    // Populate slides
    const splideList = document.querySelector('.splide__list');
    products.forEach((product) => {
        splideList.innerHTML += generateSlide(product);
    });

    slider.refresh(); 

    document.getElementById('menu-toggle').addEventListener('click', function() {
        var menu = document.getElementById('nav-menu');
        menu.classList.toggle('active');
    });
});