import * as Cards from '../components/Cards.jsx'

function HomePage() {
    return <div className="gap flex home-page-container">
        <div className='gap flex flex-col align-items-center flex-7-8'>
            <Cards.BioCard />
            <div className='gap width-100 flex-5 showcase'>
                <Cards.ContactCard />
                <Cards.Deck
                    cards={[
                        { title: 'Journey', to: '/projects/olympics-api' },
                        { title: 'Projects', to: '/projects' },
                        { title: 'Technologies', to: '/projects/black-box-penetration' },
                        // { title: 'Blackbox Pentest', to: '/projects/black-box-penetration' }
                    ]} />
                <Cards.Deck
                    cards={[
                        { title: 'Artworks' },
                        { title: 'Artworks' }
                    ]}
                    availability />
            </div>
        </div>
        <div className='gap flex flex-col flex-2-3'>
            <Cards.AboutCard />
            <Cards.LittleFooter />
        </div>
    </div>;
}
export default HomePage;