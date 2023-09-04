import {
  AboutStyled,
  AboutContacts,
  AboutGallery,
  GalleryImg,
  AboutParagraph,
  AboutParagraphs,
  AboutTitle,
  AdressTitle,
  AboutAdress,
} from './AboutContent.style'
import firstImg from './img/01.png'
import secondImg from './img/02.png'
import thirdImg from './img/03.png'
import { ReactComponent as PawIco } from './img/pawIco.svg'
import { ReactComponent as AdressIco } from '../Contacts/img/contact-us/map.svg'
import TitleH3 from '../../Components/UI/TitleH3.styles'
import Container from '../../Components/UI/Container.style'

function AboutContent() {
  return (
    <AboutStyled>
      <Container>
        <AboutTitle>Ласкаво просимо до ЕКО захист - притулку для собак!</AboutTitle>
        <AboutGallery>
          <GalleryImg>
            <img src={firstImg} alt="dogs" />
          </GalleryImg>
          <GalleryImg>
            <img src={secondImg} alt="dogs" />
          </GalleryImg>
          <GalleryImg>
            <img src={thirdImg} alt="dogs" />
          </GalleryImg>
        </AboutGallery>
        <AboutParagraphs>
          <AboutParagraph>
            <PawIco />
            <span>
              Ми - команда ентузіастів, що присвятили своє життя допомозі безпритульним
              собакам. Наша місія полягає в тому, щоб забезпечити тимчасовий притулок,
              медичний догляд і шанс на нове життя для хвостиків, які опинилися на вулиці
            </span>
          </AboutParagraph>
          <AboutParagraph>
            <PawIco />
            <p>
              У нас є досвід роботи з різними породами собак. Ми віримо, що кожний собака
              заслуговує нашої уваги, незалежно від його минулого. Ми докладаємо всіх
              зусиль, щоб забезпечити нашим хвостикам затишне місце, якісне харчування,
              ветеринарний догляд та регулярні прогулянки
            </p>
          </AboutParagraph>
          <AboutParagraph>
            <PawIco />
            <p>
              Наша команда волонтерів регулярно проводить час з кожним собакою, даруючи їм
              любов та увагу. Ми віримо, що соціалізація і взаємодія з людьми допомагають
              собакам підготуватися до нових домівок і покращують їх шанси на успішну
              адаптацію
            </p>
          </AboutParagraph>
          <AboutParagraph>
            <PawIco />
            <p>
              Якщо ви зацікавлені у прийнятті собаки, ми допоможемо вам знайти саме того,
              хто стане чудовим компаньйоном для вас і вашої родини. Наші працівники
              детально ознайомлять вас з кожним собакою, їхніми характерами та потребами,
              щоб ви могли зробити правильний вибір
            </p>
          </AboutParagraph>
          <AboutParagraph>
            <PawIco />
            <p>
              Ваша підтримка - це крок до щасливого життя кожної безпритульної собаки.
              Фінансова допомога, матеріальні ресурси або ваші власні навички і час -
              будь-який внесок нам дуже допомагає. Разом ми можемо створити краще майбутнє
              для наших чотирилапих друзів
            </p>
          </AboutParagraph>
          <AboutParagraph>
            <PawIco />
            <p>
              На нашому сайті ви зможете дізнатися більше про діяльність притулку, про
              наших хвостатих мешканців та способи підтримки. Будь ласка, зв&apos;яжіться
              з нами, якщо у вас є будь-які питання. Дякуємо вам за вашу любов, доброту та
              відданість!
            </p>
          </AboutParagraph>
        </AboutParagraphs>
        <AboutContacts>
          <AdressTitle>Команда ЕКО Захист</AdressTitle>
          <AboutAdress>
            <AdressIco />
            <div>
              <TitleH3>Знайти нас можна за адресою:</TitleH3>
              <p>місто Львів, вул. Городоцька, 397</p>
            </div>
          </AboutAdress>
        </AboutContacts>
      </Container>
    </AboutStyled>
  )
}

export default AboutContent
