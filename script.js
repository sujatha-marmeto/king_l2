const products = [
    {
        "title": "Exquisite Watches",
        "subtitle": "Gold Luxury, Choose Us",
        "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship.",
        "price": "$499.00",
        "image": "https://s3-alpha-sig.figma.com/img/2ad3/d5c1/bc7c8b7d2ade47a27798d58559b94505?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TQ-JeuAzyxA5JaCfhrMTTKqI642qXfa6gVt1NyMNnmA85koWFnu4H6KkoPGKBrai89-OUKx9RtPb4skTGLi6y65orIJEMZmg1uokl8gK4-0yMrz5MUyKak133lWmduz5UxjYKVjZ5i3L3QdBAEsVDEemrKIllOFWDY-ru2OEKyusvWcF~6SRL5vE7MnP3rlRsfGeRFjJec2vEQPNbpeH4nL1RUoJRjsyKF4dpqaDe1fUnrXy0zaJ86I2Fov8KsnPlm63iHMZNAJlyZ4IXtJQogeycKRvAjJpV2m5KGSW6OPmdHeXvfB0XIXakhNRsog1jqU5WQzoIy-oNdw-M0VzAw__",
        "ambientColor": "#F5CBA7"
    },
    {
        "title": "Dainty Timepieces",
        "subtitle": "Silver Luxury, Choose Us",
        "description": "Explore the Best Timepieces for the Sophisticated and Modern Individual, Combining Style and Functionality in Every Detail.",
        "price": "$469.00",
        "image": "https://s3-alpha-sig.figma.com/img/9b03/5859/b3cd59b6e82967a441a89bdb7f113601?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTaW3hezHED3cKrQfIF2~eNDQ4gaZVUaubb3kem6gpzO4DtXCr22rEo3Gooeyw8YF4Yq5uhOl~mBnjH222rnPmBXnL9D4G8Gqwxs2Sk~ygbF1i614~nZpf51Q38Mx8JtULZIWP96kbY84FzLP7QeaYaMzfc33w-8HDBr8YNe7RxktDpfXyNqBJOF-67Ulz-1io-wr5d-jweV-pDKP3vh9kYx8W5XC~h65ScjkUnfPhzWAaS7GKv5wsUQ-~NEI0XFGdyiRewribgJwyd4YvJye7RJ1HdBuSQ1DRJl3sKvFiS03amV-7Y9qDxi9qlgh-z3Sqhl0SRAacEgwgTRGxfYvA__",
        "ambientColor": "#D5DBDB"
    },
    {
        "title": "Elegant Timepieces",
        "subtitle": "Choose Luxury, Choose Us",
        "description": "Indulge in the Finest Watch for Every Occasion and Elevate Your Style with Unmatched Elegance.",
        "price": "$529.00",
        "image": "https://s3-alpha-sig.figma.com/img/1155/92de/a1e0499b541d8505e2a8b346af7f884f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dU9h6mKMeLyV6BhukaJ93ZNFihotK9ubtlVM8nFMKMbb1SY9iqaEvuGrDl1gLYffu9-JzWqcZoD9VVn7ghZ4mXkFiLAHuQKSvSlesnDk-zVrn8GPpEB2AfH9FKEDjiiSjHNjPCKRyJ4uhdcUJ9wldnuPjqQOcgF4ZCzzSDb4Xsm6uKapW~qImwpg1i3fvl2rmIWZhF-6h0d9jFU75os9yhChHViSpyxzGiVEO7EkClz3WIvinMl2KeHue9fojN7xaGLuv-aixsALETYM3WF0MsK~v1RrCVNeHXEluh6PVfOLG2cwiN-kJVQ4EQnB3IBW7ZsuJ~LTpMYFyY4AfH8L9A__",
        "ambientColor": "#A3E4D7"
    },
    {
        "title": "Refined Timepieces",
        "subtitle": "Choose Us for Elegance",
        "description": "Explore the Latest Watches with a Perfect Blend of Style, Functionality, and Sophistication.",
        "price": "$599.00",
        "image": "https://s3-alpha-sig.figma.com/img/c62f/050a/5112960cf7b3fd65ba1ed29d826e710a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KKoREp5Pn6usjBTMN3VtFc5ILovMh1MyUHBPvAz3GeVXJDTOLBjXmZGgFd1uedyHR2szBHbc81eM3FcIoG8QAsjuJVriPu5Rs0H4ACUpKFsTeknpRV4-SGx4ND5G07cpcQaWLi~YktvSAdc0WvYUIZyFhPrp0sw8r77ArIhO5K1x-vOK2lSIRx9x3O208HPB-26V9PTudWLjv4Ggy7L9jDY0Msjlu07J2mHp4Rj6lPrUAaOf401Tp5OsG~NAYBfWbZdXwk~s1gtBusmc5Ie46QQV15c2hnTRQV7cJ3Sp7Ts33eYG7Um0wAnz47G1UrIUN~Oc~-NdIit-mdhWqjkLPg__",
        "ambientColor": "#FADBD8"
    }
];

// Function to generate HTML for each slide
function generateSlide(product) {
    return `
        <li class="splide__slide flex items-center">
            <div class="flex w-full md:w-1/2 p-8" style="background-color: ${product.ambientColor};">
                <div class="text-left flex flex-col justify-center w-full">
                    <h2 class="text-2xl md:text-4xl font-bold text-amber-50">${product.title}</h2>
                    <p class=" md:text-xl  text-5xl mt-2 text-black">${product.subtitle}</p>
                    <p class="mt-4 text-black">${product.description}</p>
                    <p class="mt-4 text-xl md:text-3xl font-semibold text-amber-50">${product.price}</p>
                </div>
            
            <div class="w-full md:w-1/2 flex justify-center">
                <img src="${product.image}" alt="${product.title}" class="max-w-full h-auto">
            </div>
            </div>
        </li>
    `;
}



function updateHeaderColor(color) {
    const headerNav = document.querySelector('.header-nav');
    if (headerNav) {
        headerNav.style.backgroundColor = color;
    }
}

function loadProducts() {
    const splideList = document.querySelector('.splide__list');
    products.forEach(product => {
        splideList.innerHTML += generateSlide(product);
    });

    // Initialize Splide and assign to the splide variable
    splide = new Splide('.splide', {
        perPage: 1,
        autoplay: true,
    }).mount();

    splide.on('moved', (newIndex) => {
        const ambientColor = products[newIndex].ambientColor;
        updateHeaderColor(ambientColor);
    });

    // Initialize header color on the first load
    updateHeaderColor(products[0].ambientColor);
}

// Load products on page load
window.onload = loadProducts;