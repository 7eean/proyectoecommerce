import './Main.css'
import DragonMain from '../../components/Media/astronomia-black-dragon.jpg'

const Main = () => {
    return(
        <div>
            <section>
                <img className='blackdragon' src={DragonMain} alt='Black Dragon' width="100%"/>
                <div className='scrolldown'>
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main