import React from 'react'
import Card from './Card'

function About() {
  
  return (
    <>
      <section className='min-h-screen mt-8'>


        <div className="text-center">
          <h3 className='text-3xl pt-6'>What I Know</h3>
          <p className='text-md py-6 leading-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore natus quibusdam voluptate saepe cum velit <span>fugiat dolorem cupiditate voluptas.</span>  Enim eaque modi optio provident dolorum? Saepe voluptas ullam aut laudantium.Enim eaque modi optio provident dolorum? Saepe voluptas ullam aut laudantium.</p>
        </div>
        <div className=" lg:flex flex-wrap gap-10 py-4">
          <Card title={"Link"}
            desc={"Enim eaque modi optio provident dolorum? Saepe voluptas ullam aut laudantium."}
            head={"Github"}
            para={"Taiwind CSS"}
            para1={"Tailwind CSS"}
          />
          <Card title={"Front-end"}
            desc={"Enim eaque modi optio provident dolorum? Saepe voluptas ullam aut laudantium."}
            head={"React"}
            para={"Taiwind CSS"}
            para1={"Tailwind CSS"}
          />
          <Card title={"Front-end"}
            desc={"Enim eaque modi optio provident dolorum? Saepe voluptas ullam aut laudantium."}
            head={"React"}
            para={"Taiwind CSS"}
            para1={"Tailwind CSS"}
          />

          <Card title={"Front-end"}
            desc={"Enim eaque modi optio provident dolorum? Saepe voluptas ullam aut laudantium."}
            head={"React"}
            para={"Taiwind CSS"}
            para1={"Tailwind CSS"} />

          <Card title={"Front-end"}
            desc={"Enim eaque modi optio provident dolorum? Saepe voluptas ullam aut laudantium."}
            head={"React"}
            para={"Taiwind CSS"}
            para1={"Tailwind CSS"} />
        </div>

      </section>
    </>
  )
}

export default About
