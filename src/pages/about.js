import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import introImage from "../images/Toronto-Scrapers.jpg";
import whoImage from "../images/bg-whoweare.jpg";
import imaginebg from "../images/bg-imagine.jpg";
import thanksbg from "../images/bg-thanks.jpg";

const logo = "../images/tla-logo-tealwhite.png";
const photoStudio = "../images/whoweare-01.jpg";
const photoPrinter = "../images/whoweare-02.png";
const icons = "../images/icons.png";
const markSignature = "../images/Mark-signature.png";
const whychoose01 = "../images/whychooseus-01.jpg";
const whychoose02 = "../images/whychooseus-02.png";
const bmo = "../images/logos/BMO-logo.png";
const canadagoose = "../images/logos/canadagoose-logo.png";
const coke = "../images/logos/coke-logo.png";
const hd = "../images/logos/homedepot-logo.png";
const lg = "../images/logos/LG-logo.png";
const molson = "../images/logos/molson-logo.png";
const nike = "../images/logos/nike-logo.png";
const noble = "../images/logos/noble-logo.png";
const philips = "../images/logos/philips-logo.png";
const raps = "../images/logos/raptors-logo.png";
const scotia = "../images/logos/scotiabankarena-logo.png";
const shoppers = "../images/logos/shoppers-logo.png";
const smokes = "../images/logos/smokes-logo.png";
const tml = "../images/logos/tml-logo.png";
const tfc = "../images/logos/torontoFC-logo.png";

const AboutContainer = styled.div`
  width: 100%;
  .section {
    box-sizing: border-box;
    height: 100vh;
    min-width: 100vw;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    color: gray;
    overflow: hidden;
  }
  .intro {
    background-image: url(${introImage});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    color: white;
  }
  .whoweare {
    background-image: url(${whoImage});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    display: flex;
    flex-direction: row;
    color: gray;
    text-align: left;
  }
  .whoweareImages {
    max-width: 40%;
    margin-right: 1rem;
  }
  .parallelogram {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    min-height: 70px;
    transform: skew(20deg);
    background: #00a19b;
    overflow: hidden;
    position: relative;
    margin: 0.5em;
    p {
      color: #fff;
      transform: skew(-20deg, 0deg);
      margin: 0;
      padding: 2em;
      text-align: center;
      line-height: 1.4em;
    }
  }
  .key {
    background: linear-gradient(0deg, #e6e6e6, #fff 10%);
  }
  .whatwedo {
    background: linear-gradient(0deg, #e6e6e6, #fff 10%);
    flex-direction: row;
    .text {
      padding: 0 2rem;
    }
    .whatwedoimage {
      width: 40%;
    }
  }
  .whychooseus {
    background: linear-gradient(0deg, #e6e6e6, #fff 10%);

    flex-direction: row;
    .image {
      max-width: 30%;
      margin-right: 1rem;
    }
  }

  .ourpromise,
  .companies {
    background: linear-gradient(0deg, #e6e6e6, #fff 10%);
    h1 {
      margin-bottom: 2em;
    }
  }
  .companiesImages {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    * {
      max-width: 100px;
    }
  }

  .imagine {
    background-image: url(${imaginebg});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    text-align: center;
  }
  .imaginebg {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: end;
    width: 100%;
    height: 100%;
  }
  .imaginemain {
    grid-column: 1/2;
    grid-row: 1/2;
    z-index: 1;
    padding: 1rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    gap: 1rem;
  }

  .imagineintro {
    text-align: center;
    grid-column: 1/4;
    grid-row: 1/2;
    align-self: end;
  }
  .imaginetext1 {
    text-align: left;
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .imaginetext2 {
    text-align: left;
    grid-column: 2/3;
    grid-row: 2/3;
  }
  .imaginetext3 {
    text-align: left;
    grid-column: 3/4;
    grid-row: 2/3;
  }

  .thanks {
    background-image: url(${thanksbg});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .thanksmain {
    grid-column: 1/2;
    grid-row: 1/2;
    z-index: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    color: white;
  }
  .signature {
    width: 300px;
    margin: 0 auto;
  }

  hr {
    height: 0.5em;
    color: var(--primary);
    background-color: var(--primary);
    width: 8em;
    text-align: left;
    margin: 0;
    border: 0;
  }

  @media (max-width: 768px), (max-height: 500px) {
    font-size: 12px;
    .intrologo {
      width: 40%;
    }
    .whoweareImages {
      max-width: 20%;
    }
    .parallelogram {
      min-height: initial;
    }
    .imagine {
      font-size: 10px;
    }
  }

  @media (max-width: 600px) {
    .intrologo {
      width: 100%;
    }
    .whoweare,
    .whychooseus {
      flex-direction: column;
      flex-flow: column-reverse;
    }
    .whatwedo {
      flex-direction: column;
    }
    .whoweareImages,
    .whychooseus .image {
      max-width: 80%;
    }
    .companiesImages {
      gap: 3rem 1rem;
    }
    .imaginemain {
      grid-template-columns: 1fr;
    }

    .imagineintro {
      text-align: left;
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .imaginetext1 {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .imaginetext2 {
      grid-column: 1/2;
      grid-row: 3/4;
    }
    .imaginetext3 {
      grid-column: 1/2;
      grid-row: 4/5;
    }
  }
`;

const AboutPage = () => (
  <Layout>
    <Seo title="About Us" />
    <AboutContainer>
      <div className="section intro">
        <StaticImage className="intrologo" src={logo} alt="TLA Graphics Logo" />
        <p>Transforming Ideas into Stunning Visuals</p>
      </div>

      <div className="section whoweare">
        <div className="whoweareImages">
          <StaticImage
            className="whoweareImage1"
            src={photoStudio}
            alt="design studio"
          />
          <StaticImage
            className="whoweareImage2"
            src={photoPrinter}
            alt="printer"
          />
        </div>
        <div>
          <h1>Who we are</h1>
          <hr />
          <p>
            TLA Graphics is a tight-knit team of strategic visual communicators
            who work hard to clarify your desired outcome, understand your
            unique challenges, and translate the resulting ideas into stunning
            visuals that communicate your brand.
          </p>
        </div>
      </div>

      <div className="section key">
        <h1>Key Advantages</h1>
        <div className="parallelogram">
          <p>
            Nimble six-person team — we operate like a speedboat vs. an oil
            tanker
          </p>
        </div>
        <div className="parallelogram">
          <p>Printing 98.3% of pantone colours</p>
        </div>
        <div className="parallelogram">
          <p>Deep expertise in innovation</p>
        </div>
        <div className="parallelogram">
          <p>Second generation family business</p>
        </div>
        <div className="parallelogram">
          <p>3M Preferred Partner &amp; Trulife partner</p>
        </div>
      </div>

      <div className="section whatwedo">
        <div className="text">
          <h1>What we do</h1>
          <hr />
          <p>
            Clients call us graphic engineers and strategic partners, but at the
            end of the day we simply take care of every visual need for your
            business, inside and out. We bring your ideas to life by running
            them through our internal innovation process while pushing the
            physical limits of media to create stunning visual products that
            support your brand.
          </p>
        </div>
        <StaticImage
          src={icons}
          alt="design &amp; planning, pre-production, production, installation, shipping &amp; pick-up"
        />
      </div>

      <div className="section whychooseus">
        <div className="image">
          <StaticImage src={whychoose01} alt="precision cutter by Zund" />
          <StaticImage src={whychoose02} alt="meeting room" />
        </div>

        <div>
          <h1>Why choose us</h1>
          <hr />
          <p>
            Our intense focus on attention to detail, exquisite production
            quality and lightning fast speed underpin everything we do.
          </p>
          <p>
            As your graphics partner, you can depend on our expert team going
            above and beyond to breathe new life into an existing product or
            solve a new challenge with a creative solution. And we’re on time,
            every time.
          </p>
        </div>
      </div>

      <div className="section ourpromise">
        <h1>Our promise to you</h1>

        <div className="parallelogram">
          <p>Never sacrifice speed over quality</p>
        </div>
        <div className="parallelogram">
          <p>Meticulous attention to detail</p>
        </div>
        <div className="parallelogram">
          <p>Multiple eyes checking every project</p>
        </div>
        <div className="parallelogram">
          <p>Cutting-edge technology</p>
        </div>
      </div>

      <div className="section companies">
        <h1>Companies we work with </h1>
        <div className="companiesImages">
          <StaticImage
            loading="lazy"
            src={philips}
            alt="logo philips"
            title="Philips"
            height={80}
          />
          <StaticImage
            loading="lazy"
            src={coke}
            alt="logo coke"
            title="Coca-Cola"
          />
          <StaticImage
            loading="lazy"
            src={noble}
            alt="logo noble"
            title="Noble"
          />
          <StaticImage
            loading="lazy"
            src={scotia}
            alt="logo scotia"
            title="Scotiabank Arena"
          />
          <StaticImage loading="lazy" src={nike} alt="logo nike" title="Nike" />
          <StaticImage
            loading="lazy"
            src={raps}
            alt="logo raps"
            title="Toronto Raptors"
          />
          <StaticImage
            loading="lazy"
            src={molson}
            alt="logo molson"
            title="Molson"
          />
          <StaticImage
            loading="lazy"
            src={canadagoose}
            alt="logo canadagoose"
            title="Canada Goose"
          />
          <StaticImage
            loading="lazy"
            src={hd}
            alt="logo hd"
            title="Home Depot"
          />
          <StaticImage
            loading="lazy"
            src={smokes}
            alt="logo smokes"
            title="Smokes Poutinerie"
          />
          <StaticImage
            loading="lazy"
            src={bmo}
            alt="logo bmo"
            title="BMO Field"
          />
          <StaticImage
            loading="lazy"
            src={tfc}
            alt="logo tfc"
            title="Toronto FC"
          />
          <StaticImage loading="lazy" src={lg} alt="logo lg" title="LG" />
          <StaticImage
            loading="lazy"
            src={shoppers}
            alt="logo shoppers"
            title="Shoppers Drugmart"
          />
          <StaticImage
            loading="lazy"
            src={tml}
            alt="logo tml"
            title="Toronto Maple Leafs"
          />
        </div>
      </div>

      <div className="section imagine">
        {/* <StaticImage
          className="imaginebg"
          src={imaginebg}
          alt="abstract texture"
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        ></StaticImage> */}
        <div className="imaginemain">
          <div className="imagineintro">
            <h1>You imagine it, we produce it.</h1>
            <p>
              We provide creative solutions for a multitude of truly unique and
              custom projects. From custom single-piece orders to duplicates in
              the thousands—we do it all!
            </p>
          </div>
          <p className="imaginetext1">
            Our no-boundaries approach to a project ensures success in
            developing exclusive and one of a kind experiences to fit your brand
            purpose.
          </p>
          <p className="imaginetext2">
            At TLA Graphics we recognize the needs of a brand as individualistic
            and unlike anything else. We acknowledge these differences by
            implementing a process which operates in this same way. No two
            projects are alike and we persistently encourage new challenges and
            push the limits of what is possible.
          </p>
          <p className="imaginetext3">
            If you have a project in mind please discuss it with us and we’ll be
            happy to find the correct process and materials specific to your
            unique brand needs
          </p>
        </div>
      </div>

      <div className="section thanks">
        {/* <StaticImage
          className="imaginebg"
          src={thanksbg}
          alt="abstract texture"
          formats={["auto", "webp", "avif"]}
        ></StaticImage> */}

        <div className="thanksmain">
          <p>
            I would personally like to thank you for this opportunity. TLA’s
            objective is to become a valued resource partner that can assist
            with your team’s challenging development strategies, client
            deliverables, as well as the demands of driving new business. We
            understand that every project must hit its mark.
          </p>
          <p>
            As president of TLA Graphics I can promise that everyone is here to
            provide support to you and your team. We will work tirelessly to
            earn your trust.
          </p>
          <p>Sincerely, Mark White</p>
          <StaticImage
            src={markSignature}
            className="signature"
            alt="Signature Mark White"
            objectFit="cover"
          />
        </div>
      </div>
    </AboutContainer>
  </Layout>
);

export default AboutPage;
