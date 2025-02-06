import Logo from '@/assets/Logo.png'


const Footer = () => {
  return (
   <footer className="bg-pink-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 b-1/2 md:mt-0">
            <img alt='logo' src={Logo}></img>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti, voluptatem vitae facere consectetur, sapiente eligendi distinctio perferendis deserunt architecto illo dignissimos incidunt iure est impedit? Id similique perspiciatis veritatis?</p>
            <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="fon-bold">Links</h4>
            <p className="my-5">Massa ocri senectus</p>
            <p className="my-5">Massa ocri senectus</p>
            <p>Massa ocri senectus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="fon-bold">Contact Us</h4>
            <p className="my-5">Massa ocri senectus</p>
            <p>(333)-425-6825</p>
        </div>
        </div>
   </footer>
  )
}

export default Footer