import campus from '../assets/campus.png';

export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-100 px-10 text-center">

      <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-4">
        <hr className="w-40 border" />
        ABOUT <span className="text-orange-800">US</span>
        <hr className="w-40 border" />
      </h2>

      <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-xl mb-12">
        At Alliance Online, we are redefining the future of higher education
        by bringing the vision of Alliance University into the digital realm—
        accessible, flexible, and deeply impactful. Rooted in a commitment to
        academic excellence and innovation, Alliance Online bridges the gap
        between tradition and technology, offering learners a transformative
        educational experience from anywhere in the world. We believe that research-driven
        learning is the cornerstone of true education. Our online programs are 
        designed to integrate cutting-edge research with practical learning, 
        empowering students to tackle real-world challenges on local, national, 
        and global scales.
      </p>

      
      <div className="mt-12 w-full"> 
        <img
          src={campus}
          alt="Alliance Campus"
          className="w-full h-auto object-cover"
        />
      </div>

    </section>
  );
}