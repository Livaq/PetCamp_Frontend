import React from 'react';
import './aboutUsPage.scss';
import HeaderUserProfilePage from '../clientPages/headerUserProfilePage/HeaderUserProfilePage';
import Footer from '../startPage/startPageFooter/startPageFooter';
import stockImage1 from '../../assets/images/CatDog.jpg';
import stockImage2 from '../../assets/images/PetGroup.jpg';
import stockImage3 from '../../assets/images/gallery-img-3.jpg';

const AboutUsPage = () => (
  <div>
    <HeaderUserProfilePage />
    <div className="about-us-page__wrap">
      <div className="about-us-page__container">
        <h2>About us</h2>
        <div className="about-us-page__content-container">
          <div className="about-us-page__content-text">
            <p>
              Welcome to our full-service hotel for dogs and cats featuring 24/7
              safety-certified associates and an on-call veterinarian. PetsHotel
              is a great peace-of-mind alternative where cats can rest easy in
              comfortable quarters and dogs can enjoy playtime, salon services,
              training classes, and more!
            </p>
            <p>
              When you need to be away, our hotel makes it easy to give your dog
              or cat a fun getaway for overnight or longer. Pet Camp offers dogs
              and cats of every age and stage of life a safe, comfortable home
              away from home. It is the perfect pet hotel to board your pets
              with Standard Guest Rooms where dogs can bunk with buddies,
              Apartments, and Kitty Cottages for your favorite felines.
            </p>
            <p>
              Our PetsHotel includes 24/7 on-site care and access to an on-call
              veterinarian, plus twice-daily exercise walks and unlimited potty
              breaks. Cats enjoy daily individual playtime and complimentary
              SENTRY® calming pheromones. Bring your dog or cat&apos;s food and
              treats from home or we can feed them for an additional fee.
              Medication dispensing services are also available for an
              additional fee.
            </p>
            <p>
              If your pet needs grooming services while they are with us, we can
              help facilitate that, too so they wll be well cared for and
              looking their best when it is time to go home.
            </p>
            <p>
              For more information on our pet boarding services or to book your
              pet&apos;s stay at a Pet Camp find the nearest to you.
            </p>
            <p>
              The safety, health and happiness of our customers, pets and
              associates are a top priority at Pet Camp.
            </p>
            <p className="about-us-page__features-header overline">
              Here’s what we instituted during the COVID-19 pandemic:
            </p>
            <ul>
              <li>
                <span>Advanced Cleaning Measures. </span>We sanitize all rooms,
                bowls, toys, play equipment and common areas of the PetsHotel
                daily and perform additional cleaning throughout the day.
              </li>
              <li>
                <span>PetsHotel Hygiene. </span>We are also taking extra safety
                precautions for our pet parents by providing hand sanitizer and
                disinfected pens for use in our Pet Camp lobby.
              </li>
              <li>
                <span>Pet Handling. </span>We transfer pets to and from the Pet
                Camp with our own slip leads, so that associates don’t handle
                any collars and leashes belonging to pets.
              </li>
              <li>
                <span>Social Distancing. </span>Tape has been placed on the Pet
                Camp lobby floors to indicate where customers and associates
                should stand. Our associates have been instructed to maintain a
                distance of at least six feet between themselves and any person,
                including fellow associates.
              </li>
            </ul>
            <p className="about-us-page__features-header overline">
              Here’s what we continue to do to make sure you and your dog or cat
              can rest easy and assured:
            </p>
            <ul>
              <li>
                UV Air Sanitation System – a state-of-the-art air purification
                system exclusively designed for the animal care industry
              </li>
              <li>
                24/7 supervised care by trained professional associates with a
                veterinarian on-call
              </li>
              <li>
                Safe indoor accommodations that have a home-away-from home feel
              </li>
              <li>Safety observation walks three times daily</li>
              <li>
                Service cards tracking all elements of your pet’s stay (feeding,
                behavior, etc.)
              </li>
              <li>Separate sound-proof and smell-proof facilities for cats</li>
              <li>
                Supervised Doggie Day Camp sessions with groups of compatible
                size and temperament
              </li>
              <li>
                Doggie Day Camp Ultimate Experience curriculum featuring
                socialization and stimulating activities
              </li>
            </ul>
          </div>
          <div className="about-us-page__image-container">
            <img
              src={stockImage1}
              alt="Cat and dog"
              className="about-us-page__image"
            />
            <img
              src={stockImage2}
              alt="Pet group"
              className="about-us-page__image"
            />
            <img
              src={stockImage3}
              alt="puppy and kitten"
              className="about-us-page__image"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default AboutUsPage;
