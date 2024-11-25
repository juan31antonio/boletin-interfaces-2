'use client'

import StudentList from "./StudentList";
import LimitedCounter from "./LimitedCounter";
import AverageCalculator from "./AverageCalculator";
import SurveySimulator from "./SurveySimulator";
import ShoppingList from "./ShoppingList";
import LoginForm from "./LoginForm";
import ImageGallery from "./ImageGallery";
import MultiCounter from "./MultiCounter"
import UserTable from "./UserTable";
import GuessTheNumber from "./GuessTheNumber";
import TimerCounter from "./TimerCounter";
import ThemeSelector from "./ThemeSelector";
import LiveValidationForm from "./LiveValidationForm";
import SurveySimulator2 from "./SurveySimulator2";
import TextCarousel from "./TextCarousel";

export default function Home() {


  const imageList = [
    { src: 'https://picsum.photos/200/300?random=1', alt: 'Imagen 1' },
    { src: 'https://picsum.photos/200/300?random=2', alt: 'Imagen 2' },
    { src: 'https://picsum.photos/200/300?random=3', alt: 'Imagen 3' }
  ];
  const frases = [
    { frase:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { frase:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa' },
    { frase:'quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit' }
  ];

  return (
    <div>
      <StudentList/>
      <br/>
      ------------------------------------------------
      <br/>
      <br/>
      <LimitedCounter/>
      <br/>
      ------------------------------------------------
      <br/>
      <br/>
      <AverageCalculator/>
      ------------------------------------------------
      <br/>
      <br/>
      <SurveySimulator/>
      ------------------------------------------------
      <br/>
      <br/>
      <ShoppingList></ShoppingList>
      ------------------------------------------------
      <br/>
      <br/>
      <LoginForm></LoginForm>
      ------------------------------------------------
      <br/>
      <br/>
      <ImageGallery imagenes={imageList}></ImageGallery>
      ------------------------------------------------
      <br/>
      <br/>
      <MultiCounter></MultiCounter>
      ------------------------------------------------
      <br/>
      <br/>
      <UserTable></UserTable>
      ------------------------------------------------
      <br/>
      <br/>
      <GuessTheNumber></GuessTheNumber>
      ------------------------------------------------
      <br/>
      <br/>
      <ThemeSelector></ThemeSelector>
      ------------------------------------------------
      <br/>
      <br/>
      <LiveValidationForm></LiveValidationForm>
      ------------------------------------------------
      <br/>
      <br/>
      <SurveySimulator2></SurveySimulator2>
      ------------------------------------------------
      <br/>
      <br/>
      <TextCarousel frases={frases}></TextCarousel>
    </div>
  );
}
