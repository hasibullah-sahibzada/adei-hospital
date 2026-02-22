import About1 from "../../assets/img/About/image 83.png";
import icon from "../../assets/img/About/Icon.png";
import icon2 from "../../assets/img/About/Icon (1).png";
import icon3 from "../../assets/img/About/Avatar Group.png";
import vector from "../../assets/img/About/Vector.png";

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 px-5 lg:px-20 mt-10">
      <div className="md:w-[50%] order-2 md:order-1 relative">
        <img
          src={About1}
          className="h-full lg:h-[535px] xl:h-[500px] w-full"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full bg-[#00000043] rounded-3xl flex items-end justify-start px-5 pb-2 md:pb-5">
          <div className="bg-white rounded-xl px-5 w-full md:w-[60%] lg:w-[50%] xl:w-[40%] py-4 flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
            <img src={icon3} className="w-24" alt="" />
            <h1 className="font-semibold text-center md:text-start">
              Join our active healthy community
            </h1>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] flex flex-col justify-between items-between gap-7 md:gap-3 lg:gap-5 bg-[#F5F7F9] rounded-[30px] py-5 px-3 lg:px-8 order-1 md:order-2">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl lg:text-3xl font-semibold">Adei History</h1>
          <p className="text-center text-[12px] lg:text-[13px]">
            Adei is the word that Afghans use especially children for their
            mother As the Mother is a kindest, most sympathetic, better nurturer
            to the children and wonderful creation of the nature. Words are not
            enough to describe her. She is the friend, teacher and defender.
          </p>
          <p className="text-center text-[12px] lg:text-[13px]">
            Giving birth to be not easy but she never gave up. She has kind
            nature and she teaches how to handle problems without getting
            nervous. She encourages and motivates us
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <button className="bg-[#5050FA] text-white text-[13px] px-6 py-2 rounded-full cursor-pointer flex items-center justify-center gap-2 group">
            <p>Read More</p>
            <img
              src={vector}
              className="w-3 mt-1 group-hover:translate-x-1 duration-300"
              alt=""
            />
          </button>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center items-center gap-5 w-full">
            <div className="bg-white px-5 py-5 rounded-xl flex flex-col justify-center items-start gap-1 w-full lg:w-[50%]">
              <img src={icon} className="w-10" alt="" />
              <h2 className="text-lg xl:text-xl font-semibold">
                Adei Maternity
              </h2>
              <p className="text-[12px]">
                Giving birth to be not easy but she never gave up. She has kind
                nature and she teaches
              </p>
            </div>
            <div className="bg-white px-5 py-5 rounded-xl flex flex-col justify-center items-start gap-1 w-full lg:w-[50%]">
              <img src={icon2} className="w-10" alt="" />
              <h2 className="text-lg xl:text-xl font-semibold">
                Neno Children
              </h2>
              <p className="text-[12px]">
                So Adei try to have all mentioned qualities for their, have all
                mentioned clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
