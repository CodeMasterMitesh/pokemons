import React, { useEffect, useRef, useState } from 'react'
import GoldSiverHeader from '../../HomePage/GoldSiverHeader'
import { Card, Col, Overlay, Popover, Row } from 'react-bootstrap'
import OnlineTrainers from '../../Component/OnlineTrainers';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PokemonProfile from '../../Component/PokemonProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerPokemons } from '../../../store/pokemon';



function PokemonJudge() {
  const dispatch = useDispatch();

  const player_pokemons = useSelector(state => state.pokemon.player_pokemons);
  const [hoveredId, setHoveredId] = useState(null);
  const [pokemon, setPokemon] = useState({});

  // const [target, setTarget] = useState(null);
  // const targetRefs = useRef({});
  const [target, setTarget] = useState(null); // Track the current target element


  const handleMouseEnter = (e, id) => {
    setHoveredId(id);
    // const element = document.getElementById(`pokemon-popup-${id}`);
    setTarget(e.currentTarget)


    // setTimeout(() => {
    //   const element = document.getElementById(`pokemon-popup-${id}`);
    //   // setTarget(element)
    //   if (element) {
    //     const { right, left, width } = element.getBoundingClientRect();
    //     const viewportWidth = window.innerWidth;

    //     console.log('Viewport Width:', viewportWidth);
    //     console.log('Element Bounds:', { right, left, width });

    //     // Check if the popup overflows from the right side
    //     if (right > viewportWidth) {
    //       element.style.position = 'absolute';
    //       element.style.right = '10px';
    //       element.style.left = 'auto';
    //       element.style.transform = 'translate(0%,0%) !important';
    //       console.log('Adjusted Right:', element.style.right);
    //     }
    //     // Check if the popup overflows from the left side
    //     else if (left < 0) {
    //       element.style.position = 'absolute';
    //       element.style.left = '10px';
    //       element.style.transform = 'translate(0%,0%) !important';

    //       element.style.right = 'auto';
    //       console.log('Adjusted Left:', element.style.left);
    //     }
    //     // Handle near-left-edge cases
    //     else if (left < 200) {
    //       element.style.position = 'absolute';
    //       element.style.left = `0px`;
    //       element.style.right = 'auto';
    //       element.style.transform = 'translate(0%,0%) !important';
    //       console.log('Adjusted Near Left:', element.style.left);
    //     }
    //   } else {
    //     console.warn(`Element with ID pokemon-popup-${id} not found.`);
    //   }
    // }, 0); // Allow for DOM updates to settle
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  useEffect(() => {
    dispatch(getPlayerPokemons())
  }, []);
  return (
    <div className='container p-2 '>
      <GoldSiverHeader previous={'/home'} title='Pokemon Judge'>
        <Card border='dark' text='white' className='bg-theme'>
          <Card.Header><h3 className='text-center'> Pokemon Judge</h3></Card.Header>

          <Card.Body className='text-center'>
            <h5>Hello, trainer, how are you?</h5>
            <h5>Using my research, I can help you judge the abilities of your Pokémon.</h5>
            <h5 >Do you have any? If so, I'll be happy to help you! </h5>
            <h5 className='mt-5'>With this tool, you can find out what your Pokémon is strong or weak at, and for just: 10,000 silvers! </h5>
            <h5>3rd Place: 5,000</h5>

          </Card.Body>
        </Card>
        {pokemon && pokemon.wild_id && <Card border='dark' text='white' className='bg-theme mt-1'>
          <Card.Body className='pokeom-judge'>
            <Row>
              <Col className='p-5' md={7}>
                <p>I see... I see...</p>
                <p>This  <b>{pokemon.naam}  has</b> excellent <span className='text-success'>potential!</span> </p>
                <p>In fact, I'd say its greatest potential lies in its <span className='text-success'>Attack .</span><br />
                  Stats like those... They simply <span className='text-success'>can't be beat !</span></p>
                <p className='mt-1'>- Hmm. And its <b> Defense</b> Stat is good too.</p>

                <p className='mt-1'>- Though its <b> Attack Sp.</b> Stat is equally good.</p>

                <p className='mt-1'>- However, its <b>Defense Sp.</b> Stat seems to be just as good.</p>

                <p className='mt-1'>- And, well, its <b>Speed </b>​​Stat is good too.</p>

                <p className='mt-1'>- Yeah! Its <b> HP</b> Stat is equally good.</p>

                <p className='mt-5'>
                  Anyway, that's how I judge it.
                </p>
                <p>  <b><a className='pk-link cursor-pointer text-white text-decoration-none' onClick={() => { setPokemon({}) }}>Help me with another Pokémon.</a></b></p>
              </Col>
              <Col md={5}>
                <div className='d-flex align-items-center h-100'>
                  <div className='w-100'>
                    <img src={`/images/pokemon/${pokemon.wild_id}.gif`} alt="" width='40%' />
                    <p>#4</p>
                  </div>

                </div>

              </Col>
            </Row>
          </Card.Body>
        </Card>}
        {!pokemon?.wild_id && <Card border='dark' text='white' className='bg-theme mt-1'>
          <Card.Header><h3 className='text-center'> My Team</h3></Card.Header>
          <Card.Body >
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true}
              slidesToSlide={2}
              infinite={true}
              // autoPlay={true}
              // autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition='all'
              transitionDuration={500}
              containerClass='carousel-container'
              removeArrowOnDeviceType={['tablet', 'mobile']}
              dotListClass='custom-dot-list-style'
              itemClass='carousel-item-padding-40-px'
            >
              {
                player_pokemons && player_pokemons.map((item, index) => {
                  // if (!targetRefs.current[item.wild_id]) {
                  //   targetRefs.current[item.wild_id] = React.createRef();
                  // }

                  return <>
                    <div
                      key={index}
                      // ref={targetRefs.current[item.wild_id]}
                      className=" position-relative w-100 character-item2-inner2 gap-2 cursor-pointer" >
                      <div className="character-item2-inner3 pokemon-gifs"
                      >
                        <div onMouseEnter={(e) => handleMouseEnter(e, item.wild_id)}
                          onMouseLeave={handleMouseLeave}>

                          <img src={`/images/pokemon/${item.wild_id}.gif`} alt="" height={100} />
                          <div className="character-item2-inner4">
                            <img src="/images/character-17.png" alt="" />
                          </div>
                          <div className="character-item2-inner5 b--35" >
                            <p>{item.naam} - Lv <span>{item.level}</span></p>
                          </div>
                        </div>
                        <Overlay
                          show={hoveredId === item.wild_id}
                          target={target}
                          placement="bottom"
                          className='w-100 p-0'
                        >
                          <Popover body id={`popover-${item.wild_id}`} className='custom-popover'>
                            <Popover.Body className='p-0'>
                              <PokemonProfile data={item} />
                            </Popover.Body>
                          </Popover>
                        </Overlay>
                      </div>
                    </div>
                    <div>
                      <div className="register-item-inner6 w-100 mt-4">
                        <button className='challenge-button' onClick={() => { setPokemon(item) }}>See Judge</button>
                      </div>
                    </div>
                  </>

                })
              }
            </Carousel>
          </Card.Body>
        </Card>}
        <div className='mt-2'>
          <OnlineTrainers />
        </div>
      </GoldSiverHeader>
    </div>
  )
}

export default PokemonJudge
