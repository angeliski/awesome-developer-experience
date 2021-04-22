import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

import Translate, {translate} from '@docusaurus/Translate';


const FeatureList = [
  {
    title: translate({message: 'Easy to Use'}),
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate>Find all content about Developer Experience in one place</Translate>
      </>
    ),
  },
  {
    title: translate({message: 'Learn and Share'}),
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate>You can learn more and share with your friends</Translate>
      </>
    ),
  },
  {
    title: translate({message: 'Powered by Community'}),
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate
          id="homepage.poweredCommunity"
          values={{PR: <Link to="https://github.com/angeliski/awesome-developer-experience/pulls">PR</Link>}}>
          {'Found a good resource? Open a {PR} and add to everyone read'}
        </Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
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
