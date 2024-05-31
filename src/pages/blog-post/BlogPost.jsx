 
import Hero from '../../components/Hero/Hero'
import { Facebook } from '../../utils/iocns'

const BlogPost = () => {
    return (
        <div>
            <Hero
                backgroundImage="cinnomon-stick.jpg"
                heading="Lorem ipsum dolor sit amet consectetur"
                subheading="Blog" />


            <section className="xl:container mx-auto flex justify-between items-center mt-4 px-4 py-10">
                <div className="text-left text-4xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                </div>
                <div className="text-right text-lg">
                    2024-05-20
                </div>
            </section>

            <section className="blog-area xl:container mx-auto">
                <img src="cinnomon-tea.png" alt="" />

                <p className='py-6'>Lorem ipsum dolor sit amet consectetur. Rhoncus interdum eget sapien consectetur. Tortor elementum tempus ac volutpat vulputate odio a. Integer sit amet amet ultricies vestibulum
                purus pulvinar. Lectus et aliquet amet amet quis at. Felis tortor consequat tristique nunc gravida elit. Lacus volutpat vulputate lacinia scelerisque enim neque porttitor feugiat vulputate sit

                <br /><br />
                Leo tempus ac condimentum donec. Varius convallis pharetra ultricies tempor cras mattis sed penatibus faucibus. Vel felis et morbi sed id quam commodo arcu. In egestas porttitor
                feugiat vulputate sed scelerisque enim neque. Ultricies feugiat scelerisque nunc mauris sem sit a. Sollicitudin amet risus aliquam et. Sed tristique sapien orttitor feugiat vulputate sed
                tincidunt. Imperdiet enim ut augue nulla. Venenatis netus sit ridiculus ipsum diam. Pellentesque posuere metus nulla morbi morbi sed id sed id quam commodo arcu consectetur.</p>

                <img src="blog.png" alt="" />

                <p>Lorem ipsum dolor sit amet consectetur. Rhoncus interdum eget sapien consectetur. Tortor elementum tempus ac volutpat vulputate odio a. Integer sit amet amet ultricies vestibulum
                purus pulvinar. Lectus et aliquet amet amet quis at. Felis tortor consequat tristique nunc gravida elit. Lacus volutpat vulputate lacinia scelerisque enim neque porttitor feugiat vulputate sit

                <br /><br />
                Leo tempus ac condimentum donec. Varius convallis pharetra ultricies tempor cras mattis sed penatibus faucibus. Vel felis et morbi sed id quam commodo arcu. In egestas porttitor
                feugiat vulputate sed scelerisque enim neque. Ultricies feugiat scelerisque nunc mauris sem sit a. Sollicitudin amet risus aliquam et. Sed tristique sapien orttitor feugiat vulputate sed
                tincidunt. Imperdiet enim ut augue nulla. Venenatis netus sit ridiculus ipsum diam. Pellentesque posuere metus nulla morbi morbi sed id sed id quam commodo arcu consectetur.</p>
            </section>

            <section className='xl:container pt-4'>
            <p className='text-fourth text-2xl flex items-center '>Share <Facebook className='ml-3'/></p>
            </section>

        </div>
    )
}

export default BlogPost