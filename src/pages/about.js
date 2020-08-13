import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lani from "../images/lani.jpg"
import Kids from "../images/laniKids.jpg"
import Carrie from "../images/carrie.jpg"

const aboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="bg-red-900 p-4 rounded-lg">
      <h1 class="text-white flex justify-center text-4xl">
        A Little Bit About GPH
      </h1>
      <div class="bg-red-900 flex justify-center py-4 text-2xl text-white">
        Specializing in Hunter/Jumpers, Eventing and Dressage, Lani brings
        extensive experience and a wide breadth of knowledge to her students and
        the horses she is training. Lani has been teaching and training for over
        10 years in Utah and on the East Coast. Lani spent her summers from ages
        11-17 in Boston as a sponsored rider for Groton House Farms. She was
        able to bring numerous horses up the levels and make trips to England
        for training with Danny Anholt. She trained with a number of other top
        notch eventers and jumpers including Eric Smiley, Jennifer Berryman, and
        Bobby Costello. She moved to Boston after high school to continue riding
        and eventually ended up managing and training out of a high end
        Foxhunting barn before moving back to Utah a few years ago. GPH operates
        out of Cazca Ranch in Riverton, Utah. The beautiful facility features
        indoor and outdoor riding arenas, roomy stalls for happy horses, and
        multiple turnout spaces.
      </div>
      <main class="flex flex-col-reverse sm:flex-row items-center py-12">
        <div class="bg-red-900 sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 class="uppercase text-4xl text-white  leading-none tracking-wide mb-2">
            The Boss
          </h2>

          <p class="text-white text-xl leading-relaxed mb-12">
            Lani Taylor: Head Trainer and Decision Maker
          </p>
        </div>
        <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
          {" "}
          <img
            className="h-2/4 w-2/4 rounded-lg"
            src={Lani}
            alt="lani"
            height="100px"
            width="100px"
          />
        </div>
      </main>
      <main class="flex flex-col-reverse sm:flex-row items-center py-12">
        <div class="bg-red-900 sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 class="uppercase text-4xl text-white  leading-none tracking-wide mb-2">
            The Book Keeper
          </h3>

          <p class="text-white text-xl leading-relaxed mb-12">
            Carrie Matteson: Bill Sender and Question Answerer{" "}
          </p>
        </div>
        <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
          {" "}
          <img
            className="h-2/4 w-2/4 rounded-lg"
            src={Carrie}
            alt="carrie"
            height="100px"
            width="100px"
          />
        </div>
      </main>
      <main class="flex flex-col-reverse sm:flex-row items-center py-12">
        <div class="bg-red-900 sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h4 class="uppercase text-4xl text-white  leading-none tracking-wide mb-2">
            The Girlies
          </h4>
          <p class="text-white text-xl leading-relaxed mb-12">
            Brooklyn and Holly: Fashionistas and Future Olympians{" "}
          </p>
        </div>
        <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
          {" "}
          <img
            className="h-2/4 w-2/4 rounded-lg"
            src={Kids}
            alt="lani"
            height="100px"
            width="100px"
          />
        </div>
      </main>
    </div>
  </Layout>
)

export default aboutPage
