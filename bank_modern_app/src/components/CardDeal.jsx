import { card } from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";
const CardDeal = () => (
  <section id="" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, dicta totam ipsa ad pariatur velit nam? Autem, nemo. Est dignissimos autem id, numquam architecto vitae provident quia odit illo eum.</p>
      <Button styles="mt-10" text="Get Started" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal