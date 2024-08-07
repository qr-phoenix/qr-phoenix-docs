import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Slider from 'react-slick';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start">
            Quick Start - 2min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

const Marquee = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2e3,
    cssEase: "linear",
    slidesToShow: 6,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="qr-code-slider">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide-item">
            <img src={src} alt={`QR code ${index + 1}`} className="example-qr" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const qrImages = [
  '/qr-phoenix-docs/img/samples-with-logos/amazon-orange.png',
  '/qr-phoenix-docs/img/samples-with-logos/coca-cola-red.png',
  '/qr-phoenix-docs/img/samples-with-logos/ecobank-green.png',
  '/qr-phoenix-docs/img/samples-with-logos/expresspay.png',
  '/qr-phoenix-docs/img/samples-with-logos/facebook-blue.png',
  '/qr-phoenix-docs/img/samples-with-logos/hubtel-blue.png',
  '/qr-phoenix-docs/img/samples-with-logos/linkedin-blue.png',
  '/qr-phoenix-docs/img/samples-with-logos/mtn-yellow.png',
  '/qr-phoenix-docs/img/samples-with-logos/paystack.png',
  '/qr-phoenix-docs/img/samples-with-logos/spotify-green.png',
  '/qr-phoenix-docs/img/samples-with-logos/standard-chartered-blue.png',
  '/qr-phoenix-docs/img/samples-with-logos/tesla-red.png',
  '/qr-phoenix-docs/img/samples-with-logos/twitter-black.png',
  '/qr-phoenix-docs/img/samples-with-logos/vodafone-red.png',
  '/qr-phoenix-docs/img/samples-with-logos/whatsapp-green.png',
  '/qr-phoenix-docs/img/samples-with-logos/youtube-red.png',
  '/qr-phoenix-docs/img/samples-with-logos/zenith-bank-red.png'
];

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Docs"
      description="Privacy-focussed, cutting-edge QR code generation">
      <HomepageHeader />
      <main>
        <Marquee images={qrImages} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
