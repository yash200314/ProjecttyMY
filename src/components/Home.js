import React from "react";
import Cards from "./Cards";

const Home = () => {


  return (    
    <div className="bg-white-950 ">
     

      {/* <!--Card section--> */}

      <div className="h-30 grid grid-cols-3 gap-4 content-start pt-32">
        {/* ReactDOM.render( */}
        {/* <> */}
        <Cards
          imgsrc="https://www.patanjaliayurved.net/assets/product_images/400x500/1688121390acidogrit-60N-82805.png"
          title="Hello medical"
          cont="lorem hello we give cheap medicine"
          price="200"
        />
        <Cards
          imgsrc="https://www.patanjaliayurved.net/assets/product_images/400x500/1688365972UdarkalpChurna1.png"
          title="Hello medical"
          cont="lorem hello we give cheap medicine"
          price="250"
        />
        <Cards
          imgsrc="https://www.patanjaliayurved.net/assets/product_images/thumbs/350_360_1690275150chyawanprabhaadv700g1.png"
          title="Hello medical"
          cont="lorem hello we give cheap medicine"
          price="300"
        />
        <Cards
          imgsrc="https://www.patanjaliayurved.net/assets/product_images/400x500/1688377714ArjunKwath100g1.png"
          title="Hello medical"
          cont="lorem hello we give cheap medicine"
          price="500"
        />
        <Cards
          imgsrc="https://www.patanjaliayurved.net/assets/product_images/400x500/1689500929KeshKanti300ml1.png"
          title="Hello medical"
          cont="lorem hello we give cheap medicine"
          price="100"
        />
        <Cards
          imgsrc="https://www.patanjaliayurved.net/assets/product_images/400x500/1688380267ASHWAGANDHACHURNA100g1.png"
          title="Hello medical"
          cont="lorem hello we give cheap medicine"
          price="20"
        />
        {/* </>, */}
        {/* document.getElementById('root') */}
        {/* ); */}
      </div>
    </div>
  );
};

export default Home;
