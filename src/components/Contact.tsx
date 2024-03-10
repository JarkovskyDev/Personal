const Contact = () => {
  return (
    <div id="contact" data-name="contact" className='w-full h-screen bg-[#27384C] flex justify-center items-center p-4'>
        <form method='POST' action="zde je vytvořený odkaz z https://getform.io/ " className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#F6AE2D] text-gray-300'>Kontakt</p>
                <p className='text-gray-300 py-4'>Kontaktujte mě formulářem nebo mi napište na email: <a href="mailto:jarkovsky-dev@gmail.com">jarkovsky.dev@gmail.com</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Jméno' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='Zpráva'></textarea>
            <button className='text-white border-2 hover:bg-[#F6AE2D] hover:border-[#F6AE2D] px-4 py-3 my-8 mx-auto flex items-center'>Odeslat</button>
        </form>
    </div>
  )
}

export default Contact;
