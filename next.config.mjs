/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'res.cloudinary.com','images.unsplash.com', 'via.placeholder.com' ],

      },

    // resolve error with cloudinary  
    webpack: (config) => {
    config.resolve = {
        ...config.resolve,
        fallback: {
        fs: false,
        },
    };
    return config;
    },  
    
};

export default nextConfig;
