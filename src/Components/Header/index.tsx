import Rocket from "../../Assets/rockeat.svg";
export default function Header() {
  return (
    <div className="bg-gray-700 p-16 flex items-center justify-center gap-2 drop-shadow-2xl relative">
      <img className="w-8" src={Rocket} />
      <p className="text-6xl font-Anton">
        <strong className="text-blue-100">To</strong>
        <strong className="text-purpleDark">Do</strong>
      </p>
    </div>
  );
}
