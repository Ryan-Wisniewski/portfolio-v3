import React, {useState} from 'react'
import stbImg from '../assets/split-the-bill.PNG'
import ffsImg from '../assets/firefly.PNG'
import bcmImg from '../assets/CSBW2.PNG'
import pokImg from '../assets/Pokedex.PNG'
import sosImg from '../assets/bmtron.PNG'
import biImg from '../assets/Beaditv2.PNG'
import FullScreenImg from './FullScreenImg'

const Projects = () => {
    const [currentImage, setCurrentImage] = useState(undefined)

    const handleImg = (img) => {
        setCurrentImage(img)
    }

    return (
        <section>
            {currentImage && <FullScreenImg img={currentImage} setCurrentImage={setCurrentImage} />}
            <span id='projects' name='projects'> &nbsp; </span>
            <div className='projects'>
                <div className='project2'>
                    <div className='textAll'>
                        <h3>Bead It!</h3>
                        <p className='text'>
                            Bead It! is designed for University Students attending Art class or anyone who likes the Art of beading. 
                            Want to see your design before committing to pulling out any beads? 
                            The app handles a bunch of users' input as one crafts any unique beading design. 
                            With the power of imagination this app fits your beading needs. 
                        </p>
                        <p className='text2'>Utilized: React, useContext</p>
                    </div>
                    <div className='imgAll'>
                        <div className='marginDiv'>
                        <a className='link' href='https://bead-itv2.netlify.app/' target="_blank" rel="noopener noreferrer">
                            <p className='webLink'>Check out the website</p>
                        </a>
                        </div>
                        <img src={biImg} alt='project 4 img here' className='projImg imgAnime' onClick={() => handleImg(biImg)}/>
                    </div>
                </div>
                <div className='project1'>
                    <div className='textAll'>
                        <h3>Snake Online</h3>
                        <p className='text'>
                            Using socket.IO to create a WebSocket secure connection, up to 4 players can play a tron like game. 
                            This project was launched as a tribute to BMtron, an old flash player game for the browser. 
                            Don't have enough people to play? The game will add bots to play with. 
                            The objective is to avoid other snakes path and the wall or you loose. Can you survive long enough to win?
                        </p>
                        <p className='text2'>Utilized: React, Node.js, sockets</p>
                    </div>
                    <div className='imgAll'>
                        <div className='marginDiv'>
                            <a className='' href='https://github.com/Ryan-Wisniewski/tronOnline' target="_blank" rel="noopener noreferrer">
                                <p className='webLink'>GitHub repository here</p>
                            </a>
                        </div>
                        <img src={sosImg} alt='project 4 img here' className='projImg imgAnime' onClick={() => handleImg(sosImg)}/>
                    </div>
                </div>
                <div className='project2'>
                    <div className='textAll'>
                        <h3>Pokédex</h3>
                        <p className='text'>
                            Created a Pokédex during a one week sprint for Ash on his travels through the world of Pokémon.
                            Using the Pokémon api Ash or any Pokémon Trainer can easily view Pokémon as well as all the information one would need to know about each Pokémon.
                            The Pokédex also comes with a search functionality to easily find a Pokémon by name or number.
                        </p>
                        <p className='text2'>Utilized: React, Node.js, sockets</p>
                    </div>
                    <div className='imgAll'>
                        <div className='marginDiv'>
                            <a className='link' href='https://github.com/Ryan-Wisniewski/PokedexUI' target="_blank" rel="noopener noreferrer">
                                <p className='webLink'>GitHub repository here</p>
                            </a>
                        </div>
                        <img src={pokImg} alt='project 4 img here' className='projImg imgAnime' onClick={() => handleImg(pokImg)}/>
                    </div>
                </div>
                <div className='project1'>  
                    <div className='textAll'>
                        <h3>Blockchain Coin Mining</h3>
                        <p className='text'>
                            A small team of four, applied the skills and knowledge from the Computer Science unit with graphs, blockchain, algorithms, and computer architecture. 
                            The team was one of two which programmed an algorithm to automate mining blockchain blocks with python3. 
                            Mined 623 of the 1220 total coins out of 10 teams competing. 
                        </p>
                        <p className='text2'>Utilized: Python3</p>
                    </div>
                    <div className='imgAll'>
                        <div className='marginDiv'>
                            <a className='link' href='https://github.com/Team-Nowhere/CS-Build-Week-2' target="_blank" rel="noopener noreferrer">
                                <p className='webLink'>GitHub repository here</p>
                            </a>
                        </div>
                        <img src={bcmImg} alt='project 4 img here' className='projImg imgAnime' onClick={() => handleImg(bcmImg)}/>
                    </div>
                </div>
                <div className='project2'>
                    <div className='textAll'>
                        <h3>Project Firefly</h3>
                        <p className='text'>
                            Project Firefly is a game that teaches young children how to think like an engineer. 
                            Our team of 7, along with the website stakeholder, met weekly to discuss progress to ensure the product was released in a timely manner. 
                            We built the user flow to increase readability and functionality by separating the game data from the users. 
                            The team and I matched the product to the vision of the stakeholder by implementing the design canvases provided.
                        </p>
                        <p className='text2'>Utilized: Mongo, Firebase, React, Node, Express</p>
                    </div>
                    <div className='imgAll'>
                        <div className='marginDiv'>
                            <a className='link' href='https://github.com/Lambda-School-Labs/project-firefly-site' target="_blank" rel="noopener noreferrer">
                                <p className='webLink'>GitHub repository here</p>
                            </a>
                        </div>
                        <img src={ffsImg} alt='project 2 img here' className='projImg imgAnime' onClick={() => handleImg(ffsImg)}/>
                    </div>
                </div>                
                <div className='project1'>
                    <div className='textAll'>
                        <h3>Split the Bill</h3>
                        {/* During the first day we were introduced to GitHub, in the first month we learned html and css quickly and efficiently.
                        We dove right into the my current favorite language, javascript. With javascript we learned DOM 
                        manipulation.  */}
                        <p className='text'>
                            App designed to split the bill between people sharing a tab. 
                            Never again will anyone have to remember how much they owed previously. 
                            Operated with a full-stack team on new technologies to later discover in depth. 
                            Built the styling with the Front-end developer to start learning basics 
                            of an upcoming unit by receiving a crash course of React.
                        </p>
                        <p className='text2'>Utilized: HTML/CSS, JS, React</p>
                    </div>
                    <div className='imgAll'>
                        <div className='marginDiv'>
                            <a className='link' href='https://github.com/lambda-split-the-bill' target="_blank" rel="noopener noreferrer">
                                <p className='webLink'>GitHub repository here</p>
                            </a>
                        </div>
                        <img src={stbImg} alt='project 1 img here' className='projImg imgAnime' onClick={() => handleImg(stbImg)}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects