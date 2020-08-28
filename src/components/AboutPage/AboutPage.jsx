import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div>
      <h1 className={'about'} >About Us</h1> 
      <h2 className='about'><Link to ="/">Home</Link></h2>
      <section className={'about-me-section'} >
        <div className={'about-me-div'} >
          <div className={'about-me-card'} >
            <h2>Hunter Danielson</h2>
            <img className='pic' src="hunter.jpeg" alt="developer" />
            <h2>Why This Project?</h2> 
            <p>This project has let me bring my love of games and music together in a fun and challenging way. Now I can destroy my friends with superior music taste in the form of a friendly competition.</p>
            <div className={'link-div'} >
              <a href={ 'https://www.linkedin.com/in/hunter-danielson/' } > <img className={'link-image'} src ={'linkedin.png'} /> </a>
              <a href={ 'https://github.com/hunterdanielson' } ><img className={'link-image'} src ={'github.png'} /></a> 
              <a href={ 'https://hdanielson.com/' } ><img className={'link-image'} src ={'website.png'} /></a> 
                                               
            </div>
          </div>

          <div className={'about-me-card'}>
            <h2>Jaime Sanders</h2>
            <img className='pic' src="jaime2.jpg" alt="developer"/>
            <h2>Why This Project?</h2>
            <p>My interest in music began after writing a profile piece in English class about a friend’s band, which led to a lot of press passes to write reviews and photograph musicians. I love the idea of how music can bring back memories and this was a challenging app to create an environment where music and memories can be shared with your friends.</p>
            <div className={'link-div'} >
              <a href={ 'https://www.linkedin.com/in/jaimelyn/' } ><img className={'link-image'} src ={'linkedin.png'} /> </a>
              <a href={ 'https://github.com/jaimekinsley' } > <img className={'link-image'} src ={'github.png'} /> </a>                                    
            </div>
          </div>
                            
          <div className={'about-me-card'}>
            <h2>Melissa Smoot</h2>
            <img className='pic' src="melissa.jpeg" alt="developer"/>
            <h2>Why This Project?</h2>
            <p>With this project, I feel like I'm one step closer to conquering my nemesis, the Spotify discover weekly algorithm, which has vexxed me for years by consistently making better playlists than I do. Forget about our jobs -- the robots are taking our <em>art</em>!!</p>

            <div className={'link-div'} >
              <a href={ 'https://www.linkedin.com/in/smooto/' } > <img className={'link-image'} src ={'linkedin.png'} /> </a>
              <a href={ 'https://github.com/smooto' } > <img className={'link-image'} src ={'github.png'} /> </a>
              <a href={ 'https://smoot.dog/' } > <img className={'link-image'} src ={'website.png'} /> </a>                                     
            </div>
          </div>

          <div className={'about-me-card'}>
            <h2>Joey Leaptrott</h2>
            <img className='pic' src="joey.jpg" alt="developer"/>
            <h2>Why This Project?</h2>
            <p>Whether it be while bobbing my head to the soundtrack of Tony Hawk Pro Skater 3 or jamming to 'Now That's What I Call Music' in a long car ride
              with the family, there are so many songs I love because of that nostalgic feel. Songs About Humanity allowed me to learn new technologies and
              create a fun game that allows my friends and family to relive some of our best times.  </p>
            <div className={'link-div'} >
              <a href={ 'https://www.linkedin.com/in/joey-leaptrott/' } ><img className={'link-image'} src ={'linkedin.png'} /> </a>
              <a href={ 'https://github.com/JoLeaper' } > <img className={'link-image'} src ={'github.png'} /> </a>                                    
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
