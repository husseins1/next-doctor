
export default function Footer() {
  return <div className="bg-[#333] text-center p-4">
      <h1 className="text-xl">For Contact</h1>
      <div className="flex justify-around mt-4 max-w-lg mx-auto ">
        <a target="_blank" href=""><i className="fab fa-whatsapp text-3xl hover:scale-110 "></i></a>
        <a target="_blank" href=""><i className="fab fa-facebook text-3xl hover:scale-110 "></i></a>
        <a target="_blank" href=""><i className="fab fa-instagram text-3xl hover:scale-110 "></i></a>
        <a target="_blank" href=""><i className="fab fa-twitter text-3xl hover:scale-110 "></i></a>

      </div>
  </div>;
}
