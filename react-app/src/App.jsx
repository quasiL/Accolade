import './index.css'
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Card from "./components/Card.jsx";

function App() {

  const scrollToSection = () => {
    const targetSection = document.getElementById('target-section'); // Replace with the actual id of the target section
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <section>
        <About scrollToSection={scrollToSection}/>
      </section>
      <section id="target-section" className="grid grid-cols-2 gap-x-8 gap-y-8 mx-52 mt-32 mb-60">
        <Card number="1" title="NA DOBRY POCZĄTEK"
              text="Dostarczona roślina została posadzona w świeżej ziemi. Zaleca
              się niepodlewanie rośliny przez najbliższy tydzień- licząc od dnia dostawy."
              popup={false}
        />
        <Card number="2" title="ADAPTACJA"
              text="Adaptacja kwiatów wymaga czasu. Może ona trwać do ok. 6 tygodni liczą od dnia ustawienia kwiatów
              w danym pomieszczeniu. Mogą zżółknąć końcówki liści lub cała łodyga. Należy usunąć obumarłą część
              rośliny, usunięcie zmobilizuje je do wypuszczenia nowych."
              popup={false}
        />
        <Card number="3" title="STANOWISKO"
              text="Jasne z dużą ilością rozproszonego słońca. Należy unikać mocnego palącego słońca. Nie lubi
              temperatur niższych niż 18°C. Najlepiej zapewnić jej temperaturę między 20-25°C."
              popup={false}
        />
        <Card number="4" title="PODLEWANIE"
              text="Wodę wlewamy naokoło donicy, najlepiej nie bezpośrednio do rośliny. Donica o średnicy 21cm -
              podlewamy raz na tydzień 0,5-0,7 szklanki wody.Każdorazowo przed podlaniem proszę sprawdzać
              wilgotność ziemi i na podstawie tej informacji zadecydować czy podlać kwiatka mniej czy bardziej."
              popup={false}
        />
        <Card number="5" title="ZIEMIA NIE MOŻE BYĆ MOKRA W DOTYKU"
              text="Wierzchnia warstwa ziemi może być sucha np. od klimatyzacji, co nie oznacza, że korzenie też
              mają sucho (metoda domową: można to sprawdzić wkładając palce do doniczki – sprawdzamy wówczas czy
              głębiej w doniczce też jest sucho)."
              popup={true}
        />
        <Card number="6" title="ZIEMIA TEŻ NIE MOŻE BYĆ ZA SUCHA"
              text="Ziemia też nie może być za sucha, gdy ziemia odchodzi od donicy to oznacza, że kwiat jest
              przesuszony. Wówczas, aby nawodnić roślinę dolewamy wodę stopniowo i powoli. Dobrze też jest wzruszyć
              wierzchnią warstwę ziemi, tak aby była spulchniona, wówczas roślina lepiej wchłania wodę."
              popup={true}
        />
      </section>
    </>
  );
}

export default App;
