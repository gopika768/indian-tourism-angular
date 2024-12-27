import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getstate(arg0: number): any {
    throw new Error('Method not implemented.');
  }
  states=[
    
    {
      "id": 1,
      "name": "Kerala",
      "description": "Kerala, known as 'God's Own Country,' is a serene southern Indian state renowned for its backwaters, lush greenery, vibrant culture, and Ayurvedic traditions.",
      "image": "https://static.toiimg.com/photo/63365869.cms"
    },
    {
      "id": 2,
      "name": "Gujarat",
      "description": "Gujarat, located on India's western coast, is known for its vibrant culture, historic landmarks, and the iconic Gir National Park, home to Asiatic lions.",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-pavagadh-temple-gujarat-state-hero2?qlt=82&ts=1726733709050"
    },
    {
      "id": 3,
      "name": "Rajasthan",
      "description": "Rajasthan, the 'Land of Kings,' boasts majestic forts, expansive deserts, and vibrant festivals, making it a cultural and historical treasure trove.",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-nawal-sagar-bundi-rajasthan.jpeg-city-hero?qlt=82&ts=1726660838573"
    },
    {
      "id": 4,
      "name": "Tamil Nadu",
      "description": "Tamil Nadu, a state rich in Dravidian heritage, is known for its ancient temples, classical music, and scenic hill stations like Ooty and Kodaikanal.",
      "image": "https://www.ghumindiaghum.com/images/Package/VkueHmtfDi/Tamil-Nadu-Mahabalipuram-1.jpg"
    },
    {
      "id": 5,
      "name": "Uttar Pradesh",
      "description": "Uttar Pradesh is home to iconic landmarks like the Taj Mahal, vibrant spiritual centers, and a rich Mughal and Vedic history.",
      "image": "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/380de002e625a6036e9876102c0d2a98.jpg"
    },
    {
      "id": 6,
      "name": "Maharashtra",
      "description": "Maharashtra is a diverse state blending modern cities like Mumbai with historical sites like Ajanta and Ellora caves and natural beauty like the Western Ghats.",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-gateway-of-india-state-hero?qlt=82&ts=1726670249199"
    },
    {
      "id": 7,
      "name": "Goa",
      "description": "Goa, India's smallest state, is famed for its golden beaches, vibrant nightlife, Portuguese heritage, and delicious seafood.",
      "image": "https://www.agoda.com/wp-content/uploads/2024/02/Beach-Goa-India-1244x700.jpg"
    },
    {
      "id": 8,
      "name": "West Bengal",
      "description": "West Bengal is a cultural hub known for its rich arts, literature, the Sundarbans mangroves, and the historic city of Kolkata.",
      "image": "https://desinomadz.com/home/wp-content/uploads/2022/04/WEST-BENGAL.jpg"
    },
    {
      "id": 9,
      "name": "Madhya Pradesh",
      "description": "Madhya Pradesh, the 'Heart of India,' is known for its wildlife sanctuaries, ancient temples, and UNESCO World Heritage sites like Khajuraho.",
      "image": "https://static.toiimg.com/thumb/111455904/madhya-pradesh.jpg?width=1200&height=900"
    },
    {
      "id": 10,
      "name": "Karnataka",
      "description": "Karnataka offers a mix of IT hubs, historic sites like Hampi, scenic hill stations, and coastal beauty along the Arabian Sea.",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/spirituality-murudeshwar-temple-gokarna1?qlt=82&ts=1726720935970"
    },
    {
      "id": 11,
      "name": "Bihar",
      "description": "Bihar is a state with a rich historical legacy, home to ancient Nalanda University, Bodh Gaya, and vibrant cultural traditions.",
      "image": "https://www.ibef.org/assets/images/states/bihar-2.jpg"
    },
    {
      "id": 12,
      "name": "Punjab",
      "description": "Punjab, known as the 'Land of Five Rivers,' is famous for its hearty cuisine, vibrant festivals, and the Golden Temple in Amritsar.",
      "image": "https://images.hindustantimes.com/rf/image_size_800x600/HT/p1/2014/09/11/Incoming/Pictures/1262913_Wallpaper2.jpg"
    },
    {
      "id": 13,
      "name": "Haryana",
      "description": "Haryana is an agricultural hub with a blend of modern infrastructure and historic sites like Kurukshetra, the Mahabharata's battlefield.",
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyDKkfKiBjQa8x4e9u7JWYN-2YUAWqcxCgwPZfG8PnMh6wSn60Y5mee63vWKemUC6zkX8plDxvefIaaZpU1Op4JUqeihqLu5szzaDxeYq69XJPLKK7OnG8UipVPY1r03qR0MugHc8o3lv2Vpa4ZmsiqsqKA7O3DofF7Sv3Su3tyj6Tv2KSNtvbkDG3neDW/s2500/Ghoomar%20Dance%20Haryana%20Lokrang%20Jaipur%20(7).jpg"
    },
    {
      "id": 14,
      "name": "Himachal Pradesh",
      "description": "Himachal Pradesh is a northern state famed for its hill stations, snowy landscapes, and adventure sports in the Himalayas.",
      "image": "https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg"
    },
    {
      "id": 15,
      "name": "Assam",
      "description": "Assam is renowned for its tea gardens, the Brahmaputra River, and wildlife sanctuaries like Kaziranga National Park.",
      "image": "https://static.toiimg.com/thumb/msid-93999231,width-748,height-499,resizemode=4,imgsize-236566/Discover-the-unique-heritage-of-Assam.jpg"
    },
    {
      "id": 16,
      "name": "Sikkim",
      "description": "Sikkim, nestled in the Himalayas, is known for its pristine landscapes, Buddhist monasteries, and the majestic Mount Kanchenjunga.",
      "image": "https://www.flamingotravels.co.in/blog/wp-content/uploads/2017/07/sikkim-tour.jpg"
    },
    {
      "id": 17,
      "name": "Meghalaya",
      "description": "Meghalaya, the 'Abode of Clouds,' is famous for its living root bridges, Cherrapunji's rainfall, and breathtaking natural beauty.",
      "image": "https://www.india.com/wp-content/uploads/2024/05/Cherrapunji-1.jpg"
    },
    {
      "id": 18,
      "name": "Nagaland",
      "description": "Nagaland is a culturally rich state known for its vibrant tribal festivals, scenic landscapes, and unique heritage.",
      "image": "https://asiangeo.com/wp-content/uploads/2022/07/tribes-morungs-04_highres1-scaled.jpg"
    },
    {
      "id": 19,
      "name": "Manipur",
      "description": "Manipur, the 'Jewel of India,' is known for its scenic beauty, classical dance forms, and the floating Loktak Lake.",
      "image": "https://www.iwgia.org/images/00_images_2021_onwards/article_images/India_Manipur_2023_1.jpeg"
    },
    {
      "id": 20,
      "name": "Tripura",
      "description": "Tripura is a culturally diverse state with historical landmarks like Ujjayanta Palace and natural beauty like Dumboor Lake.",
      "image": "https://tripuratourism.gov.in/assets/images/aboutTripura/mythology2.jpg"
    },
    {
      "id": 21,
      "name": "Arunachal Pradesh",
      "description": "Arunachal Pradesh, the 'Land of Dawn-Lit Mountains,' is known for its scenic beauty, monasteries, and vibrant tribal culture.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/5/51/Golden_Pagoda_Namsai_Arunachal_Pradesh.jpg"
    },
    {
      "id": 22,
      "name": "Jharkhand",
      "description": "Jharkhand is known for its rich mineral resources, waterfalls, and scenic attractions like Netarhat and Betla National Park.",
      "image": "https://tourism.jharkhand.gov.in/app-assets/image/History1.jpg"
    },
    {
      "id": 23,
      "name": "Chhattisgarh",
      "description": "Chhattisgarh is famous for its tribal culture, dense forests, and natural attractions like Chitrakote Falls, India's Niagara.",
      "image": "https://indiatravel.com/wp-content/uploads/2022/03/Chhattisgarh-slider-imgggg-2.jpg"
    },
    {
      "id": 24,
      "name": "Odisha",
      "description": "Odisha is known for its ancient temples like Konark Sun Temple, pristine beaches, and vibrant festivals like Rath Yatra.",
      "image": "https://www.arteastic.in/blog/wp-content/uploads/2022/05/Odisha-Temples-1024x625.jpg"
    },
    {
      "id": 25,
      "name": "Telangana",
      "description": "Telangana, India's youngest state, is known for its rich heritage, historical sites like Charminar, and vibrant festivals.",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/art-odissi-hyderabad-telangana-1-1?qlt=82&ts=1726653542122"
    },
    {
      "id": 26,
      "name": "Andhra Pradesh",
      "description": "Andhra Pradesh is famous for its rich cultural history, Tirupati temple, and stunning coastal landscapes along the Bay of Bengal.",
      "image": "https://static.toiimg.com/photo/110635159.cms"
    },
    {
      "id": 27,
      "name": "Uttarakhand",
      "description": "Uttarakhand, the 'Land of Gods,' is known for its spiritual centers, majestic Himalayas, and serene hill stations like Mussoorie and Nainital.",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/badrinath-temple-uttarakhand-state-hero?qlt=82&ts=1726647031134"
    },
    {
      "id": 28,
      "name": "Mizoram",
      "description": "Mizoram, the 'Land of Blue Mountains,' is known for its picturesque landscapes, rich tribal culture, and bamboo dance traditions.",
      "image": "https://www.crazyriders.in/docs/Destination-AWCQO.jpg"
    }
  ]
  
  


  constructor() { }
  getstates(){
    return this.states;
  }
  getStateById(id:any)
  {
    return this.states.find(state => state.id == id);
  }
}
