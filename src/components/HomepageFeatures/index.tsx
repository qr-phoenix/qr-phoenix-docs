import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Customizable QR Codes',
    Svg: require('@site/static/img/undraw_product_tour_re_8bai.svg').default,
    description: (
      <>
        Personalize every aspect of your QR codes with custom size, embeded images, colors, including foreground, background, and gradient options.
      </>
    ),
  },
  {
    title: 'Flexible Output Formats',
    Svg: require('@site/static/img/undraw_check_boxes_re_v40f.svg').default,
    description: (
      <>
        Generate QR codes in multiple formats such as PNG, SVG, and more.
      </>
    ),
  },
  {
    title: 'Focus on Privacy',
    Svg: require('@site/static/img/undraw_confidential_letter_w6ux.svg').default,
    description: (
      <>
        We take <i>private</i> QR code data seriously, as such, we do not store supplied QR code data. Your submitted data expires when your generation request is done.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
