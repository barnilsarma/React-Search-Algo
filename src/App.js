import './App.css';
import React from 'react';
import {SearchBtn} from './SearchBtn.svg';
window.addEventListener('click',()=>{
  if(document.activeElement===document.getElementById('search-bar')){
    document.getElementById('search-bar').style.boxShadow='0 4px 20px #aaaaaa';
    document.getElementById('search-bar').style.top='-2px';
  }
  else{
    document.getElementById('search-bar').style.boxShadow='0 2px 10px #cacadd';
    document.getElementById('search-bar').style.top='0px';
  }
});
var flag=0;
const Search=()=>{
  if(flag>0){
  document.getElementById(`found-text-${flag-1}`).style.color="#0d0924";
  document.getElementById(`found-text-${flag-1}`).style.fontSize="0.3cm";
  }
  var t=document.getElementById('search-bar').value;
  var u=document.getElementById('main-text').innerHTML;
  var v=`<b id='found-text-${flag}'>`+t+'</b>';
  var w=u.replace(t,v);
  document.getElementById('main-text').innerHTML=w;
  flag=flag+1;
  document.getElementById('search-bar').value="";
}
const Heading=()=>{
  return(
    <header>
      <h1 id="opening" style={{color:'#0000aa',fontFamily:"'Geologica', sans-serif"}}>React Text Search Algo</h1>
      <input type="text" id="search-bar" name="search-bar" placeholder='Search'/><button id="search-button" name="search-button" onClick={Search}></button>
    </header>
  );
}
const TextContent=()=>{
  return(
  <p id='main-text'>
  Ladies and gentlemen, distinguished guests, and fellow thinkers,

Today, as I stand before you, I am honored to have the opportunity to address such a diverse and intellectual audience on a topic that has been chosen at random. It is a challenge that I wholeheartedly embrace, for it is in these unexpected moments that we find the opportunity for true inspiration and enlightenment.

The topic at hand is like a blank canvas, waiting to be filled with the colors of knowledge, insights, and contemplation. It reminds me of the limitless expanse of the universe, where the stars and galaxies dance in perfect harmony, guiding us towards a deeper understanding of the mysteries that surround us.

Let us embark on a journey of exploration into the concept of time—the silent orchestrator of our lives, the intangible force that shapes our past, present, and future. Time, like a river, flows ceaselessly, carrying with it the stories of civilizations, the rise and fall of empires, the triumphs and tragedies of humanity. It is a reminder that our existence is but a fleeting moment in the grand tapestry of the cosmos.

Time, in its essence, is both friend and foe. It bestows upon us the gift of experience, allowing us to learn, grow, and evolve. Yet, it can also be a merciless taskmaster, unrelenting in its pursuit, as we strive to balance the demands of our personal and professional lives. We find ourselves perpetually in a race against the ticking clock, chasing after dreams, ambitions, and the elusive sense of fulfillment.

But let us pause for a moment and ponder—what is time? Is it merely a construct of our consciousness, a linear progression from past to present to future? Or is it something more profound, an enigma that defies our attempts to grasp its true nature? Throughout the ages, philosophers, scientists, and scholars have grappled with these questions, seeking to unravel the intricacies of time's elusive fabric.

Time, as we experience it, is a dance between objective and subjective realities. Scientifically, time can be measured with precision, divided into moments, minutes, hours, and beyond. It marches forward with unwavering consistency, revealing the laws of cause and effect, enabling us to predict and understand the world around us.

Yet, on a personal level, time becomes a subjective experience—an ever-shifting tapestry of moments, perceptions, and emotions. It warps and distorts, depending on our state of mind, our surroundings, and the intensity of our experiences. A fleeting moment of joy may pass in the blink of an eye, while a moment of pain can stretch into an eternity. Time, in this sense, becomes a deeply intimate and personal entity—a canvas upon which we paint the hues of our lives.

As we navigate the labyrinthine corridors of time, we also encounter the profound impact it has on our existence. It teaches us the wisdom of patience, reminding us that some things cannot be rushed, that growth and transformation require the gentle passage of time. It warns us of the fragility of our mortality, urging us to seize the fleeting moments, to cherish the beauty of each passing day.

In our quest to understand time, we find ourselves at the intersection of science and philosophy. Scientists delve into the depths of quantum mechanics, exploring the nature of time at the smallest scales of existence. Philosophers ponder the meaning of time, its relationship to our perception of reality, and its implications for our understanding of existence itself.

As we stand on the precipice of the future, we are witnessing the emergence of new paradigms of time. Einstein's theory of relativity, with its mind-bending concepts of time dilation and the interconnectedness of space and time, has revolutionized our understanding of the universe. The arrow of time, once believed to be an immutable march from past to future, is now being questioned, as theories of time's cyclical nature and multiple dimensions challenge our preconceived notions.

In this era of rapid technological advancement, time seems to accelerate before our very eyes. The digital age has granted us the ability to communicate across vast distances in an instant, to access information at our fingertips, and to transcend the boundaries of time and space through virtual realms. But as we harness the power of technology to conquer time's limitations, we must also be mindful of the profound impact it has on our lives and our collective future.

In closing, the topic of time has taken us on a philosophical and scientific journey, challenging our perceptions, inspiring our curiosity, and illuminating the interplay between the objective and subjective realms. It is a reminder that time is not merely a concept to be understood but a force to be reckoned with—a constant companion on our human odyssey.

As we leave this discourse, let us embrace the fleeting moments, savor the present, and be mindful of the legacy we leave behind. For in the grand symphony of existence, time is both the conductor and the audience, and we, its performers, have the power to shape the melody of our lives.

Thank you, and may your journey through time be filled with wisdom, joy, and a profound appreciation for the mysteries that lie ahead.
</p>
  );
}
function App() {
  return (
    <div className="App">
      <Heading />
      <TextContent/>
    </div>
  );
}
export default App;
