import styles from "./css/intro.module.css";

export default function GradientIntroDiv() {
  return (
    <div className={styles.gradientDiv}>
      <div className={styles.leftDiv}>
        <h1 style={{ fontWeight: "normal" }}>
          <b>HEIDEL</b>BERG <b>TRIATHLON</b>
        </h1>
        <p style={{ fontSize: "medium" }}>
          Herzlich willkommen beim <b>Heidelberg Triathlon by Aėra</b>, dem
          wahrscheinlich schönsten und anspruchsvollsten{" "}
          <b>City-Triathlon über die Olympische Distanz</b>. Der Wettkampf wird
          vom <b>SV Nikar Heidelberg e.V.</b>
          ausgerichtet und organisiert steht seit vielen Jahren für sportliche
          Qualität, Leidenschaft und professionelle Durchführung. <br></br>
          Heidelberg, die Stadt zwischen Tradition und Moderne, bildet die
          eindrucksvolle Kulisse dieses besonderen Triathlon-Festivals. Jahr für
          Jahr bringt Heidelberg hier Freizeitsportler, ambitionierte Athleten
          und internationale Spitzenstarter zusammen und schafft ein Event, das
          sportlichen Anspruch und einzigartige Atmosphäre verbindet. <br></br>
          Die anspruchsvolle Strecke des Heidelberg Triathlons führt die
          Athleten durch <b>1.600 m Schwimmen</b> im malerischen Neckar,{" "}
          <b>36 km Rennradfahren</b> vorbei an begeisterten Zuschauern entlang
          des Neckars, durch die charmante Altstadt, hinauf zum majestätischen
          Königstuhl und schließlich <b>10 km Laufen</b> am Philosophenweg mit
          einem atemberaubenden Blick auf Heidelberg. <br></br>
          Mit viel ehrenamtlichem Engagement, organisatorischer Erfahrung und
          sportlicher Expertise schafft der SV Nikar jedes Jahr aufs Neue einen
          Triathlon, der Athletinnen und Athleten gleichermaßen fordert und
          begeistert. Dies macht den Heidelberg Triathlon zu einem
          unvergesslichen Erlebnis in einer der schönsten Städte Deutschlands.
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
