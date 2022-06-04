import React from 'react';
import HeaderUserProfilePage from '../clientPages/headerUserProfilePage/HeaderUserProfilePage';
import Footer from '../startPage/startPageFooter/startPageFooter';
import catImage from '../../assets/images/catType.jpeg';
import dogImage from '../../assets/images/dogType.jpeg';
import './pricingPage.scss';
import PriceItem from './PriceItem';
import {
  standardCatOption,
  standardDogOption,
  apartmentDogOption,
  silverDogOption,
  goldDogOption,
  platinumDogOption,
  transferOption,
  groomingOption,
} from './pricingOptions';

const PricingPage = () => (
  <div>
    <HeaderUserProfilePage />
    {/* Dogs and cats segment */}
    <div className="pricing-page__wrap">
      <div className="pricing-page__container">
        <h2>Pricing & Conditions</h2>
        <div className="pricing-page__cats-dogs-container">
          <div className="pricing-page__cats-dogs-item">
            <div className="pricing-page__cats-dogs-header">CATS</div>
            <div className="pricing-page__cats-dogs-image-container">
              <img src={catImage} alt="cat" />
            </div>
            <div className="pricing-page__cats-dogs-content">
              <ul>
                <li>
                  Access to 24/7 care with a veterinarian call if necessary
                </li>
                <li>
                  An individual temperature regime with a separate ventilation
                  system for dogs and cats is provided.
                </li>
                <li>
                  Collars for cats with calming function, individual playtime
                  for cats, trays for cats in a special area are also are
                  included in the standard price
                </li>
                <li>
                  Feeding: Royal Canin food according to the breed of a pet.
                  Food can be provided by the owner in separate containers with
                  the name of the pet on it
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing-page__cats-dogs-item">
            <div className="pricing-page__cats-dogs-header">DOGS</div>
            <div className="pricing-page__cats-dogs-image-container">
              <img src={dogImage} alt="dog" />
            </div>
            <div className="pricing-page__cats-dogs-content">
              <ul>
                <li>
                  Access to 24/7 care with a veterinarian call if necessary
                </li>
                <li>
                  An individual temperature regime with a separate ventilation
                  system for dogs and cats is provided.
                </li>
                <li> Dog walking twice a day, including play exercises</li>
                <li> Unlimited access for dogs to the toilet</li>
                <li>
                  There are two types of accommodation for dogs: standard room
                  and apartment.
                </li>
                <li>
                  Standard room - an open atrium, equipped with a hypoallergenic
                  couch. Daily cleaning and sanitation
                </li>
                <li>
                  Apartment - a large room, located separately from the standard
                  rooms, suitable for accommodating several dogs from one owner.
                  Equipped with a dog bed and TV tuned to animal programs. Daily
                  cleaning and sanitation
                </li>
                <li>
                  Feeding: Royal Canin food according to the breed of a pet.
                  Food can be provided by the owner in separate containers with
                  the name of the pet on it
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Rooms options segment */}
        <div className="pricing-page__rooms-container">
          <div className="pricing-page__rooms-item">
            <div className="pricing-page__rooms-header">Types of Rooms:</div>
            <div className="underline">
              <PriceItem option={standardCatOption} />
            </div>
          </div>
          <div className="pricing-page__rooms-item">
            <div className="pricing-page__rooms-header">Types of Rooms:</div>
            <div className="underline">
              <PriceItem option={standardDogOption} />
            </div>
            <PriceItem option={apartmentDogOption} />
            <div className="pricing-page__rooms-options">
              <PriceItem option={silverDogOption} />
              <div className="pricing-page__rooms-options">
                <ul>
                  <li>
                    Games and delicacies: 4 hours of games, socialization, and
                    additional training or up to 30 minutes of one-on-one games
                  </li>
                  <li> Snack KONG® entertainment</li>
                </ul>
              </div>
            </div>
            <div className="pricing-page__rooms-options">
              <PriceItem option={goldDogOption} />
              <div className="pricing-page__rooms-options">
                <ul>
                  <li>
                    Games and delicacies: 6 hours of games, socialization, and
                    additional training or up to 60 minutes of one-on-one games
                  </li>
                  <li> Snack KONG® entertainment</li>
                </ul>
              </div>
            </div>
            <div className="pricing-page__rooms-options">
              <PriceItem option={platinumDogOption} />
              <div className="pricing-page__rooms-options">
                <ul>
                  <li>
                    Games and delicacies: 8 hours of games, socialization, and
                    additional training or up to 60 minutes of one-on-one games
                  </li>
                  <li> Snack KONG® entertainment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Additional options segment */}
        <div className="pricing-page__additional-options_container">
          <div className="pricing-page__additional-options_header">
            Additional options
          </div>
          <div className="pricing-page__additional-options_item">
            <div className="pricing-page__additional-options_option">
              <PriceItem option={transferOption} />
            </div>

            <div>
              The client can book a hotel transfer by choosing this option
              during the booking process. In this case, the hotel administrator
              contacts the client and selects the most convenient time
            </div>
          </div>
          <div className="pricing-page__additional-options_item">
            <div className="pricing-page__additional-options_option">
              <PriceItem option={groomingOption} />
            </div>
            <div>
              Comprehensive care, which includes a haircut at the request of the
              owner or in the breed lines, shaving the hair between the pads of
              the paws, cutting the intimate area, washing with shampoo using a
              hair conditioner, drying with a hairdryer, cleaning the auricle,
              trimming the nails
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default PricingPage;
