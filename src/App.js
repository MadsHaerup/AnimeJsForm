import './App.css';
import anime from 'animejs/lib/anime.es.js';


function App() {

  function animate(element){
    anime({
      targets: `label[for = "${element}"]`,
      translateY: -8,
      translateX: -47,
      scale: {value:0.8},
      background: '#97FF97',
      color: '#899993'
    })
  }
  function leave(element){
    if(document.querySelector(`#${element}`).value) return;
    anime({
      targets:`label[for = "${element}"]`,
      translateY: 30,
      scale: {value:1},
      translateX: 0,
      background: '#fff',
      color: '#000'
    })
    
  }

  return (
   <section>
     <h1>Contact us</h1>
     <form onSubmit={e=>e.preventDefault()}>
       <div className="inputGroup">
         <label  htmlFor="name">Name</label>
         <input onFocus={()=>animate("name")} onBlur={()=>leave("name")}  type="text" name="name" id="name" />
       </div>
       <div className="inputGroup">
         <label  htmlFor="phone">Phone</label>
         <input onFocus={()=>animate("phone")} onBlur={()=>leave("phone")} type="tel" name="phone" id="phone" />
       </div>
       <div className="inputGroup">
         <label  htmlFor="email">Email</label>
         <input onFocus={()=>animate("email")} onBlur={()=>leave("email")} type="email" name="email" id="email" />
       </div>
       <div className="inputGroup">
         <label  htmlFor="message">Message</label>
         <textarea onFocus={()=>animate("message")} onBlur={()=>leave("message")} name="message" id="message" />
       </div>

       <button type="submit" >Send</button>
       
     </form>
   </section>
  );
}

export default App;
