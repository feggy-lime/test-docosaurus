import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mudah Digunakan',
    description: (
      <>
        Docusaurus dirancang untuk mudah diinstal dan digunakan untuk membuat
        website dokumentasi dengan cepat.
      </>
    ),
  },
  {
    title: 'Fokus pada Konten',
    description: (
      <>
        Docusaurus memungkinkan Anda fokus pada dokumentasi, dan kami akan mengurus
        infrastruktur. Cukup pindahkan dokumen ke direktori <code>docs</code>.
      </>
    ),
  },
  {
    title: 'Powered by React',
    description: (
      <>
        Extend atau customize layout website Anda dengan menggunakan React.
        Docusaurus dapat diperluas sambil menggunakan kembali komponen yang sama.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}