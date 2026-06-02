import * as Cards from '../components/Cards.jsx'

function HomePage() {
    return <div className="gap flex home-page-container">
        <div className='gap flex flex-col align-items-center flex-7-8'>
            <Cards.BioCard />
            <div className='gap width-100 flex-5 showcase'>
                <Cards.ContactCard />
                <Cards.Deck cards={[
                    { title: 'Olympics API', description: 'A REST-based API', to: '/projects/olympics-api' },
                    { title: 'IoT Smart Home', description: 'A RPi smart home simulation', to: '/projects/iot-home-simulation' },
                    { title: 'Blackbox Pentest', description: 'A vuln. assessment report', to: '/projects/black-box-penetration' }
                ]} />
                <Cards.Deck cards={[
                    { title: 'Journey', to: "/journey" },
                    { title: 'Artworks', to: "/artworks"},
                    { title: 'Availability', type: 'availability', state: true },
                ]} />
            </div>
        </div>
        <div className='gap flex flex-col flex-2-3'>
            <Cards.AboutCard />
            <Cards.LittleFooter />
        </div>
    </div>;
}
export default HomePage;