import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const aboutPage = ({ data }) => {
  return (
    <div>
      <h1 className="text-white flex justify-center text-4xl pt-3 font-bold">
        A Little Bit About GPH
      </h1>
      <div className="bg-gray-700 flex justify-center py-4 text-2xl text-white rounded-lg">
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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-gray-300 h-56 rounded-lg shadow-md bg-cover bg-center">
              {" "}
              <Img
                fixed={data.aboutLani.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="lani"
              />
            </div>
            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              <div className="header-content inline-flex "></div>
              <div className="title-post font-medium pt-2">
                Lani Taylor: Head Trainer and Decision Maker
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-gray-300 h-56  rounded-lg shadow-md bg-cover bg-center">
              {" "}
              <Img
                fixed={data.carrieJump.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="carrie"
              />
            </div>

            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              <div className="header-content inline-flex "></div>
              <div className="title-post font-medium pt-2">
                Carrie Matteson: Bill Sender and Info
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div className="bg-gray-300 h-56  rounded-lg shadow-md bg-cover bg-center">
              {" "}
              <Img
                fixed={data.girlsPic.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="girls"
              />
            </div>

            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              <div className="header-content inline-flex "></div>
              <div className="title-post font-medium pt-2">
                {" "}
                Brooklyn & Holly: Future Olympians
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default aboutPage

export const query = graphql`
  query {
    aboutLani: file(relativePath: { eq: "aboutLani.jpg" }) {
      childImageSharp {
        fixed(height: 225, width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    girlsPic: file(relativePath: { eq: "laniKids.jpg" }) {
      childImageSharp {
        fixed(height: 225, width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    carrieJump: file(relativePath: { eq: "realcarrie.JPG" }) {
      childImageSharp {
        fixed(height: 225, width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
