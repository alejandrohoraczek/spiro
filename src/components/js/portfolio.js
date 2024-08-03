const images = [
    { src: '1.jpg', thumb: '1.jpg', alt: 'Descripción de imagen 1' },
    { src: '2.jpg', thumb: '2.jpg', alt: 'Descripción de imagen 2' },
    { src: '3.jpg', thumb: '3.jpg', alt: 'Descripción de imagen 3' },
    { src: '4.jpg', thumb: '4.jpg', alt: 'Descripción de imagen 4' },
    { src: '5.jpg', thumb: '5.jpg', alt: 'Descripción de imagen 5' },
    { src: '6.jpg', thumb: '6.jpg', alt: 'Descripción de imagen 6' },
    { src: '7.jpg', thumb: '7.jpg', alt: 'Descripción de imagen 7' },
    { src: '8.jpg', thumb: '8.jpg', alt: 'Descripción de imagen 8' },
    { src: '9.jpg', thumb: '9.jpg', alt: 'Descripción de imagen 9' },
    { src: '10.jpg', thumb: '10.jpg', alt: 'Descripción de imagen 10' },
    { src: '11.jpg', thumb: '11.jpg', alt: 'Descripción de imagen 11' },
    { src: '12.jpg', thumb: '12.jpg', alt: 'Descripción de imagen 12' },
];

const basePath = '/public/images/office/';

export const set1 = images.slice(0, 4).map(img => ({
    src: `${basePath}${img.src}`,
    thumb: `${basePath}${img.thumb}`,
    alt: img.alt
}));

export const set2 = images.slice(4, 8).map(img => ({
    src: `${basePath}${img.src}`,
    thumb: `${basePath}${img.thumb}`,
    alt: img.alt
}));

export const set3 = images.slice(8, 12).map(img => ({
    src: `${basePath}${img.src}`,
    thumb: `${basePath}${img.thumb}`,
    alt: img.alt
}));