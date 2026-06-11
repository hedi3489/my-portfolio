import * as Cards from '../components/Cards.jsx'

function HomePage() {
    return <div className="gap flex home-page-container">
        <div className='gap flex flex-col align-items-center flex-7-8'>
            <Cards.BioCard />
            <div className='gap width-100 flex-5 showcase'>
                <Cards.LittleCard 
                    title="Journey"
                />
                <Cards.Deck 
                    cards={[
                        { title: "Projects" },
                        // { title: "Tech Stack"}
                    ]}
                />
                <Cards.Deck cards={[
                    { title: 'Artworks', to: "/artworks"},
                    { title: 'Availability', type: 'availability', state: true },
                ]} />
            </div>
        </div>
        <div className='gap flex flex-col flex-2-3'>
            <Cards.AboutCard />
            {/* <Cards.LittleFooter /> */}
        </div>
    </div>;
}
export default HomePage;