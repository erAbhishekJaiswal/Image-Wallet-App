Commands for 
            Backend run: "npm start"
            Frontend run: "npm start"




For Cloudnery :


    Cloud name:- dm9g4lkx8
    API key:- 373849952831995
    API secret:-     BryqtzUoV2ALHFwhyPZk85ULzMo
    API environment variable:	
CLOUDINARY_URL=cloudinary://373849952831995:BryqtzUoV2ALHFwhyPZk85ULzMo@dm9g4lkx8




import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dm9g4lkx8', 
        api_key: '373849952831995', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();#   I m a g e W a l l e t A p p  
 #   I m a g e - W a l l e t - A p p  
 