import './Cards.css'
import './Containers.css'
import { BioCard, ContactCard, LittleCard, ThemeCard, AboutCard, LittleFooter } from './Cards.jsx'

const projectCards = [
  { type: 'project', title: 'Olympics API', description: 'REST-based API' },
  { type: 'project', title: 'IoT Smart Home', description: 'RPi smart home simulation' },
  { type: 'project', title: 'Blackbox Pentest', description: 'Vuln. assessment report' }
]
const specialCards = [
  { type: 'sketches', title: 'Sketches' },
  { type: 'artworks', title: 'Artworks' },
  { type: 'availability', title: 'Availability' },
  { type: 'theme', title: 'Theme' }
]
const CARD_MAP = {
  project: LittleCard,
  sketches: LittleCard,
  artworks: LittleCard,
  availability: LittleCard,
  theme: ThemeCard,
}

function MainContent() {
  return <div className='flex flex-col flex-center main-content'>
    <BioCard />
    <Showcase />
  </div>
}

function Showcase() {
  return <div className='flex showcase'>
    <ContactCard />
    <Deck cards={projectCards} />
    <Deck cards={specialCards} />
  </div>
}

function Deck({ cards = [] }) {
  return (
    <div className="flex flex-col">
      {cards.map((item, i) => {
        const Card = CARD_MAP[item.type] || LittleCard
        return <Card key={i} {...item} />
      })}
    </div>
  )
}

function SideBar() {
  return <div className='flex flex-col felx-center side-bar'>
    <AboutCard />
    <LittleFooter />
  </div>
}

export {
  MainContent,
  Deck,
  SideBar
}
