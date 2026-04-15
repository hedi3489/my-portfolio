import * as Cards from '../components/Cards.jsx'

const projectCards = [
    {
        type: 'project',
        title: 'Olympics API',
        description: 'REST-based API',
        to: '/projects/olympics-api',
    },
    {
        type: 'project',
        title: 'IoT Smart Home',
        description: 'RPi smart home simulation',
        to: '/projects/iot-home-simulation',
    },
    {
        type: 'project',
        title: 'Blackbox Pentest',
        description: 'Vuln. assessment report',
        to: '/projects/black-box-penetration',
    }
]
const specialCards = [
    { type: 'sketches', title: 'Sketches' },
    { type: 'artworks', title: 'Artworks' },
    { type: 'availability', title: 'Availability' },
    { type: 'theme', title: 'Theme' }
]

function HomePage() {
    return <div className="gap flex home-page-container">
        <div className='gap flex flex-col align-items-center flex-7-8'>
            <Cards.BioCard />
            <div className='gap flex width-100 flex-5 showcase'>
                <Cards.ContactCard />
                <Cards.Deck cards={projectCards} />
                <Cards.Deck cards={specialCards} />
            </div>
        </div>
        <div className='gap flex flex-col flex-2-3'>
            <Cards.AboutCard />
            <Cards.LittleFooter />
        </div>
    </div>;
}
export default HomePage;