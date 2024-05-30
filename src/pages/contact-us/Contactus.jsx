
import Hero from '../../components/Hero/Hero'
import BtnIcon from '../../components/btn-icon/BtnIcon'
import { Arrow, Location, Mail, Phone } from '../../utils/iocns'

const Contactus = () => {
    return (
        <div>
            <Hero
                backgroundImage="cinnomon-stick.jpg"
                heading="Contact us"
                subheading="Contact us"
            />

            <section className="xl:container description-one grid grid-cols-4 gap-4 p-4 pt-9">
                <div className="col-span-2">
                    <div className="description px-6">
                        <h2 className="font-bold text-lg">Contact</h2>
                        <h2 className="font-bold text-5xl py-3">Get in Touch Now</h2>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Rhoncus interdum eget sapien consectetur. Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, ex repellat delectus voluptatibus odit qui? </p>

                        <div className="conatct-details pt-6 ">
                            <ul className='space-y-4 '>
                                <li className='flex items-center'><Phone className='mr-6 bg-accent text-5xl p-3' /> <a href=""> 0912245698</a></li>
                                <li className='flex items-center'><Mail className='mr-6 bg-accent text-5xl p-3' /> <a href=""> mail@mail.com</a></li>
                                <li className='flex items-center'> <Location className='mr-6 bg-accent text-5xl p-3' /> <a href=""> Your street, Your city, Your country</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <iframe width="723" height="403" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=lalan%20rubber,%20biyagama%20%20+(lalan%20rubber%20)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://google-map-generator.com/'></a>
                </div>
            </section>

            <section className="xl:container grid grid-cols-4 gap-4 p-4 pt-9 bg-[url('cinnomon-stick-over.jpg')] bg-no-repeat bg-center bg-cover h-[500px]">
            <div className="col-span-2 flex justify-center items-center">
              <form className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-lg ">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                  />
                </div>
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">I'm not a robot</span>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                <BtnIcon text="Submits" />
                </div>
              </form>
            </div>
            <div className="col-span-2 flex flex-col justify-center items-center text-center text-primary">
              <div className="form-text">
                <h2 className="font-bold text-5xl">How can we help?</h2>
                <h2 className="font-bold text-lg py-3">Send us a message</h2>
              </div>
            </div>
          </section>
        </div>
    )
}

export default Contactus