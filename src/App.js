import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cevap, setCevap] = useState(null);

  const mesajlar = [
    "Kesinlikle",
    "Kesinlikle öyle",
    "Kuşkusuz",
    "Evet - elbette",
    "Bana güvenebilirsin",
    "Gördüğüm kadarıyla, evet",
    "Çoğunlukla",
    "Dışarıdan iyi görünüyor",
    "Evet",
    "Belirtiler olduğu yönünde",
    "Biraz belirsiz, tekrar dene",
    "Sonra tekrar dene",
    "Şimdi söylemesem daha iyi",
    "Şimdi kehanette bulunamam",
    "Konsantre ol ve tekrar sor",
    "Bana öyle bakma",
    "Yanıtım hayır",
    "Kaynaklarım hayır diyor",
    "Pek iyi görünmüyor",
    "Çok şüpheli"
  ];

  function cevapVer() {
    const sayi = Math.floor(Math.random() * 20);
    setCevap(mesajlar[sayi]);
  }

  return (
    <div className="App">
      <h1 className="ortala" contentEditable>
        Sence yazılım seçmelimiyim ?
      </h1>
      <div className="container ortala">
        <div className="buyuk_top ortala" onClick={cevapVer}>
          <div className="kucuk_top ortala">
            {cevap ? <div>{cevap}</div> : <div className="sekiz">8</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
