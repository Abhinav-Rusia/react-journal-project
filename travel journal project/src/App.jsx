import "./App.css";
import Header from "./header";
import Entry from "./Entry";
import Rajasthan from "./assets/rajasthan.jpg";
import Auli from "./assets/auli.jpg";
import Rohtang from "./assets/rohtang.jpg";

function App() {
  return (
    <>
      <Header />
      <Entry
        img={{ src: Rajasthan, alt: "Lake-Pichola" }}
        place="UDAIPUR"
        map="https://maps.app.goo.gl/SorjKh9XxfgF3wTU6"
        location="Lake Pichola"
        date="31 Aug,2019 - 5 sep,2019"
        details="Lake Pichola is a man-made freshwater lake in Udaipur, Rajasthan,
      India.It is one of Udaipur's oldest and largest lakes Created in
      1362 by Maharana Lakha Singh of the Mewar dynasty to provide water
      for the city and protect it from invaders."
      />

      <Entry
        img={{ src: Auli, alt: "Auli,Uttrakahnd" }}
        place="UTTRAKHAND"
        map="https://maps.app.goo.gl/snbZ2kCQfF8HFDf9A"
        location="Auli"
        date="30 Aug,2022 - 8 sep,2022"
        details="Auli is in the Chamoli district of Uttarakhand, at an elevation of 2,800 meters (9,200 ft) above sea level.It is known for its ski resorts and natural beauty. The ski season runs from late November to March.Auli is connected to Joshimath by Asia's second highest and longest cable car, which spans 4 km and takes about 24 minutes."
      />
      <Entry
        img={{ src: Rohtang, alt: "Rohtang-pass" }}
        place="HIMANCHAL PRADESH"
        map="https://maps.app.goo.gl/xbhBwnrLvTopA6d46"
        location="Rohtang Pass"
        date="26 May,2024 - 3 june,2024"
        details="Rohtang Pass is a high mountain pass in the Himalayas, located in the eastern Pir Panjal Range of Himachal Pradesh, India. It's about 51 kilometers (32 miles) from Manali.Rohtang Pass is a high mountain pass in the Himalayas, located in the eastern Pir Panjal Range of Himachal Pradesh, India. It's about 51 kilometers (32 miles) from Manali.  "
      />
    </>
  );
}

export default App;
