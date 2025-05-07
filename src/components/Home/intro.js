import styles from "./css/intro.module.css";

export default function GradientIntroDiv() {
  return (
    <div className={styles.gradientDiv}>
      <div className={styles.leftDiv}>
        <h1 style={{ fontWeight: "normal" }}>
          <b>HEIDEL</b>BERG <b>TRIATHLON</b>
        </h1>
        <p style={{ fontSize: "medium" }}>
          Herzlich willkommen beim Heidelberg Triathlon, dem vielleicht
          schönsten und anspruchsvollsten City-Triathlon über die Olympische
          Distanz. <br></br>
          Heidelberg, eine Stadt zwischen Tradition und Moderne, ist der stolze
          Gastgeber dieses Triathlon-Festivals, bei dem sowohl Freizeitsportler
          als auch Weltklasseathleten zu einem packenden Wettkampf
          zusammenkommen. <br></br>
          Die anspruchsvolle Strecke des Heidelberg Triathlon führt die Athleten
          durch 1.600 m Schwimmen im malerischen Neckar, 36 km Rennradfahren
          vorbei an begeisterten Zuschauern entlang des Neckars, durch die
          charmante Altstadt, hinauf zum majestätischen Königstuhl und
          schließlich 10 km Laufen am Philosophenweg mit einem atemberaubenden
          Blick auf Heidelberg. <br></br>
          Der Heidelberg Triathlon stellt die Teilnehmer*innen vor
          herausfordernde Aufgaben und verspricht ein unvergessliches Erlebnis
          inmitten dieser einzigartigen Kulisse.
        </p>
      </div>
      <div className={styles.rightDiv}>
        <h1>WETTBEWERBE</h1>
        <br></br>
        <h2 style={{ fontWeight: "normal" }}>Olympische Distanz</h2>
        <h2 style={{ fontWeight: "normal" }}>Staffel</h2>
        <h2 style={{ fontWeight: "normal" }}>Nikar4Kids Kinder-Lauf</h2>
      </div>
    </div>
  );
}
