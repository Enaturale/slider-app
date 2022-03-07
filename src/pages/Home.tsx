import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonButton, IonCard, IonCardContent, IonCardTitle, IonNote, IonLabel } from '@ionic/react';
import './Home.css';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from "swiper";


const Home: React.FC = () => {  
  const swiper = useSwiper();
  //array for data to be used
  const data =[
    {
      title: "Goals",
      subTitle: "Setting Goals for Productivity",
      image: "/assets/images/goals.jpg"
    },
    {
      title: "Alarms",
      subTitle: "Get up. Do it NOW!",
      image:"/assets/images/alarms.jpg"
    },
    {
      title: "Reminders",
      subTitle: "Productivity at its peak.",
      image: "/assets/images/reminders.jpg"
    }
  ]
  return (
    <IonContent scrollX>
      <Swiper       
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        spaceBetween={100}
        slidesPerView={1}
        navigation={true} modules={[Navigation]}
      >
          {data.map((card, index) => {
           return(
             <SwiperSlide key={`slide_${index}`}>
               <div className='mainContainer'>
              
                 <img src={card.image} alt="Goals" className='image' />

                 <div className='innerContainer'>
                   <IonLabel className='title'>{card.title}</IonLabel>
                   <IonLabel className='subtitle'>{card.subTitle}</IonLabel> 
                 </div>      
              </div>
             </SwiperSlide>
           )
         })}

         <SwiperSlide>
           <IonButton routerLink="/welcome">Get STARTED</IonButton>
         </SwiperSlide>



      </Swiper>
      
         {/* {data.map((card, index) => {
           return(
             <SwiperSlide key={`slide_${index}`}>
               <IonCard>
                 <img src={card.image} alt="Goals" className='image' />
                 <IonCardContent>
                   <IonCardTitle className='title'>{card.title}</IonCardTitle>
                   <IonNote className='subtitle'>{card.subTitle}</IonNote>
                 </IonCardContent>
               </IonCard>
             </SwiperSlide>
           )
         })}      */}

      
        
      
        
      
      
    </IonContent>
  );
};

export default Home;
